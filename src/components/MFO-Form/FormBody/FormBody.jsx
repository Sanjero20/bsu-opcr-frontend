import { useContext } from 'react';
import { Table } from '../Mfo.styled';

// Components
import Content from './Content';
import Header from './Header';
import Summary from '../Footer/Summary';
import SignatureBlock from '../Footer/SignatureBlock';
import Legend from '../Footer/Legend';
import TableBr from './TableBr';

function FormBody({ targets }) {
  return (
    <Table>
      <Header />
      <Content data={targets} />

      <TableBr />
      <Summary />
      <TableBr />

      <SignatureBlock />
      <Legend />
    </Table>
  );
}

export default FormBody;
