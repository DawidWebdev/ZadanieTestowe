//Images
const images = document.querySelectorAll('.slide-image');

window.addEventListener('load', ()=>{
    fetch('https://quantoo.pl/jobs/api/swiper/list.json').then(
      response => response.json()
    ).then(
      data => {
        console.log(data.items);
        images.forEach(image => {
            image.src = data.items[0].img;
        });
      }
    )
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });