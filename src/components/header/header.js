headerNavOpenerClick();
function headerNavOpenerClick() {
  const bodyEl = document.querySelector("body");
  const headerNavOpener = document.querySelector(".js-header__opener");
  if (!bodyEl || !headerNavOpener) {
    return;
  }
  headerNavOpener.addEventListener("click", function () {
    if (!this.classList.contains("is-open")) {
      bodyEl.classList.add("is-nav-open");
      this.classList.add("is-open");
    } else {
      bodyEl.classList.remove("is-nav-open");
      this.classList.remove("is-open");
    }
  });
}

$(document).ready(function () {
  var hash = window.location.hash;

  if (hash !== "") {
    var element = $('a[name="' + hash.substring(1) + '"]');
    if (element.length) {
      $("html, body").animate(
        {
          scrollTop: element.offset().top,
        },
        "slow"
      );
    }
  }

  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();
    var header = $(".header");

    if (scrollPosition > 180) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });
});
