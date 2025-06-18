function cadastrar() {
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem");

  if (email === "") {
    mensagem.textContent = "Por favor, digite seu e-mail.";
    mensagem.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    mensagem.textContent = "Digite um e-mail válido.";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";
  }
}
