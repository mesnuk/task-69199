import { TodoStatus } from "./enum";

export interface ITodo {
  id: number;
  name: string;
  status: TodoStatus;
}

export type FilterStatus = TodoStatus | "ALL";
