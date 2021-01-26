import { Task } from './task.model';

export class Chapter {
  id: number;
  number: number;
  name: string;
  description: string;
  tasks: Array<Task>;
}
