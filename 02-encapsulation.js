/*
## Exercice 2 : Encapsulation

**Objectif :** Appliquer le concept d'encapsulation.

### Consignes

1. Modifiez la classe `Voiture` pour que ses attributs soient privés.
2. Ajoutez des `getters` et des `setters` pour chaques attributs.
3. Créer une instance de `Voiture` et modifiez en la couleur.
*/


class Voiture {
    constructor(marque,modele,annee,couleur) {
        this.#marque = marque;
        this.#modele = modele;
        this.#annee = annee;
        this.#couleur = couleur;
    }
    afficherDetails() {
        console.log(this.marque,this.modele,this.annee,this.couleur);
    };
}

let voiture1 = new Voiture( 'renault','Clio2','2001','blanche' );

voiture1.afficherDetails(voiture1);
