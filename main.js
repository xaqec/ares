document.documentElement.classList.add('js');
const menuButton=document.querySelector('.menu-toggle');
const menu=document.getElementById('ana-menu');
function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.innerHTML='Menü <span aria-hidden="true">☰</span>';}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menu.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.innerHTML=open?'Kapat <span aria-hidden="true">×</span>':'Menü <span aria-hidden="true">☰</span>';});
menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){closeMenu();menuButton.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
matchMedia('(min-width:651px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
