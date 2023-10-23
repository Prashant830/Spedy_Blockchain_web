const urlParams = new URLSearchParams(window.location.search);
const address = urlParams.get('address'); 

let ownerAddress = address;

alert("flowWalletAddress - " + ownerAddress)

console.log(ownerAddress)