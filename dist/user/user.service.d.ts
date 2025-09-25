import { Repository } from 'typeorm';
import { User } from './types/user.enitity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAllUsers(): Promise<User[]>;
    createUser(name: string, email: string): Promise<User>;
}
