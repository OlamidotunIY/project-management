"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamProvider = void 0;
const team_entity_1 = require("./types/team.entity");
exports.teamProvider = [
    {
        provide: 'TEAM_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(team_entity_1.Team),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=team.provider.js.map