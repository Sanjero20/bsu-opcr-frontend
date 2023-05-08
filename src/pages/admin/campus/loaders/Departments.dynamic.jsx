import { CLHeader1, CLHeader2, CPHighlight, DivMW } from "../Campus.styled";

const DynDepartmentLoader = (props) => {
  const { campusObj } = props;
  const { campusName, departments } = campusObj;

  return (
    <DivMW>
      <CLHeader1>Campus</CLHeader1>
      <CPHighlight>{(campusName) ? campusName : <></>}</CPHighlight>
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