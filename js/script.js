var hamburger = document.querySelector('.navToggle');
var menu = document.getElementById('hamburger-menu');

hamburger.addEventListener('click', function(){
	menu.classList.toggle('is-active')
});