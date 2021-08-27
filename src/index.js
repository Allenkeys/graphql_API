// node-graphql/src/server.js
const {ApolloServer} = require('apollo-server')
const {typeDefs} = require('./schema')
const {resolvers} = require('./resolver')

const port = process.env.PORT || 9090

new ApolloServer({resolvers, typeDefs}).listen({ port },() => console.log(`Server readt at: http://localhost:${port}`)
);
