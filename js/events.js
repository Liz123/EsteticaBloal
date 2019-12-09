$(".contenedor5").css("display","none");
$(".contenedor6").css("display","none");
$(".contenedor7").css("display","none");
$(".contenedor8").css("display","none");


$("#services").click(function(){
$(".contenedor2").hide();
$(".contenedor4").hide();
$(".contenedor5").hide();
$(".contenedor6").hide();
$(".contenedor3").show();
});

$("#index").click(function(event){
event.preventDefault();
$(".contenedor5").hide();
$(".contenedor2").show();	
$(".contenedor3").show();
$(".contenedor5").hide();
$(".contenedor4").show();
});

$("#contactos").click(function(event){
event.preventDefault();

$(".contenedor5").hide();
$(".contenedor2").hide();	
$(".contenedor3").hide();
$(".contenedor5").hide();
$(".contenedor8").hide();

$(".contenedor4").show();
});


$("#portafolio").click(function(event){
 event.preventDefault();
$(".contenedor2").hide();	
$(".contenedor3").hide();
$(".contenedor4").hide();
$(".contenedor6").hide();
$(".contenedor7").hide();
$(".contenedor8").hide();

$(".contenedor5").show();
});

$("#unas").click(function(event){
 event.preventDefault();
$(".contenedor2").hide();	
$(".contenedor3").hide();
$(".contenedor4").hide();
$(".contenedor5").hide();
$(".contenedor6").show();
});

$("#peinados").click(function(event){
 event.preventDefault();
$(".contenedor2").hide();	
$(".contenedor3").hide();
$(".contenedor4").hide();
$(".contenedor5").hide();
$(".contenedor6").hide();
$(".contenedor7").show();
});

$("#maquillaje").click(function(event){
 event.preventDefault();
$(".contenedor2").hide();	
$(".contenedor3").hide();
$(".contenedor4").hide();
$(".contenedor5").hide();
$(".contenedor6").hide();
$(".contenedor7").hide();
$(".contenedor8").show();

});