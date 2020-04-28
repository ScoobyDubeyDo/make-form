function others(any) {
  var element = document.getElementById("other");
  if (any == "Other") {
    element.style.display = "block";
    hideselect1();
  } else element.style.display = "none";
}

function specific_times(any) {
  var element = document.getElementById("specific_time");
  if (any == "some specific time") {
    element.style.display = "block";
    hideselect();
  } else element.style.display = "none";
}

function hideselect1() {
  var element = document.getElementById("dropdown1");
  element.style.display = "none";
}

function hideselect() {
  var element = document.getElementById("dropdown");
  element.style.display = "none";
}
