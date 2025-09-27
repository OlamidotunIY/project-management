import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { teamProvider } from './team.provider'
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamController],
  providers: [TeamService, ...teamProvider]
})
export class TeamModule {}
