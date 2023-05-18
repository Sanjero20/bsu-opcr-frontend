import { assignPmtCampus, deletePmt } from "../../../../services/requests";
import { BigP, DropDown, SmallP, SmallPu, WrapperGrid3 } from "../Accounts.styled";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";

import theme from "../../../../styles/theme";

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

  const deleteAccount = (accountID) => {
    return async function() {
      const response = await deletePmt(accountID);
      if (response.deleted) window.location.reload();
    };
  };

  return (
    <WrapperGrid3>
      { 
        (defaultCID != '') ?
        <div>
          <AiFillDelete style={{
            fontSize: '13pt',
            fontWeight: 'bold',
            color: theme.red,
            cursor: 'pointer',
            translate: '0px 0.1rem',
            float: 'left'
          }}
          onClick={deleteAccount(account._id)}/><SmallP>{account.username}</SmallP>
        </div>
        : <SmallPu>{account.username}</SmallPu>
      }
      <DropDown onInput={setTargetCampus} defaultValue={targetCID}>
        <option key='' value=''>None</option>
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