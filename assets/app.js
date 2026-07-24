
document.querySelectorAll('.accbtn').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.10});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-scroll]').forEach(el=>el.addEventListener('click',e=>{
  const target=document.querySelector(el.dataset.scroll);
  if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
}));
