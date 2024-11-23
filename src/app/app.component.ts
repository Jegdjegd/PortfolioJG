import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AcercaDeComponent } from "./components/acerca-de/acerca-de.component";
import { StackComponent } from "./components/stack/stack.component";
import { StorieComponent } from "./components/storie/storie.component";
import { ExperienceComponent } from "./components/experience/experience.component";

@Component({
  selector: 'app-root',
  imports: [AcercaDeComponent,StackComponent,StorieComponent,ExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio Jhoann G';
}
