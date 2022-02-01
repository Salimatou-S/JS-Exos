/*Exercices du cours 2B - JavaScript.
Exercice 1 : Modifier les styles avec un input de type range. [moyen]
1. Créer un document html contenant des champs de type range et un titre dans un tableau html (voir l'exemple sur la figure ci-dessous) : w
2. Créer le script qui permet de changer les propriétés (background,padding,height,width,arrondi,rotation) du titre en milieu en changeant leurs valeurs via les inputs de type range.
*/

let titre = document.getElementById('titre');
let largeur = document.getElementById('largeur');
largeur.addEventListener('change', function(e)
{
    valeur = largeur.value;
    titre.style.width = valeur + '%';
},false);




/* height */
let hauteur = document.getElementById('hauteur');
hauteur.addEventListener('change', function(e)
{
    valeur = hauteur.value;
    titre.style.height = valeur + '%';
},false);




/* padding */
let interieur = document.getElementById('interieur');
interieur.addEventListener('change', function(e)
{
    valeur = interieur.value;
    titre.style.padding = valeur + '%';
},false);




/* arrondi */
let arrondi = document.getElementById('arrondi');
arrondi.addEventListener('change', function(e)
{
    valeur = arrondi.value;
    titre.style.borderRadius = valeur + '%';
},false);



/* rgb */
let couleur = document.getElementById('couleur');
couleur.addEventListener('change',function(e)
{
    valeur = couleur.value;
    titre.style.backgroundColor = 'rgb(' + valeur + ', ' + valeur + ', ' + valeur + ')';
},false);



/* rotate */
let rotation = document.getElementById('rotation');
rotation.addEventListener('change', function(e)
{
    valeur = rotation.value
    titre.style.transform = 'rotate(' + valeur + 'deg)';
})