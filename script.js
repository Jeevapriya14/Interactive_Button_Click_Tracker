function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
const clickBtn = document.getElementById('clickBtn');
const clickDisplay = document.getElementById('clickDisplay');

clickBtn.addEventListener('click', () => {
  const newCount = counter();
  clickDisplay.textContent = `Clicks: ${newCount}`;
});
