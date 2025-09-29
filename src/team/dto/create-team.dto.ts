import { IsString, IsOptional, IsMongoId } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsMongoId({ each: true })
  memberIds?: string[];

  @IsOptional()
  @IsMongoId({ each: true })
  projectIds?: string[];

  @IsOptional()
  @IsMongoId()
  teamLeadId?: string;
}
