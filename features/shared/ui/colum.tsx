import { Todo } from "@/features/todo/definitions";
import TodoCard from "@/features/todo/ui/todo-card";

export default function Colum({ title, status, todos }: { title: string, status: string, todos: Todo[] }) {
  const filteredTodos = todos.filter(todo => todo.status.toString() === status)

  return (
    <div className="bg-slate-300 rounded-lg border border-slate-400 w-full h-full px-3 py-2
    min-h-[600px]">
      <h2 className="text-2xl text-slate-700 font-semibold">{title}</h2>
      <div className="py-2 px-3">
        {filteredTodos && filteredTodos.map((todo) => (
          <TodoCard key={todo.id} todo={todo}/>
        ))}
      </div>
    </div>
  )
}