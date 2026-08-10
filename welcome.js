/**
 * SISTEMA DE BOAS-VINDAS
 * Modal elegante que aparece ao carregar o site
 * Captura: Nome + Motivo da Visita
 * Envia para Formspree e oferece uma experiência profissional
 */

const WELCOME_FORM_ENDPOINT = 'https://formspree.io/f/mqpzpbgy';

// Função para inicializar o modal de boas-vindas
function initWelcomeModal() {
  const welcomeModal = document.getElementById('welcomeModal');
  const welcomeOverlay = document.getElementById('welcomeOverlay');
  
  if (!welcomeModal || !welcomeOverlay) {
    console.error('❌ Elementos de boas-vindas não encontrados');
    return;
  }

  // Mostrar modal
  welcomeOverlay.style.display = 'block';
  welcomeModal.style.display = 'flex';
  welcomeModal.classList.add('show');
  document.body.style.overflow = 'hidden';

  // Focar no campo de nome
  const nameInput = document.getElementById('welcomeName');
  if (nameInput) {
    setTimeout(() => nameInput.focus(), 300);
  }

  // Validação em tempo real
  const nameField = document.getElementById('welcomeName');
  const purposeField = document.getElementById('welcomePurpose');
  const submitBtn = document.getElementById('welcomeSubmitBtn');

  function updateSubmitButton() {
    const hasName = nameField && nameField.value.trim().length > 0;
    const hasPurpose = purposeField && purposeField.value.trim().length > 0;
    
    if (submitBtn) {
      if (hasName && hasPurpose) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
      } else {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.5';
        submitBtn.style.cursor = 'not-allowed';
      }
    }
  }

  if (nameField) nameField.addEventListener('input', updateSubmitButton);
  if (purposeField) purposeField.addEventListener('input', updateSubmitButton);

  // Inicial
  updateSubmitButton();
}

// Função para submeter formulário de boas-vindas
async function submitWelcomeForm(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById('welcomeName');
  const purposeInput = document.getElementById('welcomePurpose');
  const submitBtn = document.getElementById('welcomeSubmitBtn');
  const formContainer = document.querySelector('.welcome-form-container');

  const name = nameInput ? nameInput.value.trim() : '';
  const purpose = purposeInput ? purposeInput.value.trim() : '';

  // Validar
  if (!name || !purpose) {
    alert('⚠️ Por favor, preencha todos os campos');
    return;
  }

  // Desabilitar botão
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processando...';
  }

  // Enviar para Formspree
  const formData = new FormData();
  formData.append('Nome', name);
  formData.append('Motivo da Visita', purpose);
  formData.append('Data e Hora', new Date().toLocaleString('pt-BR'));
  formData.append('_subject', `Novo Visitante - ${name}`);
  formData.append('_to', 'saraswatimaaschool@gmail.com');

  try {
    console.log('📤 Enviando dados de boas-vindas ao Formspree...');
    
    const response = await fetch(WELCOME_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData,
      keepalive: true
    });

    if (!response.ok) {
      console.error('❌ Erro ao enviar:', response.status);
      throw new Error(`Status ${response.status}`);
    }

    console.log('✅ Dados de boas-vindas enviados com sucesso');

    // Mostrar spinner de processamento
    showWelcomeSpinner(name);

  } catch (error) {
    console.error('❌ Erro ao enviar para Formspree:', error);
    // Mesmo com erro, continua o fluxo (experiência do usuário não é afetada)
    showWelcomeSpinner(name);
  }
}

// Função para mostrar spinner
function showWelcomeSpinner(name) {
  const formContainer = document.querySelector('.welcome-form-container');
  const welcomeModal = document.getElementById('welcomeModal');

  if (!formContainer) return;

  // Esconder formulário
  formContainer.style.display = 'none';

  // Criar container do spinner
  const spinnerContainer = document.createElement('div');
  spinnerContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    animation: fadeIn 0.5s ease-in;
  `;

  // Spinner animado
  const spinner = document.createElement('div');
  spinner.style.cssText = `
    width: 60px;
    height: 60px;
    border: 4px solid rgba(91, 33, 182, 0.2);
    border-top: 4px solid #5b21b6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  `;

  // Texto de processamento
  const processingText = document.createElement('p');
  processingText.textContent = 'Processando...';
  processingText.style.cssText = `
    font-size: 16px;
    color: #666;
    font-weight: 500;
    margin: 0;
    letter-spacing: 1px;
  `;

  spinnerContainer.appendChild(spinner);
  spinnerContainer.appendChild(processingText);

  if (welcomeModal) {
    // Limpar conteúdo anterior
    const content = welcomeModal.querySelector('.welcome-modal-content');
    if (content) {
      content.innerHTML = '';
      content.appendChild(spinnerContainer);
    }
  }

  // Aguardar 2+ segundos
  setTimeout(() => {
    showWelcomeMessage(name);
  }, 2500);
}

// Função para exibir mensagem de boas-vindas
function showWelcomeMessage(name) {
  const welcomeModal = document.getElementById('welcomeModal');

  if (!welcomeModal) return;

  const content = welcomeModal.querySelector('.welcome-modal-content');
  if (!content) return;

  content.innerHTML = '';

  // Container da mensagem
  const messageContainer = document.createElement('div');
  messageContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    animation: fadeIn 0.5s ease-in;
  `;

  // Ícone de sucesso (emoji)
  const icon = document.createElement('div');
  icon.style.cssText = `
    font-size: 60px;
    animation: scaleIn 0.6s ease-out;
  `;
  icon.textContent = '🎓';

  // Mensagem principal
  const message = document.createElement('h2');
  message.style.cssText = `
    font-size: 36px;
    font-weight: 700;
    color: #5b21b6;
    text-align: center;
    margin: 0;
    letter-spacing: -0.5px;
  `;
  message.textContent = 'SMS ACADEMY';

  // Submensagem
  const submessage = document.createElement('p');
  submessage.style.cssText = `
    font-size: 18px;
    color: #666;
    text-align: center;
    margin: 0;
    font-weight: 500;
  `;
  submessage.textContent = 'Welcomes You!';

  // Nome do visitante
  const visitorName = document.createElement('p');
  visitorName.style.cssText = `
    font-size: 16px;
    color: #999;
    text-align: center;
    margin: 10px 0 0 0;
    font-style: italic;
  `;
  visitorName.textContent = `Olá, ${name}!`;

  messageContainer.appendChild(icon);
  messageContainer.appendChild(message);
  messageContainer.appendChild(submessage);
  messageContainer.appendChild(visitorName);

  content.appendChild(messageContainer);

  // Fechar modal depois de 1.5 segundos
  setTimeout(() => {
    closeWelcomeModal();
  }, 1500);
}

// Função para fechar modal
function closeWelcomeModal() {
  const welcomeModal = document.getElementById('welcomeModal');
  const welcomeOverlay = document.getElementById('welcomeOverlay');

  if (welcomeModal) {
    welcomeModal.classList.remove('show');
    setTimeout(() => {
      welcomeModal.style.display = 'none';
    }, 300);
  }

  if (welcomeOverlay) {
    welcomeOverlay.style.display = 'none';
  }

  // Remover overflow hidden
  document.body.style.overflow = '';
}

// Exportar funções
window.initWelcomeModal = initWelcomeModal;
window.submitWelcomeForm = submitWelcomeForm;
window.closeWelcomeModal = closeWelcomeModal;

// Inicializar ao carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWelcomeModal);
} else {
  initWelcomeModal();
}
