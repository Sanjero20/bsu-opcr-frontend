import { useState } from "react";
import { BigP, SmallP, WrapperGrid3, DropDown, TableScrollableWrapper } from "../Accounts.styled";
import { useEffect } from "react";
import { assignHeadOffice } from "../../../../services/requests";

const TableElement = ({ account, campus, defaultCID, defaultDID }) => {
  const [targetCID, setTargetCID] = useState(defaultCID);
  const [targetDID, setTargetDID] = useState(defaultDID);
  const [targetDepartment, setTargetDepartment] = useState([]);

  const setCampusID = (val) => {
    setTargetCID(val.target.value);
  };

  const setDepartmentID = async (val) => {
    setTargetDID(val.target.value);
    const response = await assignHeadOffice({
      campusID: targetCID,
      departmentID: targetDID,
      accountID: account._id
    });

    if (response.assigned) window.location.reload();
  };

  useEffect(() => {
    // for loading the options for default departments
    const data = campus.find(item => item._id == defaultCID);
    if (data) setTargetDepartment(data.departments);
  });

  return (
    <WrapperGrid3>
      <SmallP>{account.username}</SmallP>
      <DropDown onInput={setCampusID} defaultValue={targetCID}>
        {
          (campus.length > 0) ?
          campus.map(campusdata => {
            return <option key={campusdata._id} value={campusdata._id}>{campusdata.campusName}</option>
          }) : <></>
        }
      </DropDown>
      <DropDown onInput={setDepartmentID} defaultValue={targetDID}>
        {
          (targetDepartment.length > 0) ?
          targetDepartment.map(dept => {
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