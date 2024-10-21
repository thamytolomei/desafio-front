import { Component, Input, Output, EventEmitter, input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { taskField } from '../../models/taskField';
import { StateBehaviourService } from '../../services/state-behaviour.service';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent implements OnChanges{

  @Input()
  fieldTitle: string = '';

  @Input()
  fieldType: string = '';

  @Input()
  fieldValue: string | Date = '';

  @Output()
  emitValue: EventEmitter<taskField> = new EventEmitter<taskField>();

  @Output()
  emitEditedField: EventEmitter<taskField> = new EventEmitter<taskField>();

  taskField: taskField = new taskField();
  isEditing: boolean = false;

  constructor(
    private stateService: StateBehaviourService,
  ){ }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.fieldValue){
      this.isEditing = true;
      this.taskField.value = this.fieldValue;
    }else{
      this.changeListener();
    }
  }

  sendValue(type: string){
    this.taskField.type = type;

    if(this.isEditing){
      this.emitEditedField.emit(this.taskField);
    }else{
      this.emitValue.emit(this.taskField);
    }
  }

  changeListener() {
    this.stateService.currentChange.subscribe((change) => {
      if (change) {
        this.clearFields();
        this.stateService.resetChange();
      }
    });
  }

  clearFields(){
    switch (this.taskField.type) {
      case 'name':
        this.taskField.value = '';
        break;
      case 'date':
        this.taskField.value = new Date();
        break;
      case 'description':
        this.taskField.value = '';
        break;
    }
  }

}
