export default function progressBar(range) {
    range.addEventListener("input", () => {
        const min = parseInt(range.min);
        const max = parseInt(range.max);
        const inputValue = parseInt(range.value);
        const percentage = ((inputValue - min) / (max - min) * 100);
        const color = `linear-gradient(90deg, rgb(165, 243, 235) ${percentage}%, rgb(234, 238, 251) ${percentage}%)`;
        range.style.background = color;
    })
}