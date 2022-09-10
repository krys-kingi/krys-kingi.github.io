const menubtn = document.querySelector('.menubtn')
const navbar = document.querySelector('.navbar')

menubtn.addEventListener('click', function () {
  navbar.classList.toggle('change')
})
