import styled from 'styled-components';
import theme from '../../../../styles/theme';

import Rating from './Rating';

function Header() {
  return (
    <thead>
      <TrHead className="no-pad">
        {/* Col 1 */}
        <td>
          Major Final Output (MFOs) / <br />
          Programs, Project & Activities (PPAs)
        </td>

        {/* Col 2 */}
        <td>
          Success Indicators <br />
          (Targets + Measures )
        </td>

        {/* Col 3*/}
        <td>Alloted Budget</td>

        {/* Col 4 */}
        <td>
          Divisions / Individuals <br />
          Accountable
        </td>

        {/* Col 5 */}
        <td>Actual Accomplishments</td>

        {/* Col 6 */}
        <td>
          <Rating />
        </td>

        {/* Col 7 */}
        <td>Remarks</td>
      </TrHead>
    </thead>
  );
}

export default Header;

export const TrHead = styled.tr`
  background-color: ${theme.yellow};
  text-align: center;

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
    width: 200px;
    padding: 0 !important;
    border: 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  & > td:last-child {
    width: 175px;
    border-left: 0;
  }
`;
