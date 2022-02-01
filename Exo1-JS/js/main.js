//a°) Ecrire une page HTML contenant un script permettant d'afficher "Bonjour tout le monde" saut de retour à la ligne.

// function showMsg() {
//     alert("Bonjour tout le monde");
// }
// showMsg();

// b°) Ameliorer le script pour qu'il permette de demander le prenom de l'utilisateur (methode prompt()) et afficher "Bonjour 'votre prenom"

let prenom = prompt("Rentrez votre prenom, svp");
const salut = "Bonjour "; // bonjour sera assigné comme une constante

function showMsg(){
    mode = salut + prenom +"!"
    alert(mode);
    console.log(mode)
    document.open(mode);
    document.write(`<div id = 'monid'> ${mode} </div>`); //s'ecrit à la place de: document.write("<div id = 'monid'> " + mode + "</div>");
    document.close;
}
showMsg();