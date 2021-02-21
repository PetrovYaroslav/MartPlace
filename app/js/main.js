$(function(){

  $('.features__slider-wrapper').slick({
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"> <img src="images/features/arrow-left.svg" alt="prev"> </button>',
    nextArrow: '<button class="slick-arrow slick-next"> <img src="images/features/arrow-right.svg" alt="next"> </button>',

  });




  $(".features__item-star").rateYo({
    rating: 4.5,
    starWidth: "17px",
    readOnly: true
  });

});