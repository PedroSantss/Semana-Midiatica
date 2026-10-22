const mensagem = document.getElementById("mensagem");

const corOriginal = "rgb(17, 17, 17)";
let revelada = false;

async function verificarFundo() {
  if (revelada) return;

  const corAtual = getComputedStyle(document.body).backgroundColor;

  if (corAtual !== corOriginal) {
    try {
      const resposta = await fetch("./segredo.txt");

      if (!resposta.ok) {
        throw new Error("Não foi possível carregar o segredo.");
      }

      const texto = await resposta.text();

      mensagem.textContent = texto.trim();
      mensagem.style.color = "#ff0000";

      revelada = true;
    } catch (erro) {
      console.error(erro);
    }
  }
}

setInterval(verificarFundo, 100);