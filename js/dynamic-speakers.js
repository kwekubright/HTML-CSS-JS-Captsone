const speakers = {
  0: {
    name: 'Ariel Camus',
    photo: 'images/speakers/ariel.png',
    title: 'Founder, Microverse',
    profile: 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye.',
  },
  1: {
    name: 'Sirri Celles',
    photo: 'images/speakers/sirrie.png',
    title: 'Micronaut, Microverse',
    profile: 'Sirri is a software engineer and entrepreneur. She is currently taking the Microverse program and is working on building a new product called Sirri Social.',
  },
  2: {
    name: 'Kevin Mwangi',
    photo: 'images/speakers/kevin.png',
    title: 'Software Engineer, Microsoft',
    profile: 'Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Javascript, HTML/CSS, Ruby, PHP, Java and C#.',
  },
  3: {
    name: 'Elon Musk',
    photo: 'images/speakers/elon.png',
    title: 'CEO, Tesla',
    profile: 'Entrepreneur Elon Musk has achieved global fame as the chief executive of electric autos maker Tesla Inc. (TSLA), the CEO and lead designer of his space company SpaceX.',
  },
  4: {
    name: 'Kweku Bright',
    photo: 'images/speakers/kwekubright.png',
    title: 'Micronaut, Microverse',
    profile: 'Bright is a software engineer and entrepreneur. He is currently taking the Microverse program and is working on building a new product called Bright Social.',
  },
  5: {
    name: 'Rejoice Evans',
    photo: 'images/speakers/rejoice.png',
    title: 'Micronuat, Microverse',
    profile: 'Rejoice is a software engineer and entrepreneur. She is currently taking the Microverse program and is working on building a new product called Rejoice Social.',
  },
};

function displaySpeakers() {
  const speakersDiv = document.getElementById('hold-speakers');
  const speakerKeys = Object.keys(speakers);
  let buildHTML = '';
  for (let i = 0; i < speakerKeys.length; i += 1) {
    const speaker = speakers[speakerKeys[i]];
    buildHTML
      += `
      <div class="col-12 col-lg-6 col-xl-6 mb-lg-5 mb-xl-5 ${(i > 1) ? 'm-hide' : ''}">
        <div class="speakers-slider ">
          <div class="speaker-item d-flex">
            <div class="speaker-img me-3">
              <img class="" src="${speaker.photo}" alt="Speaker">
            </div>
            <div class="speaker-info">
              <h3 class="speaker-name fw-bold">
                <a href="#" class="text-decoration-none">
                  <span>${speaker.name}</span>
                </a>
              </h3>
              <p class="speaker-designation fst-italic orange-text">
                <span>${speaker.title}</span>
              </p>
              <p class="speaker-description">${speaker.profile}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  speakersDiv.innerHTML = buildHTML;
}

window.onload = () => {
  displaySpeakers();
};

// get the show speakers button
const showSpeakers = document.querySelector('.show-more-speakers');
// add click event to the show speakers button
showSpeakers.addEventListener('click', (e) => {
  e.preventDefault();
  showSpeakers.remove();
  // get elements with m-hide class
  const hide = document.querySelectorAll('.m-hide');
  // loop through the elements with m-hide class
  for (let i = 0; i < hide.length; i += 1) {
    // remove the class m-hide
    hide[i].classList.remove('m-hide');
  }
}, false);