import { DataSource } from "typeorm";
import { Team } from "./types/team.entity";
export declare const teamProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Team>;
    inject: string[];
}[];
