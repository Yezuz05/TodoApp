import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from 'app/services/in-memory-data.service';


import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { NotesComponent } from './notes/notes.component';
import { TodoCardComponent } from './notes/todo-card/todo-card.component';
import { TodoCreatorComponent } from './notes/todo-creator/todo-creator.component';
import { ColourPickerComponent } from './notes/todo-creator/colour-picker/colour-picker.component';
import { TodoService } from './services/todo.service' ;


@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    NotesComponent,
    TodoCardComponent,
    TodoCreatorComponent,
    ColourPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
