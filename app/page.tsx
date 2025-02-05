import Colum from "@/features/shared/ui/colum";
import Columns from "@/features/shared/ui/columns";
import { Todo, TodoStatus } from "@/features/todo/definitions";
import { v4 } from "uuid"

const todos: Todo[] = [
  { id: v4(), title: "survey new app", description: "lorem ipsum dolor. imae", status: TodoStatus.todo },
  { id: v4(), title: "deploy new app", description: "lorem ipsum dolor. imae", status: TodoStatus.progress },
  { id: v4(), title: "code new app", description: "lorem ipsum dolor. imae", status: TodoStatus.done },
  { id: v4(), title: "perform another task", description: "lorem ipsum dolor. imae", status: TodoStatus.todo },
]





export default function Home() {
  return (
    <div className="min-h-screen bg-slate-700 flex flex-col justify-start px-3 py-2">
      <section className="my-2">
        <h1 className="text-2xl font-bold">Todo Kanban</h1>
      </section>
      <Columns todos={todos} />


    </div>
  );
}
