import { DataSource } from "typeorm";
import { Task } from "./types/tasks.entity";

export const tasksProvider = [
  {
    provide: 'TASK_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Task),
    inject: ['DATABASE_CONNECTION'],
  },
];