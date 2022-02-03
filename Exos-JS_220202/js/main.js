/* let number1 = prompt('entrez votre nombre');
let number2 = number1.toString();
let result = number2.split("").reverse().join("");/* ;number.reverse(); 
let aa = Number(result);
document.write(aa); */

/* Exercice 1 : L’objet String - inverser un nombre [facile]
Ecrire une fonction javascript qui inverse un nombre.
Exemple : 2016 => résultat 6102 */


/* let nombre = parseInt(prompt("Entrez un nombre"));
let nombre_inverse = inverse(nombre);
function inverse() {
  chaine = nombre.toString();
  reverse = chaine.split("").reverse().join("");
  return Number(reverse);
} 

document.write(nombre_inverse);
 */


function inverse (){
   nombre = prompt("Entrez un nombre");
   nombre1 = nombre.split('').reverse('').join('');
  alert(nombre1);
}

inverse();