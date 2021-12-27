import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
  return (
    <ul>
      <li className={s.listItem}>Good:{good}</li>
      <li className={s.listItem}>Neutral:{neutral}</li>
      <li className={s.listItem}>Bad:{bad}</li>
      <li className={s.listItem}>Total:{total}</li>
      <li className={s.listItem}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
