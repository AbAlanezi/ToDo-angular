import { Component } from '@angular/core';

interface ToDo{
  id: number
  name:string
  completed:boolean
}
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  ToDos  = [
    {id: 1, name: 'First task', completed: true},
    {id: 2, name: '2nd task', completed: false}
  ]

  toggoleToDo(todo:ToDo){
   this.ToDos = this.ToDos.map(item=>{
    if(todo.id === item.id)
       item.completed = ! item.completed;

    return item
   })

  }
  deleteToDo(todo: ToDo){
  this.ToDos = this.ToDos.filter(item =>{
    return item.id !== todo.id
  })
  }

  addToDo(todo: any){
    console.log(todo);

this.ToDos.push(todo)

  }
}
