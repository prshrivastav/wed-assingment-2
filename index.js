// alert("Welcome To The Website");




function validate() {
  var nome = document.getElementById("eman").value;
  const age = document.getElementById("age").value;
  const movie = document.getElementById("mov").value;
  const address = document.getElementById("add").value;
  const subject = document.getElementById("sub").value;
  const singer = document.getElementById("sin").value;
  const password = document.getElementById("passwd").value;
  var form = document.getElementById("form");
  if (nome == "" || password == "" || singer == "" || subject == "" || address == "" || movie == "" || age == "") {
    alert("THERE CAN'T BE EMPTY INPUTS !");
    // window.location.assign="index.html";
    form.action="again.html";

  } else {
      alert("SUCCESSFULLY SUBMITTED");
      form.action="submit.html";

  }
}



// var c = ["blue", "black", "yellow", "red"];
//
// function changeColor() {
//   setTimeout(function loop() {
//     document.bgColor = c.shift();
//     if (c.length) {
//       setTimeout(loop, 5000);
//     }
//   }, 5000);
// }
//
// function start() {
//   setInterval(changeColor(), 20000);
// }
