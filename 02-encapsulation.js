/*
## Exercice 2 : Encapsulation

**Objectif :** Appliquer le concept d'encapsulation.

### Consignes

1. Modifiez la classe `Voiture` pour que ses attributs soient privés.
2. Ajoutez des `getters` et des `setters` pour chaques attributs.
3. Créer une instance de `Voiture` et modifiez en la couleur.
*/


class Voiture {
    #marque;
    #modele;
    #annee;
    #couleur;
    constructor(marque,modele,annee,couleur) {
        this.#marque = marque;
        this.#modele = modele;
        this.#annee = annee;
        this.#couleur = couleur;
    }

get marque() {
    return this.#marque;
}
get modele() {
    return this.#modele;
}
get annee() {
    return this.#annee;
}
get couleur() {
    return this.#couleur;
}

set marque(nouvelleMarque) {
     this.#marque = nouvelleMarque;
}
set modele(nouveauModele) {
    this.#modele = nouveauModele;
}
set annee(nouvelleAnnee) {
    this.#annee = nouvelleAnnee;
}
set couleur(nouvelleCouleur) {
    this.#couleur = nouvelleCouleur;
}


afficherDetails() {
    console.log(this.marque, this.modele, this.annee, this.couleur);
  }
}

let voiture1 = new Voiture( 'renault','Clio2','2001','blanche' );
voiture1.couleur = "grise";
voiture1.afficherDetails();
