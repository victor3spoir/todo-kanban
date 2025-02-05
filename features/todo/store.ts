import { create } from "zustand";
import { Todo, TodoStatus } from "./definitions";

export type TodosState = {
  todos: Todo[]
}
export type TodosActions = {
  addTodo: (todo: Todo) => void,
  removeTodo: (id: Todo["id"]) => void,
  updateTodo: (id: Todo["id"], status: TodoStatus) => void
}
export const useTodosStore = create<TodosState & TodosActions>((set) => ({
  todos: [],
  addTodo: (todo: Todo) => set((state) => ({
    todos: [todo, ...state.todos]
  })),
  removeTodo: (id: Todo["id"]) => set((state) => ({
    todos: [...state.todos.filter(todo => todo.id !== id)]
  })),
  updateTodo: (id: Todo["id"], status: TodoStatus) => set((state) => ({
    todos: state.todos.map(todo => todo.id == id ? { ...todo, status } : todo)
  })),

}))