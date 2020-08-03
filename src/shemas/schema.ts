import { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLSchema } from 'graphql';

import lodash from 'lodash';


const users = [

    {
        id: 1,
        firstName: 'Tomáš',
        lastName: 'Silber',
        age: 2
    },


    {
        id: 2,
        firstName: 'Patrik',
        lastName: 'Duch',
        age: 27
    }
]


const UserType =  new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString } ,
        firstName: { type: GraphQLString},
        age: {type: GraphQLInt},
    }
})



const RootQuery =  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLString
                }
            },

            resolve(args) {
                return lodash.find(users, {id: args.id})
            }
        }
    }

})



const UserSchema = new GraphQLSchema({
    query: RootQuery
});


export default UserSchema;

