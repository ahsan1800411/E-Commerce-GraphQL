const { gql } = require('apollo-server');
exports.typeDefs = gql`
  type Query {
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category!
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    categoryId: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category!
    reviews: [Review!]!
  }
  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
  }
  type Review {
    id: ID!
    productId: String!
    date: String!
    rating: Float!
    comment: String!
    title: String!
  }
  input ProductsFilterInput {
    onSale: Boolean
    avgRating: Int
  }
`;
