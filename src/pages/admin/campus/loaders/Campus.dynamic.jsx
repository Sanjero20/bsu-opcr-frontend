import theme from "../../../../styles/theme";
import { CLButton, CLContainer, CLHeader1, CLTmpButton, DivMW } from "../Campus.styled";

// campusID will be used for mapping
// the departments included soon
const Button = (props) => {
  const { campusID, text, setSelectedCampus, selectedTargetID, isLocal } = props;

  // displays the name of campus that is registered
  const displayCampus = () => {
    setSelectedCampus(campusID);
  };

  // button component for campus that is locally added
  if (isLocal)
    return <CLTmpButton onClick={displayCampus}
    style={
      (selectedTargetID == campusID)
      ? { fontWeight: 'bold' }
      : {}
    }>{text}</CLTmpButton>

  return (
    <CLButton
      onClick={displayCampus}
      style={
        (selectedTargetID == campusID)
        ? { color: theme.red, fontWeight: 'bold' }
        : {}
      }
      >{text}</CLButton>
  );
};

// DynCampusLoader loads all the campus info
// from an object
const DynCampusLoader = (props) => {
  const { campusList, setSelectedCampus, selectedTargetID } = props;

  return (
    <DivMW>
      <CLHeader1>Campuses</CLHeader1>
      <CLContainer>
        {
          (campusList && campusList.length > 0) ?
          campusList.map((item, index) => {
            return <Button key={index}
              campusID={item._id}
              text={item.campusName}
              setSelectedCampus={setSelectedCampus}
              selectedTargetID={selectedTargetID}
              isLocal={item['isLocal']}/>
          }) : <></>
        }
      </CLContainer>
    </DivMW>
  );
};

export default DynCampusLoader;