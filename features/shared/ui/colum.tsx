import { Todo } from "@/features/todo/definitions";
import TodoCard from "@/features/todo/ui/todo-card";
import { useMemo } from "react";

export default function Colum({ title, status, todos }: { title: string, status: string, todos: Todo[] }) {
  const filteredTodos = useMemo(() => todos.filter(todo => todo.status.toString() === status), [
    todos, status
  ])

  return (
    <div className="bg-slate-300 rounded-lg border border-slate-400 w-full h-full px-3 py-2
    min-h-[600px]">
      <h2 className="text-2xl text-slate-700 font-semibold">{title}</h2>
      <div className="py-2 px-3 h-auto rounded-lg">
        {filteredTodos && filteredTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}