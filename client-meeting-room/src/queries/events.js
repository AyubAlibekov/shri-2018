import gql from 'graphql-tag';

export default gql`
  query events($dateStart: String) @_(get: "events") {
    events(dateStart:$dateStart) {
      id
      title
      dateStart
      dateEnd
      users @_(map: "id"){
        id
      }
      room @_(get: "id") {
        id
      }
    }
  }
`;