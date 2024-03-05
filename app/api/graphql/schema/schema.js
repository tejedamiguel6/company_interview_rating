import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    users: [User!]
    user(id: ID!): User!
    hello: String!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    userName: String!
    password: String!
  }
`
