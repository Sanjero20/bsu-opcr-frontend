import styled from 'styled-components';

// Long bond paper size  2550 x 3900 pixels.

export const Container = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .no-pad {
    * {
      padding: 0.1rem;
    }
  }
`;

export const Logo = styled.img`
  width: 60px;
`;

export const Table = styled.table`
  * {
    font-family: 'Times New Roman', Times, serif !important;
  }

  td,
  th {
    border: 1px solid black;
    padding: 1rem;
  }

  width: 100%;
  position: relative;
`;

export const IntroAndDate = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: 1rem;
    width: 250px;
    align-self: end;

    & > p:first-child {
      width: 100%;
      border-top: 1px solid black;
      text-align: center;
    }
  }
`;
