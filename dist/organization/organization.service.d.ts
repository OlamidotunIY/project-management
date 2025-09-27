import { Repository } from 'typeorm';
import { Organization } from './types/organization.entity';
export declare class OrganizationService {
    private organizationRepository;
    constructor(organizationRepository: Repository<Organization>);
}
