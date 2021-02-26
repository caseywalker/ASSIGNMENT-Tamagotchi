import '../styles/main.scss';
import eatCardBuilder from './components/eatCard';
import fightCardBuilder from './components/fightCard';
import playCardBuilder from './components/playCard';
import sleepCardBuilder from './components/sleepCard';
import handleButtonClicks from './helpers/data/buttonEvents';

const init = () => {
  eatCardBuilder();
  playCardBuilder();
  fightCardBuilder();
  sleepCardBuilder();
  handleButtonClicks();
};

init();
