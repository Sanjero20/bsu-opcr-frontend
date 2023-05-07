import PropTypes from 'prop-types';
import React from 'react';

import Mform from '../../../components/MFO-Form/Mfo';

export const TargetContext = React.createContext();

function Preview({ targets }) {
  console.log(targets);
  return <Mform targets={targets} />;
}

export default Preview;
