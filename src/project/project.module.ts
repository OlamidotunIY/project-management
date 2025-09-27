import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { projectProvide } from './project.provider';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, ...projectProvide ]
})
export class ProjectModule {}
