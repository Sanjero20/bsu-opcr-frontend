import { useEffect, useState } from "react";
import {
  CampusWrapper,
  SideCampusListWrapper,
  SideDepartmentListWrapper
} from "./Campus.styled";

import { retrieveCampuses } from "../../../services/requests";

import DynCampusLoader from "./loaders/Campus.dynamic";
import DynDepartmentLoader from "./loaders/Departments.dynamic";
import { WrappedCampusInput, WrappedDepartmentInput } from "./inputs/wrappedInputs";

const Campus = () => {
  // all the campuses
  const [campusList, campusListLoader] = useState([]);

  // specific campus (including the departments)
  const [campusTarget, campusTargetSetter] = useState({});

  // for department computation
  const [selectedCampus, setSelectedCampus] = useState('');

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
    let displayed = false;
    campusList.forEach(campus => {
      if (campus._id == selectedCampus) {
        campusTargetSetter(campus);
        displayed = true;
      }
    });
  });

  return (
    <CampusWrapper>
      <SideCampusListWrapper>
        <DynCampusLoader
          campusList={campusList}
          setSelectedCampus={setSelectedCampus}
          selectedTargetID={selectedCampus}/>
        <WrappedCampusInput campusLoader={campusListLoader}/>
      </SideCampusListWrapper>
      <SideDepartmentListWrapper>
        <DynDepartmentLoader campusObj={campusTarget}/>
        <WrappedDepartmentInput selectedTargetID={selectedCampus}
          campusID={selectedCampus}
          campusList={campusList}
          campusListLoader={campusListLoader}/>
      </SideDepartmentListWrapper>
    </CampusWrapper>
  );
};

export default Campus;
