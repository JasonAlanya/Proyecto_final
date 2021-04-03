$(document).ready(function(){
    $(".agradecimiento").slideUp(0);
    $(".enviar").click(function(e){
        e.preventDefault();
        $(".formulario").slideUp(1000, function(){
            $(".agradecimiento").slideDown(800);
        });   
    })
    $(".agradecimiento button").click(function(e){
        e.preventDefault();
        $(".agradecimiento").slideUp(800, function(){
            $(".formulario").slideDown(1000);
        });  
    })
});