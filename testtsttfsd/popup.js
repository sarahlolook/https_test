//this is for pop-up card
var card_popup = document.getElementById("popup");
var btn = document.getElementsByClassName("myBtn");
var popup_image = document.getElementById("popup_image");
var popup_text = document.getElementById("popup_text");
var span = document.getElementsByClassName("close")[0];

for (var i = 0; i < btn.length; i++) {

    btn[i].onclick = function() {
        var image = this.getElementsByTagName("img")[0];
        popup_image.src = image.src;
        popup_text.innerHTML = this.textContent;
        card_popup.style.display = "block";
    }
}
span.onclick = function() {
    card_popup.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == card_popup) {
      card_popup.style.display = "none";
    }
}
