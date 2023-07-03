let range = document.querySelector(".input__range");

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

progressBar()

