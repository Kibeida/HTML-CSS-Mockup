//GreenVibe WOW Aimation JavaScript
new WOW().init();

//GreenVibe Toggle JavaScript
document.querySelectorAll('.navbar-toggler').forEach(GreenVibeToggle => {
  GreenVibeToggle.addEventListener('click', ({target}) => {
    target.closest('body').classList.toggle('overflow');
    target.closest('.navbar-collapse').classList.toggle();
  });
});

//GreenVibe On Windowload Hide Loader JavaScript
window.onload=function() {
 var GreenVibePreloader = document.getElementsByClassName('GreenVibe-preloader')[0];
  setTimeout(function() {
    GreenVibePreloader.style.opacity=0;
    GreenVibePreloader.style.zIndex=-1;
  },500);
}

//GreenVibe On Window Resize Add And Remove class JavaScript
if (document.documentElement.clientWidth < 768) {
  let parentElement = document.querySelector('.navbar-nav');
  let theFirstChild = parentElement.firstChild;
  let newElement = document.querySelector('.user-login');
  parentElement.insertBefore(newElement, theFirstChild);
  sibblingOf('.footer-menu');
  function sibblingOf(fabrxLike,targetChild) {
    var fabrxLike = document.querySelectorAll(fabrxLike);
    for(var i=0; i< fabrxLike.length; i++) {
      fabrxLike[i].addEventListener('click', function(e) {
        var current = this;
        for (var i = 0; i < fabrxLike.length; i++) {
          if (current != fabrxLike[i]) {
            fabrxLike[i].classList.remove('block-menu');
          } else if (current.classList.contains('block-menu') === true) {
            current.classList.remove('block-menu');
          } else {
            current.classList.add('block-menu')
          }
        }
        e.preventDefault();
      });
    }
  };
}

//GreenVibe Back To Top JavaScript
const scrollToTopButton = document.getElementById('GreenVibe-back-top');
scrollToTopButton.style.display = 'none';
const scrollFunc = () => {
  let y = window.scrollY;
  if(y > 150) {
      scrollToTopButton.style.display = 'block';
    }
    else {
      scrollToTopButton.style.display = 'none';
    }
};
window.addEventListener("scroll", scrollFunc);
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
};