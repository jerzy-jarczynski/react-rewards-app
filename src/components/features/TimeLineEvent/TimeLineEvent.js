import styles from './TimeLineEvent.module.scss';
import { useSelector } from 'react-redux';
import { getRewardById } from '../../../redux/rewardsRedux';
import Reward from '../Reward/Reward';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const TimeLineEvent = props => {

  const [iconSrc, setIconSrc] = useState('');

  console.log('TimeLineEvent', props);

  const rewardData = useSelector(
    state => getRewardById(state, props.rewardId)
  );

  const formatter = new Intl.DateTimeFormat( 'pl', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    setIconSrc(
      `${process.env.PUBLIC_URL}/images/icons/event-${props.type}-icon.svg`
    );
  }, [iconSrc, props.type]);

  return (
    <div className={clsx(styles.TimeLineEvent, props.lastClass && styles.lastEvent)}>
      <div className={styles.eventIcon}>
        <img alt={`icon-${props.type}`} src={iconSrc} />
      </div>
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