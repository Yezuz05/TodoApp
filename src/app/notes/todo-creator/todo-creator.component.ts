import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../.././todo';
@Component({
  selector: 'app-todo-creator',
  templateUrl: './todo-creator.component.html',
  styleUrls: ['./todo-creator.component.css']
})
export class TodoCreatorComponent implements OnInit {

  @Output() submitEvent: EventEmitter<Todo> = new EventEmitter<Todo>();
  colors: Array<string> = ['#B19CD9','#FF6961','#77DD77','#AEC6CF','#F49AC2','white']
   newTodo:Todo = {
    title:'',
    color:''
   }
   fullForm: boolean = false;
   createTodo(){
    const {title, color} = this.newTodo;
    if(title && color){
      this.submitEvent.emit({title,color});
      this.reset();
    }
   }
   reset(){
     this.newTodo = {
       title:'',
       color:'white'
     }
   }
  constructor() { }

  ngOnInit() {
  }
  toggleForm(value: boolean){
    this.fullForm = value;
  }
  onColorSelect(color: string){
    this.newTodo.color = color
  }

}
