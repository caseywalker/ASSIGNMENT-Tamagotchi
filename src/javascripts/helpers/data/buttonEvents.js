import { handleCookie, handleSalmon } from '../buttonFuncs/eatFunc';
import { handleRun, handleSmash } from '../buttonFuncs/fightFunc';
import { handleFrolic, handleGolf } from '../buttonFuncs/funFunc';
import { handleHibernate, handleNap } from '../buttonFuncs/sleepFunc';

// *** Event Listeners *** //
const handleButtonClicks = () => {
  document.querySelector('#salmon').addEventListener('click', handleSalmon);
  document.querySelector('#cookie').addEventListener('click', handleCookie);
  document.querySelector('#frolic').addEventListener('click', handleFrolic);
  document.querySelector('#golf').addEventListener('click', handleGolf);
  document.querySelector('#run').addEventListener('click', handleRun);
  document.querySelector('#smash').addEventListener('click', handleSmash);
  document.querySelector('#nap').addEventListener('click', handleNap);
  document.querySelector('#hibernate').addEventListener('click', handleHibernate);
};

export default handleButtonClicks;
