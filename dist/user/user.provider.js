"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProvider = void 0;
const user_enitity_1 = require("./types/user.enitity");
exports.userProvider = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(user_enitity_1.User),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=user.provider.js.map