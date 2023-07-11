export default function progressBar(range) {
    range.addEventListener("input", () => {
        const min = parseInt(range.min);
        const max = parseInt(range.max);
        const inputValue = parseInt(range.value);
        const percentage = ((inputValue - min) / (max - min) * 100);
        const color = `linear-gradient(90deg, rgb(165, 243, 235) ${percentage}%, rgb(234, 238, 251) ${percentage}%)`;
        range.style.background = color;
    })

    function updateRange() {
        const initialRange = `linear-gradient(90deg, rgb(165, 243, 235) 50%, rgb(234, 238, 251) 50%)`;
        range.style.background = initialRange;
    }
    
    updateRange()
}