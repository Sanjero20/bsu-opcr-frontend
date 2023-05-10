import { assignPmtCampus } from "../../../../services/requests";
import { BigP, DropDown, SmallP, SmallPu, WrapperGrid3 } from "../Accounts.styled";
import { useState } from "react";

const TableElement = ({ account, data, defaultCID }) => {
  const [targetCID, setTargetCID] = useState(defaultCID);

  const setTargetCampus = async (val) => {
    setTargetCID(val.target.value);
    const response = await assignPmtCampus({
      campusID: val.target.value,
      accountID: account._id
    });

    if (response.assigned) window.location.reload();
  };

  return (
    <WrapperGrid3>
      { 
        (defaultCID != '')
        ? <SmallP>{account.username}</SmallP>
        : <SmallPu>{account.username}</SmallPu>
      }
      <DropDown onInput={setTargetCampus} defaultValue={targetCID}>
        {
          (data && (data.length > 0)) ?
          data.map(campusdata => {
            return <option key={campusdata._id} value={campusdata._id}>{campusdata.campusName}</option>
          }) : <></>
        }
      </DropDown>
      <></>
    </WrapperGrid3>
  );
};

const PmtTable = ({ data, campusData }) => {
  return (
    <div style={{height: '50%'}}>
      <WrapperGrid3>
        <BigP>PMT List</BigP>
        <BigP>Campus</BigP>
        <></>
      </WrapperGrid3>
      <hr /><br/>
      {
        (data.length) ?
        data.map(item => {
          return <TableElement
                    key={item._id}
                    data={campusData}
                    defaultCID={(item.campusAssigned) ? item.campusAssigned : ''}
                    account={item}/>
        }) : <></>
      }
    </div>
  );
};

export default PmtTable;