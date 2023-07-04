let range = document.querySelector(".input__range");
let priceLabel = document.querySelector(".price-month");
let pageviewsLabel = document.querySelector(".pageviews")

function progressBar() {
    range.addEventListener("input", () => {
        let min = parseInt(range.min);
        let max = parseInt(range.max);
        let inputValue = parseInt(range.value);
        let percentage = ((inputValue - min) / (max - min) * 100);
        let color = `linear-gradient(90deg, rgb(165, 243, 235) ${percentage}%, rgb(234, 238, 251) ${percentage}%)`;
        range.style.background = color;
    })
}

function priceControl() {
    fetch('./assets/js/prices.json')
    .then(response => response.json())
    .then(prices => {
        const priceValues = prices.map(item => item.price);
        const pageViews = prices.map(item => item.pageviews);

        range.setAttribute('max', priceValues.length);

        range.addEventListener('input', (event) => {
            const priceIndex = parseInt(event.target.value) - 1;
            const price = priceValues[priceIndex];
            priceLabel.textContent = `$${price}`;

            const view = pageViews[priceIndex];
            pageviewsLabel.textContent = `${view} Pageviews`

            console.log(price)
            console.log(pageViews)
        });

        updatePriceLabel(priceValues, pageViews);
    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });
}

function updatePriceLabel(priceValues, pageViews) {
    const initialPrice = priceValues[0];
    priceLabel.textContent = `$${initialPrice}`

    const initialPage = pageViews[0];
    pageviewsLabel.textContent = `${initialPage} Pageviews`
}

progressBar();
priceControl();