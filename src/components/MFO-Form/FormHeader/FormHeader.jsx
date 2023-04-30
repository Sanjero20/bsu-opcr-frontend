import { Table } from '../Mfo.styled';

// Components
import MetaData from './MetaData';
import Title from './Title';
import Introduction from './Introduction';
import Approval from './Approval';
import Director from './Director';

function FormHeader() {
  return (
    <>
      <Table>
        <thead>
          <MetaData />
        </thead>

        <tbody>
          <Title />
          <Introduction />
        </tbody>
      </Table>

      <Table>
        <tbody>
          <Approval />
          <Director />
        </tbody>
      </Table>
    </>
  );
}

export default FormHeader;
