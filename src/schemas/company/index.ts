import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

/**
 * Company node type definition.
 */
const CompanyType = new GraphQLObjectType({

    name: 'Company',

    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
    }
});

export default CompanyType;