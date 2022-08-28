import gql from 'graphql-tag'

export const GET_ALL_TODOS_QUERY = gql`
  query allTodos {
    allTodos {
      nodes {
        id
        title
        description
        category
        isComplete
      }
    }
  }
`