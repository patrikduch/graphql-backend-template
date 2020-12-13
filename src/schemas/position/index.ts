import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

/**
 * Position node type definition.
 */
const PositionType = new GraphQLObjectType({

    name: 'Position',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    }

});

export default PositionType;