
(function () {

  var menuAction = document.querySelector('.button');
  menuAction.addEventListener('click', function () {
    toggleClass(menuAction.parentNode, 'menu-show');
  });

  function toggleClass(element, className) {
    var currentClasses = element.className;

    if (currentClasses.indexOf(className) >= 0) {
      element.className = currentClasses.replace(className, '').trim();
    } else {
      element.className += ' ' + className;
    }
  }


})();
