const image = document.getElementById("image-container");
// const spacing = document.querySelector(".spacing");


function addBorder(borderValue) {
    image.style.borderWidth = `${borderValue}`;
    image.style.borderColor = "red";
    image.style.filter = `blur(${blur.value})`
    console.log(borderValue);
};



// document.getElementById("imagen").style.border = '4em solid black';