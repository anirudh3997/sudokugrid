var currentIndex = 0;
var currentRow = 0;

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
