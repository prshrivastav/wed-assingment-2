

function change() {
  let x = String(Math.floor((Math.random() * 1000000)));
  document.body.style.backgroundColor = "#" + x;
}

setTimeout(change, 5000);

function foil() {
  document.body.style.fontWeight = "bold";

}

function koil() {
  document.body.style.fontStyle = "italic";

}

function noil() {
  document.body.style.textDecoration = "underline";
}
