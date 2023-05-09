import { BigP, SmallP, WrapperGrid3, DropDown } from "../Accounts.styled";

const TableElement = ({ account }) => {
  return (
    <WrapperGrid3>
      <SmallP>{account.username}</SmallP>
      <DropDown/>
      <DropDown/>
    </WrapperGrid3>
  );
};

const HeadTable = ({ data }) => {
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
          return <TableElement key={item._id} account={item}/>
        }) : <></>
      }
    </div>
  );
};

export default HeadTable;