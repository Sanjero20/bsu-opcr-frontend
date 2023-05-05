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
const DynCampusLoader = ({ campusList }) => {
  return (
    <DivMW>
      <CLHeader1>Campuses</CLHeader1>
      <CLContainer>
        {
          (campusList && campusList.length > 0) ?
          campusList.map((item, index) => {
            return <Button key={index} text={item.campusName} campusID={item._id}/>
          }) : <></>
        }
      </CLContainer>
    </DivMW>
  );
};

export default DynCampusLoader;