import {StatisticsList} from '../StatisticsList/StatisticsList';
import {StatSection, StatTitle} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({title, data}) => {
  return (
    <StatSection>
      { title && <StatTitle>{title}</StatTitle>}
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <StatisticsList
            label = {item.label}
            percentage = {item.percentage}
            />
          </li>
        ))}
      </ul>
    </StatSection>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};
