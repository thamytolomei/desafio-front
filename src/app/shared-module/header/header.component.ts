import { Component } from '@angular/core';
import { TaskItemComponent } from "../../tasks/task-item/task-item.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
