const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

function nextSlide(slide) {
  const sliderImg = document.querySelectorAll('.slider-child-con');

  for (let i = 0; i < sliderImg.length; i++) {
    sliderImg[i].classList.add('sli-none');
  }
  sliderImg[slide].classList.remove('sli-none');
}
var slide = 0;
//   nextSlide(slide);
leftBtn?.addEventListener('click', function () {
  const sliderImg = document.querySelectorAll('.slider-child-con');
  slide--;
  if (slide < 0) {
    slide = sliderImg.length - 1;
  }
  nextSlide(slide);
});
rightBtn?.addEventListener('click', function () {
  const sliderImg = document.querySelectorAll('.slider-child-con');

  slide++;
  if (slide > sliderImg.length - 1) {
    slide = 0;
  }
  nextSlide(slide);
});

/**
 * property details slider
 */
const sliderBtnLeft = document.querySelector('.btn-left');
const sliderBtnRight = document.querySelector('.btn-right');
const imageSlider = document.querySelector('.image-slider');
const sliderWidth = imageSlider.clientWidth + imageSlider.style.marginLeft + imageSlider.style.marginRight;
const imageLength = imageSlider.children.length;

var sliderIndex = 0;
sliderBtnLeft?.addEventListener('click', function () {
  sliderIndex--;
  if (sliderIndex > 0) {
    sliderIndex = Math.ceil(imageLength / 3) - 1;
  }
  imageSlider.scrollTo(-sliderWidth * sliderIndex, 0);
});

sliderBtnRight?.addEventListener('click', function () {
  sliderIndex++;
  if (sliderIndex >= Math.ceil(imageLength / 3)) {
    sliderIndex = 0;
  }
  imageSlider.scrollTo(sliderWidth * sliderIndex, 0);
});