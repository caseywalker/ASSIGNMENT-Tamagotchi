let energy = 50;
// *** Event Handlers *** //

const handleNap = (e) => {
  e.preventDefault();
  energy += 50;
  if (energy > 100) {
    energy = 100;
    document.querySelector('#energy').innerHTML = `Energy: ${energy}`;
  } else {
    document.querySelector('#energy').innerHTML = `Energy: ${energy}`;
  }
};

const handleHibernate = (e) => {
  e.preventDefault();
  energy += 60;
  if (energy > 100) {
    energy = 100;
    document.querySelector('#energy').innerHTML = `Energy: ${energy}`;
  } else {
    document.querySelector('#energy').innerHTML = `Energy: ${energy}`;
  }
};

export { handleNap, handleHibernate };
