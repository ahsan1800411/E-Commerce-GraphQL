const { ApolloServer } = require('apollo-server');
const { products, categories, reviews } = require('./db');
const { Category } = require('./resolvers/Category');
const { Product } = require('./resolvers/Product');
const { Query } = require('./resolvers/Query');
const { typeDefs } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    products,
    categories,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
