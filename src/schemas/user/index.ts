import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
import CompanyType from '../company';


import IoC from '../../ioc/inversify-config';
import { TYPES } from '../../ioc/types';
import IUnitOfWork from '../../typescript/interfaces/uow/IUnitOfWork';
import CompanyModel from '../../models/company/CompanyModel';

const Uow = IoC.get<IUnitOfWork>(TYPES.IUnitOfWork);


/**
 * User node type definition.
 */
const UserType =  new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLInt },
        firstName: {type: GraphQLString},
        surname: {type: GraphQLString},
        age: {type: GraphQLInt},

        company: {
            type: CompanyType,
            resolve: async(parentValue, args) => {

                const companyResult = await Uow.getRepository(CompanyModel)
                .findById(parentValue.dataValues.companyId);

                return companyResult;
            }
        }
    }   
})

export default UserType;