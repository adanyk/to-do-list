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
  todos: Todo[] = [];
  inputTodo: string = "";

  constructor() {
    this.loadTodos();
  }

  loadTodos(): void {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleDone(id: number): void {
    this.todos[id].completed = !this.todos[id].completed;
    this.saveTodos();
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((_, index) => index !== id);
    this.saveTodos();
  }

  addTodo(): void {
    if (this.inputTodo.trim()) {
      this.todos.push({ content: this.inputTodo, completed: false });
    }
    this.inputTodo = "";
    this.saveTodos();
  }
}
