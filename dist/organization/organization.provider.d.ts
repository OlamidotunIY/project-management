import { DataSource } from "typeorm";
import { Organization } from "./types/organization.entity";
export declare const organizationProvider: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Organization>;
    inject: string[];
}[];
