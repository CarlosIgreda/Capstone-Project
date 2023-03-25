const $cards = document.querySelector('.cards');
const $template = document.querySelector('.template-card').content;
const $fragment = document.createDocumentFragment();

const cardsContent = [
  {
    img: './images/mobile/yochai.svg',
    name: 'Yochai Benkler',
    currentPosition: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    img: './images/mobile/sohyeong.svg',
    name: 'SohYeong Noh',
    currentPosition: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration among science technology',
  },
  {
    img: './images/mobile/lila.svg',
    name: 'Lila tretikov',
    currentPosition: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia.',
  },
  {
    img: './images/mobile/kilnam.svg',
    name: 'Kilnam Chon',
    currentPosition: 'Executive Director of Asia Foundation',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons.',
  },
  {
    img: './images/mobile/julia.svg',
    name: 'Julia Leda',
    currentPosition: 'President of Young Pirates of Europe',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern.',
  },
  {
    img: './images/mobile/ryan.svg',
    name: 'Ryan Merkley',
    currentPosition: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

for (let i = 0; i < cardsContent.length; i += 1) {
  $template.querySelector('img').setAttribute('src', cardsContent[i].img);
  $template.querySelector('img').setAttribute('alt', cardsContent[i].name);
  $template.querySelector('h3').textContent = cardsContent[i].name;
  $template.querySelector('h4').textContent = cardsContent[i].currentPosition;
  $template.querySelector('p').textContent = cardsContent[i].description;
  $template.querySelectorAll('div')[i] = $template;

  const $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
}

$cards.appendChild($fragment);

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const $container = document.querySelector('.mobileMenuContainer');
const $icons = document.querySelectorAll('.icon-element');
const $navigationLinks = document.querySelectorAll('.js');
const $sections = document.querySelectorAll('.jsSection');
const $aboutOp = document.querySelector('.jsAbout');
const $aboutCont = document.querySelector('.aboutContainer');
const $aboutDesktop = document.querySelectorAll('.anav23')[0];
const $programDesktop = document.querySelectorAll('.anav23')[1];
const $footer = document.querySelector('.footer');
const $rights = document.querySelector('.rights');
const $partner = document.querySelector('.s4');
const $trigger = document.querySelector('.trigger');

function toggleActivated() {
  $container.classList.toggle('activated');
}
function toggleActivated2() {
  $container.classList.remove('activated');
  $aboutCont.classList.remove('activated');
  $footer.classList.remove('activated');
  $rights.classList.remove('activated');
  $trigger.classList.remove('activated');
  $sections.forEach((e) => {
    e.classList.remove('activated');
  });
}

$icons.forEach((e) => {
  e.addEventListener('click', toggleActivated);
});

$navigationLinks.forEach((e) => {
  e.addEventListener('click', toggleActivated2);
});

function aboutInteraction() {
  $container.classList.remove('activated');
  $sections.forEach((e) => {
    e.classList.add('activated');
  });
  $aboutCont.classList.add('activated');
  $footer.classList.add('activated');
  $rights.classList.add('activated');
  $partner.classList.add('activated');
  $trigger.classList.add('activated');
}

function aboutInteractionDesktop() {
  $sections.forEach((e) => {
    e.classList.add('activated');
  });
  $aboutCont.classList.add('activated');
  $footer.classList.add('activated');
  $rights.classList.add('activated');
  $partner.classList.add('activated');
  $trigger.classList.add('activated');
}

function programInteractionDesktop() {
  $sections.forEach((e) => {
    e.classList.remove('activated');
  });
  $aboutCont.classList.remove('activated');
}

$aboutOp.addEventListener('click', aboutInteraction);
$aboutDesktop.addEventListener('click', aboutInteractionDesktop);
$programDesktop.addEventListener('click', programInteractionDesktop);