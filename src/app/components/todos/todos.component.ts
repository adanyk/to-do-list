import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = [
    { content: 'First todo', completed: false },
    { content: 'Second todo', completed: true }
  ];
  inputTodo: string = "";

  toggleDone(id: number): void {
    this.todos[id].completed = !this.todos[id].completed;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((_, index) => index !== id);
  }

  addTodo(): void {
    if (this.inputTodo.trim()) {
      this.todos.push({ content: this.inputTodo, completed: false });
      this.inputTodo = "";
    }
  }
}
