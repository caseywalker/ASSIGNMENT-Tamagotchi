let fun = 50;

// *** Event Handlers *** //

const handleFrolic = (e) => {
  e.preventDefault();
  fun += 50;
  if (fun > 100) {
    fun = 100;
    document.querySelector('#funness').innerHTML = `Fun: ${fun}`;
  } else {
    document.querySelector('#funness').innerHTML = `Fun: ${fun}`;
  }
};

const handleGolf = (e) => {
  e.preventDefault();
  fun += 2;
  if (fun > 100) {
    fun = 100;
    document.querySelector('#funness').innerHTML = `Fun: ${fun}`;
  } else {
    document.querySelector('#funness').innerHTML = `Fun: ${fun}`;
  }
};

export { handleFrolic, handleGolf };
