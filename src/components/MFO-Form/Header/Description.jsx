import logoImg from '../../../assets/bsu-logo.svg';
import { Logo } from '../Mfo.styled';

function Description() {
  return (
    <tr className="no-pad">
      <td style={{ width: '150px' }}>
        <div className="center">
          <Logo src={logoImg} alt="bsu.webp" />
        </div>
      </td>
      <td style={{ width: '55%' }}>Reference No: BatstateU-DOC-AF-02</td>
      <td>Effectivity Date: May 12, 2022</td>
      <td>Revision No.: 01</td>
    </tr>
  );
}

export default Description;
