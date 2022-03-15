function togglecollapsible(button) {
    var content = button.parentElement.getElementsByClassName("collapsible-content")[0];

    console.log(content.style.display);
    console.log(button.parentElement.getElementsByClassName("collapsible-content")[0].style.display);
    if (content.style.display == "block") {
        content.style.display = "none";
    }

    else {
        content.style.display = "block";
    }
}