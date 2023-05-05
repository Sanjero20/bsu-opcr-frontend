import PropTypes from 'prop-types';
import React from 'react';

import Mform from '../../../components/MFO-Form/Mfo';

export const TargetContext = React.createContext();

function Preview({ targets }) {
  return (
    <TargetContext.Provider value={targets}>
      <Mform targets={targets} />
    </TargetContext.Provider>
  );
}

export default Preview;

Preview.propTypes = {
  targets: PropTypes.array.isRequired,
};
