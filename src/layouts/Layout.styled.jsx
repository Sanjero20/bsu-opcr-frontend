import styled from 'styled-components';

// Wrapper Container
export const LayoutContainer = styled.div`
  height: 100vh;
  overflow: hidden;
`;

// For Head and PMT
export const ContentContainer = styled.div`
  padding: 1rem;
  height: calc(100vh - 85px);
`;

export const Content = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
