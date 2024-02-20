import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosComponent } from './todos.component';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    component.todos = [
      { content: 'Initial todo', completed: false },
      { content: 'Second todo', completed: true }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle between completed and not completed', () => {
    const initialCompletedStatus = component.todos[0].completed;
    
    component.toggleDone(0);
    expect(component.todos[0].completed).not.toBe(initialCompletedStatus);
    component.toggleDone(0);
    expect(component.todos[0].completed).toBe(initialCompletedStatus);
  });

  it('should delete todo', () => {
    const initialNumberOfTodos = component.todos.length;
    const todoToDelete = component.todos[0];

    component.deleteTodo(0);
    
    expect(component.todos).toHaveLength(initialNumberOfTodos - 1);
    expect(component.todos.includes(todoToDelete)).toBe(false);
  });

  it('should add todo and reset input field', () => {
    const initialNumberOfTodos = component.todos.length;
    component.inputTodo = "fake-todo";

    component.addTodo();

    expect(component.todos).toHaveLength(initialNumberOfTodos + 1);
    expect(component.todos[initialNumberOfTodos]).toStrictEqual({ content: "fake-todo", completed: false });
    expect(component.inputTodo).toBe("");
  });

  it('should not add todo when input is empty or has only white spaces, but still reset input field', () => {
    const initialTodos = component.todos;
    component.inputTodo = "";

    component.addTodo();
    component.inputTodo = "    ";
    component.addTodo();

    expect(component.todos).toBe(initialTodos);
    expect(component.inputTodo).toBe("");
  });
});
