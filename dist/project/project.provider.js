"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectProvide = void 0;
const project_entity_1 = require("./types/project.entity");
exports.projectProvide = [
    {
        provide: 'PROJECT_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(project_entity_1.Project),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=project.provider.js.map