/*
## Exercice 4 : Polymorphisme

**Objectif :** Utiliser le polymorphisme.

### Consignes

1. Créez une classe `Animal` avec une méthode `faireDuBruit`.
2. Créez des classes `Chien` et `Chat` qui héritent de `Animal` et redéfinissent la méthode `faireDuBruit`.
3. Utilisez le polymorphisme pour afficher que `Le chien aboie` et que `Le chat miaule` lors de l'appel de la méthode `faireDuBruit`.
*/

class Animal {
    makeNoise() {
        console.log("l'animal fait du bruit");
    }
}

class Chien extends Animal { 
    makeNoise() {
        console.log("le chien aboie");
    }
}

class Chat extends Animal { 
    makeNoise() {
        console.log("le chat miaule");
    }
}

const animaux = [
    new Animal(),
    new Chien(),
    new Chat()
];

animaux.forEach(animal => animal.makeNoise());




