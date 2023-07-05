const range = document.querySelector(".input__range");
const priceLabel = document.querySelector(".price-month");
const pageviewsLabel = document.querySelector(".pageviews");
const checkbox = document.querySelector(".checkbox");

function progressBar() {
    range.addEventListener("input", () => {
        const min = parseInt(range.min);
        const max = parseInt(range.max);
        const inputValue = parseInt(range.value);
        const percentage = ((inputValue - min) / (max - min) * 100);
        const color = `linear-gradient(90deg, rgb(165, 243, 235) ${percentage}%, rgb(234, 238, 251) ${percentage}%)`;
        range.style.background = color;
    })
}

function priceControl() {
    fetch('./assets/js/prices.json')
    .then(response => response.json())
    .then(prices => {

        const priceValues = prices.map((item) => item.price);
        const pageViews = prices.map((item) => item.pageviews);

        range.setAttribute('max', priceValues.length);
        
        checkbox.addEventListener('change', () => {
            const isChecked = checkbox.checked;
            const priceIndex = parseInt(range.value) - 1;
            const price = isChecked ? (priceValues[priceIndex] * (1 - 0.25)) * 12 : priceValues[priceIndex];
            priceLabel.textContent = isChecked ? `$${price}.00` : `$${price}`;

            console.log(price)

            const view = pageViews[priceIndex];
            pageviewsLabel.textContent = `${view} Pageviews`
        });

        range.addEventListener('input', (event) => {
            const priceIndex = parseInt(event.target.value) - 1;
            const isChecked = checkbox.checked;
            const price = isChecked ? (priceValues[priceIndex] * (1 - 0.25)) * 12 : priceValues[priceIndex];
            priceLabel.textContent = isChecked ? `$${price}.00` : `$${price}`;

            console.log(price)

            const view = pageViews[priceIndex];
            pageviewsLabel.textContent = `${view} Pageviews`
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