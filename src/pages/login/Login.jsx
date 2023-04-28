import illustration from '../../assets/work.svg';
import { useState } from 'react';
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

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();

    console.log(username, password);
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
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Link href="">Forgot Password?</Link>
          </fieldset>

          <hr />

          <Button type="submit">Log In</Button>
        </Form>
      </Right>
    </Container>
  );
}

export default Login;
