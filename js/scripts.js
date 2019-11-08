



$(document).ready(function() {
  var numTopping = 2;
  $("#addTopping").click(function(){
      $("#pizzaToppings" + numTopping).show();
      numTopping++;
      if (numTopping >= 4) {
        $("#addTopping").hide();
      }
  });
  $("form#input-string").submit(function(event) {
    event.preventDefault();
    var topping
    $(".results").hide().append(result).fadeIn(350);
  });
  $("button#clear").click(function(event) {
    event.preventDefault();
    $(".results").html("");
  });
});
