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
});
/******/ })()
;
//# sourceMappingURL=script.js.map