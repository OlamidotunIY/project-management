import { DataSource } from "typeorm";
import { Project } from "./types/project.entity";
export declare const projectProvide: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Project>;
    inject: string[];
}[];
