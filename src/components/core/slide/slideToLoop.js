export default function (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.activeIndex <= swiper.slides.length / 2 && newIndex >= swiper.slides.length - 1 - 2 * swiper.loopedSlides - swiper.params.slidesPerView) {
      newIndex = newIndex - swiper.slides.length + 1 + 3 * swiper.loopedSlides;
      swiper.once('transitionEnd', () => {
        swiper.loopFix();
      });
    } else if (swiper.activeIndex >= swiper.slides.length / 2 && newIndex === 0) {
      newIndex = newIndex + swiper.slides.length - swiper.loopedSlides;
      swiper.once('transitionEnd', () => {
        swiper.loopFix();
      });
    } else {
      newIndex += swiper.loopedSlides;
    }
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
