"use client"
import { FormEvent } from "react";
import { useTodosStore } from "../store"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { v4 } from "uuid";
import { Todo, TodoStatus } from "../definitions";

export default function AddTodoDialog() {
  const addTodo = useTodosStore(s => s.addTodo);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { title, description } = Object.fromEntries(formData)
    if (typeof title !== "string" || typeof description !== "string") return;

    const _todo: Todo = { id: v4(), title, description, status: TodoStatus.todo }
    console.log(_todo)
    addTodo(_todo)
  }

  return (
    <div className="mb-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add todo</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add new task</DialogTitle>
            <DialogDescription>
              Add new task to the board
            </DialogDescription>
          </DialogHeader>
          <form method="post" className="grid gap-4 py-4" onSubmit={handleSubmit} name="todo-form"
            id="todo-form">
            <div className="items-center gap-4">
              <Input id="title" name="title" placeholder="new todo..." className="col-span-3" />
            </div>
            <div className="items-center gap-4">
              <Textarea id="description" name="description" className="col-span-3" rows={3}
              placeholder="todo description..."/>
            </div>
          </form>
          <DialogFooter>
            <DialogTrigger asChild>
              <Button type="submit" form="todo-form">Add</Button>
            </DialogTrigger>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}