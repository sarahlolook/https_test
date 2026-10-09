var myIndex = 0;
    carousel();
function carousel(){
    var i;
    var x = document.getElementsByClassName("mySlides"); //in here we have two x


    for (i=0; i < x.length; i++) {
        x[i].style.display = "none"; //hide context
        x[i].classList.remove("fade");
    } myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block"; //show
    void x[myIndex-1].offsetWidth;
    x[myIndex-1].classList.add("fade");
    setTimeout(carousel, 3000);
}

