import styles from './TimeLineReward.module.scss';
import PointsButton from '../../common/PointsButton/PointsButton';
import RewardImage from '../RewardImage/RewardImage';

const TimeLineReward = props => {

  return (
    <div className={ styles.reward }>
      <RewardImage source={props.img} altText={ props.imgAlt } />
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