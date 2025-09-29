import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task } from './types/tasks.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private tasksRepository: Repository<Task>,
  ) {}

  async create(dto: CreateTaskDto): Promise<Task> {
  const task = new Task();
  Object.assign(task, dto as any);

  if (dto.projectId) task.projectId = new ObjectId(dto.projectId);
  if (dto.assigneeId) task.assigneeId = new ObjectId(dto.assigneeId);
  if (dto.teamId) task.teamId = new ObjectId(dto.teamId);
  if (dto.reporterId) task.reporterId = new ObjectId(dto.reporterId);
  if (dto.teamOwnerId) task.teamOwnerId = new ObjectId(dto.teamOwnerId);

  return this.tasksRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({ _id: new ObjectId(id) });
    if (!task) throw new BadRequestException('Task not found');
    return task;
  }

  async update(id: string, dto: UpdateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({ _id: new ObjectId(id) });
    if (!task) throw new BadRequestException('Task not found');

    if (dto.projectId) (dto as any).projectId = new ObjectId(dto.projectId);
    if (dto.assigneeId) (dto as any).assigneeId = new ObjectId(dto.assigneeId);
    if (dto.teamId) (dto as any).teamId = new ObjectId(dto.teamId);
    if (dto.reporterId) (dto as any).reporterId = new ObjectId(dto.reporterId);
    if (dto.teamOwnerId) (dto as any).teamOwnerId = new ObjectId(dto.teamOwnerId);

    Object.assign(task, dto as any);
    return this.tasksRepository.save(task);
  }

  async remove(id: string): Promise<Task> {
    const task = await this.tasksRepository.findOneBy({ _id: new ObjectId(id) });
    if (!task) throw new BadRequestException('Task not found');

    return this.tasksRepository.remove(task);
  }
}
