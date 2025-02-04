const anonymiceAddress = "0xb9F47aD75D0Ef640182bA37F2486504f7DB398B7";
const cheethAddress = "0x0DdF1dAc8537C90b0a96Bdf05A8c9eD78ccD26cA";
const anonymiceAbi = () => {
  try {
    return JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"Launch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ORIGINAL_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_START_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"changeBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finalizeStartingIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isMintedBeforeReveal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"reserveGiveaway","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startingIndexBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
  } catch (error) {
    console.error('Failed to parse Anonymice ABI:', error);
    return [];
  }
};
const cheethAbi = () => {
  try {
    return JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CLAIM_END_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSIONS_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LBACAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WALLET_STAKED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimByTokenId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getAllRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRewardsByTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getStaker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getTokensStaked","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_LBACAddress","type":"address"}],"name":"setLBACAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stakeByIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakeAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstakeByIds","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
  } catch (error) {
    console.error('Failed to parse Cheeth ABI:', error);
    return [];
  }
};
let provider = null;
let signer = null;
let anonymice = null;
let cheeth = null;

// Add a connection state tracker
let isConnecting = false;

// Modify initializeEthers to prevent multiple simultaneous connection attempts
const initializeEthers = async () => {
  if (isConnecting) {
    console.log("Connection already in progress...");
    return false;
  }

  try {
    isConnecting = true;

    // Check if MetaMask/Rabby is installed
    if (typeof window.ethereum === "undefined") {
      throw new Error("Please install MetaMask or Rabby wallet to use this application");
    }

    // Check if already connected
    if (provider && signer) {
      const currentAddress = await signer.getAddress().catch(() => null);
      if (currentAddress) {
        return true;
      }
    }

    // Initialize provider
    provider = new ethers.BrowserProvider(window.ethereum);
    
    try {
      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts',
        params: [] 
      });
      
      if (!accounts || accounts.length === 0) {
        throw new Error("No accounts found");
      }
    } catch (requestError) {
      if (requestError.code === 4001) {
        throw new Error("Please connect your wallet to continue");
      }
      if (requestError.code === -32001) {
        throw new Error("Please check your wallet and approve the connection");
      }
      throw requestError;
    }

    // Get signer
    signer = await provider.getSigner();
    
    // Initialize contracts with parsed ABIs
    anonymice = new ethers.Contract(
      anonymiceAddress, 
      anonymiceAbi(), // This now returns a parsed JavaScript object
      signer
    );
    
    cheeth = new ethers.Contract(
      cheethAddress,
      cheethAbi(), // This now returns a parsed JavaScript object
      signer
    );
    
    // Check network
    const network = await provider.getNetwork();
    if (network.chainId !== 1n) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }],
        });
      } catch (switchError) {
        throw new Error("Please switch to Ethereum Mainnet");
      }
    }
    
    console.log('Anonymice ABI:', anonymiceAbi());
    console.log('Cheeth ABI:', cheethAbi());
    
    return true;
  } catch (error) {
    console.error("Failed to initialize ethers:", error);
    if (error.code === 4001) {
      $("#wallet").text("Connection rejected");
    } else if (error.code === -32001) {
      $("#wallet").text("Check wallet...");
    } else {
      $("#wallet").text(error.message || "Connection failed");
    }
    provider = null;
    signer = null;
    anonymice = null;
    cheeth = null;
    return false;
  } finally {
    isConnecting = false;
  }
};

const getAddress = async () => {
  try {
    if (!signer) {
      await initializeEthers();
    }
    return await signer.getAddress();
  } catch (error) {
    console.error("Failed to get address:", error);
    return null;
  }
};

const formatEther = (balance_) => {
  return ethers.utils.formatEther(balance_);
};

const parseEther = (eth_) => {
  return ethers.utils.parseEther(eth_);
};

const getChainId = async () => {
  try {
    if (!provider || !signer) {
      await initializeEthers();
    }
    const network = await provider.getNetwork();
    return network.chainId;
  } catch (error) {
    console.error("Failed to get chain ID:", error);
    return null;
  }
};

const getAnonymicesEnum = async () => {
  let _ownedMices = await anonymice.balanceOf(await getAddress());
  if (_ownedMices.length === 0) {
    _ownedMices = "None!";
  }
  let _returnValue = _ownedMices === "None!" ? _ownedMices : `(${_ownedMices})`;
  return _returnValue;
};

const getAnonymicesStakedEnum = async () => {
  let _stakedAnonymices = await cheeth.getTokensStaked(await getAddress());
  if (_stakedAnonymices.length === 0) {
    _stakedAnonymices = "None!";
  }
  let _returnValue =
    _stakedAnonymices === "None!"
      ? _stakedAnonymices
      : `${_stakedAnonymices} (${_stakedAnonymices.length})`;
  return _returnValue;
};

const updateApprovedStatus = async () => {
  try {
    if (!anonymice || !cheeth) {
      await initializeEthers();
    }
    if (await anonymice.isApprovedForAll(await getAddress(), cheethAddress)) {
      $("#approveButton").text(`Baby Approved!`);
    }
    const _allowance = await cheeth.allowance(
      await getAddress(),
      anonymiceAddress
    );
    const _allowanceString = _allowance.toString();
    const _allowanceInt = parseInt(_allowanceString);
    const _cost = await anonymice.getPrice();
    const _costString = _cost.toString();
    const _costInt = parseInt(_costString);
    if (_allowanceInt > _costInt) {
      $("#approveCheethButton").text(`Cheeth Approved!`);
    }
  } catch (error) {
    console.error("Error updating approved status:", error);
  }
};

const approveMicesToCheeth = async () => {
  if (await anonymice.isApprovedForAll(await getAddress(), cheethAddress)) {
    window.alert(`Baby has already been approved!`);
    return;
  }
  await anonymice.setApprovalForAll(cheethAddress, true);
};

const approveCheethToMices = async () => {
  const _allowance = await cheeth.allowance(
    await getAddress(),
    anonymiceAddress
  );
  const _allowanceString = _allowance.toString();
  const _allowanceInt = parseInt(_allowanceString);
  const _cost = await anonymice.getPrice();
  const _costString = _cost.toString();
  const _costInt = parseInt(_costString);
  if (_allowanceInt > _costInt) {
    window.alert(`LILBANANA has already been approved!`);
    return;
  }
  await cheeth.approve(
    anonymiceAddress,
    "0x0DdF1dAc8537C90b0a96Bdf05A8c9eD78ccD26cA"
  );
};

const stakeMicesToCheeth = async () => {
  const _micesInput = $("#micesId").val();
  const _micesArray = _micesInput.split(",");
  const _stakedAnonymices = await cheeth.getTokensStaked(await getAddress());
  if (!(await anonymice.isApprovedForAll(await getAddress(), cheethAddress))) {
    window.alert(`You need to approve your Baby first!`);
    return;
  }
  if (_stakedAnonymices.length >= 10) {
    window.alert(`Maximum of 10 Staked per address reached already!`);
    return;
  }
  await cheeth.stakeByIds(_micesArray);
};

const getCheethBalance = async () => {
  return formatEther(await cheeth.balanceOf(await getAddress()));
};

const getPendingCheethBalance = async () => {
  return formatEther(await cheeth.getAllRewards(await getAddress()));
};

const unstakeByIds = async () => {
  const _micesInput = $("#unstakeMicesId").val();
  const _micesArray = _micesInput.split(",");
  await cheeth.unstakeByIds(_micesArray);
};

const unstakeAll = async () => {
  await cheeth.unstakeAll();
};

const mintMouse = async () => {
  const _gasLimit = await anonymice.estimateGas.mintMouse();
  const _newGasLimit = parseInt(_gasLimit * 1.5).toString();
  console.log({ _gasLimit, _newGasLimit });
  const _balance = await cheeth.balanceOf(await getAddress());
  const _balanceString = _balance.toString();
  const _balanceInt = parseInt(_balanceString);
  console.log(_balanceString);
  const _cost = await anonymice.getPrice();
  const _costString = _cost.toString();
  const _costInt = parseInt(_costString);
  console.log(_costString);
  if (_balanceInt < _costInt) {
    window.alert(`Not enough $CHEETH!`);
    return;
  } else {
    await anonymice.mintMouse({ gasLimit: _newGasLimit });
  }
};

const getCheethCost = async () => {
  return parseInt(formatEther((await anonymice.getPrice()).toString()));
};

const getMiceTrackerInfo = async () => {
  const _totalSupply = await anonymice.totalSupply();
  const _totalSupplyLB = formatEther(await cheeth.totalSupply());
  const _totalBurned = await anonymice.balanceOf(
    "0x000000000000000000000000000000000000dEaD"
  );
  const _totalStaked = await anonymice.balanceOf(
    "0x0DdF1dAc8537C90b0a96Bdf05A8c9eD78ccD26cA"
  );
  const _string = `🐵 Total Lil Baby Apes:   ${_totalSupply}   |    💰 Staked:   ${_totalStaked}   |  💸 Unstaked:   ${
    _totalSupply - _totalBurned - _totalStaked
  } `;
  return _string;
};

const getMiceTrackerInfo1 = async () => {
  const _totalSupply = await anonymice.totalSupply();
  const _totalSupplyLB = formatEther(await cheeth.totalSupply());
  const _string = ` 🍌 LILBANANA Circulating Supply:   ${_totalSupplyLB} 🍌 `;
  return _string;
};

const burnForMint = async () => {
  const _burnId = $("#burnId").val();
  const _burnIdInt = parseInt(_burnId);
  const _isOwner =
    (await anonymice.ownerOf(_burnIdInt)) === (await getAddress())
      ? true
      : false;
  const _gasLimit = await anonymice.estimateGas.burnForMint(_burnIdInt);
  const _newGasLimit = parseInt(_gasLimit * 1.5).toString();
  console.log({ _gasLimit, _newGasLimit });
  if (_isOwner) {
    await anonymice.burnForMint(_burnIdInt, { gasLimit: _newGasLimit });
  } else {
    window.alert(`You don't own this Anonymice!`);
    return;
  }
};

const getMiceImages = async () => {
  const _unstakedMice = await anonymice.balanceOf(await getAddress());
  console.log(_unstakedMice);
  const _baseImageURI =
    "https://bafybeiefedidrf2ktmorbcgvadwbslg5cfmkfgcm7wwllfq4hs2ng4lpda.ipfs.dweb.link/";
  $("#available-mice-images").empty();
  $("#staked-mice-images").empty();
  for (let i = 0; i < _unstakedMice.length; i++) {
    $("#available-mice-images").append(
      `<img src="${_baseImageURI}${_unstakedMice[i]}.png" height="100px" width="100px">`
    );
  }
  const _stakedMice = await cheeth.getTokensStaked(await getAddress());
  console.log(_stakedMice);
  for (let b = 0; b < _stakedMice.length; b++) {
    $("#staked-mice-images").append(
      `<img src="${_baseImageURI}${_stakedMice[b]}.png" height="110px" width="110px">`
    );
  }
};

// Modify updateInfo to handle connection states better
const updateInfo = async () => {
  try {
    if (isConnecting) {
      return; // Skip updates while connecting
    }

    const chainId = await getChainId();
    if (!chainId) {
      $("#wallet").text("Connect Wallet");
      return;
    }
    
    if (chainId === 1n) {
      await updateApprovedStatus();
      $("#mice-tracker").text(`${await getMiceTrackerInfo()}`);
      $("#mice-tracker1").text(`${await getMiceTrackerInfo1()}`);
      $("#your-staked-anonymices").text(`${await getAnonymicesStakedEnum()}`);
      $("#your-anonymices").text(`${await getAnonymicesEnum()}`);
      $("#your-cheeth").text(`${await getCheethBalance()} 🍌`);
      $("#your-pending-cheeth").text(`${await getPendingCheethBalance()} 🍌`);
      $("#wallet").text(`${(await getAddress()).substr(0, 9)}..`);
      $("#cheeth-price").text(
        `Current Cost: ${await getCheethCost()} $CHEETH per Anonymice.`
      );
    } else {
      $("#wallet").text(`Wrong Chain! Please connect to Ethereum Mainnet`);
    }
  } catch (error) {
    console.error("Error updating info:", error);
    if (error.code === 4001) {
      $("#wallet").text("Connection rejected");
    } else {
      $("#wallet").text("Error connecting wallet");
    }
  }
};

// Modify the interval to be less aggressive
let updateInterval;
const startUpdateInterval = () => {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
  updateInterval = setInterval(async () => {
    if (!isConnecting) {
      await updateInfo();
    }
  }, 10000); // Changed to 10 seconds
};

// Update window.onload
window.onload = async () => {
  try {
    $("#wallet").text("Connecting...");
    const initialized = await initializeEthers();
    if (initialized) {
      await updateInfo();
      await getMiceImages();
      startUpdateInterval();
    } else {
      $("#wallet").text("Connect Wallet");
    }
  } catch (error) {
    console.error("Error during initialization:", error);
    $("#wallet").text("Error connecting");
  }
};

// Update the event listeners
if (window.ethereum) {
  window.ethereum.on('connect', (connectInfo) => {
    console.log('Connected to chain:', connectInfo);
  });

  window.ethereum.on('disconnect', () => {
    console.log('Disconnected from chain');
    provider = null;
    signer = null;
    anonymice = null;
    cheeth = null;
    $("#wallet").text("Connect Wallet");
    if (updateInterval) {
      clearInterval(updateInterval);
    }
  });

  window.ethereum.on('chainChanged', () => {
    window.location.reload();
  });

  window.ethereum.on('accountsChanged', async (accounts) => {
    if (accounts.length === 0) {
      provider = null;
      signer = null;
      anonymice = null;
      cheeth = null;
      $("#wallet").text("Connect Wallet");
      if (updateInterval) {
        clearInterval(updateInterval);
      }
    } else {
      await initializeEthers();
      await updateInfo();
      await getMiceImages();
      startUpdateInterval();
    }
  });
}

// Add a reconnect function that can be called from UI if needed
const reconnectWallet = async () => {
  try {
    const initialized = await initializeEthers();
    if (initialized) {
      await updateInfo();
      await getMiceImages();
    }
  } catch (error) {
    console.error("Error reconnecting wallet:", error);
  }
};

// Update the connectWallet function to handle both connection types
const connectWallet = async () => {
  try {
    $("#connect-wallet").text("Connecting...");
    
    if (!window.ethereum) {
      throw new Error("Please install MetaMask to continue");
    }

    const initialized = await initializeEthers();
    if (initialized) {
      await updateInfo();
      await getMiceImages();
      startUpdateInterval();
    }
  } catch (error) {
    console.error("Error connecting wallet:", error);
    $("#connect-wallet").text(error.message || "Connection failed");
  }
};

// Add MetaMask specific connect function
window.connectMetaMask = async function() {
    try {
        // Check specifically for MetaMask
        if (!window.ethereum?.isMetaMask) {
            alert("Please install MetaMask! This site requires MetaMask wallet.");
            document.getElementById("metamask-wallet").innerText = "Install MetaMask";
            return;
        }

        // Request account access specifically from MetaMask
        const accounts = await window.ethereum.request({ 
            method: "eth_requestAccounts",
        });
        
        userAccount = accounts[0];
        connected = true;
        
        // Initialize Web3 specifically with MetaMask provider
        web3 = new Web3(window.ethereum);

        // Initialize Ethers
        await initializeEthers();
        
        // Update UI
        document.getElementById("metamask-wallet").innerText = "Connected: " + shortenAddress(userAccount);
        document.getElementById("metamask-wallet").style.backgroundColor = "green";
        
        // Update info and images
        await updateInfo();
        await getMiceImages();
        startUpdateInterval();

        console.log("Connected to MetaMask:", userAccount);
    } catch (error) {
        console.error("MetaMask connection error:", error);
        if (error.code === 4001) {
            document.getElementById("metamask-wallet").innerText = "Connection Rejected";
        } else {
            document.getElementById("metamask-wallet").innerText = "Connection Failed";
        }
    }
};
