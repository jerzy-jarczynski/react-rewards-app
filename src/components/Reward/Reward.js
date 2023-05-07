import styles from './Reward.module.scss';
import PointsButton from '../PointsButton/PointsButton';

const Reward = props => {

  return (
    <li className={ styles.reward }>
      <div className={ styles.imageWrapper }>
        <img src={ props.img } alt={ props.imgAlt } className={ styles.image } />
      </div>
      <h3 className={ styles.title }>
        { props.title }
      </h3>
      <p className={ styles.description }>
        { props.description }
      </p>
      <div className={ styles.price }>
        <PointsButton location={ 'Reward' } amount={ props.price } />
      </div>
    </li>
  );

};

export default Reward;