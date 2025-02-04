let contractMonstro, web3, currentChainId;
let contractsInitialized = false;
let monstroPrice = 0.07;
let nftSupply = 0;
let nftStatusUpdater;
let startingIndex = 0;
let nftsOnThisPage = [];
let userHasWallet = false;
let userOnCorrectChain = false;

async function checkLoadWeb3(cb = false) {
    if (window.ethereum) {
        userHasWallet = true;
        web3 = new Web3(window.ethereum);

        // since we are connected, lets check if user has correct Chain id.

        if (await testChainId()) {
            web3 = new Web3(window.ethereum);
        } else {
            web3 = new Web3(RPC_URL);
        }
    } else {
        userHasWallet = false;
        web3 = new Web3(RPC_URL);
    }

    if (cb) {
        cb();
    }
}

async function testChainId() {
    // should only be called once, before using web3' provider to Backup Provider RPC.
    currentChainId = await web3.eth.getChainId();
    userOnCorrectChain = REQUIRED_CHAIN_ID.indexOf(currentChainId) != -1;
    return userOnCorrectChain;
}

function getArtworkFromToken(token_number) {
    const artworkid = ((parseInt(token_number) - startingIndex + NUM_MONSTRO) % NUM_MONSTRO);
    return artworkid;
}

async function getImageSrc(tokenId) {
    if (startingIndex !== 0) {
        if(tokenId < MAX_MINT) {
            return `${FILE_ROOT_IPFS}/${(getZeroPaddedArtworkId(tokenId))}.gif`;
        }
        else {
            return `${FILE_ROOT}/unidentified/${(getZeroPaddedArtworkId(tokenId))}.gif`;
        }
    } else {
        return `${FILE_ROOT}/placeholder/${(getZeroPaddedArtworkId(tokenId))}.gif`;
    }
}

const getAMonstro = function () {
    connect(showPurchaseDialog);
};

const buyMore = function () {
    MicroModal.close('modal__buy__success');
    MicroModal.show('modal__buy');
}

const showToast = function (msg, style = "default", duration = 3000) {
    switch (style) {
        case "default":
            siiimpleToast.message(msg, { duration: duration });
            break;
        case "alert":
            siiimpleToast.alert(msg, { duration: duration });
            break;
        case "success":
            siiimpleToast.success(msg, { duration: duration });
            break;
    }
};

const showPurchaseDialog = function () {
    MicroModal.show('modal__buy');
}


/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/

try {
    ethereum.on('chainChanged', handleChainChanged);
} catch (err) {

}

function handleChainChanged(_chainId) {
    window.location.reload();
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/

let currentAccount = null;

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already
// connected.

try {
    // Note that this event is emitted on page load.
    // If the array of accounts is non-empty, you're already
    // connected.

    ethereum.on('accountsChanged', handleAccountsChanged);
} catch (err) {

}

// For now, 'eth_accounts' will continue to always return an array

function handleAccountsChanged(accounts, cb = false) {
    if (accounts.length === 0) {
        // MetaMask is locked or the user has not connected any accounts

        showToast(`Click CONNECT WALLET to use MetaMask to interact with The MonstroCities!`, "alert");
    } else {
        if (currentAccount != accounts[0]) {
            currentAccount = accounts[0];

            showToast(`${accounts[0]} is now the active address!`);

            if (currentPage === "wallet" && contractsInitialized) {
                loadWallet();
                return;
            }
        }
    }

    if (cb) {
        cb();
    }
}

// While you are awaiting the call to eth_requestAccounts, you should disable
// any buttons the user can click to initiate the request.
// MetaMask will reject any additional requests while the first is still
// pending.
async function connect(cb) {
    if (!window.ethereum) {
        if (!isMetaMaskBrowser()) {
            MicroModal.show('modal__noMM');
        } else {
            MicroModal.show('modal__browser');
        }
        return false;
    }

    // if not correct chainId... show chainId change instruction
    if (!userOnCorrectChain) {
        MicroModal.show('modal__wrongChain');
        return false;
    }

    ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(function (acc) { handleAccountsChanged(acc, cb) })
        .catch((err) => {
            if (err.code === 4001) {
                showToast(`Click CONNECT WALLET to us MetaMask to interact!`, "alert");
            } else {
                showToast(err.message);
            }
        });
}

async function buyNFT(amount) {
    var currentEnv = currentChainId == 1 ? "https://etherscan.io/" : "https://rinkeby.etherscan.io/";

    contractMonstro.methods.mint(amount).send(
        {
            from: currentAccount,
            to: CONTRACT_ADDRESS_MONSTRO,
            value: await contractMonstro.methods.getPrice().call() * amount
        })
        .on('error', function (error) {
            console.log("on error");
            console.log(error);
        })
        .on('transactionHash', function (transactionHash) {
            console.log("on transactionHash");
            console.log(transactionHash);
            $('#buttonCheckout').html(`Waiting...`);
            showToast(`Transaction ${transactionHash} waiting to be minted - <a target="_blank" href="${currentEnv}/tx/${transactionHash}" title="View ${transactionHash}">View on Etherscan</a>`, "default", 7000);
        })
        .on('receipt', function (receipt) {
            console.log("on receipt");
            console.log(receipt);
            
        })
        .on('confirmation', function (confirmationNumber, receipt) {
            console.log(confirmationNumber, receipt);
        })
        .then(
            res => {
                console.log(res);
                resetCheckout();
                showToast(`Transaction confirmed in block #${res.blockNumber} - YUMMY! CHECK YOUR NUGGETS!`, "success", 6000);
                showSuccessDialog();
            })
        .catch(
            err => {
                console.log(err);
                resetCheckout();
                showToast(` Oops...`, "default", 1000);
            });
}

async function showSuccessDialog() {
    if (currentAccount != null) {
        if (currentPage === "wallet") {
            var MonstroCount = parseInt(await contractMonstro.methods.balanceOf(currentAccount).call());
            $('#wallet_address').text(currentAccount);
            $('#your_monstro').animate({ fontSize: 38 }, function () {
            $('#your_monstro').text("Your Nuggets: " + MonstroCount + "");
            $('#your_monstro').animate({ fontSize: 32 }, function () {
            $('#your_monstro').text("Your Nuggets: " + MonstroCount + "");
            
           
            });
        });
        
        }

        MicroModal.show('modal__buy__success');
    }
}

async function checkOut() {
    if ($('#agreedToTerms:checked').length >= 0) {
        // execute purchase
        $('#buttonCheckout').text("Check out with MetaMask");

        if (await contractMonstro.methods.SALE_START_TIMESTAMP().call() > (new Date().getTime() / 1000)) {
            showToast(`You can mint monsters once the launch countdown ends and the minting starts!`, "alert");
            return false;
        } else {
            showToast("Complete the checkout process in  MetaMask");
            $('#buttonCheckout').css('pointer-events', 'none');
            buyNFT(parseInt($('#monstroToBuy').val()));
        }
    } else {
        showToast(`Woah there speedy, please read and comply with the <a href="/terms-conditions">Terms &amp; Conditions</a> and <a href="/disclaimer">Disclaimer</a>!`, "alert");
    }
}

function resetCheckout() {
    $('#buttonCheckout').text("CONNECTED");
    $('#buttonCheckout').css('pointer-events', 'auto');
}

async function loadContracts() {
    contractMonstro = await new web3.eth.Contract(contractMonstroABI, CONTRACT_ADDRESS_MONSTRO);
    contractsInitialized = true;

    getNFTstatus();
    nftStatusUpdater = setInterval(getNFTstatus, 30000);

    if (currentPage === "home") {
        initializeClock('reveal_countdown', REVEAL_DATE, "reveal");
    }

    if (currentPage === "wallet") {
        connect(loadWallet);
    }

    return true;
}

async function updateSupplyProgressBar() {
    if (currentPage === "home") {
        updateSaleProgress(await contractMonstro.methods.totalSupply().call());
    }
}

function isMetaMaskBrowser() {
    if (navigator.userAgent.search("Brave") >= 0 ||
        navigator.userAgent.search("Chrome") >= 0 ||
        navigator.userAgent.search("Firefox") >= 0 ||
        navigator.userAgent.search("Edge") >= 0) {
        return true;
    }
    else {
        return false;
    }
}

async function getNFTstatus() {
    if (contractsInitialized) {
            startingIndex = parseInt(await contractMonstro.methods.startingIndex().call());
            monstroPrice = web3.utils.fromWei(await contractMonstro.methods.getPrice().call(), 'ether');
            nftSupply = await contractMonstro.methods.totalSupply().call();
            $('#nftPrice').text(monstroPrice + " ETH");
            $('#supplyLeft').text(nftSupply);
            monstroCount = await contractMonstro.methods.balanceOf(currentAccount).call();
            $('#your_monstro').text("Your Nuggets: " + monstroCount + "");
            

     
                $('#monstroToBuy').attr("max", 10);
          
         

            if (currentPage === "home") {
                var salephases = [200, 1000, 1000, 1000, 800, 200, 69];
                var currentphase = 0;

                for (var i = 0; i < salephases.length; i++) {
                    if (nftSupply <= salephases[i]) {
                        currentphase = salephases[i];
                        break;
                    }
                }

                $('#sale_percentage_sold').html(` <span class="highlight">${Math.ceil((nftSupply / NUM_MONSTRO) * 100)}%</span> of Monsters have been purchases.`);
                updateSaleProgress(nftSupply);
            }
    }
}


async function getWalletTemplate(data) {
    nftsOnThisPage = [];

    let loadhtml = '';
    loadhtml += `<p>Loading Monsters ...</p>`;
    $('#monstro_container').html(loadhtml);

    let html = '';
    for (var i = 0; i < data.length; i++) {
        let tokenId = await contractMonstro.methods.tokenOfOwnerByIndex(currentAccount, data[i]).call();
        nftsOnThisPage.push(data[i]);

        let imgSrc = await getImageSrc(tokenId);
        html += `<div class="wallet__gallery__item" data-token="${tokenId}">
            <img src="${imgSrc}" class="wallet__gallery__item__image pixelated" />
            <div class="wallet__gallery__item__overlay">
                <a href="https://opensea.io/assets/${CONTRACT_ADDRESS_MONSTRO}/${tokenId}" class="button" target="_blank">View on OpenSea</a>
            </div>
        </div>`;
    }

    return html;
}

async function loadWallet() {
    var monstroCount = parseInt(await contractMonstro.methods.balanceOf(currentAccount).call());
    $('#wallet_address').text(currentAccount); {
       // inform button
        $('#buttonCheckout').text("CONNECTED");
    }
    $('#your_monstro').text("Your Nuggets: " + monstroCount + "");

    if (monstroCount > 0) {
        var html = await getWalletTemplate(Array.from(Array(parseInt(monstroCount)).keys()));
        $('#monstro_container').animate({ opacity: 0 }, function () {
            $('#monstro_container').html(html);
            $('#monstro_container').animate({ opacity: 100 }, function () {
                $('#monstro_container').css('height', $('#monstro_container').height());
            });
        });
    }
}

function getZeroPaddedArtworkId(tokenId) {
    return pad(getArtworkFromToken(tokenId), 4);
}

$(document).ready(function () {
    checkLoadWeb3(loadContracts);
});