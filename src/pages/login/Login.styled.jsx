import styled from 'styled-components';
import theme from '../../styles/theme';

const SharedStyle = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: ${theme.white};
`;

export const Left = styled(SharedStyle)``;

export const Right = styled(SharedStyle)`
  background-color: white;
  border-radius: 20px;
`;

export const Form = styled.form`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  fieldset {
    border: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  color: ${theme.pink};
  font-size: 2rem;

  span {
    color: #020202;
  }
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 1px solid #959595;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: ${theme.red};
  color: white;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Link = styled.a`
  color: ${theme.pink};
  text-align: center;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
  }
`;

export const BtnIcon = styled.button`
  position: absolute;
  right: 0.25em;
  height: 90%;
  background-color: white;
  padding: 0 0.5em;

  svg {
    font-size: 1.5em;
    color: gray;
  }
`;
