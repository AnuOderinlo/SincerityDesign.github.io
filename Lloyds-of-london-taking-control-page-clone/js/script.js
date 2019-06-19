var service = document.getElementById("drop-down");
var subMenu = document.getElementById("sub-menu");
var a = document.querySelectorAll(".secondary-item");
console.log(a);
service.addEventListener('mouseover', function () {
	subMenu.style.display = "block";
})
service.addEventListener('mouseout', function () {
	subMenu.style.display = "none";
})