"use client"
import { Todo, TodoStatus } from "@/features/todo/definitions";
import Colum from "./colum";
import { useTodosStore } from "@/features/todo/store";
import AddTodoDialog from "@/features/todo/ui/add-todo-dialog";

export default function Columns({ todos }: { todos: Todo[] }) {

  const usedTodo = useTodosStore(state => state.todos)
  const draggedTodoId = useTodosStore(state => state.draggedTodoId)
  const addTodo = useTodosStore(state => state.addTodo)
  
  for (const todo of todos) {
    // addTodo(todo)
    console.log("sdfdsfds", todo.id, todo.title)
  }
  return (
    <div>
      <h1>Dragged: {draggedTodoId}</h1>
      <div>
        <AddTodoDialog />
      </div>
      <section className="w-full h-full min-h-[700px] flex gap-5 justify-start ">
        <Colum title="Todos" status={TodoStatus.todo} todos={usedTodo} />
        <Colum title="Progress" status={TodoStatus.progress} todos={usedTodo} />
        <Colum title="Done" status={TodoStatus.done} todos={usedTodo} />
      </section>
    </div>
  )
}