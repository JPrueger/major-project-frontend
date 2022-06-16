import gql from 'graphql-tag'

export const GET_ALL_TODOS_QUERY = gql`
  query test {
    allTodos {
      nodes {
        id
        title
        description
      }
    }
  }
`