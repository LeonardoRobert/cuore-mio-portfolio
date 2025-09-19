function openModal(id) {
  document.getElementById("modal-" + id).style.display = "flex";
}
function closeModal(id) {
  document.getElementById("modal-" + id).style.display = "none";
}
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
