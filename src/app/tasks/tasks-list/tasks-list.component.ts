import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {

}
