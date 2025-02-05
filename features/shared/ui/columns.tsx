"use client"
import { Todo, TodoStatus } from "@/features/todo/definitions";
import Colum from "./colum";
import { useTodosStore } from "@/features/todo/store";
import AddTodoDialog from "@/features/todo/ui/add-todo-dialog";

export default function Columns({ todos }: { todos: Todo[] }) {

  const usedTodo = useTodosStore(state => state.todos)
  // const addTodo = useTodosStore(state => state.addTodo)
  // todos.map(todo => addTodo(todo))
  return (
    <div>
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