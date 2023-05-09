import { CampusWrapper, SideCampusListWrapper } from "../campus/Campus.styled";
import { CLHeader1 } from "../campus/Campus.styled";
import DynForm from "./creator/CreateAccount";

const Accounts = () => {
  return (
    <CampusWrapper>
      <SideCampusListWrapper>
        <div>
          <CLHeader1>Create Account</CLHeader1>
          <br/>
          <DynForm title="Head"/>
          <br/>
          <DynForm title="PMT"/>
        </div>
      </SideCampusListWrapper>
    </CampusWrapper>
  );
}

export default Accounts;
