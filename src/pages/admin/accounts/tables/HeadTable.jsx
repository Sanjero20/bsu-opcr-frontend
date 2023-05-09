import { BigP, SmallP, WrapperGrid3, DropDown } from "../Accounts.styled";

const HeadTable = () => {
  return (
    <div style={{height: '50%'}}>
      <WrapperGrid3>
        <BigP>Head List</BigP>
        <BigP>Campus</BigP>
        <BigP>Department</BigP>
      </WrapperGrid3>
      <hr /><br/>
      <WrapperGrid3>
        <SmallP>Dean</SmallP>
        <DropDown/>
        <DropDown/>
      </WrapperGrid3>
    </div>
  );
};

export default HeadTable;