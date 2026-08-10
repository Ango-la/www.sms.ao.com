/**
 * SISTEMA DE COMPRA DE MANUAIS COM FORMSPREE
 * Integração: https://formspree.io/f/xvkpzyov
 * Email: saraswatimaaschool@gmail.com
 */

// Mapa de preços dos manuais
const manualPrices = {
  '1': '5.000 Kz',
  '2': '5.000 Kz',
  '3': '5.000 Kz',
  '4': '5.000 Kz',
  '5': '5.000 Kz',
  '6': '5.000 Kz',
  '7': '5.000 Kz',
  '8': '5.000 Kz',
  '9': '5.000 Kz',
  '10': '5.000 Kz',
};

// Senhas por categoria (mesmas do sistema de "Estudar")
const categoryPasswords = {
  'Standard': 'Standard',
  'Foundation': 'Foundation',
  'Intermediate': 'Intermediate',
  'Fluency Acceleration': 'Fluency Acceleration',
  'Joy': 'Joy',
  'Autodidata': 'Autodidata'
};

// Estado da compra
let purchaseState = {
  manualTitle: '',
  manualId: '',
  manualPrice: '',
  customerName: '',
  customerEmail: '',
  customerPhone: '',
  timestamp: ''
};

/**
 * Abre o formulário de compra com campos de cliente
 * Mesma senha do botão "Estudar"
 */
function openPurchaseFormWithPassword(manualTitle, manualId, manualPrice = '') {
  purchaseState = {
    manualTitle: manualTitle,
    manualId: manualId,
    manualPrice: manualPrice || '5.000 Kz',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    timestamp: new Date().toLocaleString('pt-BR')
  };

  // Fecha qualquer modal aberta
  closeAllInteractivePanels(['purchase']);

  // Abre modal de compra
  const modal = document.getElementById('purchaseFormWithPasswordModal');
  const overlay = document.getElementById('purchasePasswordOverlay');
  if (!modal) {
    console.error('Modal de compra não encontrada: purchaseFormWithPasswordModal');
    return;
  }

  // Atualiza título
  document.getElementById('purchaseModalTitle').textContent = `Comprar: ${manualTitle}`;
  document.getElementById('purchaseModalPrice').textContent = `Preço: ${manualPrice}`;

  // Limpa formulário
  document.getElementById('purchaseFormName').value = '';
  document.getElementById('purchaseFormEmail').value = '';
  document.getElementById('purchaseFormPhone').value = '';
  document.getElementById('purchaseFormPassword').value = '';
  document.getElementById('passwordValidationMessage').textContent = '';
  document.getElementById('passwordValidationMessage').style.display = 'none';
  document.getElementById('downloadButtonContainer').style.display = 'none';

  // Mostra overlay e modal
  if (overlay) {
    overlay.style.display = 'block';
    setTimeout(() => {
      overlay.style.opacity = '1';
    }, 10);
  }
  
  modal.style.display = 'block';
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);

  document.body.classList.add('site-overlay-open');
  document.body.style.overflow = 'hidden';

  // Foca no primeiro campo
  setTimeout(() => {
    document.getElementById('purchaseFormName').focus();
  }, 100);
}

/**
 * Fecha o formulário de compra
 */
function closePurchaseFormWithPassword() {
  const modal = document.getElementById('purchaseFormWithPasswordModal');
  const overlay = document.getElementById('purchasePasswordOverlay');
  
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
  
  if (overlay) {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }
  
  document.body.classList.remove('site-overlay-open');
  document.body.style.overflow = '';
  
  // Reset do estado
  purchaseState = {
    manualTitle: '',
    manualId: '',
    manualPrice: '',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    timestamp: ''
  };
}

/**
 * Valida a senha em tempo real
 * Mesma lógica do sistema "Estudar"
 */
function validatePurchasePassword() {
  const passwordInput = document.getElementById('purchaseFormPassword');
  const messageEl = document.getElementById('passwordValidationMessage');
  const downloadContainer = document.getElementById('downloadButtonContainer');
  const password = passwordInput.value.trim().toLowerCase();

  messageEl.style.display = 'none';
  downloadContainer.style.display = 'none';

  if (!password) {
    return;
  }

  // Verifica se começa com uma categoria válida
  let isValid = false;
  for (const category in categoryPasswords) {
    if (password.startsWith(category.toLowerCase())) {
      isValid = true;
      break;
    }
  }

  // Verifica se tem pelo menos 4 números
  const numbers = password.match(/\d/g);
  const hasNumbers = numbers && numbers.length >= 4;

  if (isValid && hasNumbers) {
    messageEl.classList.remove('error');
    messageEl.classList.add('success');
    messageEl.textContent = '✅ Senha validada! Agora clique em "Baixar" para receber o documento.';
    messageEl.style.display = 'block';
    downloadContainer.style.display = 'block';
  } else if (password.length > 0) {
    messageEl.classList.remove('success');
    messageEl.classList.add('error');
    messageEl.textContent = '❌ Senha inválida. Deve começar com a categoria e ter pelo menos 4 números.';
    messageEl.style.display = 'block';
    downloadContainer.style.display = 'none';
  }
}

/**
 * Processa o download e envia email via Formspree
 */
function processPurchaseDownload() {
  const name = document.getElementById('purchaseFormName').value.trim();
  const email = document.getElementById('purchaseFormEmail').value.trim();
  const phone = document.getElementById('purchaseFormPhone').value.trim();
  const password = document.getElementById('purchaseFormPassword').value.trim();

  // Validação básica
  if (!name || !email || !phone || !password) {
    alert('❌ Por favor, preencha todos os campos obrigatórios!');
    return;
  }

  // Validação de email
  if (!isValidEmail(email)) {
    alert('❌ Email inválido!');
    return;
  }

  // Validação de senha
  const messageEl = document.getElementById('passwordValidationMessage');
  if (!messageEl.classList.contains('success')) {
    alert('❌ A senha não foi validada corretamente!');
    return;
  }

  // Atualiza estado
  purchaseState.customerName = name;
  purchaseState.customerEmail = email;
  purchaseState.customerPhone = phone;

  // Mostra loader
  showLoadingMessage('Processando compra...');

  // 1. Envia email via Formspree
  sendPurchaseEmailViaFormspree(name, email, phone);

  // 2. Dispara download (simula download do arquivo)
  setTimeout(() => {
    downloadManualFile();
  }, 500);

  // 3. Fecha modal após sucesso
  setTimeout(() => {
    hideLoadingMessage();
    alert('✅ Sucesso! Seu manual foi baixado e um email de confirmação foi enviado para saraswatimaaschool@gmail.com');
    closePurchaseFormWithPassword();
  }, 2000);
}

/**
 * Envia email de confirmação via Formspree
 */
function sendPurchaseEmailViaFormspree(name, email, phone) {
  // Preparar dados para Formspree
  const formData = new FormData();
  
  // Campos padrão do Formspree
  formData.append('_subject', `Nova Compra de Manual - ${purchaseState.manualTitle}`);
  formData.append('_replyto', email);
  
  // Dados do cliente
  formData.append('Nome', name);
  formData.append('Email', email);
  formData.append('Telefone', phone);
  formData.append('Manual', purchaseState.manualTitle);
  formData.append('Valor', purchaseState.manualPrice);
  formData.append('Data e Hora', purchaseState.timestamp);
  formData.append('Tipo de Solicitação', 'Compra de Manual');

  // Envia para Formspree com AJAX
  fetch('https://formspree.io/f/xvkpzyov', {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: formData
  })
  .then(response => {
    if (response.ok) {
      console.log('✅ Email enviado com sucesso via Formspree!');
    } else {
      console.warn('⚠️ Erro ao enviar email (status ' + response.status + ')');
    }
    return response.json();
  })
  .then(data => {
    console.log('Resposta do Formspree:', data);
  })
  .catch(error => {
    console.error('❌ Erro na requisição Formspree:', error);
    // Continua mesmo com erro, pois o download já foi disparado
  });
}

/**
 * Dispara o download do arquivo PDF
 */
function downloadManualFile() {
  // Mapa de arquivos de manuais
  const manualFiles = {
    '1': 'documentos/Guia S.M.S_protected.pdf',
    '2': 'documentos/S.M.S DIALOGUE AND MEETINGS_protected.pdf',
    '3': 'documentos/S.M.S GRAMMAR BOOK_protected.pdf',
    '4': 'documentos/S.M.S VOCABULARY_protected.pdf',
    '5': 'documentos/TEXT & READING SKILLS_protected.pdf',
    '6': 'documentos/S.M.S REGULAR & IRREGULAR VERBS_protected.pdf',
    '7': 'documentos/S.M.S LISTENING SKILLS_protected.pdf',
    '8': 'documentos/S.M.S SPEAKING SKILLS_protected.pdf',
    '9': 'documentos/S.M.S MANUAL 9_protected.pdf',
    '10': 'documentos/S.M.S MANUAL 10_protected.pdf',
  };

  const filePath = manualFiles[purchaseState.manualId];
  if (!filePath) {
    console.error('❌ Arquivo não encontrado para manual ID:', purchaseState.manualId);
    alert('Desculpe, o arquivo não foi encontrado. Entre em contato com suporte.');
    return;
  }

  // Cria link e dispara download
  const link = document.createElement('a');
  link.href = filePath;
  link.download = `${purchaseState.manualTitle}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log('✅ Download iniciado para:', filePath);
}

/**
 * Valida email simples
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Mostra mensagem de carregamento
 */
function showLoadingMessage(message) {
  const messageEl = document.getElementById('passwordValidationMessage');
  messageEl.classList.remove('error');
  messageEl.classList.add('success');
  messageEl.textContent = message;
  messageEl.style.display = 'block';
}

/**
 * Oculta mensagem de carregamento
 */
function hideLoadingMessage() {
  const messageEl = document.getElementById('passwordValidationMessage');
  messageEl.style.display = 'none';
}

/**
 * Expõe funções globais
 */
window.openPurchaseFormWithPassword = openPurchaseFormWithPassword;
window.closePurchaseFormWithPassword = closePurchaseFormWithPassword;
window.validatePurchasePassword = validatePurchasePassword;
window.processPurchaseDownload = processPurchaseDownload;
