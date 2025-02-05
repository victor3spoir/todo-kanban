import Colum from "@/features/shared/ui/colum";
import { Todo, TodoStatus } from "@/features/todo/definitions";


const todos: Todo[] = [
  { id: "1", title: "survey new app", description: "lorem ipsum dolor. imae", status: TodoStatus.todo },
  { id: "2", title: "deploy new app", description: "lorem ipsum dolor. imae", status: TodoStatus.progress },
  { id: "3", title: "code new app", description: "lorem ipsum dolor. imae", status: TodoStatus.done },
  { id: "4", title: "perform another task", description: "lorem ipsum dolor. imae", status: TodoStatus.todo },
]





export default function Home() {
  return (
    <div className="min-h-screen bg-slate-700 flex flex-col justify-start px-3 py-2">
      <section className="my-2">
        <h1 className="text-2xl font-bold">Todo Kanban</h1>
      </section>

      <section className="w-full h-full min-h-[700px] flex gap-5 justify-start ">
        <Colum title="Todos" status={TodoStatus.todo} todos={todos} />
        <Colum title="Progress" status={TodoStatus.progress} todos={todos} />
        <Colum title="Done" status={TodoStatus.done} todos={todos} />
      </section>

    </div>
  );
}
