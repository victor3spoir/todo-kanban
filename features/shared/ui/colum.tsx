import { Todo, TodoStatus } from "@/features/todo/definitions";
import { useTodosStore } from "@/features/todo/store";
import TodoCard from "@/features/todo/ui/todo-card";
import { useMemo } from "react";

export default function Colum({ title, status, todos }: { title: string, status: TodoStatus, todos: Todo[] }) {
  const filteredTodos = useMemo(() => todos.filter(todo => todo.status.toString() === status), [
    todos, status
  ])
  const updateTodo = useTodosStore(s => s.updateTodo)
  const draggedTodoId = useTodosStore(s => s.draggedTodoId)
  const dragTodo = useTodosStore(s => s.dragTodo)

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!draggedTodoId) return null
    updateTodo(draggedTodoId, status as TodoStatus)
    dragTodo(null)
  }

  return (
    <div className="bg-slate-300 rounded-lg border border-slate-400 w-full h-full px-3 py-2
    min-h-[600px]"  onDrop={handleDrop} onDragOver={(e) => { e.preventDefault() }}>
      <h2 className="text-2xl text-slate-700 font-semibold">{title}</h2>
      <div className="py-2 px-3 h-auto rounded-lg min-h-[200px] overflow-y-scroll"
      >
        {filteredTodos && filteredTodos.map((todo, index) => (
          <TodoCard key={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}