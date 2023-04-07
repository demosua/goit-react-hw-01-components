import {StatList} from './StatList/StatList';
import {StatSection, StatTitle} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({title, data}) => {
  return (
    <StatSection className="statistics">
      { title && <StatTitle className="title">{title}</StatTitle>}
      <StatList data = {data}/>
    </StatSection>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()),
};
