const { gql } = require("apollo-server");

const typeDefs = gql`
  type Course {
    id: ID!
    title: String!
    description: String!
    author: String!
    link: String!
    slug: String!
    price: Int!
    coverImage: String!
  }
  type Query {
    courses: [Course!]!
  }
`;

module.exports = { typeDefs };
