// $('.slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
//   });

//   $('.one-time').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 4,
//     adaptiveHeight: true
//   });
  // const slider = document.querySelector('.slider');
  // const images = document.querySelectorAll('.slider img');

  // let currentIndex = 0;

  // setInterval(() => {
  //   images[currentIndex].classList.remove('active');
  //   currentIndex = (currentIndex + 1) % images.length;
  //   images[currentIndex].classList.add('active');
  // }, 3000);
  $(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed:300,
      dots: false,
      arrows: false,
      fade: false,
    });
  });