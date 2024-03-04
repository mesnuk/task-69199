import {TodoStatus} from "./enum";

export interface ITodo {
  id: number;
  name: string;
  description: string;
  status: TodoStatus
}