import PropTypes from 'prop-types';
import Mform from '../../../components/MFO-Form/Mfo';

function Preview({ targets, pmt }) {
  return <Mform targets={targets} pmt={pmt} />;
}

export default Preview;

Preview.propTypes = {
  targets: PropTypes.array.isRequired,
  pmt: PropTypes.bool,
};
