const formvalidation = () => {
  let a = document.getElementById("uname");

  if (a.value == "") {
    let a = document.getElementById("mo");
    alert("You Don't Submut Any Content Ready For Punish")
    a.addEventListener("mouseover", function () {
      a.style.left = `${Math.ceil(Math.random() * 50)}%`;
      a.style.top = `${Math.ceil(Math.random() * 50)}%`;
    });
    a.addEventListener("click", function () {
      alert("you clicked me");
    });
  } else {
    alert(`Form Submit successfully`);
    alert(`Your data is ${a.value}`);
  }

  return false;
};
