import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Organization } from './types/organization.entity';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class OrganizationService {
  constructor(
    @Inject('ORGANIZATION_REPOSITORY')
    private organizationRepository: Repository<Organization>,
  ) {}

  async create(dto: CreateOrganizationDto): Promise<Organization> {
    const exists = await this.organizationRepository.findOneBy({ name: dto.name });
    if (exists) throw new BadRequestException('Organization name already exists');

  const org = new Organization();
  Object.assign(org, dto as any);

  if (dto.ownerId) org.ownerId = new ObjectId(dto.ownerId);
  if (dto.memberIds) org.memberIds = dto.memberIds.map(id => new ObjectId(id));

  return this.organizationRepository.save(org);
  }

  async findAll(): Promise<Organization[]> {
    return this.organizationRepository.find();
  }

  async findOne(id: string): Promise<Organization> {
    const org = await this.organizationRepository.findOneBy({ _id: new ObjectId(id) });
    if (!org) throw new BadRequestException('Organization not found');
    return org;
  }

  async update(id: string, dto: UpdateOrganizationDto): Promise<Organization> {
    const org = await this.organizationRepository.findOneBy({ _id: new ObjectId(id) });
    if (!org) throw new BadRequestException('Organization not found');

    if (dto.ownerId) (dto as any).ownerId = new ObjectId(dto.ownerId);
    if (dto.memberIds) (dto as any).memberIds = dto.memberIds.map(m => new ObjectId(m));

    Object.assign(org, dto as any);
    return this.organizationRepository.save(org);
  }

  async remove(id: string): Promise<Organization> {
    const org = await this.organizationRepository.findOneBy({ _id: new ObjectId(id) });
    if (!org) throw new BadRequestException('Organization not found');

    return this.organizationRepository.remove(org);
  }
}
