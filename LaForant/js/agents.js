$(function () {
  var inWrap = $(".inner-wrapper");

  $(".prev").on("click", function () {
    inWrap.animate({ left: "0%" }, 300, function () {
      inWrap.css("left", "-100%");

      $(".slide").first().before($(".slide").last());
    });
  });

  $(".next").on("click", function () {
    inWrap.animate({ left: "-200%" }, 300, function () {
      inWrap.css("left", "-100%");

      $(".slide").last().after($(".slide").first());
    });
  });

  $(".agent-1").on("click", function () {
    $(".agent-romana").show();
    $(".agent-kalindra").hide();
    $(".agent-drake").hide();
    $(".agent-dark").hide();
    $(".agent-keitha").hide();
  });

  $(".agent-2").on("click", function () {
    $(".agent-romana").hide();
    $(".agent-kalindra").show();
    $(".agent-drake").hide();
    $(".agent-dark").hide();
    $(".agent-keitha").hide();
  });

  $(".agent-3").on("click", function () {
    $(".agent-romana").hide();
    $(".agent-kalindra").hide();
    $(".agent-drake").show();
    $(".agent-dark").hide();
    $(".agent-keitha").hide();
  });

  $(".agent-4").on("click", function () {
    $(".agent-romana").hide();
    $(".agent-kalindra").hide();
    $(".agent-drake").hide();
    $(".agent-dark").show();
    $(".agent-keitha").hide();
  });

  $(".agent-5").on("click", function () {
    $(".agent-romana").hide();
    $(".agent-kalindra").hide();
    $(".agent-drake").hide();
    $(".agent-dark").hide();
    $(".agent-keitha").show();
  });
});
