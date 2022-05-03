function togglecollapsible(button) {
    var content = button.parentElement.getElementsByClassName("collapsible-content")[0];

    console.log(content.style.display);
    console.log(button.parentElement.getElementsByClassName("collapsible-content")[0].style.display);
    console.log(button.getElementsByClassName("arrow-container"));

    if (content.style.display == "block") {
        content.style.display = "none";

        var arrow = button.getElementsByClassName("arrow")[0];
        if (arrow) arrow.style.transform = "rotate(0deg)";
    }

    else {
        content.style.display = "block";

        var arrow = button.getElementsByClassName("arrow")[0];
        if (arrow) arrow.style.transform = "rotate(-90deg)";
    }
}