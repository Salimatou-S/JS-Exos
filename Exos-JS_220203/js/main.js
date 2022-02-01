/* Exercice 4 : L’objet String - classer les lettres dans l'ordre alphabétique [facile]
Ecrire une fonction javascript qui retourne toutes les lettres d'une chaîne de caractères dans l'ordre alphabétique
Exemple : développeur => deeloppruvé */

let str = prompt("rentrez votre mot")
function ordreAlphabetic(str){
  let x = str.split("");
  return(x.sort().join(""));
};
document.write(ordreAlphabetic(str));
