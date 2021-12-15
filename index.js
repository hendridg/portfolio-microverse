const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
const arrayBtnPopup = document.querySelectorAll('.btn-popup');
const work = document.querySelectorAll('.card-work');
let btnCloseDetailsMobile;

const htmlContent = `
<header>
<div class="header-nav-phone">
    <a href="/" class="header-logo">
        <h3>
            Welcome
        </h3>
    </a>
    <button type="button" class="menu-btn">
        <img src="./assest/Union.svg" alt="menu link">
    </button>
    <nav class="header-nav-mobile hidden">
        <button type="button" class="btn-close-nav">
            <img src="./assest/Icon-Cancel.svg" alt="cancel icon">
        </button>
        <ul>
            <li>
                <a href="#works-id" class="link-portfolio">
                    Portfolio
                </a>
            </li>
            <li>
                <a href="#about-myself-id" class="link-about">
                    About
                </a>
            </li>
            <li>
                <a href="#footer-container-id" class="link-contact">
                    Contact
                </a>
            </li>
        </ul>
    </nav>

</div>
</header>
<section class="headline">
<nav>
    <ul class="header-nav-desktop">
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
</nav>
<div class="container container-flex">
    <h1 class="header-title">
        Hey there. I’m Hendrid
    </h1>
    <h1>
        <span>I’m a software developer</span>
    </h1>
    <p>
        I can help you build a product , feature or website Look through some of my work and experience! If you
        like
        what you see and have a project you need coded,
        don’t hestiate to contact me.
    </p>

    <ul class="social-media">
        <li>
            <a href="">
                <img src="./assest/social-media/twitter.svg" alt="twitter icon">
            </a>
        </li>
        <li>
            <a href="">
                <img src="./assest/social-media/linkedin.svg" alt="linkedin icon">
            </a>
        </li>
        <li>
            <a href="">
                <img src="./assest/social-media/medium.svg" alt="medium icon">
            </a>
        </li>
        <li>
            <a href="">
                <img src="./assest/social-media/github.svg" alt="github icon">
            </a>
        </li>
        <li>
            <a href="">
                <img src="./assest/social-media/angellist.svg" alt="angellist icon">
            </a>
        </li>
    </ul>

    <button type="button">
        <img src="./assest/Disabled.svg" alt="disabled button">
    </button>
</div>
</section>
<section>
<div class="works" id="works-id">
    <h1>My Recent Works</h1>
    <article class="card-work">
        <div class="card-image">
            <img src="./assest/img/about-me.jpg" alt="a guy with a backpack in mountain">
        </div>
        <h2 class="card-title">
            Multi-Post Stories Gain+Glory
        </h2>
        <ul class="card-tags">
            <li>Rubi on rails</li>
            <li>css</li>
            <li>JavaScript</li>
            <li>html</li>
        </ul>
        <button type="button" class="btn-popup">
            See Project
        </button>
    </article>

    <article class="card-work">
        <div class="card-image">
            <img src="./assest/img/deco.jpg" alt="a plant in glass with water">
        </div>
        <h2 class="card-title">
            Multi-Post Stories Gain+Glory
        </h2>
        <ul class="card-tags">
            <li>Rubi on rails</li>
            <li>css</li>
            <li>JavaScript</li>
            <li>html</li>
        </ul>
        <button type="button" class="btn-popup">
            See Project
        </button>
    </article>
    <article class="card-work">
        <div class="card-image">
            <img src="./assest/img/food.jpg" alt="a plate with wanton food">
        </div>
        <h2 class="card-title">
            Multi-Post Stories Gain+Glory
        </h2>
        <ul class="card-tags">
            <li>Rubi on rails</li>
            <li>css</li>
            <li>JavaScript</li>
            <li>html</li>
        </ul>
        <button type="button" class="btn-popup">
            See Project
        </button>
    </article>
    <article class="card-work">
        <div class="card-image">
            <img src="./assest/img/life.jpg" alt="workspace with clock, plant and desktop">
        </div>
        <h2 class="card-title">
            Multi-Post Stories Gain+Glory
        </h2>
        <ul class="card-tags">
            <li>Rubi on rails</li>
            <li>css</li>
            <li>JavaScript</li>
            <li>html</li>
        </ul>
        <button type="button" class="btn-popup">
            See Project
        </button>
    </article>
    <article class="card-work">
        <div class="card-image">
            <img src="./assest/img/work.jpg" alt="workspace with chair, a couple plant and desktop">
        </div>
        <h2 class="card-title">
            Multi-Post Stories Gain+Glory
        </h2>
        <ul class="card-tags">
            <li>Rubi on rails</li>
            <li>css</li>
            <li>JavaScript</li>
            <li>html</li>
        </ul>
        <button type="button" class="btn-popup">
            See Project
        </button>
    </article>
    <article class="card-work">
        <div class="card-image">
            <img src="./assest/img/about-me.jpg" alt="a guy with a backpack in mountain">
        </div>
        <h2 class="card-title">
            Multi-Post Stories Gain+Glory
        </h2>
        <ul class="card-tags">
            <li>Rubi on rails</li>
            <li>css</li>
            <li>JavaScript</li>
            <li>html</li>
        </ul>
        <button type="button" class="btn-popup">
            See Project
        </button>
    </article>
</div>
</section>
<section class="container-flex about-myself" id="about-myself-id">
<div class="container">
    <h1>About me</h1>
    <p>
        I can help you build a product , feature or website Look through some of my work and experience! If you
        like
        what you see and have a project you need coded,
        don’t hestiate to contact me.
    </p>
    <button type="button">
        Get My Resume
    </button>
</div>
<ul class="categorie-about-myself">
    <li>
        <article class="card-categories">
            <div class="categorie-image">
                <img src="./assest/icon-languages.svg" alt="icon languages">
            </div>
            <h2 class="categorie-title">
                Languages
            </h2>
            <ul class="categorie-tags">
                <li>React</li>
                <li>Rubi on rails</li>
                <li>css</li>
                <li>JavaScript</li>
                <li>html</li>
            </ul>
        </article>
    </li>
    <li>
        <article class="card-categories">
            <div class="categorie-image">
                <img src="./assest/icon-frameworks.svg" alt="icon frameworks">
            </div>
            <h2 class="categorie-title">
                Frameworks
            </h2>
            <ul class="categorie-tags">
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>Selenium</li>
                <li>RSpec</li>
                <li>GraphQL</li>
            </ul>
        </article>
    </li>
    <li>
        <article class="card-categories">
            <div class="categorie-image">
                <img src="./assest/icon-skills.svg" alt="icon skills">
            </div>
            <h2 class="categorie-title">
                Skills
            </h2>
            <ul class="categorie-tags">
                <li>Codekit</li>
                <li>GitHub</li>
                <li>CodePen</li>
                <li>GitLab</li>
            </ul>
        </article>
    </li>
</ul>
</section>
<footer class="footer-container" id="footer-container-id">
<div class="footer-form">
    <h1 class="footer-title">
        I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
    </h1>
    <form action="https://formspree.io/f/mrgjzokg" method="post">
        <ul class="form-fields">
            <li class="input-name">
                <input type="text" name="name" id="name" maxlength="30" placeholder="Full name" required>

            </li>
            <li class="input-full-name">
                <input type="text" name="first_name" id="first_name" maxlength="30" placeholder="First name"
                    required>
                <input type="text" name="last_name" id="last_name" maxlength="30" placeholder="Last name"
                    required>
            </li>


            <li>
                <input class="input-email" type="email" name="email" id="email" placeholder="Email address"
                    required>
            </li>
            <li>
                <textarea name="text_area" id="text_area" cols="30" rows="10" maxlength="500"
                    placeholder="Enter text here" required></textarea>
            </li>
            <li class="submit-button">
                <button type="submit">
                    Get in touch
                </button>
            </li>
        </ul>
    </form>
</div>
<ul class="social-media">
    <li>
        <a href="">
            <img src="./assest/social-media/twitter.svg" alt="twitter icon">
        </a>
    </li>
    <li>
        <a href="">
            <img src="./assest/social-media/linkedin.svg" alt="linkedin icon">
        </a>
    </li>
    <li>
        <a href="">
            <img src="./assest/social-media/medium.svg" alt="medium icon">
        </a>
    </li>
    <li>
        <a href="">
            <img src="./assest/social-media/github.svg" alt="github icon">
        </a>
    </li>
    <li>
        <a href="">
            <img src="./assest/social-media/angellist.svg" alt="angellist icon">
        </a>
    </li>
</ul>
<a href="wwww.gmail.com" class="link-mail">hendridg@gmail.com</a>
</footer>
<script src="index.js"></script>
</body>`;

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
        <script src="index.js"></script>
    </article>
`;

arrayBtnPopup[0].addEventListener('click', async () => {
  work[0].appendChild(cardWorkDetailsMobile);
  btnCloseDetailsMobile = await document.querySelector('.btn-close-details');
  btnCloseDetailsMobile.addEventListener('click', async () => {
    cardWorkDetailsMobile.remove();
    // document.body.innerHTML = await htmlContent;
    // menuBtn = document.querySelector('.menu-btn');
    // headerNavMobile = document.querySelector('.header-nav-mobile');
    // btnCloseNav = document.querySelector('.btn-close-nav');
    // linkPortfolio = document.querySelector('.link-portfolio');
    // linkAbout = document.querySelector('.link-about');
    // linkContact = document.querySelector('.link-contact');
    // arrayBtnPopup = document.querySelectorAll('.btn-popup');
  });
});
arrayBtnPopup[5].addEventListener('click', async () => {
  work[5].appendChild(cardWorkDetailsMobile);
  btnCloseDetailsMobile = await document.querySelector('.btn-close-details');
  btnCloseDetailsMobile.addEventListener('click', async () => {
    cardWorkDetailsMobile.remove();
    // document.body.innerHTML = await htmlContent;
    // menuBtn = document.querySelector('.menu-btn');
    // headerNavMobile = document.querySelector('.header-nav-mobile');
    // btnCloseNav = document.querySelector('.btn-close-nav');
    // linkPortfolio = document.querySelector('.link-portfolio');
    // linkAbout = document.querySelector('.link-about');
    // linkContact = document.querySelector('.link-contact');
    // arrayBtnPopup = document.querySelectorAll('.btn-popup');
  });
});
