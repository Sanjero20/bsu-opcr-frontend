import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Card, Contents } from '../Edit.styled';

function EditForm(props) {
  const { targets, addSuccessIndicator } = props;

  const renderIndicators = (list) => {
    return (
      <>
        {list.map((obj, index) => (
          <Fragment key={index}>
            <Card></Card>
            <Card disabled></Card>
            <Card disabled></Card>
            <Card disabled></Card>
            <p></p>
          </Fragment>
        ))}
      </>
    );
  };

  return (
    <Contents>
      {targets.map((obj) => {
        const { id, keySuccess } = obj;

        return (
          <Fragment key={id}>
            <div>
              <Row>
                <Card></Card>
                {renderIndicators(keySuccess)}
              </Row>

              <button onClick={() => addSuccessIndicator(id)}>Add</button>
            </div>

            {/* Add new MFO */}
          </Fragment>
        );
      })}
    </Contents>
  );
}

export default EditForm;

EditForm.propTypes = {
  targets: PropTypes.array.isRequired,
  addSuccessIndicator: PropTypes.func.isRequired,
};
