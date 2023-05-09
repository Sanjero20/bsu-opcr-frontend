import { BigP, SmallP, WrapperGrid3 } from "../Accounts.styled";

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
        <SmallP>[Campus]</SmallP>
        <SmallP>[Dept]</SmallP>
      </WrapperGrid3>
    </div>
  );
};

export default HeadTable;