import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Card, Contents, RowContent, BtnCircle } from '../Edit.styled';
import { BtnAddIndicator } from '../Edit.styled';

function EditForm(props) {
  const { targets, editTarget } = props;

  // Success Indicator methods
  const { addSuccessIndicator, deleteSuccessIndicator } = props;

  const renderIndicators = (targetId, list) => {
    return (
      <>
        {list.length != 0 &&
          list.map((obj) => {
            const { id } = obj;
            return (
              <Fragment key={id}>
                <Card />
                <Card disabled />
                <Card disabled />
                <Card disabled />

                <BtnCircle onClick={() => deleteSuccessIndicator(targetId, id)}>
                  &times;
                </BtnCircle>
                <p></p>
              </Fragment>
            );
          })}
      </>
    );
  };

  return (
    <Contents>
      {targets.length != 0 &&
        targets.map((obj) => {
          const { id, target, keySuccess } = obj;

          return (
            <Row key={id}>
              <RowContent>
                <Card value={target} onChange={(e) => editTarget(e, id)} />
                {renderIndicators(id, keySuccess)}
              </RowContent>

              <BtnAddIndicator onClick={() => addSuccessIndicator(id)}>
                Add Success Indicator
              </BtnAddIndicator>
            </Row>
          );
        })}
    </Contents>
  );
}

export default EditForm;

EditForm.propTypes = {
  targets: PropTypes.array.isRequired,
  addSuccessIndicator: PropTypes.func.isRequired,
  deleteSuccessIndicator: PropTypes.func.isRequired,
  editTarget: PropTypes.func.isRequired,
};
