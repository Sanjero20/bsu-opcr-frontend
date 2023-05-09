import { CLHeader1, CLHeader2, CPHighlight, DivMW } from "../Campus.styled";
import { AiFillDelete } from "react-icons/ai";
import { deleteCampus } from "../../../../services/requests";
import theme from "../../../../styles/theme";

const DynDepartmentLoader = (props) => {
  const { campusObj, selectedTarget } = props;
  const { campusName, departments } = campusObj;

  const delCampus = async () => {
    const response = await deleteCampus(selectedTarget);
    if (response.deleted) window.location.reload();
  };

  return (
    <DivMW>
      <CLHeader1>Campus</CLHeader1>
      <CPHighlight>{(campusName) ? <><AiFillDelete 
        onClick={delCampus}
        style={{
          fontSize: '13pt',
          fontWeight: 'bold',
          color: theme.red,
          translate: '0px 0.1rem'
        }}/> {campusName}</> : <></>}</CPHighlight>
      <br/>
      <CLHeader2>Departments</CLHeader2>
      {
        (departments && departments.length > 0) ?
        departments.map((item, index) => {
          return <CPHighlight key={index}>{item.name}</CPHighlight>
        }) : <></>
      }
    </DivMW>
  );
};

export default DynDepartmentLoader;