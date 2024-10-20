import { Component, Input } from '@angular/core';
import { SvgIconsComponent } from '../../shared-module/svg-icons/svg-icons.component';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [SvgIconsComponent],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {

  @Input()
  taskStatus: string = '';

}
