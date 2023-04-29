import { Container, Table } from './Mfo.styled';

// Header Components
import Description from './Header/Description';
import Title from './Header/Title';
import Introduction from './Header/Introduction';
import Approval from './Header/Approval';
import Director from './Header/Director';

function Mform() {
  return (
    <Container>
      <div style={{ padding: '1.5rem' }}>
        <Table>
          <thead>
            <Description />
            <Title />
            <Introduction />
            <Approval />
            <Director />
          </thead>
        </Table>
      </div>
    </Container>
  );
}

export default Mform;
