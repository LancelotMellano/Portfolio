







/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Texte annié */
      const dynamicText = document.querySelector("h1 span");
      const words = [" Elève en R&T ", " Militaire réserviste"];

      // Variables to track the position and deletion status of the word
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        dynamicText.textContent = currentChar;
        dynamicText.classList.add("stop-blinking");

        if (!isDeleting && charIndex < currentWord.length) {
          // If condition is true, type the next character
          charIndex++;
          setTimeout(typeEffect, 200);
        } else if (isDeleting && charIndex > 0) {
          // If condition is true, remove the previous character
          charIndex--;
          setTimeout(typeEffect, 100);
        } else {
          // If word is deleted then switch to the next word
          isDeleting = !isDeleting;
          dynamicText.classList.remove("stop-blinking");
          wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
          setTimeout(typeEffect, 1200);
        }
      };

      typeEffect();

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});


/* modal portfolio */

const modalContent = document.querySelector('.services__modal-content');
const modalServices = modalContent.querySelectorAll('.services__modal-service');
const carouselIndicators = document.querySelector('.carousel-indicators');

// Création des indicateurs en fonction du nombre de services
modalServices.forEach((service, index) => {
  let indicator = document.createElement('span');
  indicator.classList.add('indicator');
  indicator.dataset.index = index;
  indicator.addEventListener('click', () => {
    setActiveService(index);
  });
  carouselIndicators.appendChild(indicator);
});

let activeServiceIndex = 0;

// Fonction pour mettre à jour les indicateurs et le service affiché
function setActiveService(newIndex) {
  // Mettre à jour les indicateurs
  document.querySelectorAll('.carousel-indicators .indicator').forEach((indicator, index) => {
    if (index === newIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });

  // Mettre à jour le service affiché
  activeServiceIndex = newIndex;
  updateModalDisplay();
}

function updateModalDisplay() {
  // Masquer tous les services et afficher le service actif
  modalServices.forEach((service, index) => {
    service.style.display = (index === activeServiceIndex) ? 'flex' : 'none';
  });
}

// Fonction pour afficher le service suivant/précédent avec mise à jour des indicateurs
function showNextService() {
  setActiveService((activeServiceIndex + 1) % modalServices.length);
}

function showPrevService() {
  setActiveService((activeServiceIndex - 1 + modalServices.length) % modalServices.length);
}

// Sélectionner les boutons et attacher les événements
document.querySelector('.modal-prev').addEventListener('click', showPrevService);
document.querySelector('.modal-next').addEventListener('click', showNextService);

// Initialisation pour afficher le premier service et mettre à jour les indicateurs
setActiveService(activeServiceIndex);





