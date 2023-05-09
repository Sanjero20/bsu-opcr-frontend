import { CampusWrapper, SideCampusListWrapper, SideDepartmentListWrapper } from "../campus/Campus.styled";
import { CLHeader1 } from "../campus/Campus.styled";
import DynForm from "./creator/CreateAccount";
import HeadTable from "./tables/HeadTable";
import PmtTable from "./tables/PmtTable";

const Accounts = () => {
  return (
    <CampusWrapper>
      <SideCampusListWrapper>
        <div>
          <CLHeader1>Create Account</CLHeader1>
          <br/>
          <DynForm title="Head"/>
          <br/><br/>
          <DynForm title="PMT"/>
        </div>
      </SideCampusListWrapper>
      <SideDepartmentListWrapper>
        <HeadTable/>
        <PmtTable/>
      </SideDepartmentListWrapper>
    </CampusWrapper>
  );
}

export default Accounts;
