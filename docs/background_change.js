var backgrounds = ["2in1_rose_sculk_farm", "sinking_magma_cube", "turtle_egg_wireless_redstone"];
var i = 1;
var fadeId;

window.onload = function () {
    document.getElementById("background-front").style.opacity = 1;
    document.getElementById("background-back").style.opacity = 1;
    setInterval(changeBackground, 5000);
}

function changeBackground() {
    document.getElementById("background-back").style.backgroundImage = "url(\"images/thumbnails/" + backgrounds[i] + ".png\")";
    fadeId = setInterval(fade, 15);
    setTimeout(function () {
        document.getElementById("background-front").style.backgroundImage = "url(\"images/thumbnails/" + backgrounds[i] + ".png\")";
        document.getElementById("background-front").style.opacity = 1;
        clearInterval(fadeId);
        i += 1;
        if (i == backgrounds.length) {
            i = 0;
        }
    }, 1500)
}

function fade() {
    document.getElementById("background-front").style.opacity -= 0.01;
}