import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './types/tasks.entity';

@Injectable()
export class TasksService {
    constructor(
        @Inject('TASK_REPOSITORY') private tasksRepository: Repository<Task>,
    ) {}
}
