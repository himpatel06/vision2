$(document).ready(function () {
  var b = document.querySelector(".spin-result-wrapper");
  var c = document.querySelector(".wheel-img");
  $(".active").on("click", function (d) {
    $(this).off(d);
    if (c.classList.contains("rotated")) {
      b.style.display = "block";
    } else {
      c.classList.add("super-rotation");
      setTimeout(function () {
        b.style.display = "block";
      }, 8000);
      setTimeout(function () {
        $(".spin-wrapper").slideUp();
        $(".order_block").slideDown();
      }, 10000);
      c.classList.add("rotated");
    }
  });
  var a = document.querySelector(".close-popup");
  $(".close-popup, .pop-up-button").click(function (f) {
    f.preventDefault();
    $(".spin-result-wrapper").fadeOut();
    var d = $(".spin-wrapper").offset().top;
    $("body,html").animate({ scrollTop: d }, 800);
  });
  $(document).keydown(function (d) {
    if (d.keyCode === 27) {
      $(".overlay2, .spin-result-wrapper").fadeOut();
    }
  });
  $(".overlay2").click(function () {
    $(".overlay2, .spin-result-wrapper").fadeOut();
  });
});
