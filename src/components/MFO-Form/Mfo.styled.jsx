import styled from 'styled-components';

// Long bond paper size  2550 x 3900 pixels.

export const Container = styled.div`
  background-color: white;
  overflow-y: auto;

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  /* For tr containing td */
  .no-pad {
    td {
      padding: 0.1rem;
    }
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

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
