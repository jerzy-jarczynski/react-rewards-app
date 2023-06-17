import styles from './TimeLineReward.module.scss';
import PointsButton from '../../common/PointsButton/PointsButton';

const TimeLineReward = props => {

  return (
    <div className={ styles.reward }>
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
        <PointsButton location={ 'Reward' } amount={ props.price } disabled={true} />
      </div>
    </div>
  );

};

export default TimeLineReward;