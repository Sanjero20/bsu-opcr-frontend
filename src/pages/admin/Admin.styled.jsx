import styled from 'styled-components';

export const Separator = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: calc(20% - 0.5rem) calc(80% - 0.5rem);
  column-gap: 1rem;
`;

export const ContentHolder = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 0px 2px 5px 0px gray;

  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;

  div.gridItem {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonStyle = styled.button`
  width: 93%;
  background-color: #b34646;
  color: white;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 3px 3px 3px #670f0f;
  font-size: 14pt;

  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    transform: translateY(1.5px);
    box-shadow: 0px 1.5px 1.5px 1.5px #670f0f;
    background-color: white;
    color: #853030;
  }

  &:focus {
    background-color: white;
    color: #853030;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: white;

  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;
