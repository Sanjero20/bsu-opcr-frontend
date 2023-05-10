import { Fragment, useContext } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';

import TextareaAutosize from 'react-textarea-autosize';
import { TargetContext } from '../Mfo';

function Content() {
  const { targets, pmt, handleComments } = useContext(TargetContext);

  return (
    <tbody>
      <Title className="no-pad">
        <td colSpan={10}>{}</td>
      </Title>

      {targets &&
        targets.map((targetObj) => {
          const { _id, target, keySuccess } = targetObj;

          return (
            <Fragment key={_id}>
              {keySuccess.map((indicator, index) => {
                const { _id, successIndicator, comments } = indicator;

                return (
                  <Contents key={_id}>
                    {/* Target */}

                    {index == 0 ? (
                      <TargetColumn rowSpan={keySuccess.length}>
                        {target}
                      </TargetColumn>
                    ) : null}

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
                    <td>
                      {/* If Head display comments, else show editable comment field */}
                      {!pmt ? (
                        <pre> {comments} </pre>
                      ) : (
                        <TextArea
                          value={comments}
                          onChange={(e) =>
                            handleComments(e, targetObj._id, indicator._id)
                          }
                        />
                      )}
                    </td>
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

const TextArea = styled(TextareaAutosize)`
  resize: none;
  padding: 0.25em;
`;

const TargetColumn = styled.td`
  vertical-align: text-top;
`;
