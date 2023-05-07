import PropTypes from 'prop-types';
import Mform from '../../../components/MFO-Form/Mfo';

function Preview({ targets }) {
  return <Mform targets={targets} />;
}

export default Preview;

Preview.propTypes = {
  targets: PropTypes.array.isRequired,
};
