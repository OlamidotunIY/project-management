import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';
import { Project } from './types/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {

    constructor(
    @Inject('PROJECT_REPOSITORY')
    private projectRepository: Repository<Project>,
  ) {}

  async create(dto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepository.create(dto);

    if (dto.ownerId) project.ownerId = new ObjectId(dto.ownerId);
    if (dto.organizationId) project.organizationId = new ObjectId(dto.organizationId);
    if (dto.teamIds) project.teamIds = dto.teamIds.map(id => new ObjectId(id));

    return this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.projectRepository.findOneBy({ _id: new ObjectId(id) });
    if (!project) throw new BadRequestException('Project not found');
    return project;
  }

  async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    const project = await this.projectRepository.findOneBy({ _id: new ObjectId(id) });
    if (!project) throw new BadRequestException('Project not found');

    if (dto.ownerId) project.ownerId = new ObjectId(dto.ownerId);
    if (dto.organizationId) project.organizationId = new ObjectId(dto.organizationId);
    if (dto.teamIds) project.teamIds = dto.teamIds.map(id => new ObjectId(id));

    Object.assign(project, dto);
    return this.projectRepository.save(project);
  }

  async remove(id: string): Promise<Project> {
    const project = await this.projectRepository.findOneBy({ _id: new ObjectId(id) });
    if (!project) throw new BadRequestException('Project not found');

    return this.projectRepository.remove(project);
  }
}
