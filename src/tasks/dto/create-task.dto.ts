import { IsString, IsOptional, IsEnum, IsDateString, IsMongoId } from 'class-validator';
import { TaskStatus, TaskPriority } from  '../types/tasks.enum'

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority;

  @IsOptional()
  @IsDateString()
  dueDate?: Date;

  @IsOptional()
  @IsMongoId()
  projectId?: string;

  @IsOptional()
  @IsMongoId()
  assigneeId?: string;

  @IsOptional()
  @IsMongoId()
  teamId?: string;

  @IsOptional()
  @IsMongoId()
  reporterId?: string;

  @IsOptional()
  @IsMongoId()
  teamOwnerId?: string;
}
