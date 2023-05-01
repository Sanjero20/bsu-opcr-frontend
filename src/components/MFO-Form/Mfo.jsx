import { Container } from './Mfo.styled';

import FormHeader from './FormHeader/FormHeader';
import Guidelines from './Guidelines/Guidelines';
import FormBody from './FormBody/FormBody';

function Mform() {
  return (
    <Container>
      <FormHeader />
      <Guidelines />
      <FormBody />
    </Container>
  );
}

export default Mform;
