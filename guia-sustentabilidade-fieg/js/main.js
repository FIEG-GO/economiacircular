document.addEventListener('DOMContentLoaded', () => {
    // Lógica dos modais
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const closeModalButtons = document.querySelectorAll('.close-modal-btn');
    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'block';
    };
    const closeModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'none';
    };
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            openModal(trigger.dataset.modalTarget);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) closeModal(modal.id);
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    });

    // Lógica do PDF
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.addEventListener('click', () => {
        const element = document.getElementById('content-to-pdf');
        const opt = {
            margin:       [0.5, 0.5, 0.5, 0.5],
            filename:     'guia_sustentabilidade_fieg.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true, logging: false },
            jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    });

    // Definição de cores e criação dos gráficos
    const fiegBlue = 'rgba(0, 51, 102, 0.8)';
    const fiegGreen = 'rgba(0, 153, 51, 0.8)';
    const fiegBlueBorder = 'rgb(0, 51, 102)';
    const fiegGreenBorder = 'rgb(0, 153, 51)';

    new Chart(document.getElementById('chartCustos').getContext('2d'), { type: 'bar', data: { labels: ['Energia', 'Água', 'Gestão de Resíduos'], datasets: [{ label: 'Potencial de Redução de Custos (%)', data: [30, 40, 60], backgroundColor: [fiegBlue, fiegGreen, fiegBlue] }] }, options: { scales: { y: { beginAtZero: true } }, plugins: { legend: { display: false } } } });
    new Chart(document.getElementById('chartClientes').getContext('2d'), { type: 'pie', data: { labels: ['ESG influencia a compra', 'Indiferente'], datasets: [{ data: [77, 23], backgroundColor: [fiegGreen, '#cccccc'] }] }, options: { responsive: true, plugins: { title: { display: true, text: 'Consumidores brasileiros que consideram ESG' } } } });
    new Chart(document.getElementById('chartFinanciamento').getContext('2d'), { type: 'line', data: { labels: ['2022', '2023', '2024', '2025 (proj.)'], datasets: [{ label: 'Emissão de Títulos Verdes (em R$ bilhões)', data: [15, 25, 40, 55], fill: false, borderColor: fiegGreen, tension: 0.1 }] }, options: { responsive: true, plugins: { title: { display: true, text: 'Crescimento do Mercado de Crédito Verde no Brasil' } } } });
    new Chart(document.getElementById('chartTalentos').getContext('2d'), { type: 'doughnut', data: { labels: ['Consideram o impacto da empresa', 'Não consideram'], datasets: [{ data: [82, 18], backgroundColor: [fiegBlue, '#cccccc'] }] }, options: { responsive: true, plugins: { title: { display: true, text: 'Geração Z e Millennials ao escolher um emprego' } } } });
    new Chart(document.getElementById('chartRiscos').getContext('2d'), { type: 'radar', data: { labels: ['Regulatórios', 'Operacionais', 'Reputação', 'Financeiros', 'Mercado'], datasets: [{ label: 'Nível de Impacto da Inação ESG', data: [8, 9, 10, 7, 8], fill: true, backgroundColor: 'rgba(0, 51, 102, 0.2)', borderColor: fiegBlue, pointBackgroundColor: fiegBlue }] }, options: { scales: { r: { beginAtZero: true, max: 10 } } } });
    new Chart(document.getElementById('chartLegislacao').getContext('2d'), { type: 'line', data: { labels: ['2022', '2023', '2024', '2025 (proj.)'], datasets: [{ label: 'Valor das Multas Ambientais Aplicadas (em R$ milhões)', data: [500, 650, 850, 1100], backgroundColor: fiegBlue, borderColor: fiegBlueBorder }] }, options: { plugins: { title: { display: true, text: 'Aumento na Aplicação de Multas Ambientais na Indústria' } } } });
    new Chart(document.getElementById('chartSST').getContext('2d'), { type: 'bar', data: { labels: ['Custos Diretos (médicos, etc)', 'Custos Indiretos (produtividade, etc)'], datasets: [{ label: 'Custo Médio de um Acidente (em R$ mil)', data: [50, 200], backgroundColor: [fiegBlue, fiegGreen] }] }, options: { indexAxis: 'y', plugins: { legend: { display: false } } } });
    new Chart(document.getElementById('chartCadeia').getContext('2d'), { type: 'pie', data: { labels: ['Excluíram fornecedores por falhas ESG', 'Não excluíram'], datasets: [{ data: [45, 55], backgroundColor: [fiegGreen, '#cccccc'] }] }, options: { plugins: { title: { display: true, text: 'Grandes Corporações Globais (2025)' } } } });
    new Chart(document.getElementById('chartRelatorios').getContext('2d'), { type: 'doughnut', data: { labels: ['Relatam com padrão (GRI, etc)', 'Não relatam ou sem padrão'], datasets: [{ data: [35, 65], backgroundColor: [fiegBlue, '#cccccc'] }] }, options: { plugins: { title: { display: true, text: 'Adoção de Relatórios Padronizados (Empresas B3)' } } } });
    new Chart(document.getElementById('chartDesign').getContext('2d'), { type: 'pie', data: { labels: ['Impacto definido na fase de Design', 'Impacto definido na Produção/Uso/Descarte'], datasets: [{ data: [80, 20], backgroundColor: [fiegGreen, '#cccccc'] }] }, options: { plugins: { title: { display: true, text: 'Origem do Impacto Ambiental de um Produto' } } } });
    new Chart(document.getElementById('chartReaproveitamento').getContext('2d'), { type: 'bar', data: { labels: ['Plásticos', 'Metais', 'Papel/Papelão', 'Vidro'], datasets: [{ label: 'Potencial de Recuperação Econômica (R$ bilhões/ano)', data: [20, 35, 10, 5], backgroundColor: [fiegBlue, fiegGreen, fiegBlue, fiegGreen] }] }, options: { plugins: { legend: { display: false }, title: { display: true, text: 'Valor Oculto nos Resíduos Industriais do Brasil' } } } });
    new Chart(document.getElementById('chartModelos').getContext('2d'), { type: 'line', data: { labels: ['Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5'], datasets: [{ label: 'Venda Única', data: [100, 0, 0, 0, 0], borderColor: '#cccccc' }, { label: 'Modelo de Serviço (Receita Acumulada)', data: [30, 60, 90, 120, 150], borderColor: fiegGreen, fill: true, backgroundColor: 'rgba(0, 153, 51, 0.1)' }] }, options: { plugins: { title: { display: true, text: 'Comparativo de Receita: Venda vs. Serviço' } } } });
    new Chart(document.getElementById('chartLogistica').getContext('2d'), { type: 'bar', data: { labels: ['Latas de Alumínio', 'PET', 'Pneus', 'Eletrônicos'], datasets: [{ label: 'Taxa de Coleta e Reciclagem no Brasil (%)', data: [98, 55, 45, 3], backgroundColor: fiegBlue }] }, options: { plugins: { legend: { display: false }, title: { display: true, text: 'Índices de Logística Reversa' } } } });
    new Chart(document.getElementById('chartMapeamento').getContext('2d'), { type: 'bar', data: { labels: ['Iluminação LED', 'Conserto de Vazamentos', 'Manutenção Preventiva'], datasets: [{ label: 'Payback (em meses)', data: [10, 3, 6], backgroundColor: [fiegGreen, fiegBlue, fiegGreen] }] }, options: { plugins: { legend: { display: false }, title: { display: true, text: 'Retorno de Investimentos de Baixo Custo' } } } });
    new Chart(document.getElementById('chartModernizacao').getContext('2d'), { type: 'bar', data: { labels: ['Motor Antigo', 'Motor de Alta Eficiência'], datasets: [{ label: 'Consumo Anual de Energia (em MWh)', data: [100, 65], backgroundColor: ['#cccccc', fiegGreen] }] }, options: { plugins: { legend: { display: false } } } });
    new Chart(document.getElementById('chartMercado').getContext('2d'), { type: 'line', data: { labels: ['Jan', 'Mar', 'Mai', 'Jul', 'Set'], datasets: [{ label: 'Mercado Cativo (R$/MWh)', data: [350, 380, 400, 390, 410], borderColor: '#cccccc' }, { label: 'Mercado Livre (R$/MWh)', data: [250, 240, 260, 270, 265], borderColor: fiegGreen }] }, options: { plugins: { title: { display: true, text: 'Comparativo de Preço da Energia (2025)' } } } });
    new Chart(document.getElementById('chartGeracao').getContext('2d'), { type: 'pie', data: { labels: ['Hidrelétrica', 'Eólica', 'Solar', 'Biomassa', 'Outros'], datasets: [{ data: [55, 15, 12, 9, 9], backgroundColor: ['#639fec', '#68d388', '#ffd700', '#b38b6d', '#cccccc'] }] }, options: { plugins: { title: { display: true, text: 'Matriz Elétrica Brasileira (2025)' } } } });
});
