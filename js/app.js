const bob = document.querySelector('.bob');
const eyes = document.querySelector('.eye-container');

let left = 100;

function moveRight() {
  left += 100;
  bob.style.left = left + 'px';
  eyes.style.transform = 'rotate(0deg)';
  eyes.style.left = '60px';
}

function moveLeft() {
  left -= 100;
  bob.style.left = left + 'px';
  eyes.style.transform = 'rotate(180deg)';
  eyes.style.left = '-60px';
}

function moveBob(e) {
  if (e.key === 'ArrowLeft') {
    // Move Bob left
    moveLeft();
  }
  if (e.key === 'ArrowRight') {
    // Move Bob right
    moveRight();
  }
}

document.addEventListener('keydown', moveBob);
