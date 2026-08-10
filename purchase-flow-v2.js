/**
 * Sistema de Compra de Manuais - Versão 2
 * Fluxo: Dados + Comprovativo + Download automático + Email
 * Sem validação de senha
 */

// Estado da compra atual
let purchaseState = {
    manualTitle: '',
    manualId: '',
    manualPrice: '',
    timestamp: new Date().toLocaleString('pt-BR'),
    proofFile: null
};

// Mapeamento de IDs de manual para arquivos PDF
const manualFiles = {
    // Standard - com múltiplas stages
    '1-Standard 1': 'documentos/Standard_Stage_1_Complete_Package.pdf',
    '1-Standard 2': 'documentos/Standard_Stage_2_Complete_Package.pdf',
    '1-Standard 3': 'documentos/Standard_Stage_3_Complete_Package.pdf',
    '1': 'documentos/Standard_Stage_1_Complete_Package.pdf', // Default
    
    // Outras categorias
    '2': 'documentos/Foundation_Complete_Package.pdf',
    '3': 'documentos/Intermediate_Complete_Package.pdf',
    '4': 'documentos/FluentAccel_Complete_Package.pdf',
    '5': 'documentos/Joy_Complete_Package.pdf',
    '6': 'documentos/Autodidata_Complete_Package.pdf'
};

/**
 * Abre a modal de compra com dados fixos
 * @param {string} manualTitle - Título do manual (fixo)
 * @param {string} manualId - ID do manual (fixo)
 * @param {string} manualPrice - Preço do manual (fixo)
 */
function openPurchaseFormWithoutPassword(manualTitle, manualId, manualPrice) {
    // Fecha a modal de manuais automaticamente
    const buyMenu = document.getElementById('buy-menu');
    if (buyMenu) {
        buyMenu.classList.remove('show');
        buyMenu.style.display = 'none';
        buyMenu.setAttribute('aria-hidden', 'true');
        const button = document.getElementById('buyMenuToggleBtn');
        if (button) button.textContent = 'Manuais';
    }

    // Salva dados no estado
    purchaseState = {
        manualTitle: manualTitle,
        manualId: manualId,
        manualPrice: manualPrice,
        timestamp: new Date().toLocaleString('pt-BR'),
        proofFile: null,
        courseName: '' // Para Standard com múltiplos cursos
    };

    // Atualiza modal com dados fixos
    document.getElementById('purchaseModalTitle').textContent = `Comprar: ${manualTitle}`;
    document.getElementById('purchaseModalPrice').textContent = `Preço: ${manualPrice} Kz`;
    
    // Limpa e mostra modal
    document.getElementById('purchaseFormName').value = '';
    document.getElementById('purchaseFormEmail').value = '';
    document.getElementById('purchaseFormPhone').value = '';
    document.getElementById('proofFileInput').value = '';
    
    // Mostra/esconde seletor de curso apenas para Standard (ID: 1)
    const courseSelector = document.getElementById('purchaseCourseSelector');
    if (courseSelector) {
        if (manualId === '1') {
            courseSelector.style.display = 'block';
            document.getElementById('purchaseCourseSelect').value = '';
        } else {
            courseSelector.style.display = 'none';
        }
    }
    
    // Reseta estado do botão de download
    document.getElementById('downloadButtonContainer').style.display = 'none';
    document.getElementById('proofFeedback').textContent = '';
    document.getElementById('proofFeedback').className = 'proof-feedback';
    
    // Mostra modal e overlay com opacidade via classe CSS
    const modal = document.getElementById('purchaseFormWithPasswordModal');
    const overlay = document.getElementById('purchasePasswordOverlay');
    modal.style.display = 'block';
    overlay.style.display = 'block';
    // Força reflow para garantir que a classe .show funcione
    setTimeout(() => {
        modal.classList.add('show');
        overlay.classList.add('show');
    }, 10);
}

/**
 * Fecha a modal de compra
 */
function closePurchaseFormWithPassword() {
    const modal = document.getElementById('purchaseFormWithPasswordModal');
    const overlay = document.getElementById('purchasePasswordOverlay');
    modal.classList.remove('show');
    overlay.classList.remove('show');
    // Aguarda transição de opacidade antes de esconder
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
    purchaseState.proofFile = null;
}

/**
 * Valida upload de comprovativo
 * Aceita PDF e imagens (JPG, PNG)
 */
function validateProofUpload(event) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    const feedbackEl = document.getElementById('proofFeedback');
    const downloadContainer = document.getElementById('downloadButtonContainer');

    if (!file) {
        feedbackEl.textContent = '';
        downloadContainer.style.display = 'none';
        purchaseState.proofFile = null;
        return;
    }

    // Valida tipo de arquivo
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
        feedbackEl.textContent = '❌ Arquivo inválido. Aceito: PDF, JPG, PNG';
        feedbackEl.className = 'proof-feedback error';
        downloadContainer.style.display = 'none';
        purchaseState.proofFile = null;
        return;
    }

    // Valida tamanho (máx 10MB)
    if (file.size > 10 * 1024 * 1024) {
        feedbackEl.textContent = '❌ Arquivo muito grande. Máximo: 10MB';
        feedbackEl.className = 'proof-feedback error';
        downloadContainer.style.display = 'none';
        purchaseState.proofFile = null;
        return;
    }

    // Arquivo válido
    purchaseState.proofFile = file;
    feedbackEl.textContent = `✅ Comprovativo recebido: ${file.name}`;
    feedbackEl.className = 'proof-feedback success';
    downloadContainer.style.display = 'block';
}

/**
 * Processa a compra: valida dados, envia email, baixa PDF
 */
async function processPurchaseDownload() {
    console.log('🛒 Iniciando processamento de compra...');
    
    // Coleta dados do cliente
    const customerName = document.getElementById('purchaseFormName').value.trim();
    const customerEmail = document.getElementById('purchaseFormEmail').value.trim();
    const customerPhone = document.getElementById('purchaseFormPhone').value.trim();

    // Validações
    if (!customerName || !customerEmail || !customerPhone) {
        alert('❌ Por favor, preencha todos os dados.');
        return;
    }

    if (!isValidEmail(customerEmail)) {
        alert('❌ Email inválido. Digite um email válido.');
        return;
    }
    
    // Valida seletor de curso se for Standard
    if (purchaseState.manualId === '1') {
        const courseSelect = document.getElementById('purchaseCourseSelect');
        if (!courseSelect || !courseSelect.value) {
            alert('❌ Por favor, selecione o curso (Standard 1, 2 ou 3).');
            return;
        }
        purchaseState.courseName = courseSelect.value;
    }

    if (!purchaseState.proofFile) {
        alert('❌ Por favor, envie o comprovativo de pagamento.');
        return;
    }

    console.log('📋 Dados validados:', {
        nome: customerName,
        email: customerEmail,
        telefone: customerPhone,
        manual: purchaseState.manualTitle,
        curso: purchaseState.courseName || 'N/A'
    });

    // Desativa botão durante processamento
    const downloadBtn = document.querySelector('.purchase-download-btn');
    const originalText = downloadBtn.textContent;
    downloadBtn.disabled = true;
    downloadBtn.textContent = '⏳ Processando...';

    try {
        console.log('📨 Enviando email via Formspree...');
        await sendPurchaseEmailViaFormspree(customerName, customerEmail, customerPhone);

        console.log('📥 Iniciando download do manual...');
        await downloadManualFile();

        console.log('✅ Compra processada com sucesso!');
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(() => {
            closePurchaseFormWithPassword();
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    } catch (error) {
        console.error('❌ Erro no processamento:', error);
        alert('⚠️ Houve um problema. Verifique o console (F12) para detalhes.');
        downloadBtn.disabled = false;
        downloadBtn.textContent = originalText;
    }
}

/**
 * Envia email via Formspree com dados da compra
 * @param {string} name - Nome do cliente
 * @param {string} email - Email do cliente
 * @param {string} phone - Telefone do cliente
 */
async function sendPurchaseEmailViaFormspree(name, email, phone) {
    console.log('📨 Iniciando envio de email de compra...');
    
    const formData = new FormData();
    formData.append('_subject', `Nova Compra de Manual - ${purchaseState.manualTitle}`);
    formData.append('_replyto', email);
    formData.append('Nome', name);
    formData.append('Email', email);
    formData.append('Telefone', phone);
    formData.append('Manual', purchaseState.manualTitle);
    if (purchaseState.courseName) {
        formData.append('Curso', purchaseState.courseName);
    }
    formData.append('Valor', purchaseState.manualPrice);
    formData.append('Data e Hora', purchaseState.timestamp);
    formData.append('Tipo de Solicitação', 'Compra de Manual - Com Comprovativo');

    console.log('📊 Dados do email:', {
        assunto: `Nova Compra de Manual - ${purchaseState.manualTitle}`,
        destinatário: 'saraswatimaaschool@gmail.com',
        nome: name,
        email: email,
        telefone: phone,
        manual: purchaseState.manualTitle,
        curso: purchaseState.courseName || 'N/A'
    });

    try {
        const response = await fetch('https://formspree.io/f/xvkpzyov', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData,
            keepalive: true
        });

        console.log('📡 Resposta do servidor:', response.status, response.statusText);
        if (response.ok) {
            console.log('✅ Email enviado com sucesso!');
            return;
        }

        console.error('❌ Erro ao enviar email. Status:', response.status);
        console.log('ℹ️ Continuando apesar do erro de email...');
    } catch (error) {
        console.error('❌ Erro de conexão ao enviar email:', error);
        console.log('ℹ️ Continuando apesar do erro de email...');
    }
}

/**
 * Baixa o arquivo PDF do manual
 */
function downloadManualFile() {
    return new Promise((resolve) => {
        // Para Standard (ID 1), usar combinação com courseName
        let pdfPath;
        if (purchaseState.manualId === '1' && purchaseState.courseName) {
            pdfPath = manualFiles[`${purchaseState.manualId}-${purchaseState.courseName}`];
        }
        
        // Se não encontrou (ou não é Standard), usar ID direto
        if (!pdfPath) {
            pdfPath = manualFiles[purchaseState.manualId];
        }
        
        if (!pdfPath) {
            console.error('❌ PDF não encontrado para ID:', purchaseState.manualId, 'Curso:', purchaseState.courseName);
            resolve(); // Continua mesmo com erro no PDF
            return;
        }

        // Cria elemento <a> dinâmico para download
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = `${purchaseState.manualTitle}.pdf`;
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('✅ Download iniciado:', purchaseState.manualTitle);
        resolve();
    });
}

/**
 * Valida formato de email
 * @param {string} email - Email a validar
 * @returns {boolean} - True se email válido
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Expõe funções globalmente
window.openPurchaseFormWithoutPassword = openPurchaseFormWithoutPassword;
window.closePurchaseFormWithPassword = closePurchaseFormWithPassword;
window.validateProofUpload = validateProofUpload;
window.processPurchaseDownload = processPurchaseDownload;
window.sendPurchaseEmailViaFormspree = sendPurchaseEmailViaFormspree;
window.downloadManualFile = downloadManualFile;
