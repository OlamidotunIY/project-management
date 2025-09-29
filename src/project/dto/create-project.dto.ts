import { IsString, IsOptional, IsEnum, IsMongoId, IsArray } from 'class-validator';
import { ProjectStatus } from '../types/project.enum';

export class CreateProjectDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(ProjectStatus)
  status?: ProjectStatus;

  @IsOptional()
  @IsMongoId()
  ownerId?: string;

  @IsOptional()
  @IsMongoId()
  organizationId?: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  teamIds?: string[];
}
