import { IsMongoId } from 'class-validator';

export class MongoIdParamDto {
  @IsMongoId({ message: 'Invalid ID format. Must be a MongoDB ObjectId' })
  id: string;
}
