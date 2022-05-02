var backgrounds = ["2in1_rose_sculk_farm", "sinking_magma_cube", "turtle_egg_wireless_redstone", "water_warden_farm", "portal_spam_froglight_farm", "slime_ice", "honey_ice", "mud_converter"];
var i = 1;
var fadeId;

// values to change when testing, all default to false //
var testImages = false;
var doNotRandomize = false;
// end //

window.onload = function () {
    document.getElementById("background-back").style.backgroundImage = "url(\"images/thumbnails/" + backgrounds[1] + ".png\")";

    document.getElementById("background-front").style.opacity = 1;
    document.getElementById("background-back").style.opacity = 1;

    if (!testImages) setInterval(changeBackground, 5000);
    else setInterval(changeBackground, 2000);
}

function changeBackground() {
    fadeId = setInterval(fade, 15);
    setTimeout(function () {
        clearInterval(fadeId);

        document.getElementById("background-front").style.backgroundImage = "url(\"images/thumbnails/" + backgrounds[i] + ".png\")";
        document.getElementById("background-front").style.opacity = 1;

        if (doNotRandomize) {
            i++;
            if (i == backgrounds.length) i = 0;
        }

        else {
            let n = i;
            while (n == i)
                n = Math.floor(Math.random() * backgrounds.length);
            i = n;
        }

        document.getElementById("background-back").style.backgroundImage = "url(\"images/thumbnails/" + backgrounds[i] + ".png\")";
    }, 1500)
}

function fade() {
    document.getElementById("background-front").style.opacity -= 0.01;
}