var currentIndex = 0;
var currentRow = 0;

function handleKeyDown(evt) {
  switch (evt.key) {
    case 'SoftLeft':
      document.getElementById('btn1').click();
      break;

    case 'SoftRight':
       document.activeElement.value = "";
      break;

    case 'Enter':
      document.getElementById("btn2").click();
      break;

    case 'ArrowUp':
      navvert(-1);
      break;

    case 'ArrowDown':
      navvert(1);
      break;

    case 'ArrowRight':
      navside(1);
      break;

    case 'ArrowLeft':
      navside(-1);
      break;

    case '1':
      document.activeElement.value = "1";
      break;

    case '2':
      document.activeElement.value = "2";
      break;

    case '3':
      document.activeElement.value = "3";
      break;

    case '4':
      document.activeElement.value = "4";
      break;

    case '5':
      document.activeElement.value = "5";
      break;

    case '6':
      document.activeElement.value = "6";
      break;

    case '7':
      document.activeElement.value = "7";
      break;

    case '8':
      document.activeElement.value = "8";
      break;

    case '9':
      document.activeElement.value = "9";
      break;
  }
};
function navside (move) {
  var rows=document.querySelectorAll('.vert');
  var targetRow= rows[currentRow];
  var next = currentIndex + move;
  var item = targetRow.querySelectorAll('.item');
  var targetElement = item[next];
  var previousElement = item[currentIndex];
  targetElement.style.backgroundColor="#ffe0b2";
  if(!targetElement.readOnly){
    targetElement.focus();
  }
  previousElement.style.backgroundColor="transparent";
  previousElement.blur();
  currentIndex = next;
}
function navvert (move) {
  var nextRow= move+currentRow;
  var rows = document.querySelectorAll('.vert');
  var previousRow=rows[currentRow];
  var previousElements= previousRow.querySelectorAll('.item');
  var previousElement = previousElements[currentIndex];
  var targetRow = rows[nextRow];
  var items = targetRow.querySelectorAll('.item');
  var targetElement = items[currentIndex];
  targetElement.style.backgroundColor="#ffe0b2";
  if(!targetElement.readOnly){
  targetElement.focus();
}
previousElement.style.backgroundColor="transparent";
previousElement.blur();
  currentRow=nextRow;
}
document.activeElement.addEventListener('keydown', handleKeyDown);
