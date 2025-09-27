import { ObjectId } from 'typeorm';
export declare class User {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    username: string;
    profilePictureUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}
