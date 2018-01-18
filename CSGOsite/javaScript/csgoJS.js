

window.onscroll = function() {stickyNav()};


function stickyNav() {
	var navBar = document.getElementByID("menu");
	var navOffSet = navBar.offsetTop;
	
	if (window.pageYOffset >= navOffSet){
		navBar.classList.add("stickyMenu");
	}
	else {
		navBar.classList.remove("stickyMenu");
	}
}
