import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/RX';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';

import { Todo } from '.././todo';

@Injectable()
export class TodoService {
  private todosUrl = 'api/todos'; //URL to web api
  //private todosUrl = 'http://localhost:4200/assets/todolist.json';

  constructor(private http:Http) { }

  /*getTodos() : Observable<Todo[]> {
    return this.http.get('http://abolaji-todo-list-api.herokuapp.com/api/todos').map((response: Response) => response.json());
  }
  */
  getTodos() : Promise<Todo[]> {
            return this.http.get(this.todosUrl)
               .toPromise()
               .then(response => response.json().data as Todo[])
               .catch(this.handleError);

  }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}
