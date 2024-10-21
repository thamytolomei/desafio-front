import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { taskModel } from '../models/taskModel';

@Injectable({
  providedIn: 'root'
})
export class StateBehaviourService {

  private changeIndicator = new BehaviorSubject<boolean>(false);
  private taskSubject = new BehaviorSubject<taskModel | null>(null);
  currentChange = this.changeIndicator.asObservable();
  task$ = this.taskSubject.asObservable();

  constructor() { }

  notifyChange() {
    this.changeIndicator.next(true);
  }

  resetChange() {
    this.changeIndicator.next(false);
  }

  setTask(task: taskModel) {
    this.taskSubject.next(task);
  }
}
