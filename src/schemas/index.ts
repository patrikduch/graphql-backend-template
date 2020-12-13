
import { GraphQLObjectType, GraphQLSchema, GraphQLInt } from 'graphql';
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
            args: {id: {type: GraphQLInt}},

            resolve: async (parentValue, args) => {
                
                const projectDetailResult = await Uow.getRepository(ProjectDetail)
                    .findById(args.id, {attributes: ['name']});

                return projectDetailResult;
            }
        },
    }

})


const schema = new GraphQLSchema({
    query: RootQuery
});


export default schema;