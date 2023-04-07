import {StyledUl, StyledLi} from './StatList.styled'
import PropTypes from 'prop-types';

export const StatList = ({data}) => {
  return (
    <StyledUl className="stat-list">
      {data.map(item => (
        <StyledLi className="item" key={item.id}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
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