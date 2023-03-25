import { Component } from '@angular/core';
import ToDo from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

// interface ToDo{
//   id: number
//   name:string
//   completed:boolean
// }
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

  ToDos!: ToDo[];
  constructor(private todoService: TodoService){

  }
  ngOnInit(): void{
    this.todoService.getTodo()
    .subscribe(todo => {
      this.ToDos= todo
    })
  }

  toggoleToDo(todo:ToDo){
    todo.completed = ! todo.completed;
    this.updateTodo(todo)

  }

  updateTodo(todo: ToDo){
    this.todoService.update(todo).subscribe(()=>{
      this.ToDos = this.ToDos.map(item=>{
        if(todo.id === item.id){
         return todo
        }

        return item
      })
   })
  }
  deleteToDo(todo: ToDo){
  this.todoService.delete(todo.id).subscribe(()=>{
    this.ToDos = this.ToDos.filter(item =>{
      return item.id !== todo.id
    })
  })

  }

  addToDo(todo: any){
    this.todoService.add(todo).subscribe((newToDo)=>{
      console.log(todo, newToDo);

      this.ToDos.push(newToDo)

    })


  }
}
