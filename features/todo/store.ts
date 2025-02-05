import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Todo, TodoStatus } from "./definitions";

export type TodosState = {
  todos: Todo[]
  draggedTodoId: string | null
}
export type TodosActions = {
  addTodo: (todo: Todo) => void,
  removeTodo: (id: Todo["id"]) => void,
  updateTodo: (id: Todo["id"], status: TodoStatus) => void,
  dragTodo: (id: Todo["id"] | null) => void
}
export const useTodosStore = create<TodosState & TodosActions>()(
  persist(
    set => ({
      todos: [],
      draggedTodoId: null,
      addTodo: (todo: Todo) => set((state) => ({
        todos: [todo, ...state.todos]
      })),
      removeTodo: (id: Todo["id"]) => set((state) => ({
        todos: [...state.todos.filter(todo => todo.id !== id)]
      })),
      updateTodo: (id: Todo["id"], status: TodoStatus) => set((state) => ({
        todos: state.todos.map(todo => todo.id == id ? { ...todo, status } : todo)
      })),
      dragTodo: (id: Todo["id"] | null) => set(() => ({ draggedTodoId: id }))

    }), { name: "todo-storage" , skipHydration:true}
  ))