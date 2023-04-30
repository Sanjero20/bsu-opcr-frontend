import styled from 'styled-components';

function Legend() {
  return (
    <tbody>
      <tr className="no-pad">
        <td colSpan={10}>
          <Container>
            <em>Legend: </em>
            <p>1 - Quality</p>
            <p>2 - Efficiency</p>
            <p>3 - Timeliness</p>
            <p>4 - Average</p>
          </Container>
        </td>
      </tr>
    </tbody>
  );
}

export default Legend;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding-left: 0.75em;
`;
