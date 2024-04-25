let btns = document.querySelectorAll("button");
let exp = "";
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      exp = eval(exp);
      document.getElementById("input").value = exp;
      exp = "";
    } else if (e.target.innerHTML === "AC") {
      document.getElementById("input").value = "";
      exp = "";
    } else {
      exp += e.target.innerHTML;
      document.getElementById("input").value = exp;
    }
  });
});
// btns.forEach((btn) => {
//   btn.addEventListener("keydown", (e) => {
//     if (e.value === "=") {
//       exp = eval(exp);
//       document.getElementById("input").value = exp;
//       exp = "";
//     } else if (e.value === "AC") {
//       document.getElementById("input").value = "";
//       exp = "";
//     } else {
//       exp += e.value;
//       document.getElementById("input").value = exp;
//     }
//   });
// });
