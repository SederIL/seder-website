const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const buyButton = document.getElementById('buyButton');
const toast = document.getElementById('toast');
if(buyButton){
  buyButton.addEventListener('click',()=>{
    toast.classList.add('show');
    setTimeout(()=>toast.classList.remove('show'),3800);
  });
}
