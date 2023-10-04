(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    mainMob: document.querySelector('.main-mobile'),
    programsMob: document.querySelector('.programs-mobile'),
    aboutMob: document.querySelector('.about-mobile'),
    questionsMob: document.querySelector('.questions-mobile'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);
  refs.mainMob.addEventListener('click', check);
  refs.programsMob.addEventListener('click', check);
  refs.aboutMob.addEventListener('click', check);
  refs.questionsMob.addEventListener('click', check);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
  function check(){
    refs.menu.classList.remove('is-open');
    
  }

})();


