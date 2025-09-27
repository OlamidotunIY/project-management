import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { organizationProvider } from './organization.provider';

@Module({
  providers: [OrganizationService, ...organizationProvider],
  controllers: [OrganizationController]
})
export class OrganizationModule {}
