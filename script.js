



"use strict"
window.addEventListener("load", function (){


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_55v008d';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
     const name =  document.getElementById("from_name").value = "";
       const email = document.getElementById("to_email").value = "";
       const message = document.getElementById("message").value = "";
      btn.value = 'Enviado';
      Swal.fire(
  'Enviado correctamente!',
  'Preciona!',
  'success'
)
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


});



$(document).ready(function(){

//este if se utiliza para cargar un bloque de codigo en especifico en otra pagina
  if(window.location.href.indexOf('index') > -1){
//slider

  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 900,
});
}
//post

//este if se utiliza para cargar un bloque de codigo en especifico en otra pagina

if(window.location.href.indexOf('index') > -1){

 var post =[
{
title:"God of War",
date: 'publicado el dia'+moment().date()+ " de " +moment().format("MMMM")+" "+'del'+moment().format(" YYYY"),
content:' es una serie de videojuegos en 3ª. persona creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment. Se basa en las aventuras de un semidiós espartano, Kratos, quien se enfrenta a diversos personajes de la mitología griega y nórdica, tanto héroes '

 },
 {
  title:"Need For Speed Most Wanted",
  date: 'publicado el dia'+moment().date()+ " de " +moment().format("MMMM")+" "+'del'+moment().format(" YYYY"),
  content:'Nuestro objetivo en Need for Speed Most Wanted es conseguir ser el más buscado por las fuerzas del orden. Para ello nos tendremos que valer de nuestro coche, el cual tendremos que tunear al máximo para conseguir ganar en las carreras ilegales que se celebrana en plena ciudad. '
 },

{
  title:"Grand Theft Auto V",
  date: 'publicado el dia'+moment().date()+ " de " +moment().format("MMMM")+" " +'del'+moment().format(" YYYY"),
  content:'Grand Theft Auto V (abreviado como GTA V o GTA 5) es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.4​ Posteriormente, fue lanzado el 18 de noviembre de 2014 para las consolas de nueva generación'
},

{

  title:"Mortal Kombat",
  date: 'publicado el dia'+moment().date()+ " de " +moment().format("MMMM")+" " +'del'+moment().format(" YYYY"),
  content:'Mortal Kombat es una franquicia de videojuego de lucha creada por Ed Boon y John Tobias en 1992. Las cuatro primeras entregas fueron distribuidas por Midway Games y lanzadas principalmente en máquinas arcade; posteriormente estuvieron disponibles en consolas domésticas.'
},

{
  title:"Saga mario Bros",
  date: 'publicado el dia'+moment().date()+ " de " +moment().format("MMMM")+"  " +moment().format(" DD ")+'del'+moment().format(" YYYY"),
  content:'Super Mario es una serie de videojuegos de plataformas creados por la empresa desarrolladora Nintendo y protagonizados por su mascota, Mario. También conocida como la serie Super Mario Bros. o simplemente la serie Mario, es la serie principal de la franquicia de Mario'
  },

];


post.forEach((item, index) => {
  var posts = `<article class="post">
  <h2>${item.title}</h2>
  <span class="dato">${item.date}</span>
  <p>
          ${item.content}
  </p>
  <a href="about.html" class="button-more">mostrar mas</a>
</article>`

//ahora vamos agregar el post creado del jason que esta mas arriba a la document con un append
$("#posts").append(posts);
});

};
var theme = $("#theme")

$("#red").click(function(){

theme.attr("href", "css/red.css");
});


var theme = $("#theme")

$("#green").click(function(){

theme.attr("href", "css/green.css");
});



var theme = $("#theme")

$("#black").click(function(){

theme.attr("href", "css/black.css");

});


//scroll arriba de la webb
$(".subir").click(function(e){
e.preventDefault();
//los elementos fundamentales del html se pueden llamar directamente sin nigun problema como body y html
$("html, body").animate({

  scrollTop: 0
}, 500);
 return false;
});
//login falso
 $("#login form").submit(function(){
var form_name = $("#form_name").val();

localStorage.setItem("form_name", form_name);

 });

 var form_name = localStorage.getItem("form_name");

 if(form_name != null && form_name != "underfined"){
 var about_p = $("#about p")
            //con html podremos asignar texto a la clase que a llamos selecionado en este caso le agregamos a about p
  about_p.html("<br>bienvenido, "+form_name);
  about_p.append("← "+"<a href='#' id='logout' >cerrar seccion</a>");
  $("#login").hide();

  $("#logout").click(function(){
  localStorage.clear();
  location.reload();

  });

 }

//Acordeon
 if(window.location.href.indexOf('about') > -1){
$('#acordeon').accordion(); 


}

//reloj
if(window.location.href.indexOf('reloj') > -1){
  //usando setInterval podremos hacer que el reloj se actualize constantemente
   setInterval(function(){
    var reloj = moment().format("h:mm:ss");
    $("#reloj").html(reloj);
      //1000 segundo que es lo ideal     
   },1000);
 
  
  }
//validacion
if(window.location.href.indexOf('contacto') > -1){
  $("#date").datepicker({

dateFormat:'dd-mm-yy'

  });

  $.validate({
    lang: 'es',

    /*con la propiedad errorMenssagePosition: podremos hacer que cuando el usuario  introduzca datos incorrectos
  haga algo con (top) la pagina se va a ir arriba automaticamente*/
 errorMessagePosition:'top',
 /*otra es   scrollTopOnError:true esta hace que cuando subas introduzcas datos invalidos 
se muestren todos los errores en un mismo mensaje*/
 scrollTopOnError:true
  });
//recomendable usar los dos metodos en conjunto 


}



});
