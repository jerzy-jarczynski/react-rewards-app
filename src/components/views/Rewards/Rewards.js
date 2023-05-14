import Reward from '../../features/Reward/Reward';
import styles from './Rewards.module.scss';
import { useSelector } from 'react-redux';
import { getAllRewards } from '../../../redux/rewardsRedux';

const Rewards = () => {

  const rewards = useSelector(getAllRewards);

  return (
    <ul className={ styles.rewards }>
      { rewards.map(reward => <Reward key={reward.id} {...reward} />) }
    </ul>
  );
};

export default Rewards;