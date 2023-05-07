import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FormHeader from './FormHeader/FormHeader';
import Guidelines from './Guidelines/Guidelines';
import FormBody from './FormBody/FormBody';

export const TargetContext = React.createContext();

function Mform({ targets }) {
  return (
    <TargetContext.Provider value={targets}>
      <Container id="mfo-form">
        <FormHeader />
        <Guidelines />
        <FormBody />
      </Container>
    </TargetContext.Provider>
  );
}

export default Mform;

Mform.propTypes = {
  targets: PropTypes.array,
};

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
