import styled from 'styled-components';

function SignatureBlock() {
  return (
    <Tbody>
      <tr className="no-pad">
        <td className="pad-left">Assessed by: </td>
        <td></td>
        <td></td>
        <td></td>
        <td className="pad-left" colSpan={5}>
          Final Rating by:
        </td>
        <td></td>
      </tr>

      <TrCenter className="no-pad">
        <td>
          <div>
            <p></p>
            <strong>ATTY. EARVENE JARED S. CUNANAN</strong>
          </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td colSpan={5}>
          <div>
            <p></p>
            <strong>ATTY. EARVENE JARED S. CUNANAN</strong>
          </div>
        </td>
        <td></td>
      </TrCenter>

      <TrCenter className="no-pad">
        <td>Planning Office</td>
        <td>Date</td>
        <td>PMT</td>
        <td>Date</td>
        <td colSpan={5}>Head of Office</td>
        <td> Date</td>
      </TrCenter>
    </Tbody>
  );
}

export default SignatureBlock;

const Tbody = styled.tbody`
  .pad-left {
    padding-left: 1em !important;
  }
`;

const TrCenter = styled.tr`
  text-align: center;

  td > div {
    height: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;
