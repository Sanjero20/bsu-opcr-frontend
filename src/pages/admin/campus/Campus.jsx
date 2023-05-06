import { useEffect, useState } from "react";
import {
  AddButton,
  CampusWrapper,
  SideCampusListWrapper,
  SideDepartmentListWrapper,
  Input,
  DivCS
} from "./Campus.styled";

import { retrieveCampuses } from "../../../services/requests";

import DynCampusLoader from "./loaders/Campus.dynamic";
import DynDepartmentLoader from "./loaders/Departments.dynamic";

const WrappedInput = ({ globalLoader }) => {
  const [addedInput, appendInput] = useState('');
  const charAppend = (val) => {
    appendInput(val.target.value);
  };

  const loadGlobalCampus = () => {
    globalLoader((currentCampusList) => {
      return [...currentCampusList, { campusName: addedInput, campusID: 'xxxxx' }]
    });
  };

  return (
    <DivCS>
        <Input onChange={charAppend}/>
        <AddButton onClick={loadGlobalCampus}>Create</AddButton>
    </DivCS>
  );
};

const Campus = () => {
  const [campusList, campusListLoader] = useState([]);
  const [selectedCampus, setSelectedCampus] = useState('');
  const [campusTarget, campusTargetSetter] = useState({});
  const [departmentList, departmentListLoader] = useState([]);

  // retrieves all the campuses and loads it
  useEffect(() => {
    async function retrieveData() {
      try {
        const response = await retrieveCampuses();
        if (response.error) throw response.error;
        campusListLoader(response.campus);
      } catch (err) {
        console.error(err);
      }
    }
    retrieveData();
  }, []);

  // for keeping track of which campus is selected
  useEffect(() => {
    campusList.forEach(campus => {
      if (campus._id == selectedCampus) {
        console.log(campus);
        campusTargetSetter(campus);
      }
    });
  });

  return (
    <CampusWrapper>
      <SideCampusListWrapper>
        <DynCampusLoader
          campusList={campusList}
          setSelectedCampus={setSelectedCampus} />
        <WrappedInput globalLoader={campusListLoader} />
      </SideCampusListWrapper>
      <SideDepartmentListWrapper>
        <DynDepartmentLoader campusObj={campusTarget}/>
        <WrappedInput globalLoader={departmentListLoader}/>
      </SideDepartmentListWrapper>
    </CampusWrapper>
  );
};

export default Campus;
