import gql from 'graphql-tag';

export default gql`
  query rooms @_(get: "rooms") {
    rooms {
      id
      title
      floor
      capacity
    }
  }
`;