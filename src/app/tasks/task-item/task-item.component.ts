import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SvgIconsComponent } from '../../shared-module/svg-icons/svg-icons.component';
import { taskModel } from '../../models/taskModel';
import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [SvgIconsComponent, DatePipe, SlicePipe, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {

  @Input()
  taskItem: taskModel = new taskModel();

  @Input()
  forStyleMode: boolean = false;

  @Input()
  statusForStyle: string = 'done';

  @Output()
  emitItemToRemove: EventEmitter<taskModel> = new EventEmitter<taskModel>();

  @Output()
  emitItemToUpdated: EventEmitter<taskModel> = new EventEmitter<taskModel>();

  @Output()
  emitItemToEdit: EventEmitter<taskModel> = new EventEmitter<taskModel>();

  collapsableMenu: boolean = false;

  defaultMock: taskModel = new taskModel();


  ngOnInit(): void {
    if(this.forStyleMode){
      this.taskItem.taskName = 'Lorem Ipsum';
      this.taskItem.status = this.statusForStyle;
      this.taskItem.taskDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt';
      this.taskItem.taskExpiringDate = new Date();
      return;
    }else{
      this.taskItem.timeRemaining  = this.getMilisseconds(this.taskItem.taskExpiringDate.toString());
      if(this.taskItem.status != 'done' && this.taskItem.status != 'cancelled'){
        this.taskItem.status = this.setTaskItemStatus(this.taskItem);
      }
    }
  }

  getMilisseconds(date: string): number {
    const deliveryDate = new Date(date);
    const dateNow = new Date();

    if (isNaN(deliveryDate.getTime())) {
      return -1;
    }

    const timeRemainingInMilliseconds = deliveryDate.getTime() - dateNow.getTime();
    return timeRemainingInMilliseconds;
  }

  setTaskItemStatus(task: any) {
    if (task.timeRemaining < 0) {
      return 'cancelled';
    } else if (task.timeRemaining <= 172800000) {
      return 'super-late';
    } else if (task.timeRemaining <= 432000000) {
      return 'late';
    } else {
      return 'fine';
    }
  }

  removeItem(){
    this.emitItemToRemove.emit(this.taskItem);
  }

  editTask(taskItem: taskModel){
    this.emitItemToEdit.emit(taskItem);
  }

  updatedStatus(status: string){
    this.taskItem.status = status;
    this.emitItemToUpdated.emit(this.taskItem);
  }

}
