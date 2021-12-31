const image = document.querySelector("img");
// const spacing = document.querySelector(".spacing");


function addBorder(borderValue) {
    image.style.border = `${borderValue}px solid red`;
    console.log(borderValue);
    
};

function addBlur(blurValue) {
    image.style.filter = `blur(${blurValue}px)`;

}



// document.getElementById("imagen").style.border = '4em solid black';