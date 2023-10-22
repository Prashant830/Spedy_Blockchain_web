const MMSDK = new MetaMaskSDK.MetaMaskSDK();

// Wait for the page to load before executing further code
document.addEventListener('DOMContentLoaded', function() {
    const connectButton = document.getElementById('connectButton');

    connectButton.addEventListener('click', function() {
        MMSDK.init().then(() => {
            const ethereum = MMSDK.getProvider();

            ethereum.request({ method: 'eth_requestAccounts' })
                .then((accounts) => {
                    alert(`Connected to MetaMask with address: ${accounts[0]}`);
                    console.log(accounts[0])
                    window.location.href = 'transection.html?&address='+accounts[0].toString();
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    });
});