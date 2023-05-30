let button = document.getElementById("btn");
console.log(button);
button.onclick = function () {
  Swal.fire({
    position: "centent",
    icon: "success",
    title: "Email or Password is incorrect",
    showConfirmButton: false,
    timer: 1500,
  });
  window.location.href =
    "http://127.0.0.1:5500/Facebook_Home/Facebook_Home/SIgnIn-Signup/index.html";
};
