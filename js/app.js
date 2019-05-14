var currentIndex = 0;
var currentRow = 0;

function handleKeyDown(evt) {
  switch (evt.key) {
    case 'SoftLeft':
      break;

    case 'SoftRight':
      break;

    case 'Enter':
    currentRow=0;
    currentIndex=0;
      document.getElementById("id").focus();
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
      console.log(document.activeElement);
      document.activeElement.value = "1";
      break;

    case '2':
      console.log(document.activeElement);
      document.activeElement.value = "2";
      break;

    case '3':
      console.log(document.activeElement);
      document.activeElement.value = "3";
      break;

    case '4':
      console.log(document.activeElement);
      document.activeElement.value = "4";
      break;

    case '5':
      console.log(document.activeElement);
      document.activeElement.value = "5";
      break;

    case '6':
      console.log(document.activeElement);
      document.activeElement.value = "6";
      break;

    case '7':
      console.log(document.activeElement);
      document.activeElement.value = "7";
      break;

    case '8':
      console.log(document.activeElement);
      document.activeElement.value = "8";
      break;

    case '9':
      console.log(document.activeElement);
      document.activeElement.value = "9";
      break;
  }
};
function navside (move) {
  console.log("horizontal");
  console.log(move);
  var rows=document.querySelectorAll('.vert');
  var targetRow= rows[currentRow];
  var next = currentIndex + move;
  var item = targetRow.querySelectorAll('.item');
  var targetElement = item[next];
  targetElement.focus();
  currentIndex = next;
}
function navvert (move) {
  console.log("CurrentRow:"+currentRow);
  var nextRow= move+currentRow;
  console.log("NextRow:"+nextRow);
  var rows = document.querySelectorAll('.vert');
  var targetRow = rows[nextRow];
  var items = targetRow.querySelectorAll('.item');
  console.log(items);
  var targetElement = items[currentIndex];
  targetElement.focus();
  currentRow=nextRow;
}
document.activeElement.addEventListener('keydown', handleKeyDown);
