import { DataSource } from "typeorm";
import { User } from "./types/user.enitity";
export declare const userProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<User>;
    inject: string[];
}[];
