import { Table } from '../Mfo.styled';
import { TrHead } from './FormBody.styled';

import Rating from './Rating';

function FormBody() {
  return (
    <Table>
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
    </Table>
  );
}

export default FormBody;
