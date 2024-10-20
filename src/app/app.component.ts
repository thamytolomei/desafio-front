import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { TasksModule } from './tasks/tasks.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desafio_front';
}
