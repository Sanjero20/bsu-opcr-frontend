import illustration from '../../assets/work.svg';
import { useState } from 'react';
import {
  Container,
  FormContainer,
  Form,
  Title,
  Input,
  Button,
  Link,
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
      <FormContainer>
        <img src={illustration} alt="illustration.svg" />

        <Form onSubmit={signIn}>
          <Title>OFFICE PERFORMANCE COMMITMENT REVIEW</Title>

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
      </FormContainer>
    </Container>
  );
}

export default Login;
