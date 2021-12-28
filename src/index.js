const image = document.getElementById("imagen");
const spacing = document.querySelector(".spacing");

spacing.addEventListener("click", addBorder());

function addBorder() {
    image.style.borderWidth = spacing.value;
    image.style.borderColor = "red";
    console.log("conectadoooooooooo")
};


// document.getElementById("imagen").style.border = '4em solid black';