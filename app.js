let mouseCursor = document.querySelector(".cursor");
let navlinks = document.querySelectorAll(".header ul li");

window.addEventListener("mousemove",cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}