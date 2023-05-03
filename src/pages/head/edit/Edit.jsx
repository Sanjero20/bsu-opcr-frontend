import PropTypes from 'prop-types';

import { EditField, Button as BtnAdd } from './Edit.styled';

// subcomponents
import EditForm from './components/EditForm';
import EditHeader from './components/EditHeader';

// helpers
import {
  createNewTargetObj,
  createSuccessIndicatorObj,
} from '../../../helpers/targets';

function Edit(props) {
  const { targets, setTargets } = props;

  const addTarget = () => {
    const newTarget = createNewTargetObj();

    // Append new Target / Row
    const updated = [...targets, newTarget];
    setTargets(updated);
  };

  const addSuccessIndicator = (id) => {
    const updatedTargets = targets.map((target) => {
      // Add new success indicator if it matches the ID
      if (target.id == id) {
        return {
          ...target,
          keySuccess: [...target.keySuccess, createSuccessIndicatorObj()],
        };
      }
      return target;
    });
    setTargets(updatedTargets);
  };

  const deleteSuccessIndicator = (targetId, indicatorId) => {
    let updatedTargets = targets.map((target) => {
      if (target.id == targetId) {
        const { keySuccess } = target;

        // Remove the success indicator that matches the id
        const updatedList = keySuccess.filter(
          (indicator) => indicator.id != indicatorId
        );

        // Delete the whole target/row if the success indicator is empty
        if (updatedList.length == 0) {
          return null;
        }

        return {
          ...target,
          keySuccess: updatedList,
        };
      }
      return target;
    });

    updatedTargets = updatedTargets.filter((target) => target != null);

    setTargets(updatedTargets);
  };

  const editTarget = (e, targetId) => {
    const updated = targets.map((target) => {
      if (target.id == targetId) {
        return {
          ...target,
          target: e.target.value,
        };
      }

      return target;
    });

    setTargets(updated);
  };

  return (
    <EditField>
      <EditHeader />
      <EditForm
        targets={targets}
        addSuccessIndicator={addSuccessIndicator}
        deleteSuccessIndicator={deleteSuccessIndicator}
        editTarget={editTarget}
      />
      <BtnAdd onClick={addTarget}>Add</BtnAdd>
    </EditField>
  );
}

export default Edit;

Edit.propTypes = {
  targets: PropTypes.array.isRequired,
  setTargets: PropTypes.func.isRequired,
};
