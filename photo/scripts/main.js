/* || Desktop Preview Image */
var content_desktop = document.getElementById('content-desktop');
var content_mobile = document.getElementById('content-mobile');
var desktop_images = content_desktop.getElementsByTagName('img');
var desktop_feature_image = desktop_images[0];
var desktop_preview = document.getElementById("preview-window-d");

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
var mobile_preview = document.getElementById("preview-window-m");

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
    console.log(body_height);
}

resize_body();
window.addEventListener("resize", resize_body);


/* || Preview Sidebar */
var hamburger_icon = document.getElementById('hamburger-icon');
var desktop_sidebar_window = document.getElementsByClassName('sidebar-window')[0];
var mobile_sidebar_window = document.getElementsByClassName('sidebar-window')[1];
var desktop_sidebar_open_space = document.getElementsByClassName('sidebar-open-space')[0];
var mobile_sidebar_open_space = document.getElementsByClassName('sidebar-open-space')[1];

hamburger_icon.onclick = function() {
    desktop_sidebar_window.style.display = "block";
    mobile_sidebar_window.style.display = "block";
}

desktop_sidebar_open_space.onclick = function() {
    desktop_sidebar_window.style.display = "none";
}

mobile_sidebar_open_space.onclick = function() {
    mobile_sidebar_window.style.display = "none";
}

/* || Desktop Sidebar Onclicks */
var desktop_close_tag = content_desktop.getElementsByTagName('h3')[0];
var desktop_portrait_tag = content_desktop.getElementsByTagName('h3')[1];
var desktop_landscape_tag = content_desktop.getElementsByTagName('h3')[2];
var desktop_about_me_tag = content_desktop.getElementsByTagName('h3')[3];
var desktop_portrait = content_desktop.getElementsByClassName('portraits')[0];
var desktop_landscape = content_desktop.getElementsByClassName('landscapes')[0];
var desktop_about_me = content_desktop.getElementsByClassName('about-me')[0];

/* || Mobile Sidebar Onclicks */
var mobile_close_tag = content_mobile.getElementsByTagName('h3')[0];
var mobile_portrait_tag = content_mobile.getElementsByTagName('h3')[1];
var mobile_landscape_tag = content_mobile.getElementsByTagName('h3')[2];
var mobile_about_me_tag = content_mobile.getElementsByTagName('h3')[3];
var mobile_portraits = content_mobile.getElementsByClassName('portraits')[0];
var mobile_landscapes = content_mobile.getElementsByClassName('landscapes')[0];
var mobile_about_me = content_mobile.getElementsByClassName('about-me')[0];

/* || Footer Onclicks */
var footer = document.getElementById("footer");
var back_to_top = footer.getElementsByTagName('p')[5];
var portrait_footer_tag = footer.getElementsByTagName('p')[6];
var landscape_footer_tag = footer.getElementsByTagName('p')[7];
var about_me_footer_tag = footer.getElementsByTagName('p')[8];

/* || Sidebar Tag Functions */
function scroll_top() {
    window.scrollTo(0,0);
}

function close_tag() {
    desktop_sidebar_window.style.display = "none";
    mobile_sidebar_window.style.display = "none";
}

function portrait_tag() {
    scroll_top();
    desktop_portrait.style.display = "block";
    desktop_landscape.style.display = "none";
    desktop_about_me.style.display = "none";
    mobile_portraits.style.display = "block";
    mobile_landscapes.style.display = "none";
    mobile_about_me.style.display = "none";
    close_tag();
    resize_body();
}

function landscape_tag() {
    scroll_top();
    desktop_portrait.style.display = "none";
    desktop_landscape.style.display = "block";
    desktop_about_me.style.display = "none";
    mobile_portraits.style.display = "none";
    mobile_landscapes.style.display = "block";
    mobile_about_me.style.display = "none";
    close_tag();
    resize_body();
}

function about_me_tag() {
    scroll_top();
    desktop_portrait.style.display = "none";
    desktop_landscape.style.display = "none";
    desktop_about_me.style.display = "block";
    mobile_portraits.style.display = "none";
    mobile_landscapes.style.display = "none";
    mobile_about_me.style.display = "block";
    close_tag();
    resize_body();
}
 
desktop_close_tag.addEventListener("click", close_tag);
desktop_portrait_tag.addEventListener("click", portrait_tag);
desktop_landscape_tag.addEventListener("click", landscape_tag);
desktop_about_me_tag.addEventListener("click", about_me_tag);

mobile_close_tag.addEventListener("click", close_tag);
mobile_portrait_tag.addEventListener("click", portrait_tag);
mobile_landscape_tag.addEventListener("click", landscape_tag);
mobile_about_me_tag.addEventListener("click", about_me_tag);

back_to_top.addEventListener("click", scroll_top);
portrait_footer_tag.addEventListener("click", portrait_tag);
landscape_footer_tag.addEventListener("click", landscape_tag);
about_me_footer_tag.addEventListener("click", about_me_tag);

