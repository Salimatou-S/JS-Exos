/* Exercice 4 : L’objet String - classer les lettres dans l'ordre alphabétique [facile]
Ecrire une fonction javascript qui retourne toutes les lettres d'une chaîne de caractères dans l'ordre alphabétique
Exemple : développeur => deeloppruvé */


function ordreAlphabetic(){
  mot = prompt("rentrez votre mot")
  mot1 = mot.split("").sort().join("");
  alert(mot1);
};
ordreAlphabetic();

