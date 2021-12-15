const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
const arrayBtnPopup = document.querySelectorAll('.btn-popup');
let btnCloseDetailsMobile;

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

const dataCards = [
  {
    id: 0,
    url: './assest/img/about-me.jpg',
    title: 'Keeping track of hundreds of components',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 1,
    url: './assest/img/deco.jpg',
    title: 'Keeping track of hundreds of components 1',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 2,
    url: './assest/img/food.jpg',
    title: 'Keeping track of hundreds of components 2',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 3,
    url: './assest/img/life.jpg',
    title: 'Keeping track of hundreds of components 3',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 4,
    url: './assest/img/work.jpg',
    title: 'Keeping track of hundreds of components 4',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
  {
    id: 5,
    url: './assest/img/about-me.jpg',
    title: 'Keeping track of hundreds of components 5',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
  },
];

const cardWorkDetailsMobile = (index) => `
  <article class="card-work-details-mobile">
          <button type="button" class="btn-close-details">
              <img src="./assest/Icon-Cancel.svg" alt="cancel icon">
          </button>
          <div class="card-image-details-mobile">
              <img src=${dataCards[index].url} alt="a guy with a backpack in mountain">
          </div>
          <h2 class="card-title-mobile">
              ${dataCards[index].title}
          </h2>
          <ul class="card-tags-mobile">
              <li class="tag-mobile">Rubi on rails</li>
              <li class="tag-mobile">css</li>
              <li class="tag-mobile">JavaScript</li>
              <li class="tag-mobile">html</li>
          </ul>
          <p class="card-paragraph-mobile">
            ${dataCards[index].paragraph}
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
          <script src="index.js"></script>
      </article>
  `;

arrayBtnPopup[0].addEventListener('click', async () => {
  document.body.innerHTML = cardWorkDetailsMobile(0);
  btnCloseDetailsMobile = await document.querySelector('.btn-close-details');
  btnCloseDetailsMobile.addEventListener('click', async () => {
    window.location.reload();
  });
});
arrayBtnPopup[1].addEventListener('click', async () => {
  document.body.innerHTML = cardWorkDetailsMobile(1);
  btnCloseDetailsMobile = await document.querySelector('.btn-close-details');
  btnCloseDetailsMobile.addEventListener('click', async () => {
    window.location.reload();
  });
});
arrayBtnPopup[2].addEventListener('click', async () => {
  document.body.innerHTML = cardWorkDetailsMobile(2);
  btnCloseDetailsMobile = await document.querySelector('.btn-close-details');
  btnCloseDetailsMobile.addEventListener('click', async () => {
    window.location.reload();
  });
});
arrayBtnPopup[3].addEventListener('click', async () => {
  document.body.innerHTML = cardWorkDetailsMobile(3);
  btnCloseDetailsMobile = await document.querySelector('.btn-close-details');
  btnCloseDetailsMobile.addEventListener('click', async () => {
    window.location.reload();
  });
});
arrayBtnPopup[4].addEventListener('click', async () => {
  document.body.innerHTML = cardWorkDetailsMobile(4);
  btnCloseDetailsMobile = await document.querySelector('.btn-close-details');
  btnCloseDetailsMobile.addEventListener('click', async () => {
    window.location.reload();
  });
});
arrayBtnPopup[5].addEventListener('click', async () => {
  document.body.innerHTML = cardWorkDetailsMobile(5);
  btnCloseDetailsMobile = await document.querySelector('.btn-close-details');
  btnCloseDetailsMobile.addEventListener('click', async () => {
    window.location.reload();
  });
});
