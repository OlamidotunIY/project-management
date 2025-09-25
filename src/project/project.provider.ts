import { DataSource } from "typeorm";
import { Project} from "./types/project.entity"

export const projectProvide = [
    {
        provide: 'PROJECT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Project),
        inject: ['DATABASE_CONNECTION'],
    }
]