import { Component, OnInit } from '@angular/core';
import { ToDo } from '../Todo';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  todos : ToDo[]=[]
  localToDos
  constructor() {
    this.localToDos = localStorage.getItem("todos")
    if(this.localToDos !== null){
    this.todos = JSON.parse(this.localToDos)
    }
   }

  ngOnInit(): void {
  }
   
  deleteItem(item : ToDo){
    console.log(item)
    const index = this.todos.indexOf(item);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
  addToDoItem(item : ToDo){
    this.todos.push(item)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
