/* Exercice 5 : L’objet String - Mettre la première lettre d'un mot en majuscule [facile]
Ecrire une fonction qui met en majuscule la première lettre de chaque mot d'une phrase
Exemple : le corbeau et le renard => Le Corbeau Et Le Renard */

/* function firstLetterUp(phrase) {
  let mots = phrase.split(" ");
  let tableau = [];
  mots.forEach(mot => {
    let premierelettre = mot.charAt(0).toUpperCase();
    let remplacement = mot.replace(mot.charAt(0),premierelettre);
    tableau.push(remplacement);
  });
 alert (tableau.join(' '));
}

firstLetterUp("le renard et la tortue");
 */


let phrase = prompt("entrez votre phrase");

function firstLetterUp() {

  mots = phrase.split(" ");

  let tableau =[];

  mots.forEach(mot => {

    let premierelettre = mot.charAt(0).toUpperCase();
    let remplacement = mot.replace(mot.charAt(0),premierelettre);
    console.log(remplacement);
    tableau.push(remplacement);

  });
  alert(tableau.join(' '));
};

firstLetterUp();



