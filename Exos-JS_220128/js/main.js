/*Exercice 6 :  Afficher la table de multiplication d'un entier [facile] 
1. Ecrire un script qui permet d'afficher la table de multiplication d'un nombre entier n:La valeur de n sera demandée à l’utilisateur via une boite de dialogue.En cas de saisie d'un nombre non entier le script redemande l'utilisateur de saisir une nouvelle valeur.L'affichage de résultat doit être encadré par un tableau html. 
2. Utiliser les boucles imbriquées pour afficher l'ensemble des tables de multiplication pour n=1,2.....10.*/ 

/*reponse 1*/
let n;
 do{
    n=parseInt(prompt("Saisissez un nomre entier"));
 }while(isNaN(n) || n%1!==0);
 
 document.write("<h4>La table de multiplication du nombre: "+n+"</h4>")
 document.write("<table border >");

 for(let i=1;i<=10;i++){
    document.write("<tr>");
    document.write("<td>"+n+" x "+i+" =</td>");
    document.write("<td>"+n*i+"</td>");
    document.write("</tr>");
 }
 document.write("</table>");

/*Reponse 2*/
 for(let j=1;j<=10;j++){
    document.write("<h4>La table de multiplication du nombre: "+j+"</h4>")
    document.write("<table border >");
    for(let i=1;i<=10;i++){
     document.write("<tr>");
     document.write("<td>"+j+" x "+i+" =</td>");
     document.write("<td>"+j*i+"</td>");
     document.write("</tr>");
}
document.write("</table>");
}
