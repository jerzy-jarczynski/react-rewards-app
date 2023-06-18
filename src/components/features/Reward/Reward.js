// styles
import styles from './Reward.module.scss';
// components
import PointsButton from '../../common/PointsButton/PointsButton';
import RewardImage from '../RewardImage/RewardImage';

const Reward = props => {

  return (
    <li className={ styles.reward }>
      <RewardImage source={props.img} altText={props.imgAlt} />
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