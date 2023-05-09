import { BigP, CreateButton, Input } from "../Accounts.styled";

const DynForm = (props) => {
  const { title } = props;

  return (
    <div>
      <BigP>{title}</BigP>
      <Input placeholder="Username"/>
      <Input type="password" placeholder="Password"/>
      <Input type="password" placeholder="Confirm Password"/>
      <CreateButton>Create</CreateButton>
    </div>
  );
};

export default DynForm;