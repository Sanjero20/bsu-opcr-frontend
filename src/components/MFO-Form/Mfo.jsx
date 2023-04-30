import { Container } from './Mfo.styled';

import FormHeader from './FormHeader/FormHeader';
import Guidelines from './Guidelines/Guidelines';

function Mform() {
  return (
    <Container>
      <div style={{ padding: '1.5rem' }}>
        <FormHeader />
        <Guidelines />
      </div>
    </Container>
  );
}

export default Mform;
