import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../.././todo';
@Component({
  selector: 'app-todo-card',
  template: `
    <div
    [ngStyle] = "{'background-color': todo.color}" 
    class="todo-card shadow-1 col-lg-6" 
    (mouseenter)= "toggle()"
    (mouseleave) = "toggle()"
    >
      <div class="icon" *ngIf = "showCheck" (click)="onChecked()">
        <i class="fa fa-check"></i>
      </div>
      <div class="col-xs-12 title">
      {{todo.title}}
      </div>
    </div>    
  `,
  styles: [`
  .todo-card {
    padding: 15px;
    border-radius: 2px;
    position: relative;
    margin: 10px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    color: rgba(0,0,0,0.8);
  }
  .icon {
    position: absolute;
    color: black;
    border: 1px solid lightgrey;
    background-color: white;
    font-size: 30px;
    top: -10px;
    left: -10px;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    cursor: pointer;
  }
  `
  ]
})
export class TodoCardComponent implements OnInit {
  @Input() todo;

  @Output() selectedEvent: EventEmitter<Todo> = new EventEmitter<Todo>();
  
  showCheck: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onChecked(todo) {
    this.selectedEvent.emit(this.todo);
  }
  
  toggle() {
    this.showCheck = !this.showCheck;
  }

}
