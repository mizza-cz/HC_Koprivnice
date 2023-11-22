$(".infoBoard-section .menuTabs .menuTab").on("click", function (event) {
  var id = $(this).attr("data-id");
  $(".infoBoard-section .menuTab__content").removeClass("tab-active").hide();
  $(".infoBoard-section .menuTabs .menuTab").removeClass("active");
  $(this).addClass("active");
  $("#" + id)
    .addClass("tab-active")
    .fadeIn();
  return false;
});
