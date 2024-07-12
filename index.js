document.getElementById('menu-svg').addEventListener('click', () => {
  document.getElementById('hamburger-menu').classList.toggle('active');
})

document.getElementById('close-menu').addEventListener('click', () => {
  document.getElementById('hamburger-menu').classList.toggle('active');
})

document.getElementById('services-p').addEventListener('click', () => {
  document.getElementById('services-p').classList.toggle('active');
})

document.getElementById('company-p').addEventListener('click', () => {
  document.getElementById('company-p').classList.toggle('active');
})

document.getElementById('services').addEventListener('click', () => {
  document.getElementById('services').classList.toggle('active');
})

document.getElementById('company').addEventListener('click', () => {
  document.getElementById('company').classList.toggle('active');
})

document.getElementById('modal-1').addEventListener('click', () => {
  document.getElementById('bg-modal').classList.toggle('active');
})
document.getElementById('modal-2').addEventListener('click', () => {
  document.getElementById('bg-modal').classList.toggle('active');
})
document.getElementById('modal-4').addEventListener('click', () => {
  document.getElementById('bg-modal').classList.toggle('active');
})
document.getElementById('bg-modal').addEventListener('click', event => {
  document.getElementById('bg-modal').classList.toggle('active');
})
document.getElementsByClassName('modal')[0].addEventListener('click', event => {
  event.stopPropagation()
})



