$(function(){
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $("#voter").show();
  }else{
    $("#under-18").show();
  }
});
