import styles from './TimeLineList.module.scss';
import { useSelector } from 'react-redux';
import { getTimeline } from '../../../redux/timelineRedux';
import TimeLineEvent from '../../features/TimeLineEvent/TimeLineEvent';

const Rewards = () => {

  const timeline = useSelector(getTimeline);

  return (
    <ul className={ styles.TimeLineList }>
      {
        timeline.map((timelineItem, index) => (
          <TimeLineEvent
            key={timelineItem.id}
            {...timelineItem}
            lastClass={index === timeline.length - 1 ? true : false}
          />
        ))
      }
    </ul>
  );
};

export default Rewards;