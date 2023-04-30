import styled from 'styled-components';

function Summary() {
  return (
    <tbody>
      {/* Average Rating */}
      <Tr>
        <td colSpan={3}>Average Rating</td>
        <td></td>
        <td></td>

        {/* Ratings */}
        <td></td>
        <td></td>
        <td></td>
        <td></td>

        {/* Remarks */}
        <td></td>
      </Tr>

      {/* Total Overall Rating */}
      <Tr>
        <td colSpan={3}>Total Overall Rating</td>
        <td></td>
        <td></td>

        {/* Ratings */}
        <td></td>
        <td></td>
        <td></td>
        <td></td>

        {/* Remarks */}
        <td></td>
      </Tr>

      {/* Final Average Rating */}
      <Tr>
        <td colSpan={3}>Final Average Rating</td>
        <td></td>
        <td></td>

        {/* Ratings */}
        <td></td>
        <td></td>
        <td></td>
        <td></td>

        {/* Remarks */}
        <td></td>
      </Tr>

      {/* Adjectival Rating */}
      <Tr>
        <td colSpan={3}>Adjectival Rating</td>
        <td></td>
        <td></td>

        {/* Ratings */}
        <td></td>
        <td></td>
        <td></td>
        <td></td>

        {/* Remarks */}
        <td></td>
      </Tr>
    </tbody>
  );
}

export default Summary;

const Tr = styled.tr`
  td {
    padding: 0.25em !important;
  }
`;
