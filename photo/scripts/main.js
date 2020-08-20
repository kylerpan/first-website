/* for desktop preview */
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

/* for mobile preview */
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


/* for universal general sidebar */
var hamburger_icon = document.getElementById('hamburger-icon');
var sidebar_windows = document.getElementsByClassName('sidebar-window');
var sidebar_open_spaces = document.getElementsByClassName('sidebar-open-space');
var desktop_sidebar_window = sidebar_windows[0];
var mobile_sidebar_window = sidebar_windows[1];
var desktop_sidebar_open_space = sidebar_open_spaces[0];
var mobile_sidebar_open_space = sidebar_open_spaces[1];

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

/* for desktop sidebar */
var desktop_sidebar_tags = content_desktop.getElementsByTagName('h3');
var desktop_close_tag = desktop_sidebar_tags[0];
var desktop_portrait_tag = desktop_sidebar_tags[1];
var desktop_landscape_tag = desktop_sidebar_tags[2];
var desktop_about_me_tag = desktop_sidebar_tags[3];
var desktop_portrait = content_desktop.getElementsByClassName('portraits')[0];
var desktop_landscape = content_desktop.getElementsByClassName('landscapes')[0];
var desktop_about_me = content_desktop.getElementsByClassName('about-me')[0];

desktop_close_tag.onclick = function() {
    desktop_sidebar_window.style.display = "none";
}

desktop_portrait_tag.onclick = function() {
    desktop_portrait.style.display = "block";
    desktop_landscape.style.display = "none";
    desktop_about_me.style.display = "none";
    desktop_sidebar_window.style.display = "none";
}

desktop_landscape_tag.onclick = function() {
    desktop_portrait.style.display = "none";
    desktop_landscape.style.display = "block";
    desktop_about_me.style.display = "none";
    desktop_sidebar_window.style.display = "none";
}

desktop_about_me_tag.onclick = function() {
    desktop_portrait.style.display = "none";
    desktop_landscape.style.display = "none";
    desktop_about_me.style.display = "block";
    desktop_sidebar_window.style.display = "none";
}

/* for mobile sidebar */
var mobile_sidebar_tags = content_mobile.getElementsByTagName('h3');
var mobile_close_tag = mobile_sidebar_tags[0];
var mobile_portrait_tag = mobile_sidebar_tags[1];
var mobile_landscape_tag = mobile_sidebar_tags[2];
var mobile_portraits = content_mobile.getElementsByClassName('portraits')[0];
var mobile_landscapes = content_mobile.getElementsByClassName('landscapes')[0];

mobile_close_tag.onclick = function() {
    mobile_sidebar_window.style.display = "none";
}

mobile_portrait_tag.onclick = function() {
    mobile_portrait.style.display = "block";
    mobile_landscape.style.display = "none";
    mobile_sidebar_window.style.display = "none";
}

mobile_landscape_tag.onclick = function() {
    mobile_portrait.style.display = "none";
    mobile_landscape.style.display = "block";
    mobile_sidebar_window.style.display = "none";
}

/* height of website */
var bodies = document.getElementsByTagName('body');
var body = bodies[0];
var body_height = body.scrollHeight;
console.log(body_height);