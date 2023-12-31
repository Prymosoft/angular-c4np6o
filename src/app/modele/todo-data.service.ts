import { Injectable } from '@angular/core';

@Injectable()
export class TodoDataService {
  todos: Todo[] = [];
  id: number = this.todos.length;

  constructor() {}

  getTodos(): Todo[] {
    return JSON.parse(JSON.stringify(this.todos));
  }

  createTodo(label: string): void {
    this.todos.push({
      label: label,
      done: false,
      id: this.id,
      creationDate: new Date().valueOf(),
    });
    this.id += 1;
  }

  updateTodo(todo: Todo): void {
    var index = this.todos.findIndex((t) => t.id === todo.id);
    this.todos[index] = todo;
  }
}
