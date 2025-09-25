"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const typeorm_1 = require("typeorm");
const user_enitity_1 = require("../../user/types/user.enitity");
const project_entity_1 = require("../../project/types/project.entity");
let Team = class Team {
    id;
    name;
    description;
    createdAt;
    updatedAt;
    members;
    projects;
    lead;
};
exports.Team = Team;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Team.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Team.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Team.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Team.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Team.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_enitity_1.User, (user) => user),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Team.prototype, "members", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => project_entity_1.Project, (project) => project.teams),
    __metadata("design:type", Array)
], Team.prototype, "projects", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_enitity_1.User, { nullable: true }),
    __metadata("design:type", user_enitity_1.User)
], Team.prototype, "lead", void 0);
exports.Team = Team = __decorate([
    (0, typeorm_1.Entity)()
], Team);
//# sourceMappingURL=team.entity.js.map