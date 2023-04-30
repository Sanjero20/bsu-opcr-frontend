import logoImg from '../../../assets/bsu-logo.svg';
import styled from 'styled-components';

function MetaData() {
  return (
    <Tr className="no-pad">
      <Td>
        <div className="center">
          <Logo src={logoImg} alt="bsu.webp" />
        </div>
      </Td>

      <Td>
        <p>
          Reference No: BatstateU-DOC-
          <span>AF-02</span>
        </p>
      </Td>

      <Td>
        <p>
          Effectivity Date: May 12, <span>2022</span>
        </p>
      </Td>

      <Td>
        <p>
          Revision <span>No.: 01</span>
        </p>
      </Td>
    </Tr>
  );
}

export default MetaData;

const Logo = styled.img`
  width: 60px;
`;

const Tr = styled.tr`
  & > td:first-child {
    width: 10%;
  }

  & > td:nth-child(2) {
    width: 55%;
  }

  & > td:nth-child(3) {
    width: 25%;
  }

  & > td:last-child {
    width: 10%;
  }
`;

const Td = styled.td`
  position: relative;

  p {
    position: absolute;
    bottom: 2px;
    left: 5px;
    display: flex;
    flex-direction: column;
  }
`;
