//const sliderBtnLeft = document.querySelector('.btn-left');
const trendSliderBtnRight = document.querySelector('.trend-btn-right');
const trendSlider = document.querySelector('.trending-slider');

var sliderIndex = 0;
const getCardCount = (deviceWidth) => {
    if (deviceWidth < 600) return 1;
    if (deviceWidth > 600 && deviceWidth < 900) return 2;
    return 4;
}
const deviceWidth = document.body.clientWidth;
cardCount = getCardCount(deviceWidth);
const moveSlider = (type) => {
    const sliderWidth = trendSlider.clientWidth + trendSlider.style.marginLeft + trendSlider.style.marginRight;
    const imageLength = trendSlider.children.length;
    sliderIndex++;
    if (sliderIndex >= Math.ceil(imageLength / cardCount)) {
        console.log("Reset Slider");
        sliderIndex = 0;
    }
    var moveTo = (sliderWidth * sliderIndex);
    trendSlider.scrollTo(moveTo ? moveTo + 10 : moveTo, 0);
}

//if (trendSlider.children.length > cardCount) {
   setInterval(moveSlider, 4000);
//}

trendSliderBtnRight?.addEventListener('click', moveSlider);
