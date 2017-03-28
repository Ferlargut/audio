
function verAvanze(){
    var momentoActual=document.getElementById("melodia").currentTime;
    var horas = Math.floor(momentoActual/3600);
 var minutos = Math.floor((momentoActual-(horas*3600))/60);
 var segundos = Math.round(momentoActual-(horas*3600)-(minutos*60));
 var lugar=document.getElementById("contador");

 if (horas > 0){
  lugar.innerHTML= horas+ 'h '+ minutos+ 'm ';
 } else {
  lugar.innerHTML= minutos+ 'm '+ segundos+ 's';
 }
 setTimeout("verAvanze()",1000) 
}


