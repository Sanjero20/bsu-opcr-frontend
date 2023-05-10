import { useState } from "react";
import { BigP, SmallP, WrapperGrid3, DropDown } from "../Accounts.styled";
import { useEffect } from "react";

const TableElement = ({ account, campus, defaultCID, defaultDID, id }) => {
  const [targetDepartment, setTargetDepartment] = useState([]);

  const setCampusID = (val) => {
    setCampusTarget(val.target.value);
  };

  useEffect(() => {
    const data = campus.find(item => item._id == defaultCID);
    setTargetDepartment(data.departments);
  });

  return (
    <WrapperGrid3>
      <SmallP>{account.username}</SmallP>
      <DropDown onInput={setCampusID} defaultValue={defaultCID}>
        {
          (campus.length > 0) ?
          campus.map(campusdata => {
            return <option key={campusdata._id} value={campusdata._id}>{campusdata.campusName}</option>
          }) : <></>
        }
      </DropDown>
      <DropDown defaultValue={defaultDID}>
        {
          (targetDepartment.length > 0) ?
          targetDepartment.map(dept => {
            // console.log(dept);
            return <option key={dept._id} value={dept._ud}>{dept.name}</option>
          }) : <></>
        }
      </DropDown>
    </WrapperGrid3>
  );
};

const HeadTable = ({ campusData, data }) => {
  return (
    <div style={{height: '50%'}}>
      <WrapperGrid3>
        <BigP>Head List</BigP>
        <BigP>Campus</BigP>
        <BigP>Department</BigP>
      </WrapperGrid3>
      <hr /><br/>
      {
        (data.length > 0) ?
        data.map(item => {
          return <TableElement
                    key={item._id}
                    id={item._id}
                    account={item}
                    campus={campusData}
                    defaultDID={item.officeAssigned}
                    defaultCID={item.campusAssigned}/>
        }) : <></>
      }
    </div>
  );
};

export default HeadTable;