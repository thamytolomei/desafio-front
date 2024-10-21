import { Component, Input, OnInit, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../../services/local-storage.service';
import { taskModel } from '../../models/taskModel';
import { StateBehaviourService } from '../../services/state-behaviour.service';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskItemComponent, CommonModule, TaskFormComponent],
  providers: [LocalStorageService, StateBehaviourService],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent implements OnInit, OnChanges {

  tasksList: taskModel[] = [];
  taskItemToEdit: taskModel = new taskModel();

  constructor(
    private localStorageService: LocalStorageService,
    private stateService: StateBehaviourService,
  ){ }

  ngOnInit(): void {
    this.getTasks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeListener();
  }

  changeListener(){
    this.stateService.currentChange.subscribe((change) => {
      if (change) {
        this.tasksList = [];
        this.getTasks();
        this.stateService.resetChange();
      }
    });
  }

  getTasks(){
    this.tasksList = this.localStorageService.getTasks('tasksList');
  }

  removeTask(taskToRemove: taskModel){
   this.tasksList = this.tasksList.filter((item: taskModel) => item != taskToRemove);
   this.localStorageService.modifyTask('tasksList', this.tasksList);
   alert('Tarefa removida com sucesso!')
  }

  updatedTaskStatus(updatedTaskItem: taskModel){
    let task = this.tasksList.find((task: taskModel) => updatedTaskItem.taskName === task.taskName)
    if(task){
      Object.assign(task, updatedTaskItem)
      this.localStorageService.modifyTask('tasksList', this.tasksList);
    }
  }

  receiveTaskToEdit(taskItem: taskModel){
    this.taskItemToEdit = taskItem;
  }

}
