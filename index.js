const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
var menuOpen = false;

menuBtn.addEventListener('click', () => {
  !menuOpen && menuBtn.classList.add('hidden'),
    headerNavMobile.classList.remove('hidden'),
    (menuOpen = true);
});

btnCloseNav.addEventListener('click', () => {
  menuOpen && menuBtn.classList.remove('hidden'),
    headerNavMobile.classList.add('hidden'),
    (menuOpen = false);
});

linkPortfolio.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
  console.log('click link');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
  console.log('click link');
});

linkContact.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
  console.log('click link');
});
