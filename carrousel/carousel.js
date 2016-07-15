
/*
$("#previous_frame").on("click", function(){

  $(".uno").animate({"left" : "-=620px"}, 1000)
  $(".dos").animate({"left" : "-=620px"}, 1000)
  $(".tres").animate({"left" : "-=620px"}, 1000)

  var posicion = $("#uno").position()
  posicion = posicion.left
  
  console.log(posicion)
  num = -1240


  if(posicion <= -1240){
    alert()
  }



});
  
$("#next_frame").on("click", function(){

  $("#uno").animate({"left" : "+=620px"}, 1000)
  $("#dos").animate({"left" : "+=620px"}, 1000)
  $("#tres").animate({"left" : "+=620px"}, 1000)

});
  
*/

/*
var carrusel = setInterval(function(){
  $(".carousel ul").animate({"marginLeft" : "-=620px"}, 1000, function(){
    $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({marginLeft:0});
  })
  //alert()
},5000)

*/

$(document).ready(function(){

  $("#previous_frame").on("click", function(){
    $(".frames").animate({"margin-left" : "-=620px"}, 1000, function(){
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({"margin-left" : "0"})
    })
  });

  $("#next_frame").on("click", function(){
    $(".frames").animate({"margin-left" : "+=620px"}, 1000, function(){
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({"margin-left" : "0"})
    })
  });


});





















