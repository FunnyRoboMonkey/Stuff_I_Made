
$(document).ready(function() {
  var caterpillar = $("#caterpillar");
  var cTail = $("#tail");
  var cHead = $("#head");

  function animation() {
    $("#animate").html("Watch it go!!!");

    for (var i = 1; i < 20; i++) {
      cTail
        .animate({ "width": "100px" }, "fast")
        .animate({"width" : "50px", "margin-left" : 50*i + "px"}, "fast");
    }

    cTail
      .animate({ "width": "100px" }, "slow")
      .animate({"width" : "50px", "margin-left" : "1000 px"}, "slow", function(){
        cTail.css({"width" : "50px", "margin-left" : "0 px"});
        $("#animate").html("Animate (1)");
      });
  }

  $("#animate").click(function() {
    animation();
  })



});