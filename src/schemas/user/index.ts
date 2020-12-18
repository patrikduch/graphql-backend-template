
import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

import IoC from '../../ioc/inversify-config';
import { TYPES } from '../../ioc/types';
import IUnitOfWork from '../../typescript/interfaces/uow/IUnitOfWork';

// models
import CompanyModel from '../../models/company/CompanyModel';
import PositionModel from '../../models/position/PositionModel';

// schema types
import CompanyType from '../company';
import PositionType from '../position';


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
        },

        position: {
            type: PositionType,
            resolve: async (parentValue, args) => {

                const positionResult = await Uow.getRepository(PositionModel)
                .findById(parentValue.dataValues.positionId);

                return positionResult;
            }

        }
    }   
})

export default UserType;


