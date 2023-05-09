import { useState } from "react";
import { BigP, SmallP, WrapperGrid3, DropDown } from "../Accounts.styled";
import { useEffect } from "react";

const TableElement = ({ account, campus, defaultCID }) => {
  const [targetCampusID, setCampusTarget] = useState(defaultCID);

  const setCampusID = (val) => {
    setCampusTarget(val.target.value);
  };

  return (
    <WrapperGrid3>
      <SmallP>{account.username}</SmallP>
      <DropDown onInput={setCampusID}>
        {
          (campus.length > 0) ?
          campus.map(campusdata => {
            if (campusdata._id == defaultCID)
              return <option key={campusdata._id} value={campusdata._id} selected={true}>{campusdata.campusName}</option>
            return <option key={campusdata._id} value={campusdata._id}>{campusdata.campusName}</option>
          }) : <></>
        }
      </DropDown>
      <DropDown/>
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
                    account={item}
                    campus={campusData}
                    defaultCID={item.campusAssigned}/>
        }) : <></>
      }
    </div>
  );
};

export default HeadTable;