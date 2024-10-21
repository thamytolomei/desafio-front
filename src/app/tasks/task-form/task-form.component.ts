import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormInputComponent } from '../form-input/form-input.component';
import { SvgIconsComponent } from '../../shared-module/svg-icons/svg-icons.component';
import { taskField } from '../../models/taskField';
import { taskModel } from '../../models/taskModel';
import { LocalStorageService } from '../../services/local-storage.service';
import { StateBehaviourService } from '../../services/state-behaviour.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormInputComponent, SvgIconsComponent],
  providers: [LocalStorageService],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnChanges {
  newTask: taskModel = new taskModel();
  tasksList: taskModel[] = [];
  taskBackup: any;
  editMode: boolean = false;

  @Input()
  taskToEdit: taskModel = new taskModel();

  constructor(
    private localStorageService: LocalStorageService,
    private stateService: StateBehaviourService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['task'] && changes['task'].currentValue) {
      this.processTask(changes['task'].currentValue);
      this.taskToEdit = changes['task'].currentValue;
    }
  }

  processTask(task: taskModel) {
    this.taskBackup = JSON.stringify(task);
    this.taskToEdit = task;
    this.editMode = true;
  }

  retrieveData(taskField: taskField) {
    switch (taskField.type) {
      case 'name':
        this.newTask.taskName = taskField.value;
        break;
      case 'date':
        this.newTask.taskExpiringDate = taskField.value;
        break;
      case 'description':
        this.newTask.taskDescription = taskField.value
        break;
    }
  }

  getBkp() {
    if (this.editMode) {
      this.taskBackup = JSON.parse(this.taskBackup);
      this.newTask.taskDescription === '' ? this.newTask.taskDescription = this.taskBackup.taskDescription : this.newTask.taskDescription;
      this.newTask.taskName === '' ? this.newTask.taskName = this.taskBackup.taskName : this.newTask.taskName;
    }
  }

  persistTask() {
    if (this.newTask.taskDescription != '' && this.newTask.taskName != '' && this.newTask.taskExpiringDate != new Date()) {
      this.tasksList = this.localStorageService.getTasks('tasksList');

      if (!this.editMode) {
        this.tasksList.push(this.newTask);
      } else {
        let task = this.tasksList.find((task: taskModel) => this.taskBackup.taskDescription === task.taskDescription);
        if (task) {
          Object.assign(task, this.newTask)
        }
      }

      localStorage.setItem('tasksList', JSON.stringify(this.tasksList));

      this.editMode ? alert('Tarefa editada com sucesso!') : alert('Sucesso! Tarefa criada');
    } else {
      alert('Preencha todos os campos!');
    }

    this.updateComponents();
  }

  updateComponents() {
    this.stateService.notifyChange();
  }

}
