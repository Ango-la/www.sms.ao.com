let requestedDownloadUrl = '';
const manualFileMap = {
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

// Fallback price map for manuals (used when price wasn't passed to openPurchaseForm)
const manualPriceMap = {
  '1': '2.000 Kz',
  '2': '3.000 Kz',
  '3': '3.000 Kz',
  '4': '3.000 Kz',
  '5': '3.000 Kz',
  '6': '3.000 Kz',
  '7': '5.000 Kz',
  '8': '6.500 Kz',
  '9': '9.000 Kz',
  '10': '3.000 Kz'
};

function openPurchaseForm(manualTitle, manualId, manualPrice) {
  const form = document.getElementById('purchase-form');
  const selectedTitle = document.getElementById('selectedManualTitle');
  const selectedPrice = document.getElementById('selectedManualPrice');
  const manualIdInput = document.getElementById('purchaseManualId');
  const manualPriceInput = document.getElementById('purchaseManualPrice');
  const status = document.getElementById('purchaseStatus');

  manualPrice = manualPrice || manualPriceMap[manualId] || '—';
  requestedDownloadUrl = manualFileMap[manualId] || '';
  selectedTitle.textContent = `Pedido de compra - ${manualTitle}`;
  selectedPrice.textContent = `Preço: ${manualPrice}`;
  manualIdInput.value = manualId;
  if (manualPriceInput) manualPriceInput.value = manualPrice;
  status.textContent = '';

  // Create modal overlay that reuses propina modal styles
  let overlay = document.getElementById('purchaseModalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'purchaseModalOverlay';
    overlay.className = 'propina-modal';

    const content = document.createElement('div');
    content.className = 'propina-modal-content purchase-modal-content';

    // close button (styled like propina)
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'propina-modal-close site-close-button';
    closeBtn.setAttribute('aria-label', 'Fechar pedido de compra');
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', closePurchaseForm);

    content.appendChild(closeBtn);
    overlay.appendChild(content);
    document.body.appendChild(overlay);
  }

  // move form into modal content
  const modalContent = overlay.querySelector('.propina-modal-content');
  if (form && modalContent) {
    modalContent.appendChild(form);
    form.classList.remove('hidden');
    overlay.style.display = 'flex';
    overlay.setAttribute('aria-hidden', 'false');
    // ensure vertical scroll and focus
    setTimeout(() => { form.scrollIntoView({ behavior: 'smooth' }); }, 50);
  }
}

function closePurchaseForm() {
  const form = document.getElementById('purchase-form');
  const purchaseRequest = document.getElementById('purchaseRequestForm');
  const status = document.getElementById('purchaseStatus');
  const overlay = document.getElementById('purchaseModalOverlay');

  if (form) {
    form.classList.add('hidden');
    if (purchaseRequest) purchaseRequest.reset();
    if (status) status.textContent = '';

    // move form back into buy-menu content if overlay exists
    if (overlay) {
      const buyMenuContent = document.querySelector('.buy-menu-content');
      if (buyMenuContent) buyMenuContent.appendChild(form);
      overlay.style.display = 'none';
      overlay.setAttribute('aria-hidden', 'true');
    }
  }
}

function showPurchaseStatus(message, isError = false) {
  const status = document.getElementById('purchaseStatus');
  status.textContent = message;
  status.style.color = isError ? '#b91c1c' : '#065f46';
}

function encodeDocumentUrl(url) {
  return url
    .split('/')
    .map(segment => encodeURIComponent(segment))
    .join('/');
}

async function fetchAndDownload(url, downloadName) {
  try {
    showPurchaseStatus('Iniciando download...');
    const encodedUrl = encodeDocumentUrl(url.trim());
    
    try {
      const resp = await fetch(encodedUrl, { mode: 'no-cors' });
      const blob = await resp.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = downloadName || decodeURIComponent(encodedUrl.split('/').pop());
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      }, 100);
      showPurchaseStatus('Download iniciado. Verifique a pasta de downloads do seu dispositivo.');
      return blob;
    } catch (fetchErr) {
      const link = document.createElement('a');
      link.href = encodedUrl;
      link.download = downloadName || decodeURIComponent(encodedUrl.split('/').pop());
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => document.body.removeChild(link), 100);
      showPurchaseStatus('Download iniciado. Verifique a pasta de downloads do seu dispositivo.');
      return null;
    }
  } catch (err) {
    console.error('Erro no download:', err);
    showPurchaseStatus('Tentando abrir documento. Se não funcionar, tente novamente.', false);
    const link = document.createElement('a');
    const encodedUrl = encodeDocumentUrl(url.trim());
    link.href = encodedUrl;
    link.download = downloadName || decodeURIComponent(encodedUrl.split('/').pop());
    link.style.display = 'none';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => document.body.removeChild(link), 100);
    return null;
  }
}

async function submitPurchaseRequest() {
  const nameInput = document.getElementById('buyerName');
  const emailInput = document.getElementById('buyerEmail');
  const courseTypeInput = document.getElementById('courseType');
  const proofFileInput = document.getElementById('proofFile');
  const manualIdInput = document.getElementById('purchaseManualId');
  const manualPriceInput = document.getElementById('purchaseManualPrice');

  if (!nameInput || !emailInput || !courseTypeInput || !proofFileInput || !manualIdInput) {
    showPurchaseStatus('Erro ao carregar o formulário. Atualize a página.', true);
    return;
  }

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const courseType = courseTypeInput.value;
  const manualId = manualIdInput.value || '';
  const manualTitle = document.getElementById('selectedManualTitle')?.textContent.replace(/^(Pedido de compra - |Comprar )/, '') || '';
  const manualPrice = manualPriceInput?.value || manualPriceMap[manualId] || 'Consultar preço';

  if (!name || !email || !courseType || !proofFileInput.files.length || !manualId) {
    showPurchaseStatus('Preencha o nome, email, tipo de curso e anexe o comprovante em PDF antes de finalizar.', true);
    return;
  }

  const file = proofFileInput.files[0];
  if (file.type !== 'application/pdf') {
    showPurchaseStatus('O comprovante deve ser um arquivo PDF.', true);
    return;
  }

  if (file.size > 8 * 1024 * 1024) {
    showPurchaseStatus('O comprovante não pode ter mais de 8 MB.', true);
    return;
  }

  showPurchaseStatus('Preparando fatura e redirecionando para email...');

  const centerName = 'S.M.S - Escola de Linguas & Habilidades';
  const centerPhone = '+244 951 474872';
  const centerEmail = 'VendasRhSms@outlook.com';
  const centerAddress = 'Av. Deolinda Rodrigues, nº 475, Rangel, Luanda, Angola';
  const now = new Date();

  const invoiceLines = [];
  invoiceLines.push(centerName);
  invoiceLines.push(`Contacto: ${centerPhone} | ${centerEmail}`);
  invoiceLines.push(`Endereço: ${centerAddress}`);
  invoiceLines.push('');
  invoiceLines.push('=== DADOS DO CLIENTE ===');
  invoiceLines.push(`Nome: ${name}`);
  invoiceLines.push(`Email: ${email}`);
  invoiceLines.push(`Tipo de curso: ${courseType}`);
  invoiceLines.push('');
  invoiceLines.push('=== PEDIDO / DOCUMENTO ===');
  invoiceLines.push(`Documento: ${manualTitle}`);
  invoiceLines.push(`Documento ID: ${manualId}`);
  invoiceLines.push(`Preço: ${manualPrice}`);
  invoiceLines.push(`Comprovante enviado: ${file.name}`);
  invoiceLines.push('');
  invoiceLines.push('=== DETALHES DE PAGAMENTO ===');
  invoiceLines.push('- Banco: Banco Yetu.');
  invoiceLines.push('- Nº Conta: 7899088.10001');
  invoiceLines.push('- IBAN: AO6.0066.0000.0789.9088.1013.0');
  invoiceLines.push('- Referência: SMS-ESCOLA DE LÍNGUAS-2026');
  invoiceLines.push('');
  invoiceLines.push(`Data do pedido: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`);
  invoiceLines.push('');
  invoiceLines.push('Código de acesso ao documento: @saraswat!-2026sms');
  invoiceLines.push('');
  invoiceLines.push('Observações: Por favor, anexe o comprovante a esta mensagem antes de enviar. Aguardamos confirmação do pagamento para liberar o acesso.');

  const body = invoiceLines.join('\n');
  const subject = `Pedido de compra - ${manualTitle}`;
  const mailto = `mailto:${centerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const afterArea = document.getElementById('afterFinalizeArea');
  const summaryName = document.getElementById('summaryName');
  const summaryEmail = document.getElementById('summaryEmail');
  const summaryCourseType = document.getElementById('summaryCourseType');
  const summaryProof = document.getElementById('summaryProof');
  const summaryPrice = document.getElementById('summaryPrice');
  const downloadDocumentName = document.getElementById('downloadDocumentName');
  const invoiceBtn = document.getElementById('invoiceBtn');

  if (summaryName) summaryName.textContent = name;
  if (summaryEmail) summaryEmail.textContent = email;
  if (summaryCourseType) summaryCourseType.textContent = courseType;
  if (summaryProof) summaryProof.textContent = file.name;
  if (summaryPrice) summaryPrice.textContent = manualPrice;
  if (downloadDocumentName) downloadDocumentName.querySelector('span').textContent = `${manualTitle} (${manualId})`;
  if (afterArea) afterArea.style.display = 'block';
  if (invoiceBtn) invoiceBtn.style.display = 'inline-flex';

  const openResult = window.open(mailto, '_blank');
  if (!openResult) {
    showPurchaseStatus('Não foi possível abrir o email em nova aba. Abrindo no cliente de email padrão...', false);
    window.location.href = mailto;
  }
  closePurchaseForm();
}

function submitPhysicalPurchaseRequest() {
  const nameInput = document.getElementById('buyerName');
  const emailInput = document.getElementById('buyerEmail');
  const courseTypeInput = document.getElementById('courseType');
  const proofFileInput = document.getElementById('proofFile');
  const manualIdInput = document.getElementById('purchaseManualId');

  if (!nameInput || !emailInput || !courseTypeInput || !proofFileInput || !manualIdInput) {
    showPurchaseStatus('Erro ao carregar o formulário. Atualize a página.', true);
    return;
  }

  const name = nameInput.value.trim();
  const courseType = courseTypeInput.value;
  const manualId = manualIdInput.value || '';
  const manualTitle = document.getElementById('selectedManualTitle')?.textContent.replace(/^(Pedido de compra - |Comprar )/, '') || '';

  if (!name || !courseType || !proofFileInput.files.length || !manualId) {
    showPurchaseStatus('Preencha o nome, tipo de curso e anexe o comprovante em PDF antes de finalizar.', true);
    return;
  }

  const file = proofFileInput.files[0];
  if (file.type !== 'application/pdf') {
    showPurchaseStatus('O comprovante deve ser um arquivo PDF.', true);
    return;
  }

  if (file.size > 8 * 1024 * 1024) {
    showPurchaseStatus('O comprovante não pode ter mais de 8 MB.', true);
    return;
  }

  const now = new Date();
  const whatsappNumber = '244951474872';
  const messageLines = [];
  messageLines.push('O pagamento total do manual foi feito.');
  messageLines.push(`Descrição do Manual: ${manualTitle}`);
  messageLines.push(`Hora comprada: ${now.toLocaleString()}`);
  messageLines.push(`Nome: ${name}`);
  messageLines.push(`Tipo de curso: ${courseType}`);
  messageLines.push('Encaminhe o comprovativo manualmente para acelerar a sua compra.');
  messageLines.push('Eu quero receber o meu manual impresso, e não em PDF. Quando posso receber?');

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines.join('\n'))}`;

  showPurchaseStatus('Abrindo WhatsApp para finalizar o pedido físico...', false);
  const openResult = window.open(whatsappUrl, '_blank');
  if (!openResult) {
    showPurchaseStatus('Não foi possível abrir o WhatsApp em nova aba. Abrindo no cliente padrão...', false);
    window.location.href = whatsappUrl;
  }

  closePurchaseForm();
}

// dispara download do documento solicitado pelo cliente
function downloadRequestedDocument() {
  if (!requestedDownloadUrl) {
    alert('Nenhum documento foi solicitado ainda. Clique em Finalizar primeiro.');
    return;
  }
  fetchAndDownload(requestedDownloadUrl, requestedDownloadUrl.split('/').pop()).catch(() => {});
}

// gera uma fatura simples em PDF usando jsPDF (precisa do CDN em index.html)
function generateInvoice() {
  try {
    const name = document.getElementById('buyerName')?.value || 'Cliente';
    const email = document.getElementById('buyerEmail')?.value || '';
    const courseType = document.getElementById('courseType')?.value || 'Não informado';
    const manualIdForInvoice = document.getElementById('purchaseManualId')?.value || '';
    const price = document.getElementById('purchaseManualPrice')?.value || manualPriceMap[manualIdForInvoice] || 'Consultar preço';
    const manualTitle = document.getElementById('selectedManualTitle')?.textContent.replace('Pedido de compra - ', '') || '';
    const now = new Date();
    const filename = `fatura_${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2,'0')}${now.getDate().toString().padStart(2,'0')}.pdf`;

    if (!window.jspdf) {
      alert('Biblioteca jsPDF não encontrada. Certifique-se de que o script CDN está incluído.');
      return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    // Monta a fatura com informações completas do centro e do cliente
    const centerName = 'S.M.S - Escola de Linguas & Habilidades';
    const centerPhone = '+244 951 474872';
    const centerEmail = 'VendasRhSms@outlook.com';
    const centerAddress = 'Av. Deolinda Rodrigues, nº 475, Rangel, Luanda, Angola';

    doc.setFontSize(16);
    doc.text(centerName, 14, 20);
    doc.setFontSize(10);
    doc.text(`Contacto: ${centerPhone} | ${centerEmail}`, 14, 28);
    doc.text(`Endereço: ${centerAddress}`, 14, 34);

    doc.setLineWidth(0.5);
    doc.line(14, 38, 196, 38);

    doc.setFontSize(12);
    doc.text(`Fatura para: ${name}`, 14, 48);
    if (email) doc.text(`Email: ${email}`, 14, 56);
    doc.text(`Tipo de curso: ${courseType}`, 14, 64);
    doc.text(`Documento: ${manualTitle}`, 14, 72);
    doc.text(`Preço: ${price}`, 14, 80);
    doc.text(`Data: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`, 14, 88);

    doc.setFontSize(11);
    doc.text('Detalhes de pagamento:', 14, 98);
    doc.text(`- Banco: Banco Yetu.`, 14, 106);
    doc.text(`- Nº Conta: 7899088.10001`, 14, 114);
    doc.text(`- IBAN: AO6.0066.0000.0789.9088.1013.0`, 14, 122);
    doc.text(`- Referência: SMS-ESCOLA DE LÍNGUAS-2026`, 14, 130);
    doc.text('Código de acesso ao documento: @saraswat!-2026sms', 14, 142);

    doc.setFontSize(12);
    doc.text('Obrigado pela sua compra!', 14, 160);

    // gera PDF e inicia download local
    const dataUri = doc.output('datauristring');
    doc.save(filename);
    showPurchaseStatus('Fatura gerada e baixada com sucesso.');
  } catch (err) {
    console.error('Erro ao gerar fatura:', err);
    showPurchaseStatus('Erro ao gerar a fatura. Tente novamente.', true);
  }
}

// --- Floating report button + small report modal (inject via JS to avoid changing HTML) ---
(function(){
  // CSS for floating button and modal
  const css = `
  .floating-report-btn{position:fixed;top:50%;right:18px;left:auto;transform:translateY(-50%);min-width:44px;min-height:44px;border-radius:999px;background:#ef4444;color:#fff;border:none;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(0,0,0,0.18);z-index:9999;cursor:pointer;font-weight:700;font-size:12px;animation:report-slide 16s ease-in-out infinite alternate, report-shake 18s linear infinite;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 14px;line-height:1}
  .floating-report-btn.small{width:auto;height:44px;font-size:12px;padding:0 12px;}
  .report-modal{position:fixed;top:70px;right:18px;z-index:1410;display:none}
  .report-modal .report-panel{width:320px;max-width:92vw;background:white;border-radius:12px;padding:12px 12px 10px;border:1px solid rgba(0,0,0,0.06);box-shadow:0 12px 30px rgba(2,6,23,0.12);font-family:inherit}
  @media (max-width: 768px){.floating-report-btn{right:16px;top:50%;transform:translateY(-50%);}}
  @media (max-width: 480px){.floating-report-btn{right:12px;top:50%;transform:translateY(-50%);width:40px;height:40px;min-width:40px;min-height:40px;max-width:40px;max-height:40px;font-size:11px;}}
  @media (max-width: 420px){.floating-report-btn{width:36px;height:36px;min-width:36px;min-height:36px;max-width:36px;max-height:36px;font-size:10px;}}
  @keyframes report-slide{0%{right:18px;left:auto;}50%{right:auto;left:18px;}100%{right:18px;left:auto;}}
  .report-modal .report-panel h4{margin:0 0 6px;font-size:15px;color:#0f172a}
  .report-modal .report-panel textarea{width:100%;height:120px;padding:10px;border-radius:8px;border:1px solid rgba(15,23,42,0.06);resize:vertical;font-size:13px}
  .report-row{display:flex;gap:8px;align-items:center;margin-top:8px}
  .report-row input[type=text]{flex:1;padding:8px;border-radius:8px;border:1px solid rgba(15,23,42,0.06);font-size:13px}
  .report-footer{display:flex;justify-content:space-between;align-items:center;margin-top:10px}
  .report-count{font-size:12px;color:#475569}
  .report-send-btn{background:linear-gradient(135deg,#ef4444,#dc2626);color:#fff;padding:8px 12px;border-radius:8px;border:none;cursor:pointer;font-weight:700;white-space:nowrap}
  .report-close{position:absolute;top:6px;right:8px;background:transparent;border:none;font-size:18px;cursor:pointer;color:#475569}
  @media (max-width:520px){.report-footer{flex-direction:column;align-items:stretch;gap:8px}.report-send-btn{width:100%;padding:10px 12px;font-size:13px}.report-count{font-size:11px;text-align:right}} 
  @media (max-width:420px){.report-modal .report-panel{right:10px;left:10px;width:auto;max-width:calc(100% - 20px)}.report-row{flex-direction:column;align-items:stretch}.report-row input[type=text]{width:100%}.report-send-btn{font-size:12px;padding:8px 10px}.report-count{text-align:left}}
  @keyframes report-shake{
    0%{transform:translateX(0)}
    40%{transform:translateX(0)}
    42%{transform:translateX(-5px)}
    44%{transform:translateX(5px)}
    46%{transform:translateX(-4px)}
    48%{transform:translateX(4px)}
    50%{transform:translateX(-6px)}
    52%{transform:translateX(6px)}
    54%{transform:translateX(-5px)}
    56%{transform:translateX(5px)}
    58%{transform:translateX(-3px)}
    60%{transform:translateX(3px)}
    62%{transform:translateX(-4px)}
    64%{transform:translateX(4px)}
    66%{transform:translateX(-2px)}
    68%{transform:translateX(2px)}
    70%{transform:translateX(0)}
    100%{transform:translateX(0)}
  }
  `;

  const style = document.createElement('style');
  style.setAttribute('data-generated','report-styles');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  // container HTML
  const container = document.createElement('div');
  container.innerHTML = `
    <button id="reportBtn" class="floating-report-btn small" aria-label="Denunciar">Denunciar</button>
    <div id="reportModal" class="report-modal" role="dialog" aria-modal="true" aria-labelledby="reportTitle">
      <div class="report-panel">
        <button class="report-close" aria-label="Fechar">×</button>
        <h4 id="reportTitle">Denunciar / Reclamar</h4>
        <textarea id="reportMessage" placeholder="Descreva a sua denúncia ou reclamação (até 1000 palavras)"></textarea>
        <div class="report-row">
          <label style="font-size:13px;color:#334155"><input type="checkbox" id="reportAnonymous" style="margin-right:6px"> Enviar como anónimo</label>
        </div>
        <div class="report-row" style="margin-top:8px;">
          <input type="text" id="reportName" placeholder="Seu nome (opcional)">
        </div>
        <div class="report-footer">
          <span id="reportCount" class="report-count">0 / 1000 palavras</span>
          <button id="reportSend" class="report-send-btn">Denunciar</button>
        </div>
      </div>
    </div>
  `;
  const headerContainer = document.body;
  headerContainer.appendChild(container);

  // elements
  const reportBtn = document.getElementById('reportBtn');
  const reportModal = document.getElementById('reportModal');
  const reportClose = reportModal.querySelector('.report-close');
  const reportMessage = document.getElementById('reportMessage');
  const reportAnonymous = document.getElementById('reportAnonymous');
  const reportName = document.getElementById('reportName');
  const reportCount = document.getElementById('reportCount');
  const reportSend = document.getElementById('reportSend');

  const reportLabels = ['Sugerir', 'Reclamar', 'Denunciar'];
  let reportLabelIndex = 0;
  function cycleReportLabel(){
    reportLabelIndex = (reportLabelIndex + 1) % reportLabels.length;
    const nextLabel = reportLabels[reportLabelIndex];
    reportBtn.textContent = nextLabel;
    reportBtn.setAttribute('aria-label', nextLabel);
  }
  setInterval(cycleReportLabel, 5000);

  function updateCount(){
    const words = (reportMessage.value || '').trim().split(/\s+/).filter(Boolean).length;
    reportCount.textContent = `${words} / 1000 palavras`;
  }

  reportMessage.addEventListener('input', function(){
    // limit to 1000 words
    const words = (reportMessage.value || '').trim().split(/\s+/).filter(Boolean);
    if (words.length > 1000){
      reportMessage.value = words.slice(0,1000).join(' ');
    }
    updateCount();
  });

  reportBtn.addEventListener('click', function(e){
    e.stopPropagation();
    // toggle modal
    if (reportModal.style.display === 'block') closeModal(); else openModal();
  });

  reportClose.addEventListener('click', closeModal);
  function openModal(){ reportModal.style.display = 'block'; reportMessage.focus(); updateCount(); }
  function closeModal(){ reportModal.style.display = 'none'; }

  // clicking outside panel closes
  document.addEventListener('click', function(e){
    if (!reportModal.contains(e.target) && e.target !== reportBtn && reportModal.style.display === 'block'){
      closeModal();
    }
  });

  reportSend.addEventListener('click', function(){
    const text = (reportMessage.value || '').trim();
    if (!text){ alert('Escreva a denúncia ou reclamação antes de enviar.'); reportMessage.focus(); return; }
    const words = text.split(/\s+/).filter(Boolean).length;
    if (words > 1000){ alert('A mensagem excede 1000 palavras.'); return; }

    const anonymous = reportAnonymous.checked;
    const name = (reportName.value || '').trim();
    const now = new Date();
    const header = 'Denúncia/Reclamação enviada via site';
    const meta = [`Data: ${now.toLocaleString()}`];
    if (anonymous) meta.push('Enviado: Anónimo'); else if (name) meta.push(`Nome: ${name}`);

    const bodyLines = [];
    bodyLines.push(header);
    bodyLines.push('---');
    bodyLines.push(...meta);
    bodyLines.push('---');
    bodyLines.push(text);

    const whatsappNumber = '244929452645';
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bodyLines.join('\n'))}`;
    // open whatsapp
    const win = window.open(waUrl, '_blank');
    if (!win) window.location.href = waUrl;
    closeModal();
    // clear fields
    reportMessage.value = '';
    reportName.value = '';
    reportAnonymous.checked = false;
    updateCount();
  });

})();

// YouTube Joy Dunkin player: responsive player with visible controls and autoplay-on-click option
(function(){
  let joyPlayerInstance = null;
  const playBtn = () => document.getElementById('joyPlayBtn');
  const soundBtn = () => document.getElementById('joySoundBtn');
  const autoplayToggleEl = () => document.getElementById('joyAutoplayToggle');

  // read preference: if set, start only after user clicks
  let startOnClick = localStorage.getItem('joyStartOnClick') === '1';

  // create API script if needed
  function ensureYouTubeAPI(){
    return new Promise((resolve) => {
      if (window.YT && window.YT.Player) return resolve();
      const existing = document.querySelector('script[data-yt-api]');
      if (existing) {
        existing.addEventListener('load', () => resolve());
        return;
      }
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.setAttribute('data-yt-api','1');
      document.head.appendChild(tag);
      const checkReady = () => {
        if (window.YT && window.YT.Player) return resolve();
        setTimeout(checkReady, 50);
      };
      checkReady();
    });
  }

  function updateAutoplayUI(){
    const p = playBtn();
    const t = autoplayToggleEl();
    if (t) t.checked = startOnClick;
    if (p) p.style.display = startOnClick ? 'flex' : 'none';
  }

  function createJoyPlayer(){
    if (!document.getElementById('joyPlayer')) return;
    joyPlayerInstance = new YT.Player('joyPlayer', {
      width: '100%',
      height: '100%',
      videoId: 'mtC-KdybT9k',
      playerVars: {
        autoplay: startOnClick ? 0 : 1,
        controls: 0,
        rel: 0,
        modestbranding: 1,
        loop: 1,
        playlist: 'mtC-KdybT9k',
        mute: 1
      },
      events: {
        onReady: function(e){
          try{
            e.target.mute();
            if (!startOnClick) e.target.playVideo();
            updateAutoplayUI();
          }catch(err){}
        }
      }
    });
  }

  ensureYouTubeAPI().then(()=>{
    if (window.YT && window.YT.Player) createJoyPlayer();
    else window.onYouTubeIframeAPIReady = createJoyPlayer;
  }).catch(()=>{});

  // Play button
  document.addEventListener('click', function(e){
    const p = playBtn();
    if (!p) return;
    if (e.target === p || e.target.closest && e.target.closest('#joyPlayBtn')){
      if (!joyPlayerInstance) return;
      try{ joyPlayerInstance.playVideo(); joyPlayerInstance.mute(); p.style.display = 'none'; }catch(err){}
    }
  }, true);

  // Sound button
  document.addEventListener('click', function(e){
    const s = soundBtn();
    if (!s) return;
    if (e.target === s || e.target.closest && e.target.closest('#joySoundBtn')){
      if (!joyPlayerInstance) return;
      try{
        if (joyPlayerInstance.isMuted && joyPlayerInstance.isMuted()){
          joyPlayerInstance.unMute();
          s.textContent = '🔊';
          s.setAttribute('aria-label','Desativar som');
        } else {
          joyPlayerInstance.mute();
          s.textContent = '🔈';
          s.setAttribute('aria-label','Ativar som');
        }
      }catch(err){ console.warn('YT sound toggle error', err); }
    }
  }, true);

  // Autoplay toggle checkbox
  document.addEventListener('change', function(e){
    const t = autoplayToggleEl();
    if (!t) return;
    if (e.target === t){
      startOnClick = !!t.checked;
      localStorage.setItem('joyStartOnClick', startOnClick ? '1' : '0');
      updateAutoplayUI();
      if (joyPlayerInstance){
        try{
          if (startOnClick){ joyPlayerInstance.pauseVideo(); }
          else { joyPlayerInstance.playVideo(); joyPlayerInstance.mute(); }
        }catch(err){}
      }
    }
  }, true);

  // initial UI update
  setTimeout(updateAutoplayUI, 200);

})();
// ===== PROPINA MODAL FUNCTIONS =====

// Open Propina Modal
function openProptinaModal(courseName, coursePrice) {
  const modal = document.getElementById('propina-modal');
  if (!modal) return;
  
  // Set the course name and price in the form
  const courseSelect = document.getElementById('propina-course');
  const amountInput = document.getElementById('propina-amount');
  
  if (courseSelect && courseName) {
    courseSelect.value = courseName;
  }
  
  if (amountInput && coursePrice) {
    amountInput.value = coursePrice;
    amountInput.dataset.defaultPrice = coursePrice;
  }
  
  // Reset other form fields but keep course and price
  document.getElementById('propina-name').value = '';
  document.getElementById('propina-email').value = '';
  document.getElementById('propina-phone').value = '';
  document.getElementById('propina-type').value = '';
  document.getElementById('propina-month').value = '';
  document.getElementById('propina-package').value = '';
  document.getElementById('propina-corporate').value = '';
  document.getElementById('propina-proof').value = '';
  document.getElementById('monthly-fields').style.display = 'none';
  document.getElementById('package-fields').style.display = 'none';
  document.getElementById('corporate-fields').style.display = 'none';
  
  // Show modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Close Propina Modal
function closeProptinaModal() {
  const modal = document.getElementById('propina-modal');
  if (!modal) return;
  
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.getElementById('propina-form').reset();
}

// Update Payment Type Fields
function updatePaymentTypeFields() {
  const paymentType = document.getElementById('propina-type').value;
  const monthlyFields = document.getElementById('monthly-fields');
  const packageFields = document.getElementById('package-fields');
  const corporateFields = document.getElementById('corporate-fields');
  const monthSelect = document.getElementById('propina-month');
  const packageSelect = document.getElementById('propina-package');
  const corporateSelect = document.getElementById('propina-corporate');
  
  monthlyFields.style.display = 'none';
  packageFields.style.display = 'none';
  corporateFields.style.display = 'none';
  
  monthSelect.required = false;
  packageSelect.required = false;
  corporateSelect.required = false;

  const amountInput = document.getElementById('propina-amount');
  const defaultAmount = amountInput ? amountInput.dataset.defaultPrice : '';

  if (paymentType === 'monthly') {
    monthlyFields.style.display = 'block';
    monthSelect.required = true;
    if (amountInput) amountInput.value = defaultAmount;
  } else if (paymentType === 'package') {
    packageFields.style.display = 'block';
    packageSelect.required = true;
    if (amountInput) amountInput.value = defaultAmount;
  } else if (paymentType === 'corporate') {
    corporateFields.style.display = 'block';
    corporateSelect.required = true;
  } else {
    if (amountInput) amountInput.value = defaultAmount;
  }
}

function updateCorporateAmount() {
  const corporateSelect = document.getElementById('propina-corporate');
  const amountInput = document.getElementById('propina-amount');
  const corporateAmounts = {
    'Business English': 35000,
    'Academic English': 30000,
    'Travel English': 25000,
    'Professional English': 50000,
    'Technical English': 60000,
    'Specialized English': 75000,
    'Team/Company 3 Member': 100000
  };
  const selected = corporateSelect.value;
  if (selected && corporateAmounts[selected]) {
    amountInput.value = corporateAmounts[selected];
  }
}

// Submit Propina Form
function submitProptinaForm(event) {
  event.preventDefault();
  
  // Get form data
  const name = document.getElementById('propina-name').value.trim();
  const email = document.getElementById('propina-email').value.trim();
  const phone = document.getElementById('propina-phone').value.trim();
  const course = document.getElementById('propina-course').value.trim();
  const paymentType = document.getElementById('propina-type').value;
  const monthRef = document.getElementById('propina-month').value || '';
  const amount = document.getElementById('propina-amount').value.trim();
  const proofFile = document.getElementById('propina-proof').files[0];
  
  // Validate all fields
  if (!name || !email || !phone || !course || !paymentType || !amount || !proofFile) {
    alert('Por favor, preencha todos os campos obrigatórios e anexe o comprovante.');
    return;
  }
  
  // Validate payment type selection
  if (paymentType === 'monthly' && !monthRef) {
    alert('Por favor, selecione a referência da mensalidade.');
    return;
  }
  
  // Format payment type for display
  let paymentTypeDisplay = '';
  switch(paymentType) {
    case 'monthly':
      paymentTypeDisplay = `Dívida de Mensalidade (${monthRef})`;
      break;
    case 'package':
      paymentTypeDisplay = 'Dívida de Pacote Único';
      break;
    case 'corporate':
      paymentTypeDisplay = 'Pacote Empresas';
      break;
    default:
      paymentTypeDisplay = paymentType;
  }
  
  // Build the message for WhatsApp
  const message = `
Olá! Envie o seu comprovante manualmente para acelerar a sua validação.

*DADOS DO CLIENTE:*
Nome: ${name}
E-mail: ${email}
Telefone: ${phone}

*OBJETIVO DO PAGAMENTO:*
Curso: ${course}

*TIPO DE PAGAMENTO:*
${paymentTypeDisplay}

*MONTANTE PAGO:*
Kz ${parseFloat(amount).toLocaleString('pt-AO')}

*COMPROVANTE:*
Arquivo: ${proofFile.name}

Obs: Por favor, envie o seu comprovante manualmente via WhatsApp após abrir a conversa para acelerar a validação.

Aguardo a confirmação do pagamento.
  `.trim();
  
  // Encode message for WhatsApp
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = '244951474872'; // School WhatsApp number without + and spaces
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Close modal and redirect to WhatsApp
  closeProptinaModal();
  
  // Open WhatsApp
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
  }, 300);
}

// Close modal when clicking outside of it
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('propina-modal');
  if (modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        closeProptinaModal();
      }
    });
  }
});

