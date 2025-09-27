"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksProvider = void 0;
const tasks_entity_1 = require("./types/tasks.entity");
exports.tasksProvider = [
    {
        provide: 'TASK_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(tasks_entity_1.Task),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=tasks.provider.js.map