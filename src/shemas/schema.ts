import { GraphQLString, GraphQLObjectType, GraphQLSchema } from 'graphql';

import lodash from 'lodash';
import UserType from './user/user-schema';

const users = [

    {
        id: '1',
        firstName: 'Tomáš',
        lastName: 'Silber',
        age: 2
    },


    {
        id: '2',
        firstName: 'Patrik',
        lastName: 'Duch',
        age: 27
    }
]

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

            resolve: (_, fields) => {
                return lodash.find(users, {id: fields.id});;
            }
        }
    }

})


const UserSchema = new GraphQLSchema({
    query: RootQuery
});


export default UserSchema;

