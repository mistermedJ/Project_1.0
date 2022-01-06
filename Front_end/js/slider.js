const image = ["0","1"]
/*
 *
 * @param {type} anImages
 * @returns {undefined}
 */
function init() {
    for (i = 0; i < image.length ; i++) {
         tImages[i] = "../image/" + i + ".jpg";
    }
    i = 0;
    window.setInterval(changerImage, 1000);
} /// init
/*
 *
 * @returns {undefined}
 */
function changerImage() {
    photo.src = tImages[i];
    photo.alt = "Image : " + i + ".jpg";
    i++;
    if (i === tImages.length) {
        i = 0;
    }
} /// changerImage

/*
 * MAIN
 */
var i;
var tImages = new Array();
var photo = document.getElementById("photo");
window.onload = init(4);