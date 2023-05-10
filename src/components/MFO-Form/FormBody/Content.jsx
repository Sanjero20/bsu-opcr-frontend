import { Fragment, useContext } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';

import TextareaAutosize from 'react-textarea-autosize';
import { TargetContext } from '../Mfo';

function Content() {
  const { targets, pmt } = useContext(TargetContext);

  return (
    <tbody>
      <Title className="no-pad">
        <td colSpan={10}>{}</td>
      </Title>

      {targets &&
        targets.map((obj) => {
          const { _id, target, keySuccess } = obj;

          return (
            <Fragment key={_id}>
              {keySuccess.map((indicator, index) => {
                console.log(indicator);

                const { _id, successIndicator, comments } = indicator;

                return (
                  <Contents key={_id}>
                    {/* Target */}

                    {index == 0 ? (
                      <td rowSpan={keySuccess.length}>{target}</td>
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
                      {!pmt ? <pre> {comments} </pre> : <TextArea />}
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
    vertical-align: text-top;
  }

  pre {
    white-space: pre-wrap;
  }
`;

const TextArea = styled(TextareaAutosize)`
  resize: none;
  padding: 0.25em;
`;
