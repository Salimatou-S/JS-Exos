// Réaliser les conditions if/else
// Ecrire un script demandant de l’utilisateur d’entrer son âge et de contrôler la validité de l’âge entré (si l’âge est erroné afficher un message d’erreur et redemander de saisir l’âge). 

//let age = parseInt(prompt("Quel est votre âge ?: "))

//function check(){
//if (age > 0){
//        alert(`Vous avez: ${age} `);
   // }
//else {
   // alert("La valeur est erronnée. Veuillez ressaisir à nouveau:");
//}
//}
//check();

//autre methode
let userage;
do {
    userage = parseInt(prompt("Quel est votre âge ?: "));
    if (userage >=18 && userage <120){
        alert("age valide: vous etes majeur");
    }
    else if (userage> 0 && userage<18){
        alert("age valide: vous êtes mineur");
    }
    else {
        alert("age non valide");
    }
}while(isNaN(userage) || userage<=0 || userage>120);

alert("vous avez" + userage +" ans");



