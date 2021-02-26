let full = 100;

const handleSalmon = (e) => {
  e.preventDefault();
  full += 10;
  if (full > 100) {
    full = 100;
    document.querySelector('#fullness').innerHTML = `Fullness: ${full}`;
  } else {
    document.querySelector('#fullness').innerHTML = `Fullness: ${full}`;
  }
};

const handleCookie = (e) => {
  e.preventDefault();
  full -= 3;
  if (full < 0) {
    full = 0;
    document.querySelector('#fullness').innerHTML = `Fullness: ${full}`;
  } else {
    document.querySelector('#fullness').innerHTML = `Fullness: ${full}`;
  }
};

export { handleSalmon, handleCookie };
