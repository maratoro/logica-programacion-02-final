function convertidorTemp(){
  
let input=parseFloat(prompt("Ingrese que temperatura quiere convertir: "));

while(isNaN(input)){
  
input= parseFloat(prompt("Ingrese que temperatura quiere convertir: "));
}
const kelvin = input + 273.5;
const farenheit = input* 1.8+32;


console.log("La temperatura en kelvin es: "+kelvin);
console.log("La temperatura en farenheit es: "+farenheit);
 }
convertidorTemp()