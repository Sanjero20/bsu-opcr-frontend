import { BigP, SmallP, WrapperGrid3 } from "../Accounts.styled";

const PmtTable = () => {
  return (
    <div style={{height: '50%'}}>
      <WrapperGrid3>
        <BigP>PMT List</BigP>
        <BigP>Campus</BigP>
        <></>
      </WrapperGrid3>
      <hr /><br/>
      <WrapperGrid3>
        <SmallP>Dean</SmallP>
        <SmallP>[Campus]</SmallP>
        <></>
      </WrapperGrid3>
    </div>
  );
};

export default PmtTable;