const sliderImages = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
let current = 0;

// clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

// show previous image (slide left)
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// show next image
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

function checkIfZeroLeft() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
}

function checkIfZeroRight() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
}

// EVENT LISTENERS

// LEFT
arrowLeft.addEventListener('click', checkIfZeroLeft);

// RIGHT
arrowRight.addEventListener('click', checkIfZeroRight);
