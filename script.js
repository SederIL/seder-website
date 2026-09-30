const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const toggle=document.querySelector('.menu-toggle');const menu=document.querySelector('.mobile-menu');if(toggle&&menu){toggle.addEventListener('click',()=>menu.classList.toggle('open'));menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')))}
const buyButton=document.getElementById('buyButton');const toast=document.getElementById('toast');if(buyButton&&toast){buyButton.addEventListener('click',()=>{toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3200)})}
