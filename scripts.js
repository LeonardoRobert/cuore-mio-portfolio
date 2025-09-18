// scripts.js — small enhancements
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links (if added later)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
    });
  });
});
