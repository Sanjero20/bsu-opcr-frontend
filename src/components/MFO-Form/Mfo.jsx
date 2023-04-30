import { Container } from './Mfo.styled';

import FormHeader from './FormHeader/FormHeader';
import Guidelines from './Guidelines/Guidelines';
import FormBody from './FormBody/FormBody';

function Mform() {
  return (
    <Container>
      <div style={{ padding: '1.5rem' }}>
        <FormHeader />
        <Guidelines />

        <FormBody />
      </div>
    </Container>
  );
}

export default Mform;
