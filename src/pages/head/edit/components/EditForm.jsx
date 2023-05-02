import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Card, Contents, RowContent, BtnCircle } from '../Edit.styled';
import { BtnAddIndicator } from '../Edit.styled';

function EditForm(props) {
  const { targets, addSuccessIndicator } = props;

  const renderIndicators = (list) => {
    return (
      <>
        {list.map((obj) => {
          const { id } = obj;
          return (
            <Fragment key={id}>
              <Card></Card>
              <Card disabled></Card>
              <Card disabled></Card>
              <Card disabled></Card>
              <BtnCircle onClick={() => console.log(id)}> &times;</BtnCircle>
              <p></p>
            </Fragment>
          );
        })}
      </>
    );
  };

  return (
    <Contents>
      {targets.map((obj) => {
        const { id, keySuccess } = obj;

        return (
          <Row key={id}>
            <RowContent>
              <Card></Card>
              {renderIndicators(keySuccess)}
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
};
