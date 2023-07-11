export default function priceControl(range, checkbox, updatePrice, updatePriceLabel) {
    fetch('./assets/js/prices.json')
    .then(response => response.json())
    .then(prices => {

        const priceValues = prices.map((item) => item.price);
        const pageViews = prices.map((item) => item.pageviews);

        range.setAttribute('max', priceValues.length);
        
        checkbox.addEventListener('change', () => {
            updatePrice(priceValues, pageViews);
        });

        range.addEventListener('input', () => {
            updatePrice(priceValues, pageViews);
        });

        updatePriceLabel(priceValues, pageViews);
    })
    .catch(error => {
        console.error('Erro ao carregar o arquivo JSON:', error);
    });
    
}