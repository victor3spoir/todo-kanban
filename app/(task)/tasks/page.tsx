import Columns from "@/features/shared/ui/columns";

export default function TasksPage() {

  return (
    <div className="min-h-screen bg-slate-700 flex flex-col justify-start px-3 py-2">
      <section className="my-2">
        <h1 className="text-2xl font-bold">Todo Kanban</h1>
      </section>
      <Columns todos={[]} />
    </div>
  )
}