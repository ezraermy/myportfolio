const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

const appProjects = [
  {
    title: 'First Project',
    picture: 'images/works/tonic/Cover1.svg',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley',
    tech: ['html', 'css', 'javascript'],
    live: '<a href="https://www.link_to_live_version.com"> See Live <img src="images/live.svg" alt="">',
    source: '<a href="https://www.link_to_source_version.com">See Source <img src="images/Vector.svg" alt=""></a>',
  },
  {
    title: 'Second Project',
    picture: 'images/works/multi_post_story/Cover.svg',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley',
    tech: ['html', 'css', 'javascript'],
    live: '<a href="https://www.link_to_live_version.com">See Live <img src="images/live.svg" alt=""></a>',
    source: '<a href="https://www.link_to_source_version.com">See Source <img src="images/Vector.svg" alt=""></a>',
  },
  {
    title: 'Third Project',
    picture: 'images/works/tonic/Cover1.svg',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley',
    tech: ['html', 'css', 'javascript'],
    live: '<a href="https://www.link_to_live_version.com">See Live <img src="images/live.svg" alt=""></a>',
    source: '<a href="https://www.link_to_source_version.com">See Source <img src="images/Vector.svg" alt=""></a>',
  },
];

const allProjects = document.querySelector('#project-section');

for (let i = 0; i < appProjects.length; i += 1) {
  const card = `<section id="card1-page" class="work-page-right">
  <div class="card1-image">
    <img id="project1-image" src="${appProjects[i].picture}" alt="Poster for tonic app" style="width: 100%;" />
  </div>
  <div class="card1-content">
      <h3 class="work1-title">${appProjects[i].title}</h3>
      <div class="clients">
        <h4>CANOPY</h4>
        <img class="img-clients" src="images/works/Counter.svg" alt="">
        <h4 style="color: #6b778c;">Back End Dev</h4>
        <img class="img-clients" src="images/works/Counter.svg" alt="">
        <h4 style="color: #6b778c">2015</h4>
      </div>
      <p class="project1-content">${appProjects[i].content}</p> 
      <div class="taggs">
        <button class="tag1">${appProjects[i].tech[0]}</button>
        <button class="tag2">${appProjects[i].tech[1]}</button>
        <button class="tag3">${appProjects[i].tech[2]}</button>
      </div>
    
      <button id="card${i}-btn" class="project-detail">See Project</button>
  </div>
</section>`;

  allProjects.innerHTML += card;
}

const popupDetail = document.querySelector('#card4-page');
popupDetail.innerHTML = `
     <div class = "close"><img src="images/Icon.svg" alt="icon for the popup widnow"></div>
      <h3 class="popup-title"></h3>
      <div class="detail-tech">
        <h4>CANOPY</h4>
        <img class="img-clients" src="images/works/Counter.svg" alt="">
        <h4 style="color: #6b778c">Back End Dev</h4>
        <img class="img-clients" src="images/works/Counter.svg" alt="">
        <h4 style="color: #6b778c">2015</h4>
      </div>
      <div class="card3-image">
       <img class="popup-image" src="" alt="Poster for Uber navigation" style="width: 100%;"/>
      </div>
       <div class="card3-content card-popup-content"> 
        <p class="highlights popup-text"></p> 
        <div class="popup-detail-buttons">
          <div class="popup-btn">
            <button class="tag1 pop-tag1">${appProjects[0].tech[0]}</button>
            <button class="tag2 pop-tag2">${appProjects[0].tech[1]}</button>
            <button class="tag3 pop-tag3">${appProjects[0].tech[2]}</button>
          </div>
          <div class="popup-button">
            <button class="project-detail-popup live-button"></button>
            <button class="project-detail-popup source-button"></button>
          </div>
        </div>  
      </div>`;

const popBg = document.querySelector('.popup-background');

const pop = document.querySelector('.popup');

const html = document.querySelector('html');

function showPopup() {
  popBg.classList.add('show');
  pop.classList.add('show');
  html.classList.add('scroll-stop');
}

const card1 = document.querySelector('#card0-btn');
if (card1) {
  card1.addEventListener('click', () => {
    showPopup();
    document.querySelector('.popup-title').innerHTML = appProjects[0].title;
    document.querySelector('.popup-image').src = appProjects[0].picture;
    document.querySelector('.popup-text').innerHTML = appProjects[0].content;
    document.querySelector('.live-button').innerHTML = appProjects[0].live;
    document.querySelector('.source-button').innerHTML = appProjects[0].source;
  });
}
const card2 = document.querySelector('#card1-btn');
if (card2) {
  card2.addEventListener('click', () => {
    showPopup();
    document.querySelector('.popup-title').innerHTML = appProjects[1].title;
    document.querySelector('.popup-image').src = appProjects[1].picture;
    document.querySelector('.popup-text').innerHTML = appProjects[1].content;
    document.querySelector('.live-button').innerHTML = appProjects[1].live;
    document.querySelector('.source-button').innerHTML = appProjects[1].source;
  });
}
const card3 = document.querySelector('#card2-btn');
if (card3) {
  card3.addEventListener('click', () => {
    showPopup();
    document.querySelector('.popup-title').innerHTML = appProjects[2].title;
    document.querySelector('.popup-image').src = appProjects[2].picture;
    document.querySelector('.popup-text').innerHTML = appProjects[2].content;
    document.querySelector('.live-button').innerHTML = appProjects[2].live;
    document.querySelector('.source-button').innerHTML = appProjects[2].source;
  });
}
const close = document.querySelector('.close');
close.addEventListener('click', () => {
  popBg.classList.remove('show');
  pop.classList.remove('show');
  html.classList.remove('scroll-stop');
});

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
  (menuItem) => {
    menuItem.addEventListener('click', toggleMenu);
  },
);

const email = document.querySelector('#email');
const form = document.querySelector('.my-form');
const error = document.querySelector('#error');
const pattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

form.addEventListener('submit', (event) => {
  const isValid = pattern.test(email.value);
  if (!isValid) {
    error.textContent = 'Please enter the email in lowercase.';
    error.style.color = 'red';
    event.preventDefault();
  } else {
    error.textContent = '';
  }
});