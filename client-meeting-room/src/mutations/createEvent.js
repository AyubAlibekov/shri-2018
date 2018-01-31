import gql from 'graphql-tag';;

export default gql`
  mutation createEvent(
    $input: EventInput!,
    $usersIds: [ID],
    $roomId: ID!
  ) {
    createEvent(
      input: $input,
      usersIds: $usersIds,
      roomId: $roomId
    ) {
      id
    }
  }
`;