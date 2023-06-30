import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  
  
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>Upload stats</h2>}

            <ul className={styles.statList}>
          {stats.map(({ id, label, percentage }) => (     
          
          <li className={styles.item} key={id} style={{ backgroundColor: getRandomColorRGB(), width: `calc(100%/${stats.length})`}}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
                
  </ul>
</section>
    )
}

function getRandomColorRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired
};
