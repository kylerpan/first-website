var images = document.getElementsByTagName('img');
var feature_image = images[0];
var preview = document.getElementById("preview-window")

for (let i in images){
    let image = images[i];
    if (image == feature_image)
        continue;
    image.onclick = function() {
        console.log("clicked");
        let img_src = image.getAttribute('src');
        console.log(img_src);
        feature_image.setAttribute('src', img_src);
        preview.style.display = "grid";
    }
}

preview.onclick = function() {
    preview.style.display = "none";
}