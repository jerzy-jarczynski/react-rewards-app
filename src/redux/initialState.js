const initialState = {

  points: '3100',

  password: '1111',

  navlinks: [
    {
      id: '1',
      name: 'Nagrody',
      icon: `${process.env.PUBLIC_URL}/images/icons/nav-gift.svg`,
      iconActive: `${process.env.PUBLIC_URL}/images/icons/nav-gift-active.svg`,
      linkTo: '/react-rewards',
    },
    {
      id: '2',
      name: 'Oś czasu',
      icon: `${process.env.PUBLIC_URL}/images/icons/nav-clock.svg`,
      iconActive: `${process.env.PUBLIC_URL}/images/icons/nav-clock-active.svg`,
      linkTo: '/react-rewards/timeline',
    }
  ],

  rewards: [],

  timeline: [
    {
      id: '1',
      type: 'add',
      title: 'Dodano 35 punktów',
      date: new Date('02-02-2022'),
      gatheredPoints: '1535',
      rewardId: null,
    },
    {
      id: '2',
      type: 'subtract',
      title: 'Odjęto 20 punktów',
      date: new Date('03-03-2023'),
      gatheredPoints: '1515',
      rewardId: null,
    },
    {
      id: '3',
      type: 'reward',
      title: 'Zakupiono nagrodę',
      date: new Date('04-04-2023'),
      gatheredPoints: '1415',
      rewardId: '25',
    }
  ],

};

export default initialState;