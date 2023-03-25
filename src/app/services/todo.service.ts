import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import ToDo from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private http: HttpClient) { }

  getTodo(): Observable<ToDo[]>{
   return this.http.get <ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
  }

  delete(id: number){
    return this.http.delete<ToDo[]>('https://jsonplaceholder.typicode.com/todos/' + id)
  }

  update(todo: ToDo){
    return this.http.put('https://jsonplaceholder.typicode.com/todos/' + todo.id, todo)
  }

  add(todo: ToDo): Observable<ToDo>{
    return this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos' ,  todo)
  }
}
