const changelogo = () => {
    // Select the logo image by its ID and change its src attribute
    document.getElementById("logo").src = "./images/img1.webp";
}

const reset = () => {
    // Select the logo image by its ID and reset its src attribute to the original image
    document.getElementById("logo").src = "./images/img2.jpg";
}