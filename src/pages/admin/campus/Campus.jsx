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

  return (
    <CampusWrapper>
      <SideCampusListWrapper>
        <DynCampusLoader campusList={campusList}/>
        <WrappedInput globalLoader={campusListLoader}/>
      </SideCampusListWrapper>
      <SideDepartmentListWrapper>
        <DynDepartmentLoader/>
        <WrappedInput globalLoader={departmentListLoader}/>
      </SideDepartmentListWrapper>
    </CampusWrapper>
  );
};

export default Campus;
