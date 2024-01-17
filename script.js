const tBody = document.querySelector('tbody');

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&x_cg_demo_api_key=CG-aaEoMyDfZNpX6QFsxpPyMx3t';


async function createRequest (url) {
    let response = await fetch (url);
    let data = await response.json();
    
    updateUI(data);
}

const updateUI = function (data) {
    data.forEach((item, index) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.id}</td><td id="symbol">${item.symbol}</td><td>${item.name}</td>`;
        if (index <= 5) {
            tr.classList.add('blue-bg');
        }
        if (item.symbol === 'usdt') {
            tr.classList.add('green-bg');
        }

        tBody.appendChild(tr);
    });
}


createRequest(url);