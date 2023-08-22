let swiper = Swiper;
let init = false;

function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 320px)');
  let tabletAndDesktop = window.matchMedia('(min-width: 321px) and (max-width: 1120px)');

  // Enable (for mobile)
  if(mobile.matches) {
      if (!init) {
          init = true;
          swiper = new Swiper('.item-slider', {
              slidesPerView: 'auto',
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
          });
      }

  }

  // Disable (for !mobile)
  else if(tabletAndDesktop.matches) {
      swiper.destroy();
      init = false;
  }
}

/* On Load
**************************************************************/
window.addEventListener('load', () => {
    swiperMode();
  });

/* On Resize
**************************************************************/
window.addEventListener('resize', () => {
    swiperMode();
  });




/* BUTTON */

let buttonChange = document.querySelector('.button-change');
let items = document.querySelectorAll('.item');
let buttonText = document.querySelector('.button__text');
let showButton = true;


buttonChange.addEventListener('click', function () {
  if (showButton) {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('hidden');
    }
    buttonText.textContent = 'Скрыть';
    showButton = false;
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.add('hidden');
    }
    buttonText.textContent = 'Показать все';
    showButton = true;
  }
});