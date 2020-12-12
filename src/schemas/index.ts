
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import ProjectDetailSchema from '../schemas/project-detail';


import IoC from "../ioc/inversify-config";
import { TYPES } from "../ioc/types";
import IUnitOfWork from '../typescript/interfaces/uow/IUnitOfWork';
import ProjectDetail from '../models/project-detail/ProjectDetail';

const Uow = IoC.get<IUnitOfWork>(TYPES.IUnitOfWork);

const RootQuery =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        projectDetail: {
            type: ProjectDetailSchema,
            resolve: async (_) => {
                const projectDetailResult = await Uow.getRepository(ProjectDetail).findFirst();
                return projectDetailResult;
            }
        },
    }

})


const schema = new GraphQLSchema({
    query: RootQuery
});


export default schema;