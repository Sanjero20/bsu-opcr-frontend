import { useEffect, useState } from "react";
import {
  AddButton,
  CampusWrapper,
  SideCampusListWrapper,
  Input,
  DivCS
} from "./Campus.styled";

import DynCampusLoader from "./loaders/Campus.dynamic";

const WrappedInput = ({ campusListCopy, globalLoader }) => {
  const [addedInput, appendInput] = useState('');
  const [localCampus, localCampusLoader] = useState([]);

  const charAppend = (val) => {
    appendInput(val.target.value);
  };

  const loadGlobalCampus = () => {
    localCampusLoader((currentLocalList) => {
      return [...currentLocalList, { text: addedInput, campusID: 'xxxxx' }]
    });

    globalLoader((currentCampusList) => {
      return [...currentCampusList, { text: addedInput, campusID: 'xxxxx' }]
    });
  };

  useEffect(() => {
    campusListCopy.forEach(val => {
      localCampusLoader([...localCampus, {
        id: localCampus.length,
        value: val
      }]);
    });
  }, []);

  return (
    <DivCS>
        <Input onChange={charAppend}/>
        <AddButton onClick={loadGlobalCampus}>Create</AddButton>
    </DivCS>
  );
};

const Campus = () => {
  const [campusList, campusListLoader] = useState([])

  return (
    <CampusWrapper>
      <SideCampusListWrapper>
        <DynCampusLoader campusObj={campusList}/>
        <WrappedInput campusListCopy={campusList} globalLoader={campusListLoader}/>
      </SideCampusListWrapper>
    </CampusWrapper>
  );
};

export default Campus;
