import { IntroAndDate } from '../Mfo.styled';

function Introduction() {
  return (
    <tr>
      <td colSpan={4} style={{ paddingBottom: '0.25rem' }}>
        <IntroAndDate>
          <p>
            I, POUL ISAAC C. DE CHAVEZ, Asst. Director for Management and
            Information System, commit to deliver and agree to be rated on the
            attainment of the targets in accordance with the indicated measures
            for the period of January to June 2023
          </p>

          <div>
            <p>Unit Head</p>
            <p>Date: </p>
          </div>
        </IntroAndDate>
      </td>
    </tr>
  );
}

export default Introduction;
