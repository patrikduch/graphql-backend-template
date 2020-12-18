import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

/**
 * ProjectDetail node type definition.
 */
const ProjectDetailType =  new GraphQLObjectType({
    name: 'ProjectDetail',
    fields: {
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        domainUrl: { type: GraphQLString }
    }
})


export default ProjectDetailType;