var modal = document.getElementsByClassName("modal")[0];
var btn = document.getElementsByClassName("btn_home_feedback")[0];
var close = document.getElementsByClassName("modal_close")[0];

btn.onclick = function() {
	modal.style.display = "block";
}

close.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function() {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


var iconMenu = document.querySelector('.menu_icon');
if (iconMenu) {
	var menu = document.querySelector('.nav_header');
	iconMenu.onclick = function(){
		iconMenu.classList.toggle('_active');
		menu.classList.toggle('_active');
	}
}