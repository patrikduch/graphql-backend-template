
import { GraphQLObjectType, GraphQLSchema, GraphQLInt } from 'graphql';
import IoC from "../ioc/inversify-config";

import { TYPES } from "../ioc/types";
import IUnitOfWork from '../typescript/interfaces/uow/IUnitOfWork';

import CompanyModel from '../models/company/CompanyModel';
import ProjectDetailSchema from '../schemas/project-detail';
import CompanyType from '../schemas/company'
import PositionType from '../schemas/position';
import UserType from '../schemas/user';





import ProjectDetail from '../models/project-detail/ProjectDetail';

import _ from 'lodash';

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

        company: {
            type: CompanyType,
            args: {id: {type: GraphQLInt}},

            resolve: async (parentValue, args) => {

                const companyResult = await Uow.getRepository(CompanyModel)
                .findById(args.id);
                
                return companyResult;

            }
        }
    }
})


const schema = new GraphQLSchema({
    query: RootQuery
});


export default schema;