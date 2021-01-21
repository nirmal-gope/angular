import {Component} from '@angular/core';

@Component({
  /*
  Le sélecteur agit comme un identifient unique;
  et permet d'identifier notre composont par rapport aux autres.
   */
  selector: 'app-contact',
  /*
  Permet d'indiquer à Angular qu'elle fichier HTML utiliser pour notre composant; pareil pour le CSS.
   */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
une classe permet de regrouper des variables et des fonctions qui vont travailer ensemble. La classe ici, va correspondre à notre "Model".
C'est elle qui contiendra nos données.
*/


export class AppComponent {
  title = 'Gestion des Contacts';
  unContact = {
    id: 1,
    name: 'Nirmal GOPE',
    username: 'nirmalgope',
    email: 'gope.nirmal39@gmail.com'
  };
  mesContacts = [
    {
      id: 1,
      name: 'Nirmal GOPE',
      username: 'nirmalgope',
      email: 'gope.nirmal39@gmail.com'
    },
    {
      id: 2,
      name: 'Mona NT',
      username: 'mona',
      email: 'mona@gmail.com'
    },
    {
      id: 3,
      name: 'Alexis',
      username: 'alexis',
      email: 'alexis@gmail.com'
    },
    {
      id: 4,
      name: 'Amélie',
      username: 'amelie',
      email: 'amelie@gmail.com'
    }
  ];

  contactActif: any;

  displayInfos(contactCliqueParUtilisateur: any): void {
    console.log(contactCliqueParUtilisateur);
    this.contactActif = contactCliqueParUtilisateur;
  }

}
