/* || Desktop Preview Image */
var content_desktop = document.getElementById('content-desktop');
var desktop_images = content_desktop.getElementsByTagName('img');
var desktop_feature_image = desktop_images[0];
var desktop_preview = document.getElementsByClassName("preview-window")[0];

for (let i in desktop_images) {
    let image = desktop_images[i];
    if (image == desktop_feature_image) {
        continue;
        }
    image.onclick = function() {
        let img_src = image.getAttribute('src');
        desktop_feature_image.setAttribute('src', img_src);
        desktop_preview.style.display = "grid";
    }
}

desktop_preview.onclick = function() {
    desktop_preview.style.display = "none";
}

/* || Mobile Preview Image */
var content_mobile = document.getElementById('content-mobile');
var mobile_images = content_mobile.getElementsByTagName('img');
var mobile_feature_image = mobile_images[0];
var mobile_preview = document.getElementsByClassName("preview-window")[1];

for (let i in mobile_images){
    let image = mobile_images[i];
    if (image == mobile_feature_image) {
        continue;
    }
    image.onclick = function() {
        let img_src = image.getAttribute('src');
        mobile_feature_image.setAttribute('src', img_src);
        mobile_preview.style.display = "grid";
    }
}

mobile_preview.onclick = function() {
    mobile_preview.style.display = "none";
}


/* || Height of Website */
var body = document.getElementsByTagName('body')[0];

function resize_body(){
    body.style.height = "auto";
    var body_height = String(body.scrollHeight) + "px";
    body.style.height = body_height;
}

window.addEventListener("resize", resize_body);

/* || Check if fully loaded */
var loading_screen = document.getElementById('loading-window');
var loading_bar = document.getElementsByClassName('loading-bar')[0];

function fadeout(){
    loading_screen.style.opacity = "0";
}

function displaynone() {
    loading_screen.style.display = "none";
}

window.setTimeout(resize_body, 10000);
window.setTimeout(fadeout, 10000);
window.setTimeout(displaynone, 11000);
window.addEventListener('load', function(){
    resize_body();
    window.setTimeout(fadeout);
    window.setTimeout(displaynone, 1000);
})


/* || Sidebar */
var hamburger_icon = document.getElementById('hamburger-icon');
var sidebar_window = document.getElementsByClassName('sidebar-window')[0];
var desktop_sidebar_open_space = document.getElementsByClassName('sidebar-open-space')[0];
var close_tag = body.getElementsByTagName('h3')[1];
var portrait_tag = body.getElementsByTagName('h3')[2];
var landscape_tag = body.getElementsByTagName('h3')[3];
var about_me_tag = body.getElementsByTagName('h3')[4];

hamburger_icon.onclick = function() {
    sidebar_window.style.display = "block";
}

desktop_sidebar_open_space.onclick = function() {
    sidebar_window.style.display = "none";
}

/* || Desktop Viewing Options */
var desktop_portrait = content_desktop.getElementsByClassName('portraits')[0];
var desktop_landscape = content_desktop.getElementsByClassName('landscapes')[0];
var desktop_about_me = content_desktop.getElementsByClassName('about-me')[0];

/* || Mobile Viewing Options */
var mobile_portraits = content_mobile.getElementsByClassName('portraits')[0];
var mobile_landscapes = content_mobile.getElementsByClassName('landscapes')[0];
var mobile_about_me = content_mobile.getElementsByClassName('about-me')[0];

/* || Footer Onclicks */
var footer = document.getElementById("footer");
var back_to_top = footer.getElementsByTagName('p')[4];
var portrait_footer_tag = footer.getElementsByTagName('p')[5];
var landscape_footer_tag = footer.getElementsByTagName('p')[6];
var about_me_footer_tag = footer.getElementsByTagName('p')[7];

/* || Sidebar Tag Functions */
var location_tracker = "portrait";

function scroll_top() {
    window.scroll({top: 0, left: 0, behavior: 'smooth' });
}

function to_top() {
    window.scrollTo(0,0);
}

function close_tag_function() {
    sidebar_window.style.display = "none";
}

function portrait_tag_function() {
    if (location_tracker == "portrait"){
        scroll_top();
    } else {
        to_top();
    }
    location_tracker = "portrait";
    desktop_portrait.style.display = "block";
    desktop_landscape.style.display = "none";
    desktop_about_me.style.display = "none";
    mobile_portraits.style.display = "block";
    mobile_landscapes.style.display = "none";
    mobile_about_me.style.display = "none";
    close_tag_function();
    resize_body();
}

function landscape_tag_function() {
    if (location_tracker == "landscape"){
        scroll_top();
    } else {
        to_top();
    }
    location_tracker = "landscape";
    desktop_portrait.style.display = "none";
    desktop_landscape.style.display = "block";
    desktop_about_me.style.display = "none";
    mobile_portraits.style.display = "none";
    mobile_landscapes.style.display = "block";
    mobile_about_me.style.display = "none";
    close_tag_function();
    resize_body();
}

function about_me_tag_function() {
    if (location_tracker == "about-me"){
        scroll_top();
    } else {
        to_top();
    }
    location_tracker = "about-me";
    desktop_portrait.style.display = "none";
    desktop_landscape.style.display = "none";
    desktop_about_me.style.display = "block";
    mobile_portraits.style.display = "none";
    mobile_landscapes.style.display = "none";
    mobile_about_me.style.display = "block";
    close_tag_function();
    resize_body();
}

/* || Sidebar Events */
close_tag.addEventListener("click", close_tag_function);
portrait_tag.addEventListener("click", portrait_tag_function);
landscape_tag.addEventListener("click", landscape_tag_function);
about_me_tag.addEventListener("click", about_me_tag_function);

/* || Footer Events */
back_to_top.addEventListener("click", scroll_top);
portrait_footer_tag.addEventListener("click", portrait_tag_function);
landscape_footer_tag.addEventListener("click", landscape_tag_function);
about_me_footer_tag.addEventListener("click", about_me_tag_function);
