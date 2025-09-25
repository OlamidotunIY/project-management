import { Organization } from '../../organization/types/organization.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    username: string;
    profilePictureUrl: string;
    createdAt: Date;
    updatedAt: Date;
    organizations: Organization[];
}
