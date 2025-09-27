import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Organization } from './types/organization.entity';

@Injectable()
export class OrganizationService {
    constructor(
        @Inject('ORGANIZATION_REPOSITORY') private organizationRepository: Repository<Organization>,
      ) {}
      
}
