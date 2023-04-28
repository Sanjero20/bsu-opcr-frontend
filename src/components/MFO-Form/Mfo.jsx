import logoImg from '../../assets/bsu-logo.svg';
import { Container, Logo, Table, Row3Container } from './Mfo.styled';

function Mform() {
  return (
    <Container>
      <Table>
        <thead>
          {/* Row 1 */}
          <tr className="no-pad">
            <td style={{ width: '150px' }}>
              <div className="center">
                <Logo src={logoImg} alt="bsu.webp" />
              </div>
            </td>
            <td>Reference No: BatstateU-DOC-AF-02</td>
            <td>Effectivity Date: May 12, 2022</td>
            <td>Revision No.: 01</td>
          </tr>

          {/* Row 2 */}
          <tr>
            <td colSpan={4}>
              <strong>OFFICE PERFORMANCE COMMITMENT AND REVIEW (OPCR)</strong>
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
            <td colSpan={4} style={{ paddingBottom: '0.25rem' }}>
              <Row3Container>
                <p>
                  I, POUL ISAAC C. DE CHAVEZ, Asst. Director for Management and
                  Information System, commit to deliver and agree to be rated on
                  the attainment of the targets in accordance with the indicated
                  measures for the period of January to June 2023
                </p>

                <div>
                  <p>Unit Head</p>
                  <p>Date: </p>
                </div>
              </Row3Container>
            </td>
          </tr>

          {/* Row 4 */}
          <tr className="no-pad">
            <td colSpan={3} style={{ paddingLeft: '1rem' }}>
              Approved By:
            </td>
            <td style={{ textAlign: 'center' }}> Date </td>
          </tr>

          {/* Row 5 */}
          <tr>
            <td colSpan={3} />
            <td />
          </tr>
        </thead>
      </Table>
    </Container>
  );
}

export default Mform;
