// $(".hp-matches .menuTabs .menuTab").on("click", function (event) {
//   var id = $(this).attr("data-id");
//   $(".hp-matches .menuTab__content").removeClass("tab-active").hide();
//   $(".hp-matches .menuTabs .menuTab").removeClass("active");
//   $(this).addClass("active");
//   $("#" + id)
//     .addClass("tab-active")
//     .fadeIn();
//   return false;
// });



$(function () {
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab("show");

  $("body").on("click", ".nav-tabs a", function (e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    $(this).tab("show");
  });
}),