import styles from './TimeLineEvent.module.scss';
import { useSelector } from 'react-redux';
import { getRewardById } from '../../../redux/rewardsRedux';
import Reward from '../../features/Reward/Reward';

const TimeLineEvent = props => {

  console.log('TimeLineEvent', props);

  const rewardData = useSelector(
    state => getRewardById(state, props.rewardId)
  );

  const formatter = new Intl.DateTimeFormat( 'pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={styles.TimeLineEvent}>
      <h3>
        { props.title }
      </h3>
      <span>
        { formatter.format( props.date ) }
      </span>
      <span>
        { `Zebrane punkty: ${ props.gatheredPoints }` }
      </span>
      {
        rewardData
        ? <Reward {...rewardData} />
        : null 
      }
    </div>
  );

};

export default TimeLineEvent;