import { useState } from "react";
import { DivCS, Input, AddButton, SaveButton } from "../Campus.styled";
import { v4 as uuid } from "uuid";
import { addCampusData } from "../../../../services/requests";

// this input adds a new campus from the list
export const WrappedCampusInput = ({ campusLoader }) => {
  const [addedInput, appendInput] = useState('');
  const charAppend = (val) => {
    appendInput(val.target.value);
  };

  const loadGlobalCampus = () => {
    appendInput('');
    campusLoader((currentCampusList) => {
      return [...currentCampusList, { _id: uuid(), isLocal: true, campusName: addedInput, departmentDetails: [], departments: [] }]
    });
  };

  return (
    <DivCS>
        <Input value={addedInput} onChange={charAppend}/>
        <AddButton onClick={loadGlobalCampus}>Create</AddButton>
    </DivCS>
  );
};

// this input adds a new campus from the list
export const WrappedDepartmentInput = (props) => {
  const [addedInput, appendInput] = useState('');
  const { campusID, campusList, campusListLoader, selectedTargetID } = props;

  const campusIndex = campusList.findIndex(item => item._id == campusID);

  const charAppend = (val) => {
    appendInput(val.target.value);
  };

  const loadGlobalDepartment = () => {
    appendInput('');

    // finds the id from the list and update
    if (campusIndex >= 0) {
      campusListLoader(campusObj => {
        const newObj = campusList[campusIndex];
        newObj.departmentDetails.push({name: addedInput});
        newObj.departments.push({name: addedInput});

        return [
          ...campusObj.slice(0, campusIndex),
          {
            _id: campusID,
            isLocal: true,
            campusName: newObj.campusName,
            departments: newObj.departments,
            departmentDetails: newObj.departmentDetails,
          },
          ...campusObj.slice(campusIndex + 1, campusObj.length)];
      });
    }
  };

  const saveAddedData = async () => {
    campusList[campusIndex].isLocal = false;
    try {
      const response = await addCampusData(campusList[campusIndex]);
      if (response.added)
        window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DivCS>
        <Input
          disabled={(selectedTargetID == '') ? true : false}
          value={addedInput}
          onChange={charAppend}/>
        <AddButton onClick={loadGlobalDepartment}>Create</AddButton>
        <SaveButton
          disabled={ (campusIndex >= 0 && campusList[campusIndex].isLocal) ? false : true }
          onClick={saveAddedData}>Save</SaveButton>
    </DivCS>
  );
};