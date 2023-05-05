import styled from 'styled-components';

import FormHeader from './FormHeader/FormHeader';
import Guidelines from './Guidelines/Guidelines';
import FormBody from './FormBody/FormBody';

function Mform() {
  return (
    <Container id="mfo-form">
      <FormHeader />
      <Guidelines />
      <FormBody />
    </Container>
  );
}

export default Mform;

const Container = styled.div`
  background-color: white;
  overflow-y: auto;

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  /* For tr containing td */
  .no-pad {
    td {
      padding: 0.1rem;
    }
  }
`;
