import { DataSource } from "typeorm";
import { Task } from "./types/tasks.entity";
export declare const tasksProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Task>;
    inject: string[];
}[];
