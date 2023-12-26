$(document).ready(function () {
  $(".flag-dropdown").click(function () {
    $(".flag-list").toggleClass("hover-flag-list");
  });
  $(".app_dropdown").click(function () {
    $(".App-list").toggleClass("hover-app-list");
  });
  $(".avtar").click(function () {
    $(".f_drop").toggleClass("hover-f_drop");
  });

  // js for slider menu
  $(".fa-bars").click(function () {
    $("aside").toggleClass("ms-60");
    $("header").toggleClass("ml-60");
    $(".body-panel").toggleClass("ml-60");
    $(".fa-bars").toggleClass(".fa-bars fa-arrow-right");
    // $(".img1").toggleClass("d_none");
    // $(".img2").toggleClass("d_block");
    var image_1 = $("#home-btn");
    var img1_src = "assets/images/logo-light.png";
    var img2_src = "assets/images/logo-sm.png";
    if (image_1.attr("src") == img1_src) {
      image_1.attr("src", img2_src);
    } else {
      image_1.attr("src", img1_src);
    }
    $(".");
  });
  // js for aside inner menu
  $(".accordion").click(function () {
    $(this).find("ul").slideToggle();
    $(this)
      .find("i.arrow")
      .toggleClass("ri-arrow-down-s-line ri-arrow-right-s-line ");
  });

  //js for top button
  $(window).scroll(function () {
    if (scrollY > 100) {
      $(".top-btn").fadeIn(1000);
    } else {
      $(".top-btn").fadeOut(1000);
    }
  });

  // seeting
  $(".setting-btn").click(function () {
    $(".j_123").toggleClass("hover-j_123");
  });

  // submit
  $(".bb").click(function () {
    alert("successfully submited");
  });

  // dark mode
  $(".moon").on("click", function () {
    $("body").toggleClass("moon");
    $(".fa-regular fa-moon").toggleClass("ri-sun-fill");
    // $("aside").toggleClass("dark");
    // if ($("body").hasClass("moon")) {
    //   $(":root").css("--white", "#292e32");
    // } else {
    //   $(":root").css("--white", "#fff");
    // }
  });
});
