import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type Query {
    users: [User!]
    user(id: ID!): User!

    company: [Company!]!
  }

  type User {
    id: ID!
    email: String!
    name: String!
    userName: String!
    password: String!
    interviewExperience: [InterviewExperience]
  }

  type Company {
    id: ID!
    name: String!
    email: String!
    address: String!
    city: String!
    state: String!
    country: String!
  }

  type InterviewExperience {
    title: String!
    content: String!
    rating: Int!
    interviewType: String!
    difficultyLevel: Int!
    receivedOffer: Boolean!
    user: User!
    company: Company!
  }
`
