const prev  = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.about_carousel-track');

let carouselWidth = document.querySelector('.about_carousel').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.about_carousel').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
  
  if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
})