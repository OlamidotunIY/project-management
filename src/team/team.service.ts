import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Team } from './types/team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ObjectId } from 'mongodb';


@Injectable()
export class TeamService {
    constructor(
    @Inject('TEAM_REPOSITORY')
    private teamRepository: Repository<Team>,
  ) {}

  async create(dto: CreateTeamDto): Promise<Team> {
    const team = new Team();
    Object.assign(team, dto as any);

    if (dto.teamLeadId) team.teamLeadId = new ObjectId(dto.teamLeadId);
    if (dto.memberIds) team.memberIds = dto.memberIds.map(id => new ObjectId(id));
    if (dto.projectIds) team.projectIds = dto.projectIds.map(id => new ObjectId(id));

    return this.teamRepository.save(team);
  }

  async findAll(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  async findOne(id: string): Promise<Team> {
    const team = await this.teamRepository.findOneBy({ _id: new ObjectId(id) });
    if (!team) throw new BadRequestException('Team not found');
    return team;
  }

  async update(id: string, dto: UpdateTeamDto): Promise<Team> {
    const team = await this.teamRepository.findOneBy({ _id: new ObjectId(id) });
    if (!team) throw new BadRequestException('Team not found');

    if (dto.teamLeadId) (dto as any).teamLeadId = new ObjectId(dto.teamLeadId);
    if (dto.memberIds) (dto as any).memberIds = dto.memberIds.map(id => new ObjectId(id));
    if (dto.projectIds) (dto as any).projectIds = dto.projectIds.map(id => new ObjectId(id));

    Object.assign(team, dto as any);
    return this.teamRepository.save(team);
  }

  async remove(id: string): Promise<Team> {
    const team = await this.teamRepository.findOneBy({ _id: new ObjectId(id) });
    if (!team) throw new BadRequestException('Team not found');

    return this.teamRepository.remove(team);
  }
}
