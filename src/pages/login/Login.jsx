import illustration from '../../assets/work.svg';
import { useState, useEffect } from 'react';
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  Link,
  Left,
  Right,
} from './Login.styled';

import { login } from '../../services/requests';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  useEffect(() => {
    if (!error) return;
    setError('');
  }, [username, password]);

  const signIn = async (e) => {
    e.preventDefault();

    const response = await login({ username, password });

    if (response.error) {
      setError(response.error);
      return;
    }

    // Redirect based on access type:
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

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Link href="">Forgot Password?</Link>
          </fieldset>

          <hr />
          {error && <>{error}</>}

          <Button type="submit">Log In</Button>
        </Form>
      </Right>
    </Container>
  );
}

export default Login;
