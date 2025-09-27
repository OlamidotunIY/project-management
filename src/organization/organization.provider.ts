import { DataSource } from "typeorm";
import { Organization } from "./types/organization.entity";

export const organizationProvider = [
  {
    provide: 'ORGANIZATION_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Organization),
    inject: ['DATABASE_CONNECTION'],
  },
];