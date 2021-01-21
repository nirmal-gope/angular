import { Component } from '@angular/core';

@Component({
  selector: 'app-todoApp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo App';

  mesListes = [
    {
      id: 1,
      name: 'HTML',
      task: 'Préparer un workshop HTML',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vel sapiente sed accusantium corrupti! Repellendus perspiciatis praesentium consequatur ullam exercitationem explicabo nam dignissimos? Repellat.',
      action: 'Terminée'
    },
    {
      id: 2,
      name: 'CSS',
      task: 'Préparer un workshop CSS',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vel sapiente sed accusantium corrupti! Repellendus perspiciatis praesentium consequatur ullam exercitationem explicabo nam dignissimos? Repellat.',
      action: 'Terminée'
    },
    {
      id: 3,
      name: 'JAVASCRIPT',
      task: 'Préparer un workshop JAVASCRIPT',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vel sapiente sed accusantium corrupti! Repellendus perspiciatis praesentium consequatur ullam exercitationem explicabo nam dignissimos? Repellat.',
      action: 'Terminée'
    },
    {
      id: 4,
      name: 'JQUERY',
      task: 'Préparer un workshop JQUERY',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vel sapiente sed accusantium corrupti! Repellendus perspiciatis praesentium consequatur ullam exercitationem explicabo nam dignissimos? Repellat.',
      action: 'Terminée'
    },
    {
      id: 5,
      name: 'SQL',
      task: 'Préparer un workshop SQL',
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi vel sapiente sed accusantium corrupti! Repellendus perspiciatis praesentium consequatur ullam exercitationem explicabo nam dignissimos? Repellat.',
      action: 'Terminée'
    }
  ];
  listeActif: any;
  displayInfos(listeClique: any): void{
    this.listeActif = listeClique;
  }


}
