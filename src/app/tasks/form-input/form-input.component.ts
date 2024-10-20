import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {

  @Input()
  fieldTitle: string = 'Título da Tarefa';

  @Input()
  fieldType: string = '';

  @Output()
  emitInputValue: EventEmitter<string> = new EventEmitter<string>();

  inputValue: string = '';

  emitFieldValue(value: string){
    this.emitInputValue.emit(value);
  }

}
