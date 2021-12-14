const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
let btnCloseDetailsMobile;
const arrayBtnPopup = document.querySelectorAll('.btn-popup');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

linkPortfolio.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkContact.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

const cardWorkDetailsMobile = document.createElement('div');
cardWorkDetailsMobile.innerHTML = `
<article class="card-work-details-mobile">
        <button type="button" class="btn-close-details">
            <img src="./assest/Icon-Cancel.svg" alt="cancel icon">
        </button>
        <div class="card-image-details-mobile">
            <img src="./assest/img/about-me.jpg" alt="a guy with a backpack in mountain">
        </div>
        <h2 class="card-title-mobile">
            Keeping track of hundreds of
            components
        </h2>
        <ul class="card-tags-mobile">
            <li>Rubi on rails</li>
            <li>css</li>
            <li>JavaScript</li>
            <li>html</li>
        </ul>
        <p class="card-paragraph-mobile">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it 1960s with the relea
        </p>
        <div class="card-button-mobile">
            <button type="button" class="btn-card-details-mobile">
                See Live
                <img src="./assest/see_live_icon.svg" alt="see live icon">
            </button>
            <button type="button" class="btn-card-details-mobile">
                See Sources
                <img src="./assest/github_white.svg" alt="see github icon">
            </button>
        </div>
    </article>
`;

arrayBtnPopup[5].addEventListener('click', async () => {
  document.body.appendChild(cardWorkDetailsMobile);
  btnCloseDetailsMobile = await document.querySelector('.btn-close-details');
  btnCloseDetailsMobile.addEventListener('click', () => {
    cardWorkDetailsMobile.remove();
  });
});
