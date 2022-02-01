/* let number1 = prompt('entrez votre nombre');
let number2 = number1.toString();
let result = number2.split("").reverse().join("");/* ;number.reverse(); 
let aa = Number(result);
document.write(aa); */


/* let nombre = parseInt(prompt("Entrez un nombre"));
let nombre_inverse = inverse(nombre);
function inverse(nombre) {
  let chaine = nombre.toString();
  let reverse = chaine.split("").reverse().join("");
  return Number(reverse);
} 

document.write(nombre_inverse);*/

let mot= prompt("Rentrez un mot");

function ordreAlpha(mot) {
  return mot.sort(function(x,y) {
    return x().localeCompare(y);
    
  });
}
document.write (ordreAlpha);