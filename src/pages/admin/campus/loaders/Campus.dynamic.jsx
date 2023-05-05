import { CLButton, CLContainer, CLHeader1, DivMW } from "../Campus.styled";

// campusID will be used for mapping
// the departments included soon
const Button = ({ text, campusID }) => {
  return (
    <CLButton>{text}</CLButton>
  );
};

// DynCampusLoader loads all the campus info
// from an object
const DynCampusLoader = ({ campusObj }) => {
  return (
    <DivMW>
      <CLHeader1>Campuses</CLHeader1>
      <CLContainer>
        {
          (campusObj != null && Object.keys(campusObj).length > 0) ?
          Object.keys(campusObj).map((val, index) => {
            return <Button key={index} text={campusObj[val].text} campusID={campusObj[val].campusID} />
          })
          : <></>
        }
      </CLContainer>
    </DivMW>
  );
};

export default DynCampusLoader;