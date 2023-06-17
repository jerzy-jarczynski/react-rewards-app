import clsx from 'clsx';
import styles from './PointsButton.module.scss';

const PointsButton = props => {

  return (
    <button className={clsx(styles.button, styles[props.location], props.disabled && styles.disabled )} onClick={ props.clickFunction } disabled={props.disabled}>
      <img src={ `${process.env.PUBLIC_URL}/images/icons/icon - gift box.svg` } alt="Ikona prezent" className={ styles.icon } />
      <span className={ styles.amount }>
        { props.amount }
      </span>
    </button>
  );
};

export default PointsButton;