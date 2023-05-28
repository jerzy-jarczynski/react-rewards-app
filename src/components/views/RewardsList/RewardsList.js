import React, { Suspense } from 'react';
import styles from './RewardsList.module.scss';
import { useSelector } from 'react-redux';
import { getAllRewards } from '../../../redux/rewardsRedux';
import { motion } from "framer-motion";

const Reward = React.lazy(() => import('../../features/Reward/Reward'));

const Rewards = () => {

  const rewards = useSelector(getAllRewards);

  return (
    <ul className={ styles.RewardsList }>
      {
        rewards.map(reward => (
          <Suspense key={reward.id} fallback={<div>Ładowanie nagrody...</div>}>
            <motion.div
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.4 }}
            >
              <Reward {...reward} />
            </motion.div>
          </Suspense>
        )) 
      }
    </ul>
  );
};

export default Rewards;