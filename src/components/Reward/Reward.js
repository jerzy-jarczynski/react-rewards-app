import styles from './Reward.module.scss';

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
        <img src={ `${process.env.PUBLIC_URL}/images/icons/reward.png` } alt="Ikona prezent" className={ styles.rewardIcon } />
        <span className={ styles.amount }>
          { props.price }
        </span>
      </div>
    </li>
  );

};

export default Reward;