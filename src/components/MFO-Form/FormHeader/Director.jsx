import styled from 'styled-components';

function Director() {
  return (
    <tr>
      <Td colSpan={4}>
        <div className="center column">
          <strong>ATTY. EARVENE JARED S. CUNANAN</strong>
          <strong>DIRECTOR for PLANNING AND DEVELOPMENT</strong>
        </div>
      </Td>
    </tr>
  );
}

export default Director;

const Td = styled.td`
  padding: 0.25rem !important;
  border-bottom: 0 !important;
`;
