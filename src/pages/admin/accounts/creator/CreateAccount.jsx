import { useState } from "react";
import { registerHead, registerPmt } from "../../../../services/requests";
import { BigP, CreateButton, Input } from "../Accounts.styled";

const DynForm = (props) => {
  const { title } = props;
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const [cpassword, setCPass] = useState('');

  const addUser = (val) => {
    setUser(val.target.value);
  };

  const addPass = (val) => {
    setPass(val.target.value);
  };

  const addCPass = (val) => {
    setCPass(val.target.value);
  };

  const resetInputs = () => {
    setUser(''); setPass(''); setCPass('');
  };

  const getCredentials = () => {
    return {
      username: username,
      password: password
    }
  };

  const createPmt = async () => {
    if (password != cpassword) {
      alert('Password Does Not Match!');
      resetInputs();
      return;
    }

    const response = await registerPmt(getCredentials());
    if (response.registered) window.location.reload();
  };

  const createHead = async () => {
    if (password != cpassword) {
      alert('Password Does Not Match!');
      resetInputs();
      return;
    }
    const response = await registerHead(getCredentials());
    if (response.registered) window.location.reload();
  };

  return (
    <div>
      <BigP>{title}</BigP><br/>
      <Input onChange={addUser} value={username} placeholder="Username"/>
      <Input onChange={addPass} value={password} type="password" placeholder="Password"/>
      <Input onChange={addCPass} value={cpassword} type="password" placeholder="Confirm Password"/>
      <CreateButton onClick={ title == 'Head' ? createHead : createPmt }>Create</CreateButton>
    </div>
  );
};

export default DynForm;