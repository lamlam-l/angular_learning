import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../products';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[] = [];
  todoJson = JSON.stringify(this.todos);
  constructor() {}

  ngOnInit(): void {}
}
