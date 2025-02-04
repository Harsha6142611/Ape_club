const anonymiceAddress = "0x918F677b3aB4B9290Ca96A95430FD228b2d84817";
const anonymiceAbi = () => {
  return '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"Launch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ORIGINAL_PROVENANCE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_START_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"changeBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"finalizeStartingIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMaxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"isMintedBeforeReveal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"reserveGiveaway","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startingIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startingIndexBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
};
const cheethAddress = "0x0DdF1dAc8537C90b0a96Bdf05A8c9eD78ccD26cA";
const cheethAbi = () => {
  return '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"CLAIM_END_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EMISSIONS_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LBACAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_WALLET_STAKED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"claimByTokenId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getAllRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getRewardsByTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getStaker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"staker","type":"address"}],"name":"getTokensStaked","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_LBACAddress","type":"address"}],"name":"setLBACAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"stakeByIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakeAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"unstakeByIds","outputs":[],"stateMutability":"nonpayable","type":"function"}]';
};
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const signer = provider.getSigner();
const anonymice = new ethers.Contract(anonymiceAddress, anonymiceAbi(), signer);
const cheeth = new ethers.Contract(cheethAddress, cheethAbi(), signer);
const connect = async () => {
  await provider.send("eth_requestAccounts", []);
};
const getAddress = async () => {
  return await signer.getAddress();
};
const formatEther = (balance_) => {
  return ethers.utils.formatEther(balance_);
};
const parseEther = (eth_) => {
  return ethers.utils.parseEther(eth_);
};
const getChainId = async () => {
  return await signer.getChainId();
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
const claimCheeth = async () => {
  await cheeth.claimAll();
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
const updateInfo = async () => {
  if ((await getChainId()) === 1) {
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
    $("#wallet").text(`Wrong Chain!`);
  }
};
const waitForTransaction = async (tx_) => {
  provider.once(tx_.hash, async (transaction_) => {
    await updateInfo();
  });
};
setInterval(async () => {
  await updateInfo();
}, 5000);
ethereum.on("accountsChanged", async (accounts_) => {
  await updateInfo();
  await getMiceImages();
});
window.onload = async () => {
  await updateInfo();
  await getMiceImages();
};

export { approveCheethToMices };
