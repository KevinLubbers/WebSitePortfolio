

window.onscroll = function() {stickyNav()};


function stickyNav() {
	var navBar = document.getElementById("menu");
	var navOffSet = navBar.offsetTop;
	
	
	if (window.matchMedia("(max-width: 950px)").matches){
		
	}
	else{
		
		if (window.pageYOffset > navOffSet){
			navBar.classList.add("stickyMenu");
		}
		else {
			navBar.classList.remove("stickyMenu");
		}
	}
	
		
}
