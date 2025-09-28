import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { organizationProvider } from './organization.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [OrganizationService, ...organizationProvider],
  controllers: [OrganizationController]
})
export class OrganizationModule {}
