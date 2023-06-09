import styled from 'styled-components';

// Long bond paper size  2550 x 3900 pixels.

export const Table = styled.table`
  width: 100%;

  * {
    font-family: 'Times New Roman', Times, serif !important;
    font-size: 12px;
  }

  td,
  th {
    border: 1px solid black;
    padding: 1rem;
  }
`;

export const NoPadding = styled.td`
  padding: 0.1rem !important;
`;
