window.onload = () => {
  let count = 5; // Contagem regressiva de 5 segundos
  let mensagemElement = document.getElementById("mensagem");
  let fogosElement = document.getElementById("fogos");
  let mensagemFinalElement = document.getElementById("mensagem_final");
  let fotoElement = document.getElementById("foto"); // Referência à foto

  // Função para iniciar a contagem
  function iniciarContagem() {
    let intervalo = setInterval(() => {
      mensagemElement.innerText = `🎉 ${count} segundos para a surpresa! 🎉`; // Atualiza a mensagem
      if (count === 0) { // Quando a contagem chegar a 0
        clearInterval(intervalo); // Para o intervalo
        mostrarSurpresa(); // Mostra a mensagem final, os fogos e a foto
      }
      count--; // Decrementa a contagem
    }, 1000); // Intervalo de 1 segundo
  }

  // Função para mostrar a mensagem final, fogos de artifício e a foto
  function mostrarSurpresa() {
    // Mostrar a mensagem final
    mensagemFinalElement.classList.remove('hidden'); // Remove a classe 'hidden'
    mensagemFinalElement.style.opacity = 1; // Define a opacidade para 1

    // Mostrar os fogos de artifício
    fogosElement.innerHTML = '🎆 🎇 ✨ 💥'; // Adiciona os emojis dos fogos
    fogosElement.style.opacity = 1; // Define a opacidade para 1

    // Mostrar a foto
    fotoElement.classList.remove('hidden'); // Remove a classe 'hidden'
    fotoElement.classList.add('visible'); // Adiciona a classe 'visible' para a transição
  }

  // Começar a contagem
  iniciarContagem();
};