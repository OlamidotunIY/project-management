import { User } from "../../user/types/user.enitity";
export declare class Organization {
    id: number;
    name: string;
    description: string;
    logoUrl: string;
    createdAt: Date;
    updatedAt: Date;
    owner: User;
    userId: number;
}
