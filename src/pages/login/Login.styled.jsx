import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.white};
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  padding: 4rem 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 1366px) {
    transform: scale(0.75);
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  hr {
    width: 90%;
  }

  fieldset {
    width: 90%;
    border: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const Title = styled.p`
  color: ${theme.pink};
  font-size: 1.75rem;
  line-height: 42px;
`;

export const Input = styled.input`
  font-size: 1.5rem;
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 1px solid #959595;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 90%;
  background-color: ${theme.red};
  color: white;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Link = styled.a`
  text-align: center;
  color: ${theme.pink};
`;
