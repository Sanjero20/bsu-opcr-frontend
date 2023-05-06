import { CLButton, CLContainer, CLHeader1, DivMW } from "../Campus.styled";

// campusID will be used for mapping
// the departments included soon
const Button = (props) => {
  const { campusID, text, setSelectedCampus } = props;
  const displayCampus = () => { setSelectedCampus(campusID); };

  return (
    <CLButton onClick={displayCampus}>{text}</CLButton>
  );
};

// DynCampusLoader loads all the campus info
// from an object
const DynCampusLoader = (props) => {
  const { campusList, setSelectedCampus } = props;

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
                      setSelectedCampus={setSelectedCampus}/>
          }) : <></>
        }
      </CLContainer>
    </DivMW>
  );
};

export default DynCampusLoader;