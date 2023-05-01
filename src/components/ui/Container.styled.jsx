import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  background-color: ${theme.white};
  padding: 1em 3em;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5em;

  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
