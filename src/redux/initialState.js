const initialState = {

  rewards: [
    {
      id: '1',
      title: 'Wyjście do kina (bez jedzenia na miejscu)',
      description: 'Zawiera opłatę za seans w dowolnym kinie bez kupowania jedzenia w sklepie kinowym.',
      price: '140',
      img: `${process.env.PUBLIC_URL}/images/rewards/cinema.jpg`,
      imgAlt: 'Sala kinowa',
    },
    {
      id: '2',
      title: 'Dowolny prezent w cenie 1-50 zł',
      description: '',
      price: '160',
      img: `${process.env.PUBLIC_URL}/images/rewards/gift.jpg`,
      imgAlt: 'Mały prezent',
    },
    {
      id: '3',
      title: 'Wyjście do kina (z jedzeniem na miejscu)',
      description: 'Zawiera opłatę za seans w dowolnym kinie wraz z kupieniem dowolnej ilości jedzenia w sklepie kinowym.',
      price: '300',
      img: `${process.env.PUBLIC_URL}/images/rewards/cinema-food.jpg`,
      imgAlt: 'Jedzenie w kinie',
    },
  ],

};

export default initialState;