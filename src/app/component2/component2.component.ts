import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../Todo';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input() 'todo': ToDo 
  @Output() deleteToDo  = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  delete(todo: ToDo){
    console.log("clicked delete button")
    this.deleteToDo.emit(todo)
  }
}
