const btn = document.querySelector('[data-modal-button]');
const btnClose = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const btn1 = document.querySelector('[data-menu-btn]');
const menu = document.querySelector('[data-menu]');
btn.addEventListener('click', function(){
	
	modal.classList.remove('close');
});

btnClose.addEventListener('click', function(){
	
	modal.classList.add('close');
});
modal.addEventListener('click', function(){
	
	modal.classList.add('close');
});

modal.querySelector('.okno-content').addEventListener('click', function(event)
{
	event.stopPropagation();
});
btn1.addEventListener('click', function(){
	menu.classList.remove('close');
});
menu.addEventListener('click', function(){
	
	menu.classList.add('close');
});
menu.querySelector('.okno-menu-content').addEventListener('click', function(event)
{
	event.stopPropagation();
});
