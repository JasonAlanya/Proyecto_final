const URLGET="https://jsonplaceholder.typicode.com/posts";


$(document).ready(function(){
    $(".agradecimiento").slideUp(0);
    $(".enviar").click(function(e){
        e.preventDefault();

        var nombre=document.getElementById("nombre_p").value;
        var correo=document.getElementById("correo_p").value;
        var telefono=document.getElementById("telefono_p").value;
        var mensaje=document.getElementById("mensaje_p").value;

        var info = {"nombre": "" ,"correo": "", "telefono": "", "mensaje":""};

        info["nombre"]=nombre;
        info["correo"]=correo;
        info["telefono"]=telefono;
        info["mensaje"]=mensaje;


        $(".formulario").slideUp(1000, function(){
            $.post(URLGET, info, (respuesta,estado)=>{
                if(estado==="success"){
                    $(".agradecimiento").slideDown(800);
                }
            });
        });
    })
    $(".agradecimiento button").click(function(e){
        e.preventDefault();
        $(".agradecimiento").slideUp(800, function(){
            $(".formulario").slideDown(1000);
            document.getElementById("nombre_p").value="";
            document.getElementById("correo_p").value="";
            document.getElementById("telefono_p").value="";
            document.getElementById("mensaje_p").value="";
        });  
    })
});