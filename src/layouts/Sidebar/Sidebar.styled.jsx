import styled from 'styled-components';
import theme from '../../styles/theme';

import { NavLink as Link } from 'react-router-dom';

export const Aside = styled.aside`
  background-color: ${theme.red};

  padding: 2rem 0 4rem 0;
  padding: 2rem 1em;
  padding-bottom: 4rem;

  height: 100%;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const List = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const NavLink = styled(Link)`
  padding: 2.5em;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  gap: 0.5em;

  border-radius: 10px;
  font-size: 1.25em;

  background-color: #b34646;
  color: white;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &.active {
    background-color: white;
    color: ${theme.red};
  }
`;

export const Button = styled.button`
  color: white;
  display: flex;
  align-items: center;
  font-size: 1.1em;
  gap: 0.5em;
`;
