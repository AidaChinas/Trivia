var name; //Codigo para la página principal
function isNumeric(str) {
  if (typeof str != "string") return false 
  return !isNaN(str) && 
         !isNaN(parseFloat(str)) 
}
//Obtenemos los datos para mostrarlos
function getName(){
  this.name= document.getElementById("user").value;
  let name = document.getElementById("user").value;
   if(name == "" || isNumeric(name) ) {
    alert("Escribe un nombre válido");
     return;   
   }
  
//Mostramos el nombre
     document.getElementById("demo").innerHTML = "Hola " + name;    
//Ocultamos la sección de bienvenida 
     document.getElementById("welcome").style.display = "none"
//Mostramos la trivia
     document.getElementById("trivia").style.display = "block";  
} 

//Cambia el fondo a color morado solo en las respuestas correctas
 function changeBackground() {
     document.getElementById("alien").style.backgroundColor = 'purple';   
     document.getElementById("johnny").style.backgroundColor = 'purple';
     document.getElementById("nodal").style.backgroundColor = 'purple'; 
 }


//Funcion para verificar respuestas correctas con alert
/* function VerifyAnswer() {
  if(document.getElementById("johnny").checked) {
    alert("Seleccionaste la opción correcta");
  }
  if(document.getElementById("amber").checked) {
    alert("Seleccionaste la opción incorrecta");
  }
  if(document.getElementById("ninguna").checked) {
    alert("Seleccionaste la opción incorrecta");
  }
} */


function totalScore() {
  let correctAnswer = 0;
    if(document.getElementById("alienInput").checked){
    correctAnswer = correctAnswer + 1}
    if(document.getElementById("johnnyInput").checked){
    correctAnswer = correctAnswer + 1}
    if(document.getElementById("nodalInput").checked){
    correctAnswer = correctAnswer + 1}
  alert("Puntaje total: " + Math.trunc(correctAnswer/3 * 100) + "%");
   changeBackground() 
}

 

//Funcion para boton de reinicio de juego

function restartGame(){
  let name = "";
    document.getElementById("user").value = name;
    document.getElementById("welcome").style.display = "block";
    document.getElementById("trivia").style.display = "none"; 
    document.getElementById("alien").style.backgroundColor = 'pink';      
    document.getElementById("johnny").style.backgroundColor = 'pink';
    document.getElementById("nodal").style.backgroundColor = 'pink'; 

  clearRadioButtonList() 
 } 

 function clearRadioButtonList() {

            var elementRef = document.getElementById('#Trivia');
            var inputElementArray = elementRef.getElementsByTagName('input');

            for (var i = 0; i < inputElementArray.length; i++) {
                var inputElement = inputElementArray[i];

                inputElement.checked = false;
            }
            return false;
        } 

/* 
 function playAgain(){
  const trivia = document.querySelector("#Trivia")
        section.setAttribute("disabled", "disabled")
 }
 */