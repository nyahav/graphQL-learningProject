import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js"
import _db from "./_db.js";

const resolvers = {
        Query:{
            games(){
                return _db.games
            },
            authors(){
                return _db.authors
            },
            reviews(){
                return _db.reviews
            }
        }
}

//server setup
const server = new ApolloServer({
    //typeDefs-definitions of type of data-schema
    typeDefs,
    //resolvers-handle incoming requests
    resolvers
})

const {url}=await startStandaloneServer(server,{
    listen:{port:4000}
})

console.log('Server ready at port',4000)