/* for desktop preview */
var content_desktop = document.getElementById('content-desktop');
var desktop_images = content_desktop.getElementsByTagName('img');
var desktop_feature_image = desktop_images[0];
var desktop_preview = document.getElementById("preview-window-d")

for (let i in desktop_images){
    let image = desktop_images[i];
    console.log(image);
    if (image == desktop_feature_image)
        continue;
    image.onclick = function() {
        console.log("clicked");
        let img_src = image.getAttribute('src');
        console.log(img_src);
        desktop_feature_image.setAttribute('src', img_src);
        desktop_preview.style.display = "grid";
    }
}

desktop_preview.onclick = function() {
    desktop_preview.style.display = "none";
}


/* for mobile preview */
var content_mobile = document.getElementById('content-mobile');
var mobile_images = content_mobile.getElementsByTagName('img');
var mobile_feature_image = mobile_images[0];
var mobile_preview = document.getElementById("preview-window-m")

for (let i in mobile_images){
    let image = mobile_images[i];
    console.log(image);
    if (image == mobile_feature_image)
        continue;
    image.onclick = function() {
        console.log("clicked");
        let img_src = image.getAttribute('src');
        console.log(img_src);
        mobile_feature_image.setAttribute('src', img_src);
        mobile_preview.style.display = "grid";
    }
}

mobile_preview.onclick = function() {
    mobile_preview.style.display = "none";
}