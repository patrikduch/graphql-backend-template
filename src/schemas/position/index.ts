import { GraphQLObjectType, GraphQLInt } from 'graphql';


/**
 * Position node type definition.
 */
const PositionType = new GraphQLObjectType({

    name: 'Position',
    fields: {
        id: { type: GraphQLInt },
    }

});

export default PositionType;