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

  //  Class for card
  const menuRenderInstall = () => {
    class MenuCard {
      constructor(src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 36;
        this.changeToUAH();
      }
      changeToUAH() {
        this.price = +this.price * this.transfer;
      }
      render() {
        const element = document.createElement('div');
        if (this.classes.length === 0) {
          element.classList.add('menu__item');
        } else {
          this.classes.forEach(className => element.classList.add(className));
        }
        ;
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
               <h3 class="menu__item-subtitle">${this.title}</h3>
                  <div class="menu__item-descr">${this.descr} </div>
                  <div class="menu__item-divider"></div>
            <div class="menu__item-price">
               <div class="menu__item-cost">Цена:</div>
               <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
         `;
        this.parent.append(element);
      }
    }
    ;
    new MenuCard("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежиховощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, '.menu .container', 'menu__item').render();
    new MenuCard("img/tabs/elite.jpg", "elite", 'Меню "Премиум"', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 15, '.menu .container', 'menu__item').render();
    new MenuCard("img/tabs/post.jpg", "post", 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие  продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 12, '.menu .container', 'menu__item').render();
  };
  document.querySelector('.menu') ? menuRenderInstall() : null;
});
/******/ })()
;
//# sourceMappingURL=script.js.map