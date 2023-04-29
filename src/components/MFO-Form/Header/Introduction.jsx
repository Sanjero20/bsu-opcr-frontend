import styled from 'styled-components';

function Introduction() {
  return (
    <tr>
      <Td colSpan={4}>
        <Container>
          <p>
            I, POUL ISAAC C. DE CHAVEZ, Asst. Director for Management and
            Information System, commit to deliver and agree to be rated on the
            attainment of the targets in accordance with the indicated measures
            for the period of January to June 2023
          </p>

          <Signature>
            <p>Unit Head</p>
            <p>Date: </p>
          </Signature>
        </Container>
      </Td>
    </tr>
  );
}

export default Introduction;

const Td = styled.td`
  border-bottom: 0 !important;
  padding-bottom: 0.25em !important;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Signature = styled.div`
  margin-top: 1rem;
  width: 250px;
  align-self: end;

  & > p:first-child {
    width: 100%;
    border-top: 1px solid black;
    text-align: center;
  }
`;
