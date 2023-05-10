import { BigP, DropDown, SmallP, WrapperGrid3 } from "../Accounts.styled";

const TableElement = ({ account, data, defaultCID }) => {
  return (
    <WrapperGrid3>
      <SmallP>{account.username}</SmallP>
      <DropDown defaultValue={defaultCID}>
        {
          (data && (data.length > 0)) ?
          data.map(campusdata => {
            return <option value={campusdata._id}>{campusdata.campusName}</option>
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
                    defaultCID={item.campusAssigned}
                    account={item}/>
        }) : <></>
      }
    </div>
  );
};

export default PmtTable;