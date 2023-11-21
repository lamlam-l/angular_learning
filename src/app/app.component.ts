import { Component } from '@angular/core';
import { Todo } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] | null = null;
  ngOnInit(): void {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => (this.todos = json.slice(0, 10)));
    }, 1000);
  }
}
