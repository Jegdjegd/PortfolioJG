import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule],  
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {

  igrowkerText = `A través de este proyecto, pude poner en práctica mis conocimientos existentes en desarrollo frontend con React y Material-UI para la construcción de interfaces de usuario, sino que también adquirí experiencia en la automatización de procesos. Específicamente, aprendí a implementar y gestionar flujos de trabajo de integración y despliegue continuo (CI/CD) utilizando GitHub Actions y Pipelines para entornos en GCP (Google Cloud Platform).`;

  igrowkerProjects = `Tuve la oportunidad de colaborar en varios proyectos, algunos son los siguientes:`;

  
  westerosText = `Es un mundo donde tienes al alcance toda la información sobre la famosa serie Game of Thrones, sus precuelas y secuelas; incluso encontrarás algún dragón volando por el sitio. El sistema realiza consultas a dos (2) APIs distintas para obtener toda la información. Desarrollado usando:`;
  
  btfxText = `La función del sitio es permitir que diferentes organismos de competición para ciclistas tengan acceso a un sistema fácil e intuitivo donde puedan inscribirse en pruebas ciclistas de todo tipo y, además, consultar las clasificaciones de todos los competidores registrados. Desarrollado usando:`;
  
  cotcripText = `Una SPA diseñada para obtener información sobre las criptomonedas más buscadas en pocos clics, utilizando la API de cryptocompare.com`;

}
