import illustration from '../../assets/work.svg';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Container,
  Form,
  Title,
  InputContainer,
  Input,
  BtnIcon,
  Button,
  Link,
  Left,
  Right,
} from './Login.styled';

import { VscEye, VscEyeClosed } from 'react-icons/vsc';

import { login } from '../../services/requests';
import { getCookie, saveCookie } from '../../services/cookieService';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = getCookie('token');
      const access = getCookie('access');

      if (!token) return;

      navigate(access);
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (!error) return;
    setError('');
  }, [username, password]);

  const toggleShowPassword = () => {
    setShowPass(!showPass);
  };

  const signIn = async (e) => {
    e.preventDefault();

    const response = await login({ username, password });

    if (response.error || response.isLoggedIn === false) {
      setError(response.error);
      return;
    }

    const { access, token } = response;

    saveCookie('access', access);
    saveCookie('token', token);

    // Redirect based on access type:
    navigate(access);
  };

  return (
    <Container>
      <Left>
        <img src={illustration} alt="illustration.svg" />
      </Left>

      <Right>
        <Form onSubmit={signIn}>
          <div>
            <Title>
              Welcome <span>Back!</span>
            </Title>
            <strong>Login to proceed</strong>
          </div>

          <fieldset>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <InputContainer>
              <Input
                type={!showPass ? 'password' : 'text'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <BtnIcon type="button" onClick={toggleShowPassword}>
                {showPass ? <VscEye /> : <VscEyeClosed />}
              </BtnIcon>
            </InputContainer>

            <Link href="">Forgot Password?</Link>
          </fieldset>

          <hr />

          <Button type="submit">Log In</Button>

          {error && <>{error}</>}
        </Form>
      </Right>
    </Container>
  );
}

export default Login;
