const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLnks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLnks.classList.toggle('active')
});
