import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TaskFormComponent,
    TasksListComponent,
    TaskItemComponent,
    FormInputComponent,
    FormsModule,
  ],
  exports: [
    TaskFormComponent,
    TasksListComponent,
    TaskItemComponent,
    FormInputComponent,
    FormsModule,
  ],
  providers: [ provideHttpClient(withFetch()) ]
})
export class TasksModule { }
