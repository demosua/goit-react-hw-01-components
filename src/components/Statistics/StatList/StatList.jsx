import {StyledUl, StyledLi, StyledLabel, StyledPercentage} from './StatList.styled'
import PropTypes from 'prop-types';

export const StatList = ({data}) => {
  return (
    <StyledUl>
      {data.map(item => (
        <StyledLi key={item.id}>
          <StyledLabel>{item.label}</StyledLabel>
          <StyledPercentage>{item.percentage}%</StyledPercentage>
        </StyledLi>
      ))}
    </StyledUl>
  )};

  StatList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }))
  };