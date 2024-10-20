import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TasksModule } from '../tasks/tasks.module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    TasksModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    TasksModule,
    FormsModule,
  ],
  providers: [ provideHttpClient(withFetch()) ]
})
export class SharedModuleModule { }
