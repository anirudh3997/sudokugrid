var currentIndex = 0;

function handleKeyDown(evt) {
  switch (evt.key) {
    case 'SoftLeft':
      break;

    case 'SoftRight':
      break;

    case 'Enter':
      document.getElementById("id").focus();
      break;

    case 'ArrowUp':
      navvert(-10);
      break;

    case 'ArrowDown':
      navvert(10);
      break;

    case 'ArrowRight':
      navside(1);
      break;

    case 'ArrowLeft':
      navside(-1);
      break;

    case '1':
      console.log(document.activeElement);
      document.activeElement.value = "1";
      break;
  }
};
function navside (move) {
  console.log("horizontal");
  console.log(move);
  var next = currentIndex + move;
  var item = document.querySelectorAll('.item');
  var targetElement = item[next];
  targetElement.focus();
  currentIndex = next;
}
function navvert (move) {
  console.log("vertical");
  console.log(move);
  var next = currentIndex + move;
  var item = document.querySelectorAll('.vert');
  var targetElement = item[next];
  targetElement.focus();
  currentIndex = next;
}
document.activeElement.addEventListener('keydown', handleKeyDown);
