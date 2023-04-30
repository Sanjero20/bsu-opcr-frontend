import styled from 'styled-components';

function Rating() {
  return (
    <Table>
      <tbody>
        <TrTop>
          <td colSpan={4}>Rating</td>
        </TrTop>

        <Tr>
          <td>
            Q <sup>1</sup>
          </td>
          <td>
            E <sup>2</sup>
          </td>
          <td>
            T <sup>3</sup>
          </td>
          <td>
            A <sup>4</sup>
          </td>
        </Tr>
      </tbody>
    </Table>
  );
}

export default Rating;

const Table = styled.table`
  height: 100%;
  width: 100%;
`;

const TrTop = styled.tr`
  td {
    border-top: 0;
  }
`;

const Tr = styled.tr`
  * {
    border-bottom: 1px !important;
  }
`;
