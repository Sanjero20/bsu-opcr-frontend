import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.header`
  background-color: ${theme.red};
  color: white;
  height: 85px;

  display: flex;
  align-items: center;

  justify-content: space-between;

  padding: 1.5rem;
  font-size: 1.25rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25em;
  color: ${theme.red};
  background-color: white;
  padding: 0.25em 0.75em;
  border-radius: 25px;
`;
