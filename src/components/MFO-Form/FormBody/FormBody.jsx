import { Table } from '../Mfo.styled';
import Content from './Content/Content';
import Header from './Header/Header';

function FormBody() {
  return (
    <Table>
      <Header />
      <Content type={'core'} data={[{}]} />
      <Content type={'strategic'} data={[{}]} />
    </Table>
  );
}

export default FormBody;
