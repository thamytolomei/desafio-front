import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { taskModel } from './models/taskModel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModuleModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'desafio_front';

  ngOnInit(): void {
  }
}
