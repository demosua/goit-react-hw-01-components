import {StatSection, StatTitle, StyledUl, StyledLi, StyledLabel, StyledPercentage} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({title, data}) => {
  return (
    <StatSection>
      { title && <StatTitle>{title}</StatTitle>}
        <StyledUl>
          {data.map(item => (
            <StyledLi key={item.id}>
              <StyledLabel>{item.label}</StyledLabel>
              <StyledPercentage>{item.percentage}%</StyledPercentage>
            </StyledLi>
          ))}
        </StyledUl>
    </StatSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
