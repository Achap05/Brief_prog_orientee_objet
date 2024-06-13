/*
## Exercice 3 : Héritage

**Objectif :** Comprendre l'héritage entre classes.

### Consignes

1. Créez une classe `Vehicule` avec les attributs `marque`, `modele`, et `annee`.
2. Faites en sorte que la classe `Voiture` hérite de la classe `Vehicule` et possède l'attribut `couleur` (non présent dans la classe `Vehicule`).
*/

class Vehicule {
    constructor(marque,modele,annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    afficherDetails() {
        console.log(this.marque,this.modele,this.annee);
    };
}



class Voiture extends Vehicule {
    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee);
        this.couleur = couleur;
    }
    afficherDetails() {
        console.log(this.marque,this.modele,this.annee,this.couleur);
    };
}

let voiture1 = new Voiture( 'Renault','Clio','2001','blanche');

voiture1.afficherDetails();