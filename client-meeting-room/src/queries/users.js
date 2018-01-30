import gql from 'graphql-tag';

export default gql`
  query users @_(get: "users") {
    users {
      id
      login
      homeFloor
      avatarUrl    
    }
  }
`;