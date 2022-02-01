let nombre1 = parseInt(prompt("Rentrez un premier nombre: "));
let nombre2 = parseInt(prompt("Rentrez un deuxième nombre: "));

function sum(){
    sum = nombre1 + nombre2
    alert(`La somme de nombre est: ${sum} `) //avec le ` (altGr 7) et $(), on a plus besoin de concatener
}
sum();