/* let myString = 'Pauline';
let first = myString.charAt(0); // P 
alert(first);
let last = myString.charAt(myString.length - 1); 
alert(last);// 
alert(myString);

let maChaine ="c'est un test"
let monTableau = maChaine.split(' ');
for(let i = 0; i < monTableau.length; i++){
    console.log(monTableau[i] +'\n');//\n pour retour à la ligne
    alert(monTableau[i]);
}


const myArray = ["c'est", "un","test"];
myArray.forEach(element => console.log('\n' + element)); */

/* let Person = {
    nick: 'Sébastien', 
    age: 23,
    sex: 'm',
    parent: 'aîné',
    work: 'Développeur'
    };

   for (let property in Person){
       console.log(`${property} : ${Person[property]}`);
   } */
    
   let AnimalArray = ["cat","dog","fish"];
   for (let value of AnimalArray){
       console.log(value);
   }

   let myArray = [1, 2, 3, 4, 5]; 
    myArray.reverse();
    alert(myArray); // Affiche : 5,4,3,2,1