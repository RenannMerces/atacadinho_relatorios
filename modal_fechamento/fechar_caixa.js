// Atualiza a data e o horário dinamicamente
function updateDateTime() {
  const datetimeElement = document.getElementById('datetime');
  const now = new Date();

  // Formata a data (sem o dia da semana)
  const formattedDate = now.toLocaleDateString('pt-BR', {
    day: '2-digit',   // Dia com dois dígitos
    month: 'long',    // Nome do mês
    year: 'numeric'   // Ano completo
  });

  // Formata o horário
  const formattedTime = now.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  // Atualiza o conteúdo do elemento
  datetimeElement.textContent = `${formattedDate.toUpperCase()} - HORÁRIO: ${formattedTime}`;
}

// Atualiza a data e o horário a cada segundo
setInterval(updateDateTime, 1000);
updateDateTime();

