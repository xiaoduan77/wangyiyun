$(function () {
  $(".user-name").click(function () {
    //点击切换隐藏和显示
    $(".user-msg1").toggle();
  });
  $(".right-content .nav li a").click(function () {
    //排他思想
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .children()
      .removeClass("active");
    console.log($(this).addClass("active").parent().siblings().children());
  });
  
});
