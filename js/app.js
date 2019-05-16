var currentIndex = 0;
var currentRow = 0;
var solved = false;
var grey = "#e0e0e0";
var peach = "#ffe0b2"

// Handles the KeyDown Events
function handleKeyDown(evt) {
  switch (evt.key) {
    case 'SoftLeft':
      document.getElementById('btn1').click();
      solved = false;
      break;

    case 'SoftRight':
      if (!solved)
        document.getElementById('btn3').click();
      break;

    case 'Enter':
      if (!solved) {
        document.getElementById("btn2").click();
        solved = true;
      }
      break;

    case 'ArrowUp':
      if (!solved)
        navvert(-1);
      break;

    case 'ArrowDown':
      if (!solved)
        navvert(1);
      break;

    case 'ArrowRight':
      if (!solved)
        navside(1);
      break;

    case 'ArrowLeft':
      if (!solved)
        navside(-1);
      break;

    case '1':
      if (!solved)
        document.activeElement.value = "1";
      break;

    case '2':
      if (!solved)
        document.activeElement.value = "2";
      break;

    case '3':
      if (!solved)
        document.activeElement.value = "3";
      break;

    case '4':
      if (!solved)
        document.activeElement.value = "4";
      break;

    case '5':
      if (!solved)
        document.activeElement.value = "5";
      break;

    case '6':
      if (!solved)
        document.activeElement.value = "6";
      break;

    case '7':
      if (!solved)
        document.activeElement.value = "7";
      break;

    case '8':
      if (!solved)
        document.activeElement.value = "8";
      break;

    case '9':
      if (!solved)
        document.activeElement.value = "9";
      break;
  }
};

//This function helps tp navigate to left and right
function navside(move) {
  var rows = document.querySelectorAll('.vert');
  var targetRow = rows[currentRow];
  var next = currentIndex + move;
  var item = targetRow.querySelectorAll('.item');
  var targetElement = item[next];
  var previousElement = item[currentIndex];
  targetElement.style.backgroundColor = peach;
  if (!targetElement.readOnly) {
    targetElement.focus();
    if (previousElement.readOnly) {
      previousElement.style.backgroundColor = grey;
    } else {
      previousElement.style.backgroundColor = "transparent";
    }
  } else {
    if (previousElement.readOnly) {
      previousElement.style.backgroundColor = grey;
    } else {
      previousElement.style.backgroundColor = "transparent";
    }
  }


  previousElement.blur();
  currentIndex = next;
}

// This function helps to move vertically up and down
function navvert(move) {
  var nextRow = move + currentRow;
  var rows = document.querySelectorAll('.vert');
  var previousRow = rows[currentRow];
  var previousElements = previousRow.querySelectorAll('.item');
  var previousElement = previousElements[currentIndex];
  var targetRow = rows[nextRow];
  var items = targetRow.querySelectorAll('.item');
  var targetElement = items[currentIndex];
  targetElement.style.backgroundColor = peach;
  if (!targetElement.readOnly) {
    targetElement.focus();
    if (previousElement.readOnly) {
      previousElement.style.backgroundColor = grey;
    } else {
      previousElement.style.backgroundColor = "transparent";
    }
  } else {
    if (previousElement.readOnly) {
      previousElement.style.backgroundColor = grey;
    } else {
      previousElement.style.backgroundColor = "transparent";
    }
  }
  previousElement.blur();
  currentRow = nextRow;
}

document.activeElement.addEventListener('keydown', handleKeyDown);
