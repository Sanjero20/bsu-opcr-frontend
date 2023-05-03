import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

function Content({ data }) {
  return (
    <tbody>
      <Title className="no-pad">
        <td colSpan={10}>{}</td>
      </Title>

      {data &&
        data.map((obj) => {
          const { id, target, keySuccess } = obj;

          return (
            <Fragment key={id}>
              {keySuccess.map((indicator, index) => {
                const { id, successIndicator } = indicator;

                return (
                  <Contents key={id}>
                    {/* Target */}

                    <td>{index == 0 ? <>{target}</> : null}</td>

                    {/* Key Success Indicators */}
                    <td>{successIndicator}</td>

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

// Prop Validation
Content.propTypes = {
  data: PropTypes.array,
};

// Styles
const Title = styled.tr`
  background-color: ${theme.gray};

  td {
    padding: 1em 0.5rem !important;
  }
`;

const Contents = styled.tr`
  td {
    height: auto;
  }
`;
