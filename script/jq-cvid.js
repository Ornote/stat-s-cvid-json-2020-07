$(document).ready(function () {
  $(".my-map-search").click(function () {
    $(".search--pays").addClass("is-active");
  });
  $('.search-form').delay(4000)
    .queue(function () {
      $(this).addClass("show-form");
    });
  $('.PlaceHolder').delay(6000)
    .queue(function () {
      $(this).addClass("PlaceHolder-form");
    });
})
