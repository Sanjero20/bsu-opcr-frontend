import styled from 'styled-components';
import { NoPadding } from '../Mfo.styled';

function Approval() {
  return (
    <>
      <tr>
        <Td1 colSpan={3}>Approved By:</Td1>
        <Td2>Date</Td2>
      </tr>

      <EmptyRow>
        <td colSpan={3} />
        <td />
      </EmptyRow>
    </>
  );
}

export default Approval;

const Td1 = styled(NoPadding)`
  padding-left: 1rem !important;
`;

const Td2 = styled(NoPadding)`
  text-align: center;
  width: calc(250px + 1rem);
`;

const EmptyRow = styled.tr`
  height: 4rem;
`;
