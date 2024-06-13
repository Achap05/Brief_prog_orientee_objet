/*
## Exercice 3 : Héritage

**Objectif :** Comprendre l'héritage entre classes.

### Consignes

1. Créez une classe `Vehicule` avec les attributs `marque`, `modele`, et `annee`.
2. Faites en sorte que la classe `Voiture` hérite de la classe `Vehicule` et possède l'attribut `couleur` (non présent dans la classe `Vehicule`).
*/

class Voiture {
    constructor(marque,modele,annee,couleur) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.couleur = couleur;
    }
    afficherDetails() {
        console.log(this.marque,this.modele,this.annee,this.couleur);
    };
}

class Vehicule extends Voiture {
    constructor(marque,modele,annee) {
        super(marque,modele,annee,couleur);
    }
    afficherDetails() {
        console.log(this.marque,this.modele,this.annee,this.couleur);
    };
}

let vehicule1 = new Vehicule( 'Audi','R8','2010');

vehicule1.afficherDetails();