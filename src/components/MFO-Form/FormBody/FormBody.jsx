import { Table } from '../Mfo.styled';

// Components
import Content from './Content';
import Header from './Header';
import Summary from '../Footer/Summary';
import SignatureBlock from '../Footer/SignatureBlock';

function FormBody() {
  return (
    <Table>
      <Header />
      <Content type={'core'} data={[{}]} />
      <Content type={'strategic'} data={[{}]} />

      <br />
      <Summary />
      <br />
      <SignatureBlock />
    </Table>
  );
}

export default FormBody;
