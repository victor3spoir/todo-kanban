export enum TodoStatus {
  todo = "todo", progress = "progress", done = "done"
}
export type Todo = {
  id?: string,
  status: TodoStatus,
  title: string,
  description?: string,
}