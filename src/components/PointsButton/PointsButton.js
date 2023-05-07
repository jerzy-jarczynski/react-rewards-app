import clsx from 'clsx';
import styles from './PointsButton.module.scss';

const PointsButton = props => {

  return (
    <button className={clsx(styles.button, styles[props.location] )} onClick={ props.clickFunction }>
      <img src={ `${process.env.PUBLIC_URL}/images/icons/reward.png` } alt="Ikona prezent" className={ styles.icon } />
      <span className={ styles.amount }>
        { props.amount }
      </span>
    </button>
  );
};

export default PointsButton;