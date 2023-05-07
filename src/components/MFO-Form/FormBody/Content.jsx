import { Fragment, useContext } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';

import { TargetContext } from '../Mfo';

function Content() {
  const data = useContext(TargetContext);

  return (
    <tbody>
      <Title className="no-pad">
        <td colSpan={10}>{}</td>
      </Title>

      {data &&
        data.map((obj) => {
          const { _id, target, keySuccess } = obj;

          return (
            <Fragment key={_id}>
              {keySuccess.map((indicator, index) => {
                const { _id, successIndicator } = indicator;

                return (
                  <Contents key={_id}>
                    {/* Target */}
                    <td>{index == 0 ? <>{target}</> : null} </td>

                    {/* Key Success Indicators */}
                    <td>
                      <pre>{successIndicator}</pre>
                    </td>

                    {/* Alloted Budget */}
                    <td></td>

                    {/* Division/Individual Accountable  */}
                    <td></td>

                    {/* Actual Accomplishment */}
                    <td></td>

                    {/* Rating */}
                    <td />
                    <td />
                    <td />
                    <td />

                    {/* Remarks */}
                    <td></td>
                  </Contents>
                );
              })}
            </Fragment>
          );
        })}
    </tbody>
  );
}

export default Content;

// Styles
const Title = styled.tr`
  background-color: ${theme.gray};

  td {
    padding: 1em 0.5rem !important;
  }
`;

const Contents = styled.tr`
  td {
    height: 1.25rem;
    padding: 0.25rem !important;
  }

  pre {
    white-space: pre-wrap;
  }
`;
