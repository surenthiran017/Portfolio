const navbar=document.querySelector('.navbar');
const menu=document.querySelector('.menu');
menu.addEventListener('click',()=>navbar.classList.toggle('nav-open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>navbar.classList.remove('nav-open')));
document.getElementById('year').textContent=new Date().getFullYear();
