"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationProvider = void 0;
const organization_entity_1 = require("./types/organization.entity");
exports.organizationProvider = [
    {
        provide: 'ORGANIZATION_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(organization_entity_1.Organization),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=organization.provider.js.map