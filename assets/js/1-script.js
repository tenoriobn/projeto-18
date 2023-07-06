import progressBar from "./2-progressBar.js";
import priceControl from "./3-priceControl.js";

const range = document.querySelector(".input__range");
const priceLabel = document.querySelector(".price-month");
const pageviewsLabel = document.querySelector(".pageviews");
const checkbox = document.querySelector(".checkbox");

function updatePrice(priceValues, pageViews) {
    const isChecked = checkbox.checked;
    const priceIndex = parseInt(range.value) - 1;
    const price = isChecked ? (priceValues[priceIndex] * (1 - 0.25)) * 12 : priceValues[priceIndex];
    priceLabel.textContent = isChecked ? `$${price}.00` : `$${price}`;
    
    const view = pageViews[priceIndex];
    pageviewsLabel.textContent = `${view} Pageviews`;
}

function updatePriceLabel(priceValues, pageViews) {
    const initialPrice = priceValues[0];
    const initialPage = pageViews[0];
    
    priceLabel.textContent = `$${initialPrice}`;
    pageviewsLabel.textContent = `${initialPage} Pageviews`;
}

progressBar(range);
priceControl(range, checkbox, updatePrice, updatePriceLabel)