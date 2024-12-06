function generateNumber() {

  // Obter os valores
  const minInput = document.querySelector(".min-number").value;
  const maxInput = document.querySelector(".max-number").value;

  // Verificando os valores
  const min = minInput && !isNaN(minInput) ? Math.ceil(minInput) : 1; // Valor padrão 1 se inválido
  const max = maxInput && !isNaN(maxInput) ? Math.floor(maxInput) : 100; // Valor padrão 100 se inválido

  // Entrada MIN sempre maior que MAX
  if (min >= max) {
      alert("O valor mínimo não pode ser maior ou igual ao valor máximo.");
  }

  // Exibir o modal
  document.querySelector(".modal").style.display = "flex";

  // Mostrar o loader
  document.querySelector(".loader").style.display = "block"; // Exibe o loader

  // "Simular" um sorteio com atraso (exemplo de 2 segundos para mostrar o loader)
  setTimeout(function() {
  
      // Gerando o número sorteado
      const result = Math.floor(Math.random() * (max - min + 1) + min);

      // Atualizando o conteúdo do resultado no modal
      document.querySelector("#number-lucky").textContent = `O número sorteado é: ${result}`;

      // Escondendo o loader e mostrando o número sorteado
      document.querySelector(".loader").style.display = "none"; // Esconde o loader
  }, 2500); // 2000ms = 2 segundos, você pode ajustar esse tempo conforme necessário
}

function closeModal() {
  // Ocultando o modal
  document.querySelector(".modal").style.display = "none";
}
