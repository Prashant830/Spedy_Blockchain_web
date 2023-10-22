const MMSDK = new MetaMaskSDK.MetaMaskSDK();

document.addEventListener('DOMContentLoaded', async function() {
    const ownerAddressElement = document.getElementById('ownerAddress');
    const recipientAddressInput = document.getElementById('recipientAddress');
    const amountInput = document.getElementById('amount');
    const sendButton = document.getElementById('sendButton');
    const urlParams = new URLSearchParams(window.location.search);
    const address = urlParams.get('address'); 

    let ownerAddress = address;

    
    // Send Ethereum to an address
    sendButton.addEventListener('click', () => {
        MMSDK.init().then(() => {
        const ethereum = MMSDK.getProvider(); 
        ethereum.request({ method: 'eth_requestAccounts' })
        ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: ownerAddress,
              to: recipientAddressInput.placeholder, // Replace with recipient address
              value: amountInput.placeholder, // Replace with value in wei (1 ETH in wei)
              gasLimit: '0x5028',
              maxPriorityFeePerGas: '0x3b9aca00',
              maxFeePerGas: '0x2540be400',
            },
          ],
        })
        .then((txHash) => alert(`Transaction sent! Transaction Hash: ${txHash}`))
        .catch((error) => alert(`Error sending transaction: ${error.message}`));
    });

});
});


// Smart Contract method
//const MMSDK = new MetaMaskSDK.MetaMaskSDK();  

// document.addEventListener('DOMContentLoaded', async function() {
//     const ownerAddressElement = document.getElementById('ownerAddress');
//     const recipientAddressInput = document.getElementById('recipientAddress');
//     const amountInput = document.getElementById('amount');
//     const sendButton = document.getElementById('sendButton');
//     const urlParams = new URLSearchParams(window.location.search);
//     const address = urlParams.get('address'); 

//     let ownerAddress = address;
    
    
//     const web3 = new Web3(window.ethereum);
    

//     const contractAddress = '0x38e77EB47C2C51aDDdD733c6F76eAf0B4281A97e'; // Replace with your contract address
//     const abi = [
//         {
//             "inputs": [],
//             "stateMutability": "nonpayable",
//             "type": "constructor"
//         },
//         {
//             "inputs": [],
//             "name": "owner",
//             "outputs": [
//                 {
//                     "internalType": "address",
//                     "name": "",
//                     "type": "address"
//                 }
//             ],
//             "stateMutability": "view",
//             "type": "function"
//         },
//         {
//             "inputs": [
//                 {
//                     "internalType": "address payable",
//                     "name": "_recipient",
//                     "type": "address"
//                 },
//                 {
//                     "internalType": "uint256",
//                     "name": "_amount",
//                     "type": "uint256"
//                 }
//             ],
//             "name": "sendEther",
//             "outputs": [],
//             "stateMutability": "nonpayable",
//             "type": "function"
//         },
//         {
//             "stateMutability": "payable",
//             "type": "receive"
//         }
//     ]

    

//     const contract = new web3.eth.Contract(abi, contractAddress);

//     // Send Ether function
//     sendButton.addEventListener('click', async function() {

//         const MMSDK = new MetaMaskSDK.MetaMaskSDK();
//         await MMSDK.init();
//         const ethereum = MMSDK.getProvider(); 
//         const accounts = await ethereum.request({ method: 'eth_requestAccounts' }); 

//         const recipientAddress = recipientAddressInput.placeholder;
//         const amount = web3.utils.toWei(amountInput.placeholder, 'ether');

//         try {
//             await contract.methods.sendEther(recipientAddress, amount).send({ from: ownerAddress });
//             alert(`Successfully sent ${web3.utils.fromWei(amount, 'ether')} ETH to ${recipientAddress}`);
//         } catch (error) {
//             alert('Error: Unable to send Ether. Make sure you have sufficient balance.');
//             console.error(error);
//         }
//     });

//    });
  
// });

   