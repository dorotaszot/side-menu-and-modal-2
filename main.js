const toggleNav = document.getElementById('toggle');
const openModal = document.getElementById('open');
const closeModal = document.getElementById('close');
const modal = document.getElementById('modal');

toggleNav.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

openModal.addEventListener('click', () =>
  modal.classList.add('show-modal')
);

closeModal.addEventListener('click', () =>
  modal.classList.remove('show-modal')
);

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.classList.remove('show-modal')
  }
});