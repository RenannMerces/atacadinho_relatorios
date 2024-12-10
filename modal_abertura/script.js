// Atualiza a data e hora dinamicamente
function atualizarDataHora() {
    const now = new Date();
    
    // Formatar a data
    const dia = String(now.getDate()).padStart(2, '0');
    const mes = String(now.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    const ano = now.getFullYear();

    // Formatar o horário
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    const segundos = String(now.getSeconds()).padStart(2, '0');

    // Exibir data e hora formatadas
    const dataHoraFormatada = `${dia} DE ${obterNomeMes(mes).toUpperCase()} DE ${ano} - HORÁRIO: ${horas}:${minutos}:${segundos}`;
    document.querySelector('.header span').innerHTML = dataHoraFormatada;
}

// Função para converter número do mês para o nome correspondente
function obterNomeMes(mes) {
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    return meses[parseInt(mes, 10) - 1];
}

// Atualiza o horário a cada segundo
setInterval(atualizarDataHora, 1000);

// Atualiza imediatamente ao carregar a página
atualizarDataHora();
