import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrganizationModule } from './organization/organization.module';
import { ProjectModule } from './project/project.module';
import { TeamModule } from './team/team.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [UserModule, OrganizationModule, ProjectModule, TeamModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
