/* Migrated from inline index.html: Google Translate helpers and language picker */
function hideGoogleTranslateUI() {
  const container = document.getElementById('google_translate_element');
  if (container) {
    container.setAttribute('style', 'position:fixed !important; left:-9999px !important; top:-9999px !important; width:1px !important; height:1px !important; overflow:hidden !important; opacity:0 !important; display:none !important;');
  }
  document.querySelectorAll('.goog-te-banner-frame, .goog-te-menu-frame, .goog-te-ftab, .goog-te-gadget, .goog-te-gadget-simple, .goog-te-spinner-pos, .goog-te-balloon-frame').forEach((el) => {
    if (el) el.setAttribute('style', 'display:none !important; visibility:hidden !important; position:fixed !important; left:-9999px !important; top:-9999px !important; width:1px !important; height:1px !important;');
  });
  document.querySelectorAll('.skiptranslate').forEach((el) => el.remove());
}

function googleTranslateElementInit() {
  hideGoogleTranslateUI();
  const container = document.getElementById('google_translate_element');
  if (!container) return;
  if (window.google && window.google.translate && window.google.translate.TranslateElement) {
    new google.translate.TranslateElement({
      pageLanguage: 'pt',
      includedLanguages: 'en,fr,es',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    }, 'google_translate_element');
  } else {
    window.setTimeout(googleTranslateElementInit, 250);
  }
}

function changeLanguage(lang) {
  const select = document.querySelector('.goog-te-combo');
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    return;
  }

  const currentUrl = encodeURIComponent(window.location.href);
  window.location.href = `https://translate.google.com/translate?hl=${lang}&sl=pt&tl=${lang}&u=${currentUrl}`;
}

function toggleLanguagePicker(event) {
  event.stopPropagation();
  const container = document.querySelector('.simple-google-translate');
  const picker = container ? container.querySelector('.lang-picker') : null;
  if (!container || !picker) return;
  if (container.classList.contains('open')) { closeLanguagePicker(); return; }
  picker.style.top = 'calc(100% + 10px)';
  picker.style.left = '50%';
  picker.style.transform = 'translateX(-50%)';
  picker.style.zIndex = '120';
  container.classList.add('open');
}

function closeLanguagePicker() {
  const container = document.querySelector('.simple-google-translate');
  if (container) container.classList.remove('open');
}

window.addEventListener('resize', closeLanguagePicker);
window.addEventListener('load', hideGoogleTranslateUI);
setTimeout(hideGoogleTranslateUI, 300);
window.changeLanguage = changeLanguage;
window.toggleLanguagePicker = toggleLanguagePicker;
window.closeLanguagePicker = closeLanguagePicker;

(function () {
  const WELCOME_STORAGE_KEY = 'sms_welcome_completed_v1';
  const WELCOME_TIMESTAMP_KEY = 'sms_welcome_completed_at';
  const WELCOME_HOUR_MS = 60 * 60 * 1000;
  const WELCOME_FORM_ID = 'mqpzpbgy';

  function hasValidWelcomeSession() {
    if (!window.localStorage) return false;
    const storedValue = window.localStorage.getItem(WELCOME_STORAGE_KEY);
    const storedTimestamp = Number(window.localStorage.getItem(WELCOME_TIMESTAMP_KEY) || 0);
    if (storedValue !== '1') return false;
    if (!storedTimestamp) return false;
    return Date.now() - storedTimestamp < WELCOME_HOUR_MS;
  }

  function initWelcomeGate() {
    if (hasValidWelcomeSession()) {
      return;
    }

    if (window.localStorage && window.localStorage.getItem(WELCOME_STORAGE_KEY) === '1') {
      window.localStorage.removeItem(WELCOME_STORAGE_KEY);
      window.localStorage.removeItem(WELCOME_TIMESTAMP_KEY);
    }

    if (document.getElementById('welcomeGateScreen')) {
      return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'welcomeGateScreen';
    overlay.className = 'welcome-screen is-open';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Entrada inicial');
    overlay.innerHTML = `
      <div class="welcome-card">
        <div class="welcome-form-panel">
          <p class="eyebrow eyebrow-soft">SMS Academy</p>
          <h2 class="welcome-title">Bem-vindo</h2>
          <p class="welcome-subtitle">Antes de entrar, diga-nos o seu nome e o motivo da sua visita para que possamos preparar uma experiência mais personalizada.</p>
          <form id="welcomeGateForm" class="welcome-form">
            <div class="welcome-field">
              <label for="welcomeName">Seu nome</label>
              <input id="welcomeName" name="name" type="text" autocomplete="name" required placeholder="Digite o seu nome completo" />
            </div>
            <div class="welcome-field">
              <label for="welcomePhone">Número</label>
              <input id="welcomePhone" name="phone" type="tel" autocomplete="tel" required placeholder="Digite o seu número" />
            </div>
            <div class="welcome-field">
              <label for="welcomePurpose">Motivo da visita</label>
              <textarea id="welcomePurpose" name="message" required placeholder="Descreva o motivo da sua visita"></textarea>
            </div>
            <div id="welcomeError" class="welcome-error" aria-live="polite"></div>
            <button id="welcomeSubmitBtn" type="submit" class="welcome-submit">Entrar</button>
          </form>
        </div>
        <div id="welcomeProcessing" class="welcome-processing" aria-live="polite">
          <div class="welcome-spinner"></div>
          <h3>Preparando a sua experiência</h3>
          <p>Aguarde um momento enquanto finalizamos o acesso.</p>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.classList.add('welcome-lock-active');

    const form = overlay.querySelector('#welcomeGateForm');
    const errorBox = overlay.querySelector('#welcomeError');
    const processing = overlay.querySelector('#welcomeProcessing');
    const formPanel = overlay.querySelector('.welcome-form-panel');
    const submitBtn = overlay.querySelector('#welcomeSubmitBtn');

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = overlay.querySelector('#welcomeName').value.trim();
      const phone = overlay.querySelector('#welcomePhone').value.trim();
      const purpose = overlay.querySelector('#welcomePurpose').value.trim();

      if (!name || !phone || !purpose) {
        errorBox.textContent = 'Preencha o seu nome, o número e o motivo da visita para continuar.';
        return;
      }

      errorBox.textContent = '';
      formPanel.style.display = 'none';
      processing.classList.add('is-visible');
      submitBtn.disabled = true;

      const payload = {
        name,
        phone,
        message: purpose,
        source: 'welcome-gate',
        page: window.location.pathname,
        submittedAt: new Date().toLocaleString('pt-BR')
      };

      const sendData = () => {
        if (window.fetch) {
          return fetch(`https://formspree.io/f/${WELCOME_FORM_ID}`, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }).catch(function (err) {
            console.warn('Welcome form delivery failed', err);
          });
        }

        return Promise.resolve();
      };

      sendData().finally(function () {
        if (window.localStorage) {
          window.localStorage.setItem(WELCOME_STORAGE_KEY, '1');
          window.localStorage.setItem(WELCOME_TIMESTAMP_KEY, String(Date.now()));
        }
        setTimeout(function () {
          overlay.classList.remove('is-open');
          overlay.style.display = 'none';
          document.body.classList.remove('welcome-lock-active');
          document.body.style.overflow = '';
        }, 2200);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWelcomeGate, { once: true });
  } else {
    initWelcomeGate();
  }
})();

/* Migrated from inline header script: hideBuyMenu helper */
window.hideBuyMenu = function() {
  var menu = document.getElementById('buy-menu');
  var button = document.getElementById('buyMenuToggleBtn');
  if (!menu) return;
  menu.classList.remove('show');
  menu.style.display = 'none';
  menu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('site-overlay-open');
  document.body.style.overflow = '';
  if (button) button.textContent = 'Manuais';
};

document.addEventListener('click', function(e) {
  var menu = document.getElementById('buy-menu');
  if (!menu) return;
  if (menu.classList.contains('show')){
    if (!menu.contains(e.target) && !e.target.closest('#buyMenuToggleBtn')){
      window.hideBuyMenu();
    }
  }
});

let requestedDownloadUrl = '';
const manualFileMap = {
  // Complete Packages - Para botão "Comprar"
  '1': 'documentos/Standard_Stage_1_Complete_Package.pdf',
  '2': 'documentos/Foundation_Complete_Package.pdf',
  '3': 'documentos/Intermediate_Complete_Package.pdf',
  '4': 'documentos/FluentAccel_Complete_Package.pdf',
  '5': 'documentos/Joy_Complete_Package.pdf',
  '6': 'documentos/Autodidata_Complete_Package.pdf',
  
  // Standard - Para botão "Estudar"
  'Standard-Standard Vocabulary': 'documentos/Standard_Vocabulary.pdf',
  'Standard-Standard Grammar': 'documentos/Standard_Grammar.pdf',
  'Standard-Standard Dialogue': 'documentos/Standard_Dialogue.pdf',
  'Standard-Standard Practicing': 'documentos/Standard_Practicing.pdf',
  
  // Standard Stage 1
  'Standard-Standard 1-Standard Vocabulary': 'documentos/Standard_1_Vocabulary.pdf',
  'Standard-Standard 1-Standard Grammar': 'documentos/Standard_1_Grammar.pdf',
  'Standard-Standard 1-Standard Dialogue': 'documentos/Standard_1_Dialogue.pdf',
  'Standard-Standard 1-Standard Practicing': 'documentos/Standard_1_Practicing.pdf',
  
  // Standard Stage 2
  'Standard-Standard 2-Standard Vocabulary': 'documentos/Standard_2_Vocabulary.pdf',
  'Standard-Standard 2-Standard Grammar': 'documentos/Standard_2_Grammar.pdf',
  'Standard-Standard 2-Standard Dialogue': 'documentos/Standard_2_Dialogue.pdf',
  'Standard-Standard 2-Standard Practicing': 'documentos/Standard_2_Practicing.pdf',
  
  // Standard Stage 3
  'Standard-Standard 3-Standard Vocabulary': 'documentos/Standard_3_Vocabulary.pdf',
  'Standard-Standard 3-Standard Grammar': 'documentos/Standard_3_Grammar.pdf',
  'Standard-Standard 3-Standard Dialogue': 'documentos/Standard_3_Dialogue.pdf',
  'Standard-Standard 3-Standard Practicing': 'documentos/Standard_3_Practicing.pdf',
  
  // Foundation
  'Foundation-Foundation Vocabulary': 'documentos/Foundation_Vocabulary.pdf',
  'Foundation-Foundation Grammar': 'documentos/Foundation_Grammar.pdf',
  'Foundation-Foundation Dialogue': 'documentos/Foundation_Dialogue.pdf',
  'Foundation-Foundation Practicing': 'documentos/Foundation_Practicing.pdf',
  
  // Intermediate
  'Intermediate-Intermediate Vocabulary': 'documentos/Intermediate_Vocabulary.pdf',
  'Intermediate-Intermediate Grammar': 'documentos/Intermediate_Grammar.pdf',
  'Intermediate-Intermediate Dialogue': 'documentos/Intermediate_Dialogue.pdf',
  'Intermediate-Intermediate Practicing': 'documentos/Intermediate_Practicing.pdf',
  
  // Fluency Acceleration
  'Fluency Acceleration-Fluency Acceleration Vocabulary': 'documentos/Fluency_Acceleration_Vocabulary.pdf',
  'Fluency Acceleration-Fluency Acceleration Grammar': 'documentos/Fluency_Acceleration_Grammar.pdf',
  'Fluency Acceleration-Fluency Acceleration Dialogue': 'documentos/Fluency_Acceleration_Dialogue.pdf',
  'Fluency Acceleration-Fluency Acceleration Practicing': 'documentos/Fluency_Acceleration_Practicing.pdf',
  
  // Joy
  'Joy-Joy Vocabulary': 'documentos/Joy_Vocabulary.pdf',
  'Joy-Joy Grammar': 'documentos/Joy_Grammar.pdf',
  'Joy-Joy Dialogue': 'documentos/Joy_Dialogue.pdf',
  'Joy-Joy Practicing': 'documentos/Joy_Practicing.pdf',
  
  // Autodidata
  'Autodidata-Autodidata Vocabulary': 'documentos/Autodidata_Vocabulary.pdf',
  'Autodidata-Autodidata Grammar': 'documentos/Autodidata_Grammar.pdf',
  'Autodidata-Autodidata Dialogue': 'documentos/Autodidata_Dialogue.pdf',
  'Autodidata-Autodidata Practicing': 'documentos/Autodidata_Practicing.pdf',
};

// Fallback price map for manuals (used when price wasn't passed to openPurchaseForm)
const manualPriceMap = {
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
  '11': '5.000 Kz',
  '12': '5.000 Kz'
};

function setActiveOverlay(overlayId, contentId, isOpen) {
  const overlay = document.getElementById(overlayId);
  const content = contentId ? document.getElementById(contentId) : null;
  if (!overlay) return;

  overlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  overlay.style.display = isOpen ? 'block' : 'none';
  overlay.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('site-overlay-open', isOpen);

  if (content) {
    content.classList.toggle('is-open', isOpen);
    content.hidden = !isOpen;
    content.style.display = isOpen ? 'block' : 'none';
  }
}

/**
 * Mostra o backdrop/overlay que desfoca o conteúdo atrás
 */
function showBackdrop() {
  const backdrop = document.getElementById('infoBackdrop');
  if (!backdrop) return;
  backdrop.setAttribute('aria-hidden', 'false');
  backdrop.style.display = 'block';
  backdrop.style.opacity = '1';
  backdrop.classList.add('is-open');
  backdrop.style.pointerEvents = 'auto';
}

/**
 * Oculta o backdrop/overlay
 */
function hideBackdrop() {
  const backdrop = document.getElementById('infoBackdrop');
  if (!backdrop) return;
  backdrop.setAttribute('aria-hidden', 'true');
  backdrop.style.display = 'none';
  backdrop.style.opacity = '0';
  backdrop.classList.remove('is-open');
  backdrop.style.pointerEvents = 'none';
}

/**
 * Fecha o painel aberto (determinado automaticamente)
 */
function closeOpenPanel() {
  // Tenta fechar cada painel/modal aberto
  const buyMenu = document.getElementById('buy-menu');
  if (buyMenu && buyMenu.classList.contains('show')) {
    window.hideBuyMenu?.();
    return;
  }
  
  const smsGallery = document.getElementById('sms-gallery');
  if (smsGallery && !smsGallery.hidden && smsGallery.style.display === 'block') {
    window.closeSmsGallery?.();
    return;
  }
  
  const infoPanel = document.getElementById('infoPanel');
  if (infoPanel && infoPanel.classList.contains('is-open')) {
    window.toggleAllInfoSections?.();
    return;
  }
  
  const propinaModal = document.getElementById('propina-modal');
  if (propinaModal && propinaModal.style.display === 'block') {
    window.closeProptinaModal?.();
    return;
  }
  
  const purchaseOverlay = document.getElementById('purchaseModalOverlay');
  if (purchaseOverlay && purchaseOverlay.style.display === 'block') {
    window.closePurchaseForm?.();
    return;
  }
  
  const agendamento = document.getElementById('agendamento');
  if (agendamento && !agendamento.hidden && agendamento.style.display === 'flex') {
    window.closeAllInteractivePanels?.();
    return;
  }
}

function closeAllInteractivePanels(except = []) {
  const buyMenu = document.getElementById('buy-menu');
  if (buyMenu && !except.includes('buy-menu')) {
    window.hideBuyMenu?.();
  }

  const enrollmentSection = document.getElementById('agendamento');
  if (enrollmentSection && !except.includes('enrollment')) {
    enrollmentSection.hidden = true;
    enrollmentSection.classList.remove('show');
    enrollmentSection.style.display = 'none';
    enrollmentSection.setAttribute('aria-hidden', 'true');
  }

  const paymentSection = document.getElementById('pagamento');
  if (paymentSection && !except.includes('payment')) {
    paymentSection.hidden = true;
    paymentSection.style.display = 'none';
    paymentSection.setAttribute('aria-hidden', 'true');
    paymentSection.classList.remove('is-open');
  }

  const termsPanel = document.getElementById('termos-privacidade');
  if (termsPanel && !except.includes('terms')) {
    termsPanel.hidden = true;
    termsPanel.style.display = 'none';
    termsPanel.setAttribute('aria-hidden', 'true');
    termsPanel.classList.remove('is-open');
  }

  const propinaModal = document.getElementById('propina-modal');
  if (propinaModal && !except.includes('propina')) {
    propinaModal.style.display = 'none';
    propinaModal.setAttribute('aria-hidden', 'true');
    propinaModal.classList.remove('is-open');
  }

  const purchaseOverlay = document.getElementById('purchaseModalOverlay');
  if (purchaseOverlay && !except.includes('purchase')) {
    purchaseOverlay.style.display = 'none';
    purchaseOverlay.setAttribute('aria-hidden', 'true');
    purchaseOverlay.classList.remove('is-open');
  }

  const purchaseForm = document.getElementById('purchase-form');
  if (purchaseForm && !except.includes('purchase')) {
    purchaseForm.classList.add('hidden');
    purchaseForm.hidden = true;
  }

  const infoSystem = document.getElementById('infoPanel');
  if (infoSystem && !except.includes('info')) {
    infoSystem.classList.add('collapsed');
    infoSystem.classList.remove('is-open');
    infoSystem.hidden = true;
    infoSystem.style.display = 'none';
    infoSystem.setAttribute('aria-hidden', 'true');
    const infoButton = document.getElementById('infoToggleAllBtn');
    if (infoButton) infoButton.textContent = 'Ver informações';
  }

  const gallerySection = document.getElementById('sms-gallery');
  if (gallerySection && !except.includes('gallery')) {
    gallerySection.hidden = true;
    gallerySection.style.display = 'none';
    gallerySection.setAttribute('aria-hidden', 'true');
  }

  const overlay = document.querySelector('.site-overlay');
  if (overlay) {
    overlay.style.display = 'none';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-open');
  }

  document.body.classList.remove('site-overlay-open');
  document.body.style.overflow = '';
  hideBackdrop();
}

function changeProgram(step) {
  const track = document.getElementById('programsTrack');
  if (!track) return;

  const cards = Array.from(track.children);
  if (!cards.length) return;

  const currentIndex = cards.findIndex(card => card.classList.contains('active'));
  const nextIndex = (currentIndex + step + cards.length) % cards.length;

  cards.forEach(card => card.classList.remove('active'));
  cards[nextIndex].classList.add('active');

  track.style.transform = `translateX(-${nextIndex * 100}%)`;
}

function applyScrollableOverlayState(overlay, content) {
  if (!overlay || !content) return;
  overlay.style.display = 'flex';
  overlay.style.alignItems = 'flex-start';
  overlay.style.justifyContent = 'center';
  overlay.style.padding = '16px 16px 24px';
  overlay.style.overflowY = 'auto';
  overlay.style.WebkitOverflowScrolling = 'touch';
  content.style.width = 'min(760px, 100%)';
  content.style.maxHeight = 'min(90vh, 860px)';
  content.style.overflowY = 'auto';
  content.style.overflowX = 'hidden';
  content.style.WebkitOverflowScrolling = 'touch';
  content.style.touchAction = 'pan-y';
}

function openPurchaseForm(manualTitle, manualId, manualPrice) {
  closeAllInteractivePanels(['purchase']);

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

  let overlay = document.getElementById('purchaseModalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'purchaseModalOverlay';
    overlay.className = 'propina-modal';
    // accessibility
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    const content = document.createElement('div');
    content.className = 'propina-modal-content purchase-modal-content';

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

  const modalContent = overlay.querySelector('.propina-modal-content');
  if (form && modalContent) {
    modalContent.appendChild(form);
    form.classList.remove('hidden');
    form.hidden = false;
    form.style.visibility = 'visible';
    form.style.opacity = '1';
    form.style.setProperty('display', 'grid', 'important');
    overlay.style.display = 'block';
    overlay.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-open');
    document.body.classList.add('site-overlay-open');
    document.body.style.overflow = 'hidden';
    showBackdrop();
    // accessibility: focus first input inside the form
    const firstInput = form.querySelector('input, select, textarea, button');
    if (firstInput && typeof firstInput.focus === 'function') {
      setTimeout(() => firstInput.focus(), 80);
    }
    setTimeout(() => { modalContent.scrollTop = 0; form.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 50);
  }
}

function closePurchaseForm() {
  const form = document.getElementById('purchase-form');
  const purchaseRequest = document.getElementById('purchaseRequestForm');
  const status = document.getElementById('purchaseStatus');
  const overlay = document.getElementById('purchaseModalOverlay');

  if (form) {
    form.classList.add('hidden');
    form.hidden = true;
    if (purchaseRequest) purchaseRequest.reset();
    if (status) status.textContent = '';

    if (overlay) {
      const buyMenuContent = document.querySelector('.buy-menu-content');
      if (buyMenuContent) buyMenuContent.appendChild(form);
      overlay.style.display = 'none';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('is-open');
    }
  }
  document.body.classList.remove('site-overlay-open');
  document.body.style.overflow = '';
  hideBackdrop();
}

function openCourseCatalog() {
  const section = document.getElementById('cursos');
  document.querySelectorAll('.course-group-content').forEach(panel => {
    panel.hidden = false;
  });
  document.querySelectorAll('.course-category-action').forEach(button => {
    button.setAttribute('aria-expanded', 'true');
    button.textContent = 'Fechar catálogo';
  });
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function setGalleryButtonLabel(isOpen) {
  const galleryLink = document.querySelector('.ticker-link[href="#sms-gallery"]');
  if (galleryLink) {
    galleryLink.textContent = isOpen ? 'Fechar' : 'Galeria';
  }
}

function setSmsGalleryPanel(target) {
  target = target || 'photosDemo';
  const tabs = document.querySelectorAll('.sms-gallery-tabs .sms-tab');
  const panels = document.querySelectorAll('.sms-gallery-panel');
  tabs.forEach(tab => {
    const isActive = tab.dataset.target === target;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
  panels.forEach(panel => {
    const show = panel.id === target;
    panel.hidden = !show;
    panel.style.display = show ? 'block' : 'none';
  });
  if (target === 'videoDemo') {
    if (!window.videoGalleryControls) {
      initVideoGallery();
    }
    window.videoGalleryControls?.show(0);
  } else {
    window.videoGalleryControls?.pauseAll();
  }
}

window.openSmsGallery = function openSmsGallery(target = 'photosDemo') {
  const section = document.getElementById('sms-gallery');
  if (section) {
    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 64;
    section.classList.add('is-open');
    section.hidden = false;
    section.style.display = 'block';
    section.style.top = (headerHeight + 8) + 'px';
    section.setAttribute('aria-hidden', 'false');
    document.body.classList.add('site-overlay-open');
    document.body.style.overflow = 'hidden';
    showBackdrop();
    setGalleryButtonLabel(true);
    setSmsGalleryPanel(target);
  }
};

window.closeSmsGallery = function closeSmsGallery() {
  const section = document.getElementById('sms-gallery');
  if (section) {
    section.hidden = true;
    section.style.display = '';
    section.classList.remove('is-open');
    section.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('site-overlay-open');
    document.body.style.overflow = '';
    hideBackdrop();
    setGalleryButtonLabel(false);
  }
};

window.toggleSmsGallery = function toggleSmsGallery(target = 'photosDemo') {
  const section = document.getElementById('sms-gallery');
  if (!section) return;
  if (section.hidden) {
    openSmsGallery(target);
  } else {
    closeSmsGallery();
  }
};

function scrollToContacts() {
  const footer = document.getElementById('contato');
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function toggleAllInfoSections() {
  const infoPanel = document.getElementById('infoPanel');
  const infoButton = document.getElementById('infoToggleAllBtn');
  const infoBackdrop = document.getElementById('infoBackdrop');
  
  if (!infoPanel) return;
  
  const isCollapsed = infoPanel.classList.contains('collapsed');
  
  if (isCollapsed) {
    // Abrir o painel
    infoPanel.classList.remove('collapsed');
    infoPanel.classList.add('is-open');
    infoPanel.hidden = false;
    infoPanel.style.display = 'block';
    infoPanel.setAttribute('aria-hidden', 'false');
    document.body.classList.add('site-overlay-open');
    document.body.style.overflow = 'hidden';
    showBackdrop();
    if (infoBackdrop) infoBackdrop.style.pointerEvents = 'none';
    if (infoButton) infoButton.textContent = 'Ocultar informações';
  } else {
    // Fechar o painel
    infoPanel.classList.add('collapsed');
    infoPanel.classList.remove('is-open');
    infoPanel.hidden = true;
    infoPanel.style.display = 'none';
    infoPanel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('site-overlay-open');
    document.body.style.overflow = '';
    hideBackdrop();
    if (infoButton) infoButton.textContent = 'Ver informações';
  }
}

(function() {
  let currentSlideIndex = 0;
  let slideInterval = null;
  let slider = null;

  function getBannerElements() {
    slider = document.getElementById('bannerSlider');
    const slides = Array.from(document.querySelectorAll('.banner-slide'));
    const dots = Array.from(document.querySelectorAll('.dot'));
    return { slider, slides, dots };
  }

  function showSlides(index) {
    const { slider, slides, dots } = getBannerElements();
    if (!slider || !slides.length) return;
    const safeIndex = index < 0
      ? slides.length - 1
      : index >= slides.length ? 0 : index;
    currentSlideIndex = safeIndex;
    const offset = -currentSlideIndex * 100;
    slider.style.transform = `translate3d(${offset}%, 0, 0)`;
    slider.style.transition = 'transform 0.6s ease';
    slider.setAttribute('data-active-index', String(currentSlideIndex));

    dots.forEach((dot, i) => {
      const isActive = i === currentSlideIndex;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
      dot.setAttribute('tabindex', isActive ? '0' : '-1');
    });
  }

  function nextSlide() { showSlides(currentSlideIndex + 1); }

  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = window.setInterval(nextSlide, 6500);
  }

  function stopAutoSlide() {
    if (slideInterval) window.clearInterval(slideInterval);
    slideInterval = null;
  }

  window.currentSlide = function(n) {
    const idx = (typeof n === 'number') ? (n - 1) : 0;
    showSlides(idx);
    startAutoSlide();
  };

  function savePurchaseDraft() {
    const draft = {
      buyerName: document.getElementById('buyerName')?.value || '',
      buyerEmail: document.getElementById('buyerEmail')?.value || '',
      courseType: document.getElementById('courseType')?.value || '',
      purchaseManualId: document.getElementById('purchaseManualId')?.value || '',
      purchaseManualPrice: document.getElementById('purchaseManualPrice')?.value || '',
      selectedManualTitle: document.getElementById('selectedManualTitle')?.textContent || '',
      selectedManualPrice: document.getElementById('selectedManualPrice')?.textContent || '',
      expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000)
    };
    try { localStorage.setItem('sms_purchase_draft', JSON.stringify(draft)); } catch (e) { console.warn('Unable to save purchase draft', e); }
  }

  function restorePurchaseDraft() {
    try {
      const raw = localStorage.getItem('sms_purchase_draft');
      if (!raw) return;
      const draft = JSON.parse(raw);
      if (!draft || Number(draft.expiresAt || 0) < Date.now()) {
        localStorage.removeItem('sms_purchase_draft');
        return;
      }
      if (draft.buyerName) document.getElementById('buyerName').value = draft.buyerName;
      if (draft.buyerEmail) document.getElementById('buyerEmail').value = draft.buyerEmail;
      if (draft.courseType) document.getElementById('courseType').value = draft.courseType;
      if (draft.purchaseManualId) document.getElementById('purchaseManualId').value = draft.purchaseManualId;
      if (draft.purchaseManualPrice) document.getElementById('purchaseManualPrice').value = draft.purchaseManualPrice;
      if (draft.selectedManualTitle) document.getElementById('selectedManualTitle').textContent = draft.selectedManualTitle;
      if (draft.selectedManualPrice) document.getElementById('selectedManualPrice').textContent = draft.selectedManualPrice;
    } catch (e) { console.warn('Unable to restore purchase draft', e); }
  }

  window.toggleBuyMenu = function() {
    const buyMenu = document.getElementById('buy-menu');
    const button = document.getElementById('buyMenuToggleBtn');
    if (!buyMenu) return;
    const opened = !buyMenu.classList.contains('show');
    buyMenu.classList.toggle('show');
    if (opened) {
      buyMenu.style.display = 'block';
      buyMenu.style.setProperty('z-index', '110', 'important');
      buyMenu.setAttribute('aria-hidden', 'false');
      if (button) button.textContent = 'Fechar';
    } else {
      buyMenu.style.display = 'none';
      buyMenu.setAttribute('aria-hidden', 'true');
      buyMenu.style.removeProperty('z-index');
      if (button) button.textContent = 'Manuais';
    }
  };

  window.updateManualBuyButtons = function() {
    const buyButtons = document.querySelectorAll('.buy-menu-content li button');
    buyButtons.forEach((button, index) => {
      const manualTitle = button.closest('li')?.querySelector('h3')?.innerText.trim() || `Manual ${index + 1}`;
      button.onclick = null;
      button.addEventListener('click', (event) => {
        event.preventDefault();
        openPurchaseForm(manualTitle, index + 1);
      });
    });
  };

  function initBannerSlider() {
    const { slider } = getBannerElements();
    if (!slider) return;
    showSlides(0);
    startAutoSlide();

    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.addEventListener('click', () => { window.currentSlide(i + 1); });
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    initBannerSlider();

    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    const formWrapper = document.getElementById('purchase-form');
    if (formWrapper) {
      formWrapper.classList.add('hidden');
      formWrapper.classList.remove('show');
      formWrapper.style.display = 'none';
    }

    ['buyerName','buyerEmail','courseType','purchaseManualId','purchaseManualPrice'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', savePurchaseDraft);
        el.addEventListener('change', savePurchaseDraft);
      }
    });
    restorePurchaseDraft();

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
      window.addEventListener('scroll', () => {
        const w = window.innerWidth || document.documentElement.clientWidth;
        let threshold = 300;
        if (w <= 480) threshold = 80;
        else if (w <= 768) threshold = 150;
        if (window.scrollY > threshold) {
          scrollToTopBtn.style.display = 'flex';
          scrollToTopBtn.style.opacity = '1';
        } else {
          scrollToTopBtn.style.display = 'none';
          scrollToTopBtn.style.opacity = '0';
        }
      });
      scrollToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    window.hideAllSections = function() {
      const ag = document.getElementById('agendamento'); if (ag) ag.style.display = 'none';
      const pg = document.getElementById('pagamento'); if (pg) pg.style.display = 'none';
      const fs = document.getElementById('formulario-section'); if (fs) fs.style.display = 'none';
    };
  });
})();

function bookCourse(courseName, coursePrice) {
  console.log('bookCourse called with:', courseName, coursePrice);
  const courseNameInput = document.getElementById('courseName');
  const coursePriceInput = document.getElementById('coursePrice');
  const courseBasePriceInput = document.getElementById('courseBasePrice');
  
  if (courseNameInput) courseNameInput.value = courseName;
  if (coursePriceInput) coursePriceInput.value = 'Kz ' + Number(coursePrice || 0).toFixed(2).replace('.', ',');
  if (courseBasePriceInput) courseBasePriceInput.value = Number(coursePrice || 0);
  
  console.log('Form fields set');
  updateCourseVariantUI(courseName, coursePrice);
  applyEnrollmentModalityRules(courseName);
  saveEnrollmentDraft();
  console.log('bookCourse completed');
}

function openEnrollmentPanel() {
  console.log('openEnrollmentPanel called');
  try {
    closeAllInteractivePanels(['enrollment']);
    
    const agendamento = document.getElementById('agendamento');
    console.log('agendamento element:', agendamento);
    if (!agendamento) {
      console.error('agendamento element not found');
      return;
    }
    
    console.log('Restoring enrollment draft...');
    restoreEnrollmentDraft();
    
    agendamento.hidden = false;
    agendamento.removeAttribute('hidden');
    agendamento.classList.add('show');
    agendamento.style.setProperty('display', 'flex', 'important');
    agendamento.setAttribute('aria-hidden', 'false');
    console.log('agendamento now visible');
    
    document.body.classList.add('site-overlay-open');
    document.body.style.overflow = 'hidden';
    showBackdrop();
    
    const firstInput = agendamento.querySelector('input, select, textarea, button');
    if (firstInput && typeof firstInput.focus === 'function') {
      setTimeout(() => firstInput.focus(), 80);
    }
    console.log('openEnrollmentPanel completed');
  } catch (e) {
    console.error('Error in openEnrollmentPanel:', e);
  }
}

function showRegistrationAndPayment() {
  openEnrollmentPanel();
}

function closeEnrollmentForm() {
  closeAllInteractivePanels();
}

function saveEnrollmentDraft() {
  const draft = {
    courseName: document.getElementById('courseName')?.value || '',
    courseVariant: document.getElementById('courseVariantSelect')?.value || '',
    coursePrice: document.getElementById('coursePrice')?.value || '',
    courseBasePrice: document.getElementById('courseBasePrice')?.value || '0',
    modality: document.querySelector('input[name="enrollModality"]:checked')?.value || '',
    scheduleDate: document.getElementById('scheduleDate')?.value || '',
    scheduleTime: document.getElementById('scheduleTime')?.value || '',
    name: document.getElementById('name')?.value || '',
    phone: document.getElementById('phone')?.value || '',
    email: document.getElementById('email')?.value || '',
    idNumber: document.getElementById('idNumber')?.value || '',
    municipality: document.getElementById('municipality')?.value || '',
    notes: document.getElementById('notes')?.value || ''
  };
  try {
    const expiresAt = Date.now() + (7 * 24 * 60 * 60 * 1000);
    localStorage.setItem('sms_enrollment_draft', JSON.stringify({ ...draft, expiresAt }));
  } catch (e) {
    console.warn('Unable to save enrollment draft', e);
  }
}

function restoreEnrollmentDraft() {
  try {
    const raw = localStorage.getItem('sms_enrollment_draft');
    if (!raw) return;
    const draft = JSON.parse(raw);
    if (!draft || Number(draft.expiresAt || 0) < Date.now()) {
      localStorage.removeItem('sms_enrollment_draft');
      return;
    }
    if (draft.courseName) document.getElementById('courseName').value = draft.courseName;
    if (draft.courseVariant) document.getElementById('courseVariantSelect').value = draft.courseVariant;
    if (draft.coursePrice) document.getElementById('coursePrice').value = draft.coursePrice;
    if (draft.courseBasePrice) document.getElementById('courseBasePrice').value = draft.courseBasePrice;
    if (draft.modality) {
      const radio = document.querySelector(`input[name="enrollModality"][value="${draft.modality}"]`);
      if (radio) radio.checked = true;
    }
    if (draft.scheduleDate) document.getElementById('scheduleDate').value = draft.scheduleDate;
    if (draft.scheduleTime) document.getElementById('scheduleTime').value = draft.scheduleTime;
    if (draft.name) document.getElementById('name').value = draft.name;
    if (draft.phone) document.getElementById('phone').value = draft.phone;
    if (draft.email) document.getElementById('email').value = draft.email;
    if (draft.idNumber) document.getElementById('idNumber').value = draft.idNumber;
    if (draft.municipality) document.getElementById('municipality').value = draft.municipality;
    if (draft.notes) document.getElementById('notes').value = draft.notes;
    updateModalityConfirmation();
  } catch (e) {
    console.warn('Unable to restore enrollment draft', e);
  }
}

function getEnrollmentFee(courseName) {
  const normalizedCourse = (courseName || '').toLowerCase();
  if (normalizedCourse.includes('standard english') || normalizedCourse.includes('estágio') || normalizedCourse.includes('estagio')) {
    return 3000;
  }
  if (
    normalizedCourse.includes('foundation english') ||
    normalizedCourse.includes('intermediate english') ||
    normalizedCourse.includes('aceleração da fluência') ||
    normalizedCourse.includes('aceleracao da fluencia')
  ) {
    return 5000;
  }
  return 0;
}

function getCourseVariantConfig(courseName) {
  const normalizedCourse = (courseName || '').toLowerCase();
  if (normalizedCourse.includes('professional english')) {
    return {
      label: 'Especializações',
      placeholder: 'Selecione uma especialização...',
      requiresSelection: true,
      priceMode: 'dynamic',
      options: [
        { label: 'Travel English 10 horas — 20.000 KZ', value: 'Travel English', price: 20000 },
        { label: 'Technical English 20 horas — 40.000 KZ', value: 'Technical English', price: 40000 },
        { label: 'Academic English 30 horas — 60.000 KZ', value: 'Academic English', price: 60000 },
        { label: 'Business English 30 horas — 70.000 KZ', value: 'Business English', price: 70000 },
        { label: 'Specialized English 100 horas — 180.000 KZ', value: 'Specialized English', price: 180000 }
      ]
    };
  }
  if (normalizedCourse.includes('preparatório') || normalizedCourse.includes('preparatorio')) {
    return {
      label: 'Preparação para',
      placeholder: 'Selecione uma preparação...',
      requiresSelection: true,
      priceMode: 'fixed',
      options: [
        { label: 'Entrevistas', value: 'Entrevistas', price: 15000 },
        { label: 'Universidades', value: 'Universidades', price: 15000 },
        { label: 'Emigração', value: 'Emigração', price: 15000 },
        { label: 'Logística Internacional', value: 'Logística Internacional', price: 15000 },
        { label: 'Outros processos seletivos', value: 'Outros processos seletivos', price: 15000 }
      ]
    };
  }
  if (normalizedCourse.includes('habilidades de comunicação')) {
    return {
      label: 'Conteúdo',
      placeholder: 'Selecione um conteúdo...',
      requiresSelection: true,
      priceMode: 'fixed',
      options: [
        { label: 'Inglês Americano', value: 'Inglês Americano', price: 18000 },
        { label: 'Inglês Britânico', value: 'Inglês Britânico', price: 18000 },
        { label: 'Inglês Nigeriano', value: 'Inglês Nigeriano', price: 18000 },
        { label: 'Comunicação intercultural', value: 'Comunicação intercultural', price: 18000 },
        { label: 'Pronúncia', value: 'Pronúncia', price: 18000 }
      ]
    };
  }
  return null;
}

function updateCourseVariantUI(courseName, basePrice) {
  const group = document.getElementById('courseVariantGroup');
  const label = document.getElementById('courseVariantLabel');
  const select = document.getElementById('courseVariantSelect');
  const priceInput = document.getElementById('coursePrice');
  const baseInput = document.getElementById('courseBasePrice');

  if (!group || !label || !select || !priceInput || !baseInput) return;

  const config = getCourseVariantConfig(courseName);
  if (!config) {
    group.style.display = 'none';
    select.innerHTML = '<option value="">Selecione uma opção...</option>';
    select.value = '';
    return;
  }

  label.textContent = `${config.label}:`;
  group.style.display = 'block';
  select.innerHTML = `<option value="">${config.placeholder}</option>` + config.options.map(option => `<option value="${option.value}">${option.label}</option>`).join('');
  select.value = '';

  const defaultPrice = Number(basePrice || 0);
  priceInput.value = 'Kz ' + defaultPrice.toFixed(2).replace('.', ',');
  baseInput.value = defaultPrice;

  select.onchange = function () {
    const selectedOption = config.options.find(option => option.value === this.value);
    const selectedPrice = (config.priceMode === 'dynamic' && selectedOption)
      ? Number(selectedOption.price || defaultPrice)
      : defaultPrice;
    priceInput.value = 'Kz ' + selectedPrice.toFixed(2).replace('.', ',');
    baseInput.value = selectedPrice;
  };
}

function updateModalityConfirmation() {
  const modalityEl = document.querySelector('input[name="enrollModality"]:checked');
  const confirmation = document.getElementById('modalityConfirmation');
  if (!confirmation) return;

  if (modalityEl) {
    const modalityText = modalityEl.value === 'presencial' ? 'Presencial' : 'Online';
    confirmation.textContent = `✅ ${modalityText} selecionado`;
    confirmation.classList.remove('hidden');
  } else {
    confirmation.classList.add('hidden');
    confirmation.textContent = '';
  }
}

window.updateModalityConfirmation = updateModalityConfirmation;

function applyEnrollmentModalityRules(courseName) {
  const onlineOption = document.querySelector('label[for="enrollModalityOnline"]');
  const presencialOption = document.querySelector('label[for="enrollModalityPresencial"]');
  const onlineInput = document.getElementById('enrollModalityOnline');
  const presencialInput = document.getElementById('enrollModalityPresencial');

  if (onlineOption) onlineOption.style.display = '';
  if (presencialOption) presencialOption.style.display = '';
  if (onlineInput) {
    onlineInput.disabled = false;
  }
  if (presencialInput) {
    presencialInput.disabled = false;
  }
  updateModalityConfirmation();
}

window.applyEnrollmentModalityRules = applyEnrollmentModalityRules;
window.updateCourseVariantUI = updateCourseVariantUI;

function proceedToPayment() {
  console.log('proceedToPayment called');
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const municipality = document.getElementById('municipality').value.trim();
  const scheduleDate = document.getElementById('scheduleDate').value;
  const scheduleTime = document.getElementById('scheduleTime').value;
  const notes = document.getElementById('notes').value.trim();
  const modalityEl = document.querySelector('input[name="enrollModality"]:checked');
  
  if (!name || !phone || !email || !municipality || !scheduleDate || !scheduleTime) {
    alert('Por favor, preencha todos os campos obrigatórios!');
    return;
  }
  if (!modalityEl) {
    alert('Por favor, selecione a modalidade de inscrição: Online ou Presencial.');
    return;
  }

  const modality = modalityEl.value;
  const basePrice = Number(document.getElementById('courseBasePrice')?.value || 0);
  const courseName = document.getElementById('courseName').value;
  const courseVariantSelect = document.getElementById('courseVariantSelect');
  const courseVariantConfig = getCourseVariantConfig(courseName);
  if (courseVariantConfig?.requiresSelection && (!courseVariantSelect || !courseVariantSelect.value)) {
    alert(`Por favor, selecione ${courseVariantConfig.label.toLowerCase()} antes de prosseguir.`);
    return;
  }
  const fee = getEnrollmentFee(courseName);
  const total = Number(basePrice) + Number(fee);

  const idNumber = (document.getElementById('idNumber')?.value || '').trim();
  const idCheck = validateIdNumber(idNumber);
  if (!idCheck.valid) {
    alert('Por favor, preencha um BI ou Passaporte válido antes de prosseguir. Exemplo de BI: 123456789AB123; Exemplo de Passaporte: AB1234567');
    return;
  }

  const reference = generateReference();
  const selectedVariant = courseVariantSelect?.value ? ` • ${courseVariantSelect.value}` : '';
  document.getElementById('summary_course').textContent = `${courseName || '—'}${selectedVariant}`;
  document.getElementById('summary_base').textContent = basePrice ? ('Kz ' + basePrice.toLocaleString('pt-PT')) : '—';
  document.getElementById('summary_fee').textContent = 'Kz ' + fee.toLocaleString('pt-PT');
  document.getElementById('summary_total').textContent = 'Kz ' + total.toLocaleString('pt-PT');
  document.getElementById('summary_reference').textContent = reference;
  document.getElementById('summary_name').textContent = name || '—';
  document.getElementById('summary_phone').textContent = phone || '—';
  document.getElementById('summary_email').textContent = email || '—';
  document.getElementById('summary_idNumber').textContent = idNumber || '—';
  document.getElementById('summary_municipality').textContent = municipality || '—';
  document.getElementById('summary_schedule').textContent = `${scheduleDate} ${scheduleTime}`;
  document.getElementById('summary_notes').textContent = notes || '—';

  const enrollment = {
    course: courseName,
    basePrice: basePrice,
    fee: fee,
    total: total,
    reference: reference,
    name: name,
    phone: phone,
    email: email,
    idNumber: idNumber,
    municipality: municipality,
    scheduleDate: scheduleDate,
    scheduleTime: scheduleTime,
    modality: modality,
    expiresAt: Date.now() + (10 * 60 * 1000)
  };
  try { localStorage.setItem('sms_enrollment', JSON.stringify(enrollment)); } catch (e) { console.warn('localStorage disabled', e); }

  if (typeof closeProptinaModal === 'function') {
    closeProptinaModal();
  }
  
  console.log('Closing enrollment panel, opening payment panel');
  const agendamento = document.getElementById('agendamento');
  const pagamento = document.getElementById('pagamento');
  
  if (agendamento) {
    agendamento.hidden = true;
    agendamento.classList.remove('show');
    agendamento.style.setProperty('display', 'none', 'important');
    agendamento.setAttribute('aria-hidden', 'true');
  }
  
  if (pagamento) {
    console.log('Payment section found, showing...');
    pagamento.hidden = false;
    pagamento.removeAttribute('hidden');
    pagamento.classList.add('is-open');
    pagamento.style.setProperty('display', 'flex', 'important');
    pagamento.setAttribute('aria-hidden', 'false');
    document.body.classList.add('site-overlay-open');
    document.body.style.overflow = 'hidden';
    
    // Ensure file input listener is set up
    const proofInput = document.getElementById('proofAttachment');
    if (proofInput) {
      proofInput.addEventListener('change', function() {
        const enrollBtn = document.getElementById('enrollGenerateInvoiceBtn');
        if (enrollBtn) {
          const hasFile = this.files && this.files.length > 0;
          enrollBtn.disabled = !hasFile;
          enrollBtn.style.opacity = hasFile ? '1' : '0.6';
        }
      });
    }
    
    console.log('Payment section shown');
    setTimeout(() => {
      pagamento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  } else {
    console.error('Payment section (#pagamento) not found');
  }
}

function buildEnrollmentSummaryText() {
  const courseName = document.getElementById('courseName').value;
  const courseVariantSelect = document.getElementById('courseVariantSelect');
  const selectedVariant = courseVariantSelect?.value ? ` • ${courseVariantSelect.value}` : '';
  const coursePrice = document.getElementById('coursePrice').value;
  const scheduleDate = document.getElementById('scheduleDate').value;
  const scheduleTime = document.getElementById('scheduleTime').value;
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const municipality = document.getElementById('municipality').value;
  const notes = document.getElementById('notes').value;
  const idNumber = (document.getElementById('idNumber')?.value || '').trim();
  const proofFile = document.getElementById('proofAttachment').files[0];
  const enrollmentFee = document.getElementById('summary_fee')?.textContent || '5.000 Kz';
  const enrollmentTotal = document.getElementById('summary_total')?.textContent || (coursePrice ? `${coursePrice} + 5.000 Kz` : '5.000 Kz');
  const instruction = 'Envie o seu comprovante manualmente para acelerar a sua validação.';
  const proofInfo = proofFile ? `\nArquivo do comprovante: ${proofFile.name}` : '';
  const manualInfo = '\n\n📚 *MANUAIS DISPONÍVEIS:*\nTodos os Manuais em todas as categorias custam 5.000 Kz. Consulte a secção de Manuais no site quando estiver disponível para mais informações.';

  return `*S.M.S - INSCRIÇÃO COMPLETA*\n\n👤 Nome: ${name}\n📱 Telefone: ${phone}\n📧 Email: ${email}\n🆔 BI/Passaporte: ${idNumber}\n🏘️ Município: ${municipality}\n📚 Curso: ${courseName}${selectedVariant}\n💵 Preço do curso: ${coursePrice}\n💳 Taxa de inscrição: ${enrollmentFee}\n💰 Total a pagar: ${enrollmentTotal}\n📅 Data: ${scheduleDate}\n⏰ Horário: ${scheduleTime}\n📝 Observações: ${notes}\n\n${instruction}${proofInfo}${manualInfo}\n\n📝 *Agradecimentos:* 🎓 Bem-vindo(a) à Saraswati MAA Mind School – S.M.S!\nÉ um grande prazer acompanhá-lo(a) nesta jornada de aprendizado em inglês.`;
}

function submitAllDataVia(method) {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const municipality = document.getElementById('municipality').value;
  const scheduleDate = document.getElementById('scheduleDate').value;
  const scheduleTime = document.getElementById('scheduleTime').value;

  if (!name || !phone || !email || !municipality || !scheduleDate || !scheduleTime) {
    alert('Por favor, preencha todos os campos obrigatórios!');
    return;
  }

  if (!document.getElementById('proofAttachment').files[0]) {
    alert('Por favor, anexe o comprovante de pagamento!');
    return;
  }

  const messageBody = buildEnrollmentSummaryText();

  if (method === 'whatsapp') {
    const message = encodeURIComponent(messageBody);
    window.location.href = `https://api.whatsapp.com/send?phone=244951474872&text=${message}`;
  } else if (method === 'email') {
    const subject = encodeURIComponent('S.M.S - INSCRIÇÃO COMPLETA');
    const body = encodeURIComponent(messageBody);
    window.location.href = `mailto:VendasRhSms@outlook.com?subject=${subject}&body=${body}`;
  }

  setTimeout(() => {
    hideAllSections();
  }, 2000);
}

function hideAllSections() {
  document.getElementById('agendamento').style.display = 'none';
  document.getElementById('pagamento').style.display = 'none';
  document.getElementById('formulario-section').style.display = 'none';
}

function showApplicationForm(position, method) {
  const form = document.getElementById('application-form');
  const jobPosition = document.getElementById('jobPosition');
  const messageField = document.getElementById('appMessage');
  if (!form || !jobPosition) return;
  jobPosition.value = position || '';
  form.style.display = 'block';
  if (messageField && !messageField.value.trim()) {
    messageField.value = `Estou interessado(a) na vaga de ${position}.`;
  }
  setTimeout(() => {
    form.scrollIntoView({ behavior: 'smooth' });
    const firstInput = document.getElementById('appName');
    if (firstInput) firstInput.focus();
  }, 100);
}

function hideApplicationForm() {
  const form = document.getElementById('application-form');
  if (form) {
    form.style.display = 'none';
  }
}

function saveCareerDraft() {
  const draft = {
    appName: document.getElementById('appName')?.value || '',
    appEmail: document.getElementById('appEmail')?.value || '',
    appPhone: document.getElementById('appPhone')?.value || '',
    jobPosition: document.getElementById('jobPosition')?.value || '',
    appMessage: document.getElementById('appMessage')?.value || '',
    expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000)
  };
  try {
    localStorage.setItem('sms_career_draft', JSON.stringify(draft));
  } catch (e) {
    console.warn('Unable to save career draft', e);
  }
}

function restoreCareerDraft() {
  try {
    const raw = localStorage.getItem('sms_career_draft');
    if (!raw) return;
    const draft = JSON.parse(raw);
    if (!draft || Number(draft.expiresAt || 0) < Date.now()) {
      localStorage.removeItem('sms_career_draft');
      return;
    }
    if (draft.appName) document.getElementById('appName').value = draft.appName;
    if (draft.appEmail) document.getElementById('appEmail').value = draft.appEmail;
    if (draft.appPhone) document.getElementById('appPhone').value = draft.appPhone;
    if (draft.jobPosition) document.getElementById('jobPosition').value = draft.jobPosition;
    if (draft.appMessage) document.getElementById('appMessage').value = draft.appMessage;
  } catch (e) {
    console.warn('Unable to restore career draft', e);
  }
}

function applyViaWhatsApp() {
  const name = document.getElementById('appName').value.trim();
  const email = document.getElementById('appEmail').value.trim();
  const phone = document.getElementById('appPhone').value.trim();
  const position = document.getElementById('jobPosition').value;
  const message = document.getElementById('appMessage').value.trim();
  if (!name || !email || !phone) {
    alert('Por favor, preencha nome, email e telemóvel para continuar.');
    return;
  }
  const whatsappUrl = `https://wa.me/244951474872?text=${encodeURIComponent(`Olá, desejo candidatar-me à vaga de ${position}.\n\nNome: ${name}\nEmail: ${email}\nTelemóvel: ${phone}\n\nMensagem:\n${message}`)}`;
  window.open(whatsappUrl, '_blank');
  saveCareerDraft();
}

function submitCareerForm(event) {
  event.preventDefault();
  const name = document.getElementById('appName').value.trim();
  const email = document.getElementById('appEmail').value.trim();
  const phone = document.getElementById('appPhone').value.trim();
  const position = document.getElementById('jobPosition').value;
  const message = document.getElementById('appMessage').value.trim();
  if (!name || !email || !phone) {
    alert('Por favor, preencha nome, email e telemóvel para enviar a candidatura por email.');
    return false;
  }
  const subject = encodeURIComponent(`Candidatura: ${position}`);
  const body = encodeURIComponent(`Olá,%0A%0AGostaria de candidatar-me para a vaga de **${position}**.%0A%0ANome: ${name}%0AEmail: ${email}%0ATelemóvel: ${phone}%0A%0A**Mensagem:**%0A${message}`);
  window.location.href = `mailto:VendasRhSms@outlook.com?subject=${subject}&body=${body}`;
  saveCareerDraft();
  return false;
}

let bottomTimeCounter = 0;
let bottomTimeInterval = null;

window.addEventListener('scroll', () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (!scrollToTopBtn) return;

  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }

  const isAtBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 100);

  if (isAtBottom) {
    if (bottomTimeInterval === null) {
      bottomTimeCounter = 0;
      bottomTimeInterval = setInterval(() => {
        bottomTimeCounter++;
        if (bottomTimeCounter >= 15) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          clearInterval(bottomTimeInterval);
          bottomTimeInterval = null;
          bottomTimeCounter = 0;
        }
      }, 1000);
    }
  } else {
    if (bottomTimeInterval !== null) {
      clearInterval(bottomTimeInterval);
      bottomTimeInterval = null;
      bottomTimeCounter = 0;
    }
  }
});

window.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (scrollToTopBtn) {
    scrollToTopBtn.style.display = 'none';
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const texts = [
    "🌍 Bem-vindo à S.M.S: cursos de inglês sem limites com método prático e resultados rápidos, Aqui tem tudo!.",
    "📚 Aulas presenciais e online, turmas reduzidas e apoio individual para seu progresso diário.",
    "🎓 Pagamento fácil e seguro aqui no nosso site, Todos os nossos manuais e as Propinas também estão disponíveis.",
    "📅 Horários flexíveis em Luanda e atendimento personalizado na Av. Deolinda Rodrigues, nº 475.",
    "💡 Aprenda com professores experientes também temos o apoio de nosso amigo Joy Dunkin, Veja mais abaixo,o nosso YOUTUBE.",
    "📞 Entre em contato pelo site, desça abaixo e veja nossas redes sociais inicie já sua jornada de idiomas e desenvolvimento."
  ];

  const tickerContent = document.querySelector('.ticker-content');
  if (tickerContent) {
    const tickerItems = [];

    texts.forEach(function(text, index) {
      const tickerItem = document.createElement('div');
      tickerItem.className = 'ticker-item';
      tickerItem.textContent = text;
      if (index === 0) {
        tickerItem.classList.add('active');
      }
      tickerContent.appendChild(tickerItem);
      tickerItems.push(tickerItem);
    });

    let currentIndex = 0;
    const intervalMs = 8000;

    setInterval(function() {
      tickerItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % tickerItems.length;
      tickerItems[currentIndex].classList.add('active');
    }, intervalMs);
  }
  if (typeof updateManualBuyButtons === 'function') {
    updateManualBuyButtons();
  }
});

function generateReference() {
  const rnd = Math.floor(1000 + Math.random() * 9000);
  const d = new Date();
  const date = `${d.getFullYear()}${(d.getMonth()+1).toString().padStart(2,'0')}${d.getDate().toString().padStart(2,'0')}`;
  return `SMS-INV-${date}-${rnd}`;
}

function validateIdNumber(value) {
  if (!value || !value.trim()) return { valid: false, type: null };
  const v = value.trim();
  const passportRegex = /^(?:[A-Za-z]{2}\d{7}|\d{7}[A-Za-z]{2})$/;
  const biRegex = /^\d{9}[A-Za-z]{2}\d{3}$/i;
  if (passportRegex.test(v)) return { valid: true, type: 'passport' };
  if (biRegex.test(v)) return { valid: true, type: 'bi' };
  return { valid: false, type: null };
}

function copyIBAN() {
  const iban = '0055.0000.2618.2555.1010.7';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(iban).then(() => alert('IBAN copiado para a área de transferência.')).catch(() => alert('Não foi possível copiar o IBAN automaticamente.'));
  } else {
    const tmp = document.createElement('textarea');
    tmp.value = iban;
    document.body.appendChild(tmp);
    tmp.select();
    try { document.execCommand('copy'); alert('IBAN copiado'); } catch (e) { alert('Copie manualmente: ' + iban); }
    tmp.remove();
  }
}

function generateEnrollmentInvoice() {
  const enrollment = JSON.parse(localStorage.getItem('sms_enrollment') || '{}');
  const centerEmail = 'VendasRhSms@outlook.com';
  const proofEl = document.getElementById('proofAttachment');
  const hasProof = proofEl && proofEl.files && proofEl.files.length;
  if (!hasProof) { alert('Anexe o comprovante antes de gerar a fatura.'); return; }

  if (!enrollment || !enrollment.name) {
    alert('Nenhuma inscrição encontrada. Complete o formulário antes de gerar a fatura.');
    return;
  }
  const subject = encodeURIComponent(`Fatura S.M.S - Ref ${enrollment.reference}`);
  const messageBody = buildEnrollmentSummaryText();
  const body = encodeURIComponent(
    `${messageBody}\n\n` +
    `📄 Referência: ${enrollment.reference}\n` +
    `🏦 Dados Bancários:\nBanco: Milénio Atlântico\nTitular: Estevão André Lizi\nIBAN: 0055.0000.2618.2555.1010.7\nNº Conta: 226182555.10001\n\n` +
    `Por favor, anexe o comprovativo de pagamento e envie este email para confirmação.`
  );
  const mailto = `mailto:${centerEmail}?subject=${subject}&body=${body}`;
  window.open(mailto, '_blank');
}

function openWhatsAppEnrollment() {
  const enrollment = JSON.parse(localStorage.getItem('sms_enrollment') || '{}');
  if (!enrollment || !enrollment.name) { alert('Nenhuma inscrição encontrada.'); return; }
  const text = encodeURIComponent(`Olá, efetuei o pagamento. Ref: ${enrollment.reference}. Nome: ${enrollment.name}. Curso: ${enrollment.course}. Total: Kz ${Number(enrollment.total).toLocaleString('pt-PT')}. Envio comprovativo em anexo.`);
  const phone = '244951474872';
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
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

  const centerName = 'S.M.S - ACADEMIA de Linguas & Habilidades';
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
  invoiceLines.push('=== ITEM SELECIONADO ===');
  invoiceLines.push(`Item: ${manualTitle}`);
  invoiceLines.push(`Item ID: ${manualId}`);
  invoiceLines.push(`Preço: ${manualPrice}`);
  invoiceLines.push('');
  invoiceLines.push('=== DADOS DO PEDIDO ===');
  invoiceLines.push(`Comprovante enviado: ${file.name}`);
  invoiceLines.push('');
  invoiceLines.push('=== DETALHES DE PAGAMENTO ===');
  invoiceLines.push('- Banco: Milénio Atlântico');
  invoiceLines.push('- Titular: Estevão André Lizi');
  invoiceLines.push('- Nº Conta: 226182555.10001');
  invoiceLines.push('- IBAN: 0055.0000.2618.2555.1010.7');
  invoiceLines.push('- Referência: SMS-ACADEMIA DE LÍNGUAS-2026');
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
  messageLines.push(`Item selecionado: ${manualTitle}`);
  messageLines.push(`ID do item: ${manualId}`);
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

function initSmsGalleryTabs() {
  const tabs = document.querySelectorAll('.sms-gallery-tabs .sms-tab');
  if (!tabs || !tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      setSmsGalleryPanel(target);
      if (target === 'videoDemo' && !window.videoGalleryControls) {
        initVideoGallery();
      }
    });
  });
}

function initVideoGallery() {
  const section = document.getElementById('videoDemo');
  if (!section) return;

  const slides = Array.from(section.querySelectorAll('.video-slide'));
  const videos = slides.map(s => s.querySelector('video'));
  if (!slides.length) return;

  let idx = 0;
  let soundOn = false;
  const prevBtn = section.querySelector('.video-prev');
  const nextBtn = section.querySelector('.video-next');
  const soundToggle = section.querySelector('.video-sound-toggle');
  const dotsContainer = section.querySelector('.video-dots');

  function updateDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.className = 'dot' + (i === idx ? ' active' : '');
      b.setAttribute('aria-label', 'Vídeo ' + (i + 1));
      b.addEventListener('click', () => { goTo(i); });
      dotsContainer.appendChild(b);
    });
  }

  function loadVideo(v) {
    if (!v) return;
    if (!v.src && v.dataset.src) {
      v.src = v.dataset.src;
    }
    try {
      v.load();
    } catch (err) {
      // Video may already be loading or unsupported; ignore runtime load failures here
    }
  }

  function show(i) {
    slides.forEach((s, si) => {
      s.classList.toggle('active', si === i);
      const v = videos[si];
      if (!v) return;
      if (si === i) {
        loadVideo(v);
        v.currentTime = 0;
      } else {
        try { v.pause(); } catch (e) {}
      }
    });
    updateDots();
  }

  function next() { idx = (idx + 1) % slides.length; show(idx); }
  function prev() { idx = (idx - 1 + slides.length) % slides.length; show(idx); }
  function goTo(i) { idx = i % slides.length; show(idx); }

  function updateSoundState() {
    const label = soundOn ? '🔊' : '🔇';
    if (soundToggle) {
      soundToggle.textContent = label;
      soundToggle.setAttribute('aria-label', soundOn ? 'Mudar para mudo' : 'Ativar som');
    }
    videos.forEach(v => {
      if (!v) return;
      v.muted = !soundOn;
      if (!soundOn) {
        v.volume = 0;
      } else if (v.muted === false) {
        v.volume = 1;
      }
    });
  }

  videos.forEach(v => {
    if (!v) return;
    v.addEventListener('ended', () => { setTimeout(next, 300); });
    v.addEventListener('error', () => { setTimeout(next, 1500); });
  });

  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      soundOn = !soundOn;
      updateSoundState();
    });
  }

  if (nextBtn) nextBtn.addEventListener('click', next);
  if (prevBtn) prevBtn.addEventListener('click', prev);

  updateSoundState();
  updateDots();
  show(0);

  window.videoGalleryControls = {
    show,
    pauseAll: () => videos.forEach(v => { if (v && !v.paused) { try { v.pause(); } catch (e) {} } }),
  };
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
    const centerName = 'S.M.S - ACADEMIA de Linguas & Habilidades';
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
    doc.text(`- Banco: Milénio Atlântico`, 14, 106);
    doc.text(`- Titular: Estevão André Lizi`, 14, 114);
    doc.text(`- Nº Conta: 226182555.10001`, 14, 122);
    doc.text(`- IBAN: 0055.0000.2618.2555.1010.7`, 14, 130);
    doc.text(`- Referência: SMS-ACADEMIA DE LÍNGUAS-2026`, 14, 130);
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
  function initFloatingReportModal() {
    if (!document.body) return;

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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFloatingReportModal);
  } else {
    initFloatingReportModal();
  }
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

function getDraftStorageKey(formKey) {
  return `sms_${formKey}_draft`;
}

function saveFormDraft(formKey, fieldIds) {
  const payload = {};
  fieldIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.type === 'checkbox' || el.type === 'radio') {
      payload[id] = !!el.checked;
    } else if (el.tagName === 'SELECT' || el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
      payload[id] = el.value;
    }
  });
  payload.expiresAt = Date.now() + (7 * 24 * 60 * 60 * 1000);
  try {
    localStorage.setItem(getDraftStorageKey(formKey), JSON.stringify(payload));
  } catch (e) {
    console.warn('Unable to save draft', formKey, e);
  }
}

function restoreFormDraft(formKey, fieldIds) {
  try {
    const raw = localStorage.getItem(getDraftStorageKey(formKey));
    if (!raw) return false;
    const draft = JSON.parse(raw);
    if (!draft || Number(draft.expiresAt || 0) < Date.now()) {
      localStorage.removeItem(getDraftStorageKey(formKey));
      return false;
    }
    fieldIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (el.type === 'checkbox' || el.type === 'radio') {
        el.checked = !!draft[id];
      } else if (el.tagName === 'SELECT' || el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') {
        if (draft[id] !== undefined) {
          el.value = draft[id];
        }
      }
    });
    return true;
  } catch (e) {
    console.warn('Unable to restore draft', formKey, e);
    return false;
  }
}

function clearFormDraft(formKey) {
  try {
    localStorage.removeItem(getDraftStorageKey(formKey));
  } catch (e) {
    console.warn('Unable to clear draft', formKey, e);
  }
}

// Open Propina Modal
function openProptinaModal(courseName, coursePrice) {
  closeAllInteractivePanels(['propina']);

  const modal = document.getElementById('propina-modal');
  if (!modal) return;
  
  const courseSelect = document.getElementById('propina-course');
  const amountInput = document.getElementById('propina-amount');
  const stageInput = document.getElementById('propina-stage');
  const stageLabel = document.querySelector('label[for="propina-stage"]');
  const purposeInput = document.getElementById('propina-purpose');
  
  if (courseSelect && courseName) {
    courseSelect.value = courseName;
  }
  
  if (amountInput && coursePrice) {
    amountInput.value = coursePrice;
    amountInput.dataset.defaultPrice = coursePrice;
  }
  
  if (stageInput && stageLabel) {
    const normalizedCourse = (courseName || '').toLowerCase();
    if (normalizedCourse.includes('professional english')) {
      stageLabel.textContent = 'Especialização:';
      stageInput.innerHTML = `
        <option value="">-- Selecione --</option>
        <option value="Travel English">Travel English</option>
        <option value="Technical English">Technical English</option>
        <option value="Academic English">Academic English</option>
        <option value="Business English">Business English</option>
        <option value="Specialized English">Specialized English</option>
      `;
    } else {
      stageLabel.textContent = 'Estágio:';
      stageInput.innerHTML = `
        <option value="">-- Selecione --</option>
        <option value="Estágio 1">Estágio 1</option>
        <option value="Estágio 2">Estágio 2</option>
        <option value="Estágio 3">Estágio 3</option>
      `;
      const stageMatch = (courseName || '').match(/Estágio\s*(\d+)/i);
      stageInput.value = stageMatch ? `Estágio ${stageMatch[1]}` : '';
    }
    stageInput.value = '';
    stageInput.onchange = () => {
      updatePropinaAmountForCourse(courseName, stageInput.value);
    };
  }

  if (purposeInput) {
    purposeInput.value = 'Propina / Pagamento de curso';
  }

  restoreFormDraft('propina', [
    'propina-name',
    'propina-email',
    'propina-phone',
    'propina-type',
    'propina-month',
    'propina-package',
    'propina-corporate'
  ]);

  const monthlyFields = document.getElementById('monthly-fields');
  const packageFields = document.getElementById('package-fields');
  const corporateFields = document.getElementById('corporate-fields');
  if (monthlyFields) monthlyFields.style.display = 'none';
  if (packageFields) packageFields.style.display = 'none';
  if (corporateFields) corporateFields.style.display = 'none';
  updatePaymentTypeFields();
  
  applyScrollableOverlayState(modal, modal.querySelector('.propina-modal-content'));
  modal.setAttribute('aria-hidden', 'false');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  document.body.classList.add('site-overlay-open');
  document.body.style.overflow = 'hidden';
  showBackdrop();
  // accessibility: focus first interactive element
  const first = modal.querySelector('input, select, textarea, button');
  if (first && typeof first.focus === 'function') setTimeout(() => first.focus(), 60);
}

// Close Propina Modal
function closeProptinaModal() {
  const modal = document.getElementById('propina-modal');
  if (!modal) return;
  
  const form = document.getElementById('propina-form');
  if (form) {
    const propinaFieldIds = [
      'propina-name',
      'propina-email',
      'propina-phone',
      'propina-course',
      'propina-stage',
      'propina-purpose',
      'propina-type',
      'propina-month',
      'propina-package',
      'propina-corporate',
      'propina-amount'
    ];
    saveFormDraft('propina', propinaFieldIds);
  }

  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('site-overlay-open');
  document.body.style.overflow = '';
  hideBackdrop();
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
  const courseName = document.getElementById('propina-course')?.value || '';
  const stageValue = document.getElementById('propina-stage')?.value || '';
  
  monthlyFields.style.display = 'none';
  packageFields.style.display = 'none';
  corporateFields.style.display = 'none';
  
  monthSelect.required = false;
  packageSelect.required = false;
  corporateSelect.required = false;

  const amountInput = document.getElementById('propina-amount');
  const defaultAmount = amountInput ? amountInput.dataset.defaultPrice : '';
  const computedAmount = getPropinaAmountForCourse(courseName, stageValue, defaultAmount);

  if (paymentType === 'monthly') {
    monthlyFields.style.display = 'block';
    monthSelect.required = true;
    if (amountInput) amountInput.value = computedAmount;
  } else if (paymentType === 'package') {
    packageFields.style.display = 'block';
    packageSelect.required = true;
    if (amountInput) amountInput.value = computedAmount;
  } else if (paymentType === 'corporate') {
    corporateFields.style.display = 'block';
    corporateSelect.required = true;
    if (amountInput) amountInput.value = computedAmount;
  } else {
    if (amountInput) amountInput.value = computedAmount;
  }
}

function updatePropinaAmountForCourse(courseName, stageValue) {
  const amountInput = document.getElementById('propina-amount');
  if (!amountInput) return;
  const defaultAmount = amountInput.dataset.defaultPrice || '';
  amountInput.value = getPropinaAmountForCourse(courseName, stageValue, defaultAmount);
}

function getPropinaAmountForCourse(courseName, stageValue, defaultAmount) {
  if ((courseName || '').toLowerCase().includes('professional english') && stageValue) {
    const stagePrice = getPropinaSpecializationPrice(stageValue);
    if (stagePrice) {
      return stagePrice;
    }
  }
  return defaultAmount || '';
}

function getPropinaSpecializationPrice(specialization) {
  const prices = {
    'Travel English': 20000,
    'Technical English': 40000,
    'Academic English': 60000,
    'Business English': 70000,
    'Specialized English': 180000
  };
  return prices[specialization] || null;
}

function updateCorporateAmount() {
  const corporateSelect = document.getElementById('propina-corporate');
  const amountInput = document.getElementById('propina-amount');
  const corporateAmounts = {
    'Business English': 70000,
    'Academic English': 60000,
    'Travel English': 20000,
    'Professional English': 50000,
    'Technical English': 40000,
    'Specialized English': 180000,
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
  
  const name = document.getElementById('propina-name').value.trim();
  const email = document.getElementById('propina-email').value.trim();
  const phone = document.getElementById('propina-phone').value.trim();
  const course = document.getElementById('propina-course').value.trim();
  const stage = document.getElementById('propina-stage').value.trim();
  const purpose = document.getElementById('propina-purpose').value.trim();
  const paymentType = document.getElementById('propina-type').value;
  const monthRef = document.getElementById('propina-month').value || '';
  const amount = document.getElementById('propina-amount').value.trim();
  const proofFile = document.getElementById('propina-proof').files[0];
  
  if (!name || !email || !phone || !course || !stage || !purpose || !paymentType || !amount || !proofFile) {
    alert('Por favor, preencha todos os campos obrigatórios e anexe o comprovante.');
    return;
  }
  
  if (paymentType === 'monthly' && !monthRef) {
    alert('Por favor, selecione a referência da mensalidade.');
    return;
  }
  
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
  
  const message = `
Olá! Envie o seu comprovante manualmente para acelerar a sua validação.

*DADOS DO CLIENTE:*
Nome: ${name}
E-mail: ${email}
Telefone: ${phone}

*OBJETIVO DO PAGAMENTO:*
Curso: ${course}
Estágio: ${stage}
Objetivo: ${purpose}

*TIPO DE PAGAMENTO:*
${paymentTypeDisplay}

*MONTANTE PAGO:*
Kz ${parseFloat(amount).toLocaleString('pt-AO')}

*COMPROVANTE:*
Arquivo: ${proofFile.name}

Obs: Por favor, envie o seu comprovante manualmente via WhatsApp após abrir a conversa para acelerar a validação.

Aguardo a confirmação do pagamento.
  `.trim();
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappNumber = '244951474872';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  const subject = encodeURIComponent(`Pagamento S.M.S - ${course}`);
  const mailtoBody = encodeURIComponent(`Olá,\n\nSegue o pedido de confirmação de pagamento.\n\nNome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nCurso: ${course}\nEstágio: ${stage}\nObjetivo: ${purpose}\nTipo de pagamento: ${paymentTypeDisplay}\nMontante: Kz ${parseFloat(amount).toLocaleString('pt-AO')}\nComprovante: ${proofFile.name}`);
  const mailtoUrl = `mailto:VendasRhSms@outlook.com?subject=${subject}&body=${mailtoBody}`;
  
  clearFormDraft('propina');
  closeProptinaModal();
  
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
    window.location.href = mailtoUrl;
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

  initSmsGalleryTabs();
  initVideoGallery();

  const enrollmentSection = document.getElementById('agendamento');
  if (enrollmentSection) {
    enrollmentSection.hidden = true;
    enrollmentSection.classList.remove('show');
    enrollmentSection.style.display = 'none';
    enrollmentSection.setAttribute('aria-hidden', 'true');
  }

  const propinaForm = document.getElementById('propina-form');
  if (propinaForm) {
    const propinaFieldIds = [
      'propina-name',
      'propina-email',
      'propina-phone',
      'propina-course',
      'propina-stage',
      'propina-purpose',
      'propina-type',
      'propina-month',
      'propina-package',
      'propina-corporate',
      'propina-amount'
    ];
    propinaFieldIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      ['input', 'change'].forEach((eventName) => {
        el.addEventListener(eventName, () => saveFormDraft('propina', propinaFieldIds));
      });
    });
  }
});

// ========== MANUAL PASSWORD AND DOWNLOAD LOGIC ==========
const manualCategoryNames = {
  'Standard': ['Standard', 'Standard English'],
  'Foundation': ['Foundation', 'Foundation English'],
  'Intermediate': ['Intermediate', 'Intermediate English'],
  'Fluency Acceleration': ['Fluency Acceleration', 'Fluency', 'Aceleração da Fluência'],
  'Joy': ['Joy', 'Kids', 'Programa Kids'],
  'Autodidata': ['Autodidata', 'Self-Study', 'Pacote Autodidata']
};

const manualFilesMap = {
  'Standard-Standard Vocabulary': 'documentos/Standard_Vocabulary.pdf',
  'Standard-Standard Grammar': 'documentos/Standard_Grammar.pdf',
  'Standard-Standard Dialogue': 'documentos/Standard_Dialogue.pdf',
  'Standard-Standard Practicing': 'documentos/Standard_Practicing.pdf',
  'Standard-Standard 1-Standard Vocabulary': 'documentos/Standard_1_Vocabulary.pdf',
  'Standard-Standard 1-Standard Grammar': 'documentos/Standard_1_Grammar.pdf',
  'Standard-Standard 1-Standard Dialogue': 'documentos/Standard_1_Dialogue.pdf',
  'Standard-Standard 1-Standard Practicing': 'documentos/Standard_1_Practicing.pdf',
  'Standard-Standard 2-Standard Vocabulary': 'documentos/Standard_2_Vocabulary.pdf',
  'Standard-Standard 2-Standard Grammar': 'documentos/Standard_2_Grammar.pdf',
  'Standard-Standard 2-Standard Dialogue': 'documentos/Standard_2_Dialogue.pdf',
  'Standard-Standard 2-Standard Practicing': 'documentos/Standard_2_Practicing.pdf',
  'Standard-Standard 3-Standard Vocabulary': 'documentos/Standard_3_Vocabulary.pdf',
  'Standard-Standard 3-Standard Grammar': 'documentos/Standard_3_Grammar.pdf',
  'Standard-Standard 3-Standard Dialogue': 'documentos/Standard_3_Dialogue.pdf',
  'Standard-Standard 3-Standard Practicing': 'documentos/Standard_3_Practicing.pdf',
  'Foundation-Foundation Vocabulary': 'documentos/Foundation_Vocabulary.pdf',
  'Foundation-Foundation Grammar': 'documentos/Foundation_Grammar.pdf',
  'Foundation-Foundation Dialogue': 'documentos/Foundation_Dialogue.pdf',
  'Foundation-Foundation Practicing': 'documentos/Foundation_Practicing.pdf',
  'Intermediate-Intermediate Vocabulary': 'documentos/Intermediate_Vocabulary.pdf',
  'Intermediate-Intermediate Grammar': 'documentos/Intermediate_Grammar.pdf',
  'Intermediate-Intermediate Dialogue': 'documentos/Intermediate_Dialogue.pdf',
  'Intermediate-Intermediate Practicing': 'documentos/Intermediate_Practicing.pdf',
  'Fluency Acceleration-Fluency Acceleration Vocabulary': 'documentos/Fluency_Acceleration_Vocabulary.pdf',
  'Fluency Acceleration-Fluency Acceleration Grammar': 'documentos/Fluency_Acceleration_Grammar.pdf',
  'Fluency Acceleration-Fluency Acceleration Dialogue': 'documentos/Fluency_Acceleration_Dialogue.pdf',
  'Fluency Acceleration-Fluency Acceleration Practicing': 'documentos/Fluency_Acceleration_Practicing.pdf',
  'Joy-Joy Vocabulary': 'documentos/Joy_Vocabulary.pdf',
  'Joy-Joy Grammar': 'documentos/Joy_Grammar.pdf',
  'Joy-Joy Dialogue': 'documentos/Joy_Dialogue.pdf',
  'Joy-Joy Practicing': 'documentos/Joy_Practicing.pdf',
  'Autodidata-Autodidata Vocabulary': 'documentos/Autodidata_Vocabulary.pdf',
  'Autodidata-Autodidata Grammar': 'documentos/Autodidata_Grammar.pdf',
  'Autodidata-Autodidata Dialogue': 'documentos/Autodidata_Dialogue.pdf',
  'Autodidata-Autodidata Practicing': 'documentos/Autodidata_Practicing.pdf'
};

const manualOptionsByCategory = {
  'Standard': ['Standard Vocabulary', 'Standard Grammar', 'Standard Dialogue', 'Standard Practicing'],
  'Foundation': ['Foundation Vocabulary', 'Foundation Grammar', 'Foundation Dialogue', 'Foundation Practicing'],
  'Intermediate': ['Intermediate Vocabulary', 'Intermediate Grammar', 'Intermediate Dialogue', 'Intermediate Practicing'],
  'Fluency Acceleration': ['Fluency Acceleration Vocabulary', 'Fluency Acceleration Grammar', 'Fluency Acceleration Dialogue', 'Fluency Acceleration Practicing'],
  'Joy': ['Joy Vocabulary', 'Joy Grammar', 'Joy Dialogue', 'Joy Practicing'],
  'Autodidata': ['Autodidata Vocabulary', 'Autodidata Grammar', 'Autodidata Dialogue', 'Autodidata Practicing']
};

const STUDY_FORM_ENDPOINT = 'https://formspree.io/f/mgawakbv';

let currentPasswordModal = {
  category: '',
  manualType: '',
  generatedCode: '',
  standardStage: '',
  selectedManual: ''
};

function getCurrentStandardStage() {
  const stageSelect = document.getElementById('standardStageSelect');
  const stage = (stageSelect && stageSelect.value ? stageSelect.value.trim() : '').replace(/\s+/g, ' ');
  return stage ? stage.replace(/^Standard\s+Stage\s+/i, 'Standard ').trim() : '';
}

function getPasswordPrefixForCurrentCategory() {
  if (currentPasswordModal.category === 'Standard') {
    const stage = getCurrentStandardStage();
    return stage || 'Standard';
  }
  return currentPasswordModal.category;
}

function getAllowedPasswordPrefixes() {
  if (currentPasswordModal.category === 'Standard') {
    const stage = getCurrentStandardStage();
    const prefixes = [];

    if (stage) {
      prefixes.push(stage);
      prefixes.push(stage.replace(/^Standard\s+/i, 'Standard'));
      prefixes.push(stage.replace(/^Standard\s+/i, 'Standard '));
      prefixes.push(stage.replace(/\s+/g, ''));
    }

    prefixes.push('Standard');
    prefixes.push('Standard English');
    return prefixes;
  }

  return manualCategoryNames[currentPasswordModal.category] || [];
}

function populateManualSelection(category) {
  const manualSelect = document.getElementById('manualSelectionSelect');
  if (!manualSelect) return;

  manualSelect.innerHTML = '<option value="">Selecione o manual...</option>';
  const options = manualOptionsByCategory[category] || manualOptionsByCategory.Standard;
  options.forEach((optionLabel) => {
    const option = document.createElement('option');
    option.value = optionLabel;
    option.textContent = optionLabel;
    manualSelect.appendChild(option);
  });

  currentPasswordModal.selectedManual = '';
  manualSelect.value = '';
}

function openPasswordModal(category, manualType) {
  currentPasswordModal.category = category;
  currentPasswordModal.manualType = manualType;
  currentPasswordModal.generatedCode = '';
  currentPasswordModal.standardStage = '';
  currentPasswordModal.selectedManual = '';
  
  const modal = document.getElementById('passwordModal');
  const message = document.getElementById('passwordMessage');
  const stageSelection = document.getElementById('standardStageSelection');
  const stageSelect = document.getElementById('standardStageSelect');
  const manualSelect = document.getElementById('manualSelectionSelect');
  const nameInput = document.getElementById('studyLeadName');
  const classInput = document.getElementById('studyLeadClass');
  const phoneInput = document.getElementById('studyLeadPhone');
  const locationInput = document.getElementById('studyLeadLocation');
  
  if (!modal) return;
  
  if (message) {
    message.style.display = 'none';
    message.textContent = '';
  }

  if (nameInput) nameInput.value = '';
  if (classInput) classInput.value = '';
  if (phoneInput) phoneInput.value = '';
  if (locationInput) locationInput.value = '';

  if (stageSelection && stageSelect) {
    if (category === 'Standard') {
      stageSelection.style.display = 'block';
      stageSelect.value = '';
    } else {
      stageSelection.style.display = 'none';
      stageSelect.value = '';
    }
  }

  if (manualSelect) {
    populateManualSelection(category);
  }
  
  modal.classList.add('show');
  document.body.classList.add('site-overlay-open');
  document.body.style.overflow = 'hidden';
  
  setTimeout(() => {
    if (nameInput) {
      nameInput.focus();
    }
  }, 100);
}

function closePasswordModal() {
  const modal = document.getElementById('passwordModal');
  if (!modal) return;
  
  modal.classList.remove('show');
  document.body.classList.remove('site-overlay-open');
  document.body.style.overflow = '';
  
  currentPasswordModal = { category: '', manualType: '', generatedCode: '', standardStage: '', selectedManual: '' };
}

function validatePasswordInRealTime(inputValue) {
  const input = document.getElementById('passwordInput');
  const message = document.getElementById('passwordMessage');
  const generatedInfo = document.getElementById('generatedPasswordInfo');
  
  if (!inputValue.trim()) {
    message.style.display = 'none';
    generatedInfo.style.display = 'none';
    currentPasswordModal.generatedCode = '';
    return;
  }

  const stageSelect = document.getElementById('standardStageSelect');
  const manualSelect = document.getElementById('manualSelectionSelect');
  if (currentPasswordModal.category === 'Standard') {
    currentPasswordModal.standardStage = stageSelect && stageSelect.value ? stageSelect.value.trim() : '';

    if (!currentPasswordModal.standardStage) {
      message.classList.remove('success');
      message.classList.add('error');
      message.textContent = '❌ Selecione a etapa do Standard English antes de gerar o código.';
      message.style.display = 'block';
      generatedInfo.style.display = 'none';
      currentPasswordModal.generatedCode = '';
      return;
    }
  }

  currentPasswordModal.selectedManual = manualSelect && manualSelect.value ? manualSelect.value.trim() : '';
  if (!currentPasswordModal.selectedManual) {
    message.classList.remove('success');
    message.classList.add('error');
    message.textContent = '❌ Selecione o tipo de manual antes de gerar o código.';
    message.style.display = 'block';
    generatedInfo.style.display = 'none';
    currentPasswordModal.generatedCode = '';
    return;
  }
  
  const categoryAliases = getAllowedPasswordPrefixes();
  let matchFound = false;
  
  for (const alias of categoryAliases) {
    if (inputValue.toLowerCase().startsWith(alias.toLowerCase())) {
      matchFound = true;
      break;
    }
  }
  
  if (matchFound) {
    const numbersMatch = inputValue.match(/\d/g);
    const numbersTyped = numbersMatch ? numbersMatch.join('') : '';
    
    let fourDigitCode = '';
    if (numbersTyped.length === 0) {
      fourDigitCode = Math.floor(1000 + Math.random() * 9000).toString();
    } else if (numbersTyped.length <= 4) {
      const remainingDigits = 4 - numbersTyped.length;
      const randomPart = Math.floor(Math.random() * Math.pow(10, remainingDigits)).toString().padStart(remainingDigits, '0');
      fourDigitCode = (numbersTyped + randomPart).substring(0, 4);
    } else {
      fourDigitCode = numbersTyped.substring(0, 4);
    }
    
    const passwordPrefix = getPasswordPrefixForCurrentCategory();
    const fullPassword = `${passwordPrefix}${fourDigitCode}`;
    currentPasswordModal.generatedCode = fullPassword;
    
    message.classList.remove('error');
    message.classList.add('success');
    message.textContent = `✅ Categoria reconhecida! Código gerado automaticamente.`;
    message.style.display = 'block';
    
    generatedInfo.style.display = 'block';
    const codeElement = generatedInfo.querySelector('p');
    if (codeElement) {
      codeElement.textContent = fullPassword;
    }
    
    input.value = fullPassword;
  } else {
    message.classList.remove('success');
    message.classList.add('error');
    message.textContent = `❌ Categoria inválida. Deve começar com: "${currentPasswordModal.category}"`;
    message.style.display = 'block';
    generatedInfo.style.display = 'none';
    currentPasswordModal.generatedCode = '';
  }
}

async function verifyAndDownloadManual() {
  console.log('=== Botão Estudar clicado ===');
  console.log('Categoria:', currentPasswordModal.category);
  console.log('Manual:', currentPasswordModal.manualType);
  
  const manualSelect = document.getElementById('manualSelectionSelect');
  if (!manualSelect || !manualSelect.value) {
    alert('❌ Por favor, selecione um tipo de manual primeiro.');
    return;
  }
  
  currentPasswordModal.selectedManual = manualSelect.value.trim();
  
  if (currentPasswordModal.category === 'Standard') {
    const stageSelect = document.getElementById('standardStageSelect');
    if (!stageSelect || !stageSelect.value) {
      alert('❌ Por favor, selecione a etapa do Standard English.');
      return;
    }
    currentPasswordModal.standardStage = stageSelect.value.trim();
  }
  
  const nameInput = document.getElementById('studyLeadName');
  const classInput = document.getElementById('studyLeadClass');
  const phoneInput = document.getElementById('studyLeadPhone');
  const locationInput = document.getElementById('studyLeadLocation');
  
  const name = nameInput ? nameInput.value.trim() : '';
  const className = classInput ? classInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const location = locationInput ? locationInput.value.trim() : '';
  
  if (!name || !className || !phone || !location) {
    alert('❌ Por favor, preencha Nome, Curso, Número e Localização antes de continuar.');
    return;
  }
  
  // ===== VERIFICAÇÃO DE ACESSO (SISTEMA DE BLOQUEIO) =====
  const documentKey = getDocumentKey(
    currentPasswordModal.category, 
    currentPasswordModal.selectedManual,
    currentPasswordModal.standardStage
  );
  
  const accessCheck = checkAndManageStudyAccess(name, documentKey);
  
  if (accessCheck.blocked) {
    alert(accessCheck.message);
    return;
  }
  // ===== FIM VERIFICAÇÃO DE ACESSO =====
  
  try {
    await sendStudyLeadToFormspree({
      name,
      className,
      phone,
      location,
      category: currentPasswordModal.category,
      manual: currentPasswordModal.selectedManual,
      sessionsUsed: accessCheck.sessionsUsed,
      sessionsRemaining: accessCheck.sessionsRemaining
    });
  } catch (error) {
    console.warn('Não foi possível enviar os dados para o Formspree:', error);
  }
  
  console.log('Validações OK. Abrindo manual:', currentPasswordModal.selectedManual);
  openManualInViewer(currentPasswordModal.category, currentPasswordModal.manualType);
}

async function sendStudyLeadToFormspree({ name, className, phone, location, category, manual, sessionsUsed, sessionsRemaining }) {
  const timestamp = new Date().toLocaleString('pt-BR');
  const formData = new FormData();
  
  // Formspree fields
  formData.append('_subject', `Novo pedido de estudo - ${category} / ${manual}`);
  formData.append('_to', 'saraswatimaaschool@gmail.com'); // Garantir que vai para o email correto
  formData.append('Nome', name);
  formData.append('Curso', className);
  formData.append('Número', phone);
  formData.append('Localização', location);
  formData.append('Categoria', category);
  formData.append('Manual', manual);
  formData.append('Data e Hora', timestamp);
  formData.append('Tipo de Solicitação', 'Estudar Manual');
  
  // Adicionar informações de sessões de estudo
  formData.append('Sessões Usadas', `${sessionsUsed}/15`);
  formData.append('Sessões Restantes', sessionsRemaining);
  if (sessionsUsed === 15) {
    formData.append('Status do Acesso', '🚫 PERMANENTEMENTE BLOQUEADO - Limite de 15 sessões atingido');
  } else {
    formData.append('Status do Acesso', `✅ Permitido - ${sessionsRemaining} sessão(ns) restante(s)`);
  }

  console.log('📤 Enviando dados de estudo para Formspree:', {
    endpoint: STUDY_FORM_ENDPOINT,
    nome: name,
    curso: className,
    número: phone,
    localização: location,
    categoria: category,
    manual: manual,
    dataHora: timestamp,
    sessõesUsadas: sessionsUsed,
    sessõesRestantes: sessionsRemaining
  });

  try {
    const response = await fetch(STUDY_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData,
      keepalive: true
    });

    console.log('📡 Resposta do Formspree:', response.status, response.statusText);

    if (!response.ok) {
      console.error('❌ Erro ao enviar para Formspree:', response.status);
      const errorText = await response.text();
      console.error('❌ Detalhes do erro:', errorText);
      throw new Error(`Formspree respondeu com status ${response.status}`);
    }

    console.log('✅ Dados de estudo enviados com sucesso para Formspree');
    return response;
  } catch (error) {
    console.error('❌ Erro na requisição do Formspree:', error);
    throw error;
  }
}

function openManualInViewer(category, selectedManualName) {
  const resolvedManualName = currentPasswordModal.selectedManual || selectedManualName || currentPasswordModal.manualType;
  let fileKey = `${category}-${resolvedManualName}`;

  if (category === 'Standard' && currentPasswordModal.standardStage) {
    const normalizedStage = currentPasswordModal.standardStage.replace(/^Standard\s+Stage\s+/i, 'Standard ').trim();
    fileKey = `${category}-${normalizedStage}-${resolvedManualName}`;
  }

  let filePath = manualFilesMap[fileKey];
  
  if (!filePath) {
    const normalizedSelection = resolvedManualName.replace(/\s+/g, '');
    for (const [key, path] of Object.entries(manualFilesMap)) {
      if (key.startsWith(category) && key.includes(normalizedSelection)) {
        filePath = path;
        break;
      }
    }
  }
  
  if (!filePath) {
    alert('Manual não disponível no momento. Arquivo configurado: ' + fileKey);
    console.warn(`No file mapping for: ${fileKey}`);
    return;
  }

  const pdfUrl = window.location.protocol === 'http:' || window.location.protocol === 'https:'
    ? new URL(filePath, window.location.origin).toString()
    : `http://127.0.0.1:8000/${filePath}`;
  
  console.log('Abrindo PDF:', pdfUrl);
  showPdfViewerOverlay(pdfUrl, resolvedManualName);
  closePasswordModal();
}

function showPdfViewerOverlay(pdfUrl, manualName) {
  // Criar overlay
  const overlay = document.createElement('div');
  overlay.id = 'pdf-viewer-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 10000;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `;
  
  // Criar toolbar
  const toolbar = document.createElement('div');
  toolbar.style.cssText = `
    background: #222;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    flex-shrink: 0;
  `;
  toolbar.innerHTML = `
    <span>${manualName || 'Manual'}</span>
    <button onclick="document.getElementById('pdf-viewer-overlay').remove()" style="
      background: #d32f2f;
      color: white;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 4px;
      font-weight: bold;
    ">Fechar (ESC)</button>
  `;
  
  // Criar container do iframe
  const iframeContainer = document.createElement('div');
  iframeContainer.style.cssText = `
    flex: 1;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `;
  
  // Criar iframe
  const iframe = document.createElement('iframe');
  iframe.src = pdfUrl;
  iframe.style.cssText = `
    width: 100% !important;
    height: 100% !important;
    border: none;
    margin: 0;
    padding: 0;
    display: block;
  `;
  iframe.allow = 'fullscreen';
  
  // Bloquear cópia e impressão
  iframe.onload = function() {
    try {
      const doc = iframe.contentWindow.document;
      doc.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'x' || e.key === 'p' || e.key === 's')) {
          e.preventDefault();
        }
        if (e.key === 'PrintScreen') {
          e.preventDefault();
        }
      });
      doc.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });
    } catch(e) {
      // Cross-origin security error expected
    }
  };
  
  // Fechar com ESC
  const closeListener = function(e) {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', closeListener);
    }
  };
  document.addEventListener('keydown', closeListener);
  
  iframeContainer.appendChild(iframe);
  overlay.appendChild(toolbar);
  overlay.appendChild(iframeContainer);
  document.body.appendChild(overlay);
  
  // ========== PROTEÇÕES CONTRA SCREENSHOT, CÓPIA E IMPRESSÃO ==========
  
  // Armazenar função de proteção para poder remover depois
  const protectPdfViewer = function(e) {
    // Bloquear PrintScreen
    if (e.key === 'PrintScreen') {
      e.preventDefault();
      console.warn('⛔ Screenshot bloqueado!');
      return false;
    }
    
    // Bloquear Ctrl+C (copiar)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'c') {
      e.preventDefault();
      console.warn('⛔ Cópia bloqueada!');
      return false;
    }
    
    // Bloquear Ctrl+X (cortar)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'x') {
      e.preventDefault();
      console.warn('⛔ Cortar bloqueado!');
      return false;
    }
    
    // Bloquear Ctrl+P (imprimir)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
      e.preventDefault();
      console.warn('⛔ Impressão bloqueada!');
      return false;
    }
    
    // Bloquear Ctrl+S (salvar)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
      e.preventDefault();
      console.warn('⛔ Salvamento bloqueado!');
      return false;
    }
  };
  
  // Bloquear right-click
  const blockContextMenu = function(e) {
    e.preventDefault();
    console.warn('⛔ Menu de contexto bloqueado!');
    return false;
  };
  
  // Bloquear copy e paste
  const blockCopyPaste = function(e) {
    e.preventDefault();
    console.warn('⛔ Cópia/Paste bloqueado!');
    return false;
  };
  
  // Aplicar proteções
  document.addEventListener('keydown', protectPdfViewer, true);
  document.addEventListener('contextmenu', blockContextMenu, true);
  document.addEventListener('copy', blockCopyPaste, true);
  document.addEventListener('paste', blockCopyPaste, true);
  document.addEventListener('cut', blockCopyPaste, true);
  overlay.addEventListener('contextmenu', blockContextMenu, true);
  overlay.addEventListener('copy', blockCopyPaste, true);
  overlay.addEventListener('paste', blockCopyPaste, true);
  overlay.addEventListener('cut', blockCopyPaste, true);
  
  // Desabilitar print media query
  if (!document.getElementById('no-print-style')) {
    const noPrintStyle = document.createElement('style');
    noPrintStyle.id = 'no-print-style';
    noPrintStyle.innerHTML = `
      @media print {
        * { display: none !important; }
        body { display: none !important; }
      }
      @page {
        display: none !important;
      }
    `;
    document.head.appendChild(noPrintStyle);
  }
  
  // Remover proteções ao fechar overlay
  const originalRemove = overlay.remove.bind(overlay);
  overlay.remove = function() {
    document.removeEventListener('keydown', protectPdfViewer, true);
    document.removeEventListener('contextmenu', blockContextMenu, true);
    document.removeEventListener('copy', blockCopyPaste, true);
    document.removeEventListener('paste', blockCopyPaste, true);
    document.removeEventListener('cut', blockCopyPaste, true);
    originalRemove();
  };
}


// Attach to password input for real-time validation
document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('passwordInput');
  if (passwordInput) {
    passwordInput.addEventListener('input', function() {
      validatePasswordInRealTime(this.value);
    });
  }
});

// Attach window functions for global access
window.openPasswordModal = openPasswordModal;
window.closePasswordModal = closePasswordModal;
window.verifyAndDownloadManual = verifyAndDownloadManual;
window.openManualInViewer = openManualInViewer;



