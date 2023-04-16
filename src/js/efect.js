let show = true;
const menuSection = document.querySelector('.menu-section');
const menuBurguer = document.querySelector('.menu-burguer');

menuBurguer.addEventListener('click', () => {
	menuSection.classList.toggle('on', show);
	show = !show;
});