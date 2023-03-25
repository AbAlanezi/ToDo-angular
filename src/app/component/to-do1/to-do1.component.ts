import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

interface ToDo{
  id: number
  title:string
  completed:boolean
}
@Component({
  selector: 'app-to-do1',
  templateUrl: './to-do1.component.html',
  styleUrls: ['./to-do1.component.css']
})

export class ToDo1Component implements OnInit {

 @Input() todo!: ToDo ;
 @Output() toggoleEvent = new EventEmitter();
 @Output() deleteEvent = new EventEmitter();

 constructor(){}

  ngOnInit(): void {


  }
  toggle(todo: ToDo){
    this.toggoleEvent.emit(todo)

  }
  delete(todo: ToDo){
      this.deleteEvent.emit(todo)
  }
}
