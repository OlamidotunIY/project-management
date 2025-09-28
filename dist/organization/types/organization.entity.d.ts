import { ObjectId } from "typeorm";
export declare class Organization {
    _id: ObjectId;
    name: string;
    description?: string;
    logoUrl?: string;
    createdAt: Date;
    updatedAt: Date;
    userId: ObjectId;
}
