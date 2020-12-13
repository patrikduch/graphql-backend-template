import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';

/**
 * User node type definition.
 */
const UserType =  new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLInt },
        firstName: {type: GraphQLString},
        surname: {type: GraphQLString},
        age: {type: GraphQLInt}
    }   
})

export default UserType;