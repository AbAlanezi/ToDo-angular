import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoComponent } from './component/toDos/to-do.component';
import { ToDo1Component } from './component/to-do1/to-do1.component';
import { AddToDoComponent } from './component/add-to-do/add-to-do.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDo1Component,
    AddToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
