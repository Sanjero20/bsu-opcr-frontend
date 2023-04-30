import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const core = 'CORE FUNCTIONS';
const strategy = 'STRATEGIC AND SUPPORT FUNCTIONS';

function Content({ type, data }) {
  return (
    <tbody>
      <Title className="no-pad">
        <td colSpan={10}>{type === 'core' ? <>{core}</> : <>{strategy}</>}</td>
      </Title>

      {data &&
        data.map((obj, index) => {
          return (
            <Contents key={index}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
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
    </tbody>
  );
}

export default Content;

// Prop Validation
Content.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.array,
};

// Styles
const Title = styled.tr`
  background-color: ${theme.gray};

  td {
    padding-left: 0.5rem !important;
  }
`;

const Contents = styled.tr`
  td {
    height: auto;
  }
`;
