import { useState, useEffect } from "react";
import { CampusWrapper, SideCampusListWrapper, SideDepartmentListWrapper } from "../campus/Campus.styled";
import { retrievePmtAccount, retrieveHeadAccount } from "../../../services/requests";
import { CLHeader1 } from "../campus/Campus.styled";
import DynForm from "./creator/CreateAccount";
import HeadTable from "./tables/HeadTable";
import PmtTable from "./tables/PmtTable";

const Accounts = () => {
  const [campusList, campusListLoader] = useState([]);
  const [pmtAccList, pmtAccListLoader] = useState([]);
  const [headAccList, headAccListLoader] = useState([]);

  useEffect(() => {
    async function getAccounts() {
      const headAcc = await retrieveHeadAccount();
      const pmtAcc = await retrievePmtAccount();
      pmtAccListLoader(pmtAcc.accounts);
      headAccListLoader(headAcc.accounts);
    }
    getAccounts();

  }, []);

  return (
    <CampusWrapper>
      <SideCampusListWrapper>
        <div>
          <CLHeader1>Create Account</CLHeader1><br/>
          <DynForm title="Head"/><br/><br/>
          <DynForm title="PMT"/>
        </div>
      </SideCampusListWrapper>
      <SideDepartmentListWrapper>
        <HeadTable data={headAccList}/>
        <PmtTable/>
      </SideDepartmentListWrapper>
    </CampusWrapper>
  );
}

export default Accounts;
