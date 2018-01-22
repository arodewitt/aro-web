function showIdentity() {
 var y = document.getElementsByClassName('thumbnail');
 for (var i=0; i<y.length; i++) {

  if (y[i].classList.contains('identity')) {
    y[i].classList.remove('special');
    }

  else {
    y[i].classList.add("special");
  }
}
}

function showInfo() {
 var y = document.getElementsByClassName('thumbnail');
 for (var i=0; i<y.length; i++) {

  if (y[i].classList.contains('info')) {
    y[i].classList.remove('special');
    }

  else {
    y[i].classList.add("special");
  }
}
}

function showPrint() {
 var y = document.getElementsByClassName('thumbnail');
 for (var i=0; i<y.length; i++) {

  if (y[i].classList.contains('print')) {
    y[i].classList.remove('special');
    }

  else {
    y[i].classList.add("special");
  }
}
}

function showAll() {
 var y = document.getElementsByClassName('thumbnail');
 for (var i=0; i<y.length; i++) {

    y[i].classList.remove('special');
    }

}
