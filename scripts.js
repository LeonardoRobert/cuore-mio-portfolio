// Modal open/close
document.addEventListener('DOMContentLoaded', function(){
  function openModal(id){
    var m = document.getElementById('modal-' + id);
    if(m){ m.style.display = 'flex'; m.setAttribute('aria-hidden','false'); }
  }
  function closeModalByEl(el){
    var modal = el.closest('.modal');
    if(modal){ modal.style.display = 'none'; modal.setAttribute('aria-hidden','true'); }
  }

  document.querySelectorAll('.btn-outline').forEach(function(btn){
    btn.addEventListener('click', function(){ openModal(btn.getAttribute('data-modal')); });
  });
  document.querySelectorAll('[data-close]').forEach(function(b){ b.addEventListener('click', function(){ closeModalByEl(b); }); });

  // close when clicking outside
  document.querySelectorAll('.modal').forEach(function(modal){
    modal.addEventListener('click', function(e){
      if(e.target === modal) { modal.style.display = 'none'; modal.setAttribute('aria-hidden','true'); }
    });
  });
});