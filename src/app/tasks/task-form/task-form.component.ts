import { Component } from '@angular/core';
import { FormInputComponent } from '../form-input/form-input.component';
import { SvgIconsComponent } from '../../shared-module/svg-icons/svg-icons.component';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormInputComponent, SvgIconsComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {

}
