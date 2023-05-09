import { BigP, DropDown, SmallP, WrapperGrid3 } from "../Accounts.styled";

const TableElement = ({ account }) => {
  return (
    <WrapperGrid3>
      <SmallP>{account.username}</SmallP>
      <DropDown/>
      <></>
    </WrapperGrid3>
  );
};

const PmtTable = ({ data }) => {
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
          return <TableElement account={item}/>
        }) : <></>
      }
    </div>
  );
};

export default PmtTable;