import { cn } from "@/lib/utils";
import { Todo, TodoStatus } from "../definitions";
import { Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button";

export default function TodoCard({ todo: { title, description, status } }: { todo: Todo }) {

  return (
    <article className={cn("py-2 px-3 rounded-md my-2 bg-white w-full",
      "flex items-center justify-between hover:shadow-md transition-all",
      {
        "border-2  border-sky-400": status == TodoStatus.todo,
        "border-2  border-red-300": status == TodoStatus.progress,
        "border-2  border-green-500": status == TodoStatus.done,
      }
    )}
      draggable={true}>
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
      <div>
        <Button variant={"ghost"}><Trash2Icon /></Button>
      </div>
    </article>
  )
}