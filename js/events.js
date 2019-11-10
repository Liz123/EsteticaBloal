$(".contenedor5").css("display","none");
$(".contenedor6").css("display","none");

$("#services").click(function(){
$(".contenedor2").hide();
$(".contenedor4").hide();
$(".contenedor3").hide();
$(".contenedor3").show();


});

$("#index").click(function(){
$(".contenedor5").hide();
$(".contenedor2").show();	
$(".contenedor3").show();
$(".contenedor4").show();
});

$("#contactos").click(function(){
$(".contenedor5").hide();
$(".contenedor2").hide();	
$(".contenedor3").hide();
$(".contenedor4").show();
});


$("#portafolio").click(function(){
$(".contenedor2").hide();	
$(".contenedor3").hide();
$(".contenedor4").hide();
$(".contenedor5").show();
});
