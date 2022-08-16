const { gql } = require("apollo-server");

const typeDefs = gql`
  type Course {
    id: ID!
    title: String!
    description: String!
    author: Author!
    link: String!
    slug: String!
    price: Int!
    coverImage: String!
  }

  type Author {
    id: ID!
    email: String!
    name: String!
    company_name: String!
    courses: [Course!]
  }

  type Query {
    courses(limit: Int, offset: Int): CoursesResult
    course(id: ID!): Course
    authors: [Author!]!
    author(id: ID!): Author
  }

  type CoursesFetchResult {
    courses(limit: Int, offset: Int): [Course!]!
  }
  type CoursesErrorResult {
    message: String!
  }
  union CoursesResult = CoursesFetchResult | CoursesErrorResult
`;

module.exports = { typeDefs };
