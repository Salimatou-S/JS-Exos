 class Calcul{
    constructor(var1,var2){
    this.produit = var1*var2;
    }
}

alert(new Calcul(4,5).produit);// equivaut aux deux ligne suivante: version raccourcie
let Calcul1 = new Calcul (4,5).produit;
alert (Calcul1);
 

class Person{
    constructor(nick, age, sex, parent, work, friends){ 
    this.nick = nick;
    this.age = age;
    this.sex = sex;
    this.parent = parent; 
    this.work = work; 
    this.friends = friends;
    }
    addFriend(nick, age, sex, parent, work, friends){
        this.friends.push(new Person(nick, age, sex, parent, work, friends));

    }
};

let Seb = new Person ('Sebastien', 25,'M','aîné','développeur',[])
alert (Seb.nick);

Seb.nick = 'Bastien'
Seb.age = 23
alert(Seb.nick + ' a ' + Seb.age + ' ans') //ou alert(`${Seb.nick} a ${Seb.age} ans`)


Seb.addFriend('Jean',30,'m','aîné', 'vendeur',[]);
Seb.addFriend('Jules',42,'m','aîné', 'développeur',[]);
Seb.addFriend('Louise',40,'f','aîné', 'Ingénieure',[]);
Seb.addFriend('Jeanne',28,'f','aîné', 'Biologiste',[]);
alert(Seb.friends[2].nick)

/*Seb.friends.push(new Person('Lina', 19,'f','aîné','developpeur',[]))
alert(Seb.friends[0].nick)*/


alert('Ceci est une chaîne !'.length);


/* Méthodes
La casse et les caractères : toLowerCase() et toUpperCase()
toLowerCase() et toUpperCase() permettent respectivement de convertir une chaîne en minuscules et en majuscules.
Code : JavaScript */
let myString = 'le javascript';
myString = myString.toUpperCase(); // Retourne : « LE JAVASCRIPT »
alert(myString);

/* Accéder aux caractères avec charAt()
La méthode charAt() permet de récupérer un caractère en fonction de sa position dans la chaîne de caractères.
Code : JavaScript */
let myString = 'Pauline';
let first = myString.charAt(0); // P 
let last = myString.charAt(myString.length - 1); // 
alert(myString)