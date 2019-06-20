let dropDown = document.getElementById("drop-down");
let subMenu = document.getElementById("sub-menu");
let a = document.querySelectorAll(".secondary-item");
let share = document.getElementById("share");
let socialMedia = document.getElementById("smedia")


dropDown.addEventListener('mouseover', function () {
	subMenu.style.display = "block";
})
dropDown.addEventListener('mouseout', function () {
	subMenu.style.display = "none";
})
socialMedia.style.display = "none";

share.addEventListener("click", function(){
	socialMedia.style.display = "";
	share.classList.toggle("bg-black");
	socialMedia.classList.toggle("smedia");
	socialMedia.classList.toggle("bg-black");
})