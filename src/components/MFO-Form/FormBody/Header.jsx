import styled from 'styled-components';
import theme from '../../../styles/theme';

function Header() {
  return (
    <Thead>
      <TrHead className="no-pad">
        {/* Col 1 */}
        <td rowSpan={2}>
          Major Final Output (MFOs) / <br />
          Programs, Project & Activities (PPAs)
        </td>

        {/* Col 2 */}
        <td rowSpan={2}>
          Success Indicators <br />
          (Targets + Measures )
        </td>

        {/* Col 3*/}
        <td rowSpan={2}>Alloted Budget</td>

        {/* Col 4 */}
        <td rowSpan={2}>
          Divisions / Individuals <br />
          Accountable
        </td>

        {/* Col 5 */}
        <td rowSpan={2}>Actual Accomplishments</td>

        {/* Col 6 */}
        <td colSpan={4}> Rating</td>

        {/* Col 7 */}
        <td rowSpan={2}>Remarks</td>
      </TrHead>

      <TrRating>
        <td>
          Q<sup>1</sup>
        </td>
        <td>
          E<sup>2</sup>
        </td>
        <td>
          T<sup>3</sup>
        </td>
        <td>
          A<sup>4</sup>
        </td>
      </TrRating>
    </Thead>
  );
}

export default Header;

const Thead = styled.thead`
  background-color: ${theme.yellow};
  text-align: center;
`;

const TrHead = styled.tr`
  & > td:first-child {
    width: 275px;
  }

  & > td:nth-child(2) {
  }

  & > td:nth-child(3) {
    width: 100px;
  }

  & > td:nth-child(4) {
    width: 200px;
  }

  & > td:nth-child(5) {
    width: 200px;
    border-right: 0;
  }

  & > td:nth-child(6) {
  }

  & > td:last-child {
    width: 175px;
  }
`;

const TrRating = styled.tr`
  * {
    padding: 0.25em 0 !important;
  }
`;
