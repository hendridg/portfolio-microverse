const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
const arrayBtnPopup = document.querySelectorAll('.btn-popup');
const form = document.querySelector('.form-input');
const [fullName, firstName, lastName, email, textArea] = form.elements;

const mediaqueryList = window.matchMedia('(max-width: 768px)');

const screenTest = (e) => {
  if (e.matches) {
    fullName.required = true;
    firstName.required = false;
    lastName.required = false;
  } else {
    fullName.removeAttribute('required');
    firstName.required = true;
    lastName.required = true;
  }
};

screenTest(mediaqueryList);

mediaqueryList.addListener(screenTest);

let inputData = {};
if (localStorage.savedForm) {
  inputData = JSON.parse(localStorage.getItem('savedForm'));
}

fullName.addEventListener('change', () => {
  inputData.fullName = fullName.value;
});

firstName.addEventListener('change', () => {
  inputData.firstName = firstName.value;
});

lastName.addEventListener('change', () => {
  inputData.lastName = lastName.value;
});

email.addEventListener('change', () => {
  inputData.email = email.value;
});

textArea.addEventListener('change', () => {
  inputData.textArea = textArea.value;
});

const fillDataInput = () => {
  if (inputData.fullName) {
    fullName.value = inputData.fullName;
  }
  if (inputData.firstName) {
    firstName.value = inputData.firstName;
  }
  if (inputData.lastName) {
    lastName.value = inputData.lastName;
  }
  if (inputData.email) {
    email.value = inputData.email;
  }
  if (inputData.textArea) {
    textArea.value = inputData.textArea;
  }
};

const populateFields = () => {
  localStorage.setItem('savedForm', JSON.stringify(inputData));
  fillDataInput();
};
populateFields();
form.onchange = populateFields;

const errMsgEmail = document.querySelector('small');
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

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const regex = /[A-Z]/;
  if (!regex.test(email.value)) {
    form.submit();
  } else {
    errMsgEmail.innerText = 'Please enter only lower case';
  }
});

const dataCards = [
  {
    id: 0,
    url: './assest/img/capstone-react-scrimba.png',
    title: 'Shopping Page in React',
    description:
      'Final Project from React course (Bob Ziroll @bobziroll) in Scrimba, cover all principal feature about react, like a Hook, HOC, Context and more...',
    tecnologies: {
      tech1: 'React',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://react-web-capstone.herokuapp.com/',
    linkSource: 'https://github.com/hendridg/capstone-project-scrimba',
  },
  {
    id: 1,
    url: './assest/img/catstronaut-project.png',
    title:
      'Castronauts project, complete app to learn the principal features of Apollo Library',
    description: `Odyssey Lift-off V - Server, and Odyssey Lift-off V - Client, Course Companion App, 
    Odyssey is Apollo's free interactive learning platform. It's the 
    perfect place to start your GraphQL journey, and we'll be adding 
    courses on more advanced features and topics soon.`,
    tecnologies: {
      tech1: 'React',
      tech2: 'Apollo-client',
      tech3: 'Apollo-server',
      tech4: 'GraphQL',
    },
    linkVersion: 'https://client-catstronauts-hg.herokuapp.com/',
    linkSource: 'https://github.com/hendridg/odyssey-lift-off-part5-client',
  },
  {
    id: 2,
    url: './assest/img/netflix-clone-1.png',
    title: 'Netflix Clone, Scrimba React-Advance course',
    description: `Final Project from React Advance in Scrimba, excellent and complex work,
     features like redirection, HOC's, Hooks, Firebase to authenticated, styled-components and more...`,
    tecnologies: {
      tech1: 'React',
      tech2: 'Firebase',
      tech3: 'JavaScript',
      tech4: 'css',
    },
    linkVersion: 'https://netflix-clone-hendrid.herokuapp.com/',
    linkSource: 'https://github.com/hendridg/netflix-clone',
  },
  {
    id: 3,
    url: './assest/img/life.jpg',
    title: 'Keeping track of hundreds of components 3',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/hendridg/',
  },
  {
    id: 4,
    url: './assest/img/work.jpg',
    title: 'Keeping track of hundreds of components 4',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com',
    linkSource: 'https://github.com/hendridg/',
  },
  {
    id: 5,
    url: './assest/img/about-me.jpg',
    title: 'Keeping track of hundreds of components 5',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://www.google.com/',
    linkSource: 'https://github.com/hendridg/',
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
              <li class="tag-mobile">${dataCards[index].tecnologies.tech1}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech2}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech3}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech4}</li>
          </ul>
          <p class="card-paragraph-mobile">
            ${dataCards[index].description}
          </p>
          <div class="card-button-mobile">
                  <a href=${dataCards[index].linkVersion} class="btn-card-details-mobile">
                  See Live
                  <img src="./assest/see_live_icon.svg" alt="see live icon">
                  </a>
                  <a href=${dataCards[index].linkSource} class="btn-card-details-mobile">
                  See Sources
                  <img src="./assest/github_white.svg" alt="see github icon">
                  </a>
          </div>
          <script src="index.js"></script>
  </article>
  `;

// eslint-disable-next-line no-plusplus
for (let i = 0; i < arrayBtnPopup.length; i++) {
  arrayBtnPopup[i].addEventListener('click', () => {
    const cardWork = document.createElement('div');
    cardWork.innerHTML = cardWorkDetailsMobile(i);
    document.body.appendChild(cardWork);
    const btnCloseDetailsMobile = document.querySelector('.btn-close-details');
    btnCloseDetailsMobile.addEventListener('click', async () => {
      document.body.removeChild(cardWork);
    });
  });
}
