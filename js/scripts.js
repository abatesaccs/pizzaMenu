function Pizza(size, ...args){
  this.size = size;
  this.toppings = args;
  var basePrice = 11.00;
}


var myPizza = new Pizza("small", 1, 2, 3);
console.log(myPizza.toppings);

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
    var size = $("#pizzaSize").val();
    var topping1 = $("#pizzaToppings").val();
    var topping2 = $("#pizzaToppings2").val();
    var topping3 = $("#pizzaToppings3").val();
    var myPizza = new Pizza(size, topping1, topping2, topping3);
    console.log(myPizza);
    $(".results").hide().append(result).fadeIn(350);
  });
  $("button#clear").click(function(event) {
    event.preventDefault();
    $(".results").html("");
  });
});
