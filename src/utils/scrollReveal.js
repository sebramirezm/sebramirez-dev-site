import ScrollReveal from 'scrollreveal';

const scrollReveal = ScrollReveal();

export const initScrollReveal = () => {
  scrollReveal.reveal('.header a, .profile-photo, .about-content, .education', {
    origin: 'left',
    distance: '100px',
    duration: 2000,
    delay: 200,
  });

  scrollReveal.reveal('.header ul, .profile-text, .about-skills, .internship', {
    origin: 'right',
    distance: '100px',
    duration: 2000,
    delay: 200,
  });

  scrollReveal.reveal('.education-title', {
    origin: 'top',
    distance: '100px',
    duration: 2000,
    delay: 200,
  });

  scrollReveal.reveal('.educations', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    delay: 200,
  });
};