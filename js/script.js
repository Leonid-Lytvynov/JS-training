/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
document.addEventListener('DOMContentLoaded', () => {
  // Tabs
  const tabInstall = () => {
    const tabContent = document.querySelectorAll('.tabcontent'),
      tabWrapper = document.querySelector('.tabheader__items');
    tabBtn = document.querySelectorAll('.tabheader__item');
    function hideTabContent() {
      tabContent.forEach(item => {
        item.classList.remove('show');
      });
      tabBtn.forEach(item => {
        item.classList.remove('tabheader__item_active');
      });
    }
    function showTabContent(i = 0) {
      tabContent[i].classList.add('show');
      tabBtn[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();
    tabWrapper.addEventListener('click', e => {
      if (e.target && e.target.classList.contains('tabheader__item')) {
        tabBtn.forEach((item, i) => {
          if (e.target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
      ;
    });
  };
  document.querySelector('.tabcontainer') ? tabInstall() : null;

  // Timer
  const timerInstall = () => {
    const deadline = '2024-02-10';
    function getTimeRemaining(endtime) {
      let days, hours, minutes, seconds;
      const t = Date.parse(endtime) - Date.parse(new Date());
      if (t <= 0) {
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
      } else {
        days = Math.floor(t / (1000 * 60 * 60 * 24)), hours = Math.floor(t / (1000 * 60 * 60) % 24), minutes = Math.floor(t / 1000 / 60 % 60), seconds = Math.floor(t / 1000 % 60);
      }
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    ;
    function getZero(num) {
      if (num >= 0 && num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    }
    ;
    function setClock(selector, endtime) {
      const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
      updateClock();
      function updateClock() {
        const t = getTimeRemaining(endtime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      }
      ;
    }
    ;
    setClock('.timer', deadline);
  };
  document.querySelector('.timer') ? timerInstall() : null;

  // Modal

  const modalInstall = () => {
    const modalBtn = document.querySelectorAll('[data-modal]'),
      modalWindow = document.querySelector('.modal'),
      closeModalBtn = document.querySelector('[data-close]');
    function onCloseModal() {
      modalWindow.classList.remove('active');
      document.body.style.overflow = '';
    }
    function onOpenModal() {
      modalWindow.classList.add('active');
      document.body.style.overflow = 'hidden';
      // clearInterval(modalTimerId);
    }
    modalBtn.forEach(item => {
      item.addEventListener('click', onOpenModal);
    });
    closeModalBtn.addEventListener('click', () => {
      onCloseModal();
    });
    modalWindow.addEventListener('click', e => {
      if (e.target == modalWindow) {
        onCloseModal();
      }
    });
    window.addEventListener('keydown', e => {
      if (e.key == 'Escape' && modalWindow.classList.contains('active')) {
        onCloseModal();
      }
      ;
    });

    // const modalTimerId = setTimeout(onOpenModal, 5000);

    window.addEventListener('scroll', showModalByScroll);
    function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
        onOpenModal();
        window.removeEventListener('scroll', showModalByScroll);
      }
      ;
    }
    ;
  };
  document.querySelector('.modal') ? modalInstall() : null;
});
/******/ })()
;
//# sourceMappingURL=script.js.map