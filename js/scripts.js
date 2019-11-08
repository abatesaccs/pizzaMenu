function Pizza(size, ...args){
  var sizeArr = size.split(' ');
  this.size = sizeArr;
  this.toppings = args;
}

Pizza.prototype.getPrice= function(){
  var sizePrices = [8.00, 11.00, 15.00, 18.00];
  var finalPrice = sizePrices[this.size[0]];
  var args = this.toppings;
  console.log(args);
  for (var i = 0; i < args.length; i++) {
    if (this.toppings[i] != "false"){
      finalPrice += 2.00;
      console.log(finalPrice);
    }
  }
  return finalPrice;
}

Pizza.prototype.getResult = function(price){
  var pizzaDetails = "<h5>$" + price + " " + this.size[1] + " ";
  console.log(pizzaDetails);
  var toppings = this.toppings;
  for (var i = 0; i < toppings.length; i++) {
    if (toppings[i] != "false") {
      pizzaDetails += toppings[i] + " ";
    }
  }
  pizzaDetails += "</h5>"
  return pizzaDetails
}

$(document).ready(function() {
  var numTopping = 2;
  $("#addTopping").click(function(){
      $("#pizzaToppings" + numTopping).show();
      numTopping++;
      if (numTopping >= 4) {
        $("#addTopping").hide();
      }
  });
  $("#submit").click(function(event) {
    event.preventDefault();
    var size = $("#pizzaSize").val();
    if (size === "default") {
      alert("please select a size.");
      local.reload(true);
    }
    var topping1 = $("#pizzaToppings").val();
    console.log(topping1);
    var topping2 = $("#pizzaToppings2").val();
    var topping3 = $("#pizzaToppings3").val();
    var myPizza = new Pizza(size, topping1, topping2, topping3);
    var result = myPizza.getResult(myPizza.getPrice());
    console.log(myPizza);
    console.log(result);
    $(".panel").show();
    $(".results").show().append(result).fadeIn(350);
    $("#pizzaSize").val("default");
    $("#pizzaToppings").val("false");
    $("#pizzaToppings2").val("false");
    $("#pizzaToppings3").val("false");
  });
  $("button#clear").click(function(event) {
    event.preventDefault();
    $(".panel").hide();
    $(".results").html("");
  });
});
