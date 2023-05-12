import { useState } from "react";
import { BigP, SmallP, WrapperGrid3, DropDown, TableScrollableWrapper, SmallPu } from "../Accounts.styled";
import { useEffect } from "react";
import { assignHeadOffice } from "../../../../services/requests";

const TableElement = ({ account, campus, defaultCID, defaultDID }) => {
  const [targetCID, setTargetCID] = useState(defaultCID);
  const [targetDepartment, setTargetDepartment] = useState([]);

  const setCampusID = (val) => {
    setTargetCID(val.target.value);
    const data = campus.find(item => item._id == val.target.value);
    setTargetDepartment(data.departments);
  };

  const setDepartmentID = async (val) => {
    await assignHeadOffice({
      campusID: targetCID,
      departmentID: val.target.value,
      accountID: account._id
    });
  };

  useEffect(() => {
    // for loading the options for default departments
    const data = campus.find(item => item._id == defaultCID);
    if (data) setTargetDepartment(data.departments);
  }, []);

  return (
    <WrapperGrid3>
      {
        (defaultCID == '' || defaultDID == '') ?
        <SmallPu>{account.username}</SmallPu> :
        <SmallP>{account.username}</SmallP>
      }
      <DropDown onInput={setCampusID} defaultValue={targetCID}>
        <option key='' value=''>None</option>
        {
          (campus.length > 0) ?
          campus.map(campusdata => {
            return <option key={campusdata._id} value={campusdata._id}>{campusdata.campusName}</option>
          }) : <></>
        }
      </DropDown>
      <DropDown onInput={setDepartmentID}>
        <option key='' value=''>None</option>
        {
          (targetDepartment.length > 0) ?
          targetDepartment.map(dept => {
            if (dept._id == defaultDID)
              return <option key={dept._id} value={dept._id} selected={true}>{dept.name}</option>
            return <option key={dept._id} value={dept._id}>{dept.name}</option>
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
      <TableScrollableWrapper>
        {
          (data.length > 0) ?
          data.map(item => {
            return <TableElement
                      key={item._id}
                      id={item._id}
                      account={item}
                      campus={campusData}
                      defaultDID={(item.officeAssigned) ? item.officeAssigned : ''}
                      defaultCID={(item.campusAssigned) ? item.campusAssigned : ''}/>
          }) : <></>
        }
      </TableScrollableWrapper>
    </div>
  );
};

export default HeadTable;