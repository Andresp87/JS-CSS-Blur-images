const image = document.querySelector("img");


function addBorder(borderValue) {
    image.style.border = `${borderValue}px solid red`;    
};
function addBlur(blurValue) {
    image.style.filter = `blur(${blurValue}px)`;
}
function addColor(colorValue) {
    image.style.borderColor = `${colorValue}`;
}