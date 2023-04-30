import styled from 'styled-components';
import { Table } from '../Mfo.styled';

import TableOutput from './TableOutput';
import TableRating from './TableRating';

function Guidelines() {
  return (
    <Table>
      <tbody>
        <tr>
          <Td>
            <TableRating />
            <TableOutput />
          </Td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Guidelines;

const Td = styled.td`
  padding-left: 3rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
