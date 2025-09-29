import { IsString, IsOptional, IsUrl, Length, IsMongoId, IsArray } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @Length(3, 50, { message: 'Organization name must be 3-50 characters' })
  name: string;

  @IsOptional()
  @IsString()
  @Length(0, 200, { message: 'Description max 200 characters' })
  description?: string;

  @IsOptional()
  @IsUrl({}, { message: 'logoUrl must be a valid URL' })
  logoUrl?: string;

  // incoming ownerId should be a string representing a MongoDB ObjectId
  @IsOptional()
  @IsMongoId({ message: 'ownerId must be a valid MongoDB id' })
  ownerId?: string;

  // array of member ids (each must be a mongo id)
  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true, message: 'each memberId must be a valid mongo id' })
  memberIds?: string[];
}
