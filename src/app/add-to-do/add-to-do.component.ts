import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent implements OnInit {
  
  title: string ="";
  desc : string ="";
  @Output() addItem = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  addToDo(){
    const item = {
      title : this.title,
      desc : this.desc
    }
    this.addItem.emit(item)
  }

}
