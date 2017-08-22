import { Component, OnInit } from '@angular/core';

import { Todo } from '.././todo';
import { TodoService } from '../services/todo.service' ;
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos: Todo[] = [];
  onTodoChecked(todo,i){
    this.todos.splice(i,1)
  }

  addTodo(todo){
    this.todos.push(todo)
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
  this.todoService.getTodos().then(todos => this.todos = todos);
}

}