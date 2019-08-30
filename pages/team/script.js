/*JS way for setting height: 100vh to slides' height*/
const $slides = $(".owl-carousel .owl-slide");
$slides.css("height", $(window).height());
$(window).resize(() => {
 $slides.css("height", $(window).height());
});

$(".owl-carousel").on("initialized.owl.carousel", () => {
  setTimeout(() => {
    $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    $("section").show();
  }, 200);
});

const $owlCarousel = $(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  navText: [
  ''] });


$owlCarousel.on("changed.owl.carousel", e => {
  $(".owl-slide-animated").removeClass("is-transitioned");

  const $currentOwlItem = $(".owl-item").eq(e.item.index);
  $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

  const $target = $currentOwlItem.find(".owl-slide-text");
  doDotsCalculations($target);
});

$owlCarousel.on("resize.owl.carousel", () => {
  setTimeout(() => {
    setOwlDotsPosition();
  }, 50);
});


$owlCarousel.trigger("refresh.owl.carousel");

setOwlDotsPosition();

function setOwlDotsPosition() {
  const $target = $(".owl-item.active .owl-slide-text");
  doDotsCalculations($target);
}

function doDotsCalculations(el) {
  const height = el.height();
  const { top, left } = el.position();
  const res = height + top + 200;

  $(".owl-carousel .owl-dots").css({
    top: `${res}px`,
    left: `${left}px` });

}
