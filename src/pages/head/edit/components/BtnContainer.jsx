import PropTypes from 'prop-types';
import {
  ButtonContainer,
  Button,
} from '../../../../components/ui/Button.styled';

function BtnContainer({
  status,
  isOnPreview,
  toggleState,
  resetTargets,
  sendForCalibration,
}) {
  return (
    <ButtonContainer>
      {/* Display the print button when mfo is callibrated */}
      {isOnPreview && status === 'Calibrated' && (
        <Button onClick={() => window.print()}> Print</Button>
      )}

      {status != 'Calibrated' && (
        <Button
          yellow
          onClick={toggleState}
          disabled={status === 'Calibrating'}
        >
          {isOnPreview ? <>Edit</> : <>Preview</>}
        </Button>
      )}

      {isOnPreview ? (
        <>
          {status != 'Calibrated' && (
            <Button
              onClick={sendForCalibration}
              disabled={status === 'Calibrating'}
            >
              Submit
            </Button>
          )}
        </>
      ) : (
        <Button onClick={resetTargets}>Reset</Button>
      )}
    </ButtonContainer>
  );
}

export default BtnContainer;

BtnContainer.propTypes = {
  status: PropTypes.string,
  isOnPreview: PropTypes.bool,
  toggleState: PropTypes.func,
  resetTargets: PropTypes.func,
  sendForCalibration: PropTypes.func,
};
