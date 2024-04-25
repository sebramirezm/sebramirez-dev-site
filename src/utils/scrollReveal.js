import ScrollReveal from 'scrollreveal';

const scrollReveal = ScrollReveal();

export const initScrollReveal = () => {
  scrollReveal.reveal('.profile-photo', {
    origin: 'left',
    distance: '100px',
    duration: 2000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
  });

  scrollReveal.reveal('.profile-text', {
    origin: 'right',
    distance: '100px',
    duration: 2000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
  });

  scrollReveal.reveal('.about-content', {
    origin: 'left',
    distance: '100px',
    duration: 2000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
  });

  scrollReveal.reveal('.about-skills', {
    origin: 'right',
    distance: '100px',
    duration: 2000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
  });

  scrollReveal.reveal('.education', {
    origin: 'left',
    distance: '100px',
    duration: 2000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
  });

  scrollReveal.reveal('.education-title', {
    origin: 'top',
    distance: '100px',
    duration: 2000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
  });

  scrollReveal.reveal('.educations', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
  });

  scrollReveal.reveal('.experience-title', {
    origin: 'top',
    distance: '100px',
    duration: 2000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
  });

  scrollReveal.reveal('.experience', {
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
  });

  scrollReveal.reveal('.internship', {
    origin: 'right',
    distance: '100px',
    duration: 2000,
    delay: 200,
    reset: true,
    opacity: 0,
    easing: 'ease-in-out',
  });
};