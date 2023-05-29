import styles from './TimeLineList.module.scss';
import { useSelector } from 'react-redux';
import { getTimeline } from '../../../redux/timelineRedux';
import TimeLineEvent from '../../common/TimeLineEvent/TimeLineEvent';

const Rewards = () => {

  const timeline = useSelector(getTimeline);

  return (
    <ul className={ styles.TimeLineList }>
      {
        timeline.map(timelineItem => (
          <TimeLineEvent key={timelineItem.id} {...timelineItem} />
        ))
      }
    </ul>
  );
};

export default Rewards;