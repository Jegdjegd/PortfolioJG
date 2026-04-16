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
  
  passgenText = `PassGen es una aplicación frontend desarrollada para generar contraseñas seguras de forma rápida y configurable.

  El objetivo principal es ofrecer una herramienta ligera, intuitiva y eficiente que permita a cualquier usuario mejorar su seguridad digital sin fricción.

  Este proyecto refleja buenas prácticas en desarrollo frontend moderno, incluyendo arquitectura limpia, diseño responsive y experiencia de usuario optimi
  zada.`;


  clockTeamText = `Clock-Team es una aplicación web diseñada para dispositivos móviles y equipos distribuidos. Elimina la complejidad de los cálculos de zonas horarias al proporcionar un panel de control, de inspiración ciberpunk, donde puedes ver la hora local, la ubicación y el rol de todo tu equipo.

✨ Características principales
    Interfaz dinámica: Los elementos cobran vida y se mueven gracias a animaciones basadas en la física, impulsadas por Framer Motion.

    Panel de control optimizado para móviles: Navegación inferior altamente optimizada para un acceso rápido a Orbit, Equipo, Búsqueda y Perfiles de usuario.

    Tecnología moderna: Aprovecha la velocidad extrema de Vite y el nuevo motor CSS-first de Tailwind v4.

    🚀 Inicio rápido`;

}
