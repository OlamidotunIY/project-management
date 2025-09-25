import { DataSource } from "typeorm";
import { Team } from "./types/team.entity";

export const teamProvider = [
    {
    provide : 'TEAM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Team),
    inject: ['DATABASE_CONNECTION'],
    },
]