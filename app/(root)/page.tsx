import { Button } from "@/components/ui/button";
import { Link2Icon } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#c7ccd0] flex flex-col justify-start px-3 py-2">
      <div className="flex justify-end">
      </div>
      <div className="grow text-gray-900 flex flex-col items-center justify-center bg-[url('/images/todo-list.jpg')]
      bg-no-repeat bg-cover">
        <div className="py-5 bg-slate-200 bg-opacity-30 rounded-lg ">
          <h1 className="my-5 text-5xl font-bold  text-center">Welcome on todo-kanban application</h1>
          <p className="text my-5 text-2xl text-center">We help you manage your task straighforwardly</p>
          <div className="flex items-center justify-center">
            <Button asChild>
              <Link href={"/tasks"}>
                <Link2Icon /> <span>Get Started</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
