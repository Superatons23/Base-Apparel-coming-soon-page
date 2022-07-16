window.onload = function () {
  const btn = document.getElementById("btn");
  const titleValid = document.getElementById("title-valid");
  const email = document.getElementById("iemail");

  function validarFormulario(evento) {
    evento.preventDefault();
    if (!emailVálido(email.value)) {
      titleValid.classList.add("show-title");
      email.classList.add("error");
      btn.classList.add("error-submit");
    } else {
      titleValid.classList.remove("show-title");
      email.classList.remove("error");
      btn.classList.remove("error-submit");
    }
  }
  const emailVálido = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  btn.addEventListener("click", validarFormulario);
};
