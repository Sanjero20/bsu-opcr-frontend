import { Container, Table } from './Mfo.styled';

// Header Components
import MetaData from './Header/MetaData';
import Title from './Header/Title';
import Introduction from './Header/Introduction';
import Approval from './Header/Approval';
import Director from './Header/Director';

function Mform() {
  return (
    <Container>
      <div style={{ padding: '1.5rem' }}>
        {/* Header */}
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

        {/* Guidelines */}

        <Table>
          <tbody>
            <td></td>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Mform;
