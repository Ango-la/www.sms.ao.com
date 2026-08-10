<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="./">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="S.M.S - Academia de Linguas & Habilidades">
    <meta name="description" content="S.M.S - Academia de Linguas & Habilidades - Aprenda idiomas e desenvolva novas competências. Agende suas aulas hoje!">
    <meta name="keywords" content="Academia de Linguas, Idiomas, Habilidades, Cursos, Aprendizado, Inglês, Francês, Alemão, Espanhol">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="./">
    <meta property="og:url" content="./">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Saraswati MAA Mind School - Aprenda com Profissionais Experientes">
    <meta property="og:description" content="S.M.S - Academia de Linguas & Habilidades - Aprenda idiomas e desenvolva novas competências. Agende suas aulas hoje!">
    <meta property="og:image" content="Image/favicon.jpg">
    <!-- Título da página, utilizado em navegadores, pesquisas e resultados de mecanismos de busca -->
    <title>Saraswati MAA Mind School - Aprenda com Profissionais Experientes</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="Image/favicon.jpg">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="access-control.js?v=20260810-1"></script>
    <script src="Script.js?v=20260809-2"></script>
    <script src="purchase-flow-v2.js?v=20260809-2"></script>
    <script src="https://unpkg.com/@formspree/ajax@1" defer></script>
<script>
        function hideGoogleTranslateUI() {
            const container = document.getElementById('google_translate_element');
            if (container) {
                container.setAttribute('style', 'position:fixed !important; left:-9999px !important; top:-9999px !important; width:1px !important; height:1px !important; overflow:hidden !important; opacity:0 !important; display:none !important;');
            }
            document.querySelectorAll('.goog-te-banner-frame, .goog-te-menu-frame, .goog-te-ftab, .goog-te-gadget, .goog-te-gadget-simple, .goog-te-spinner-pos, .goog-te-balloon-frame').forEach((el) => {
                if (el) {
                    el.setAttribute('style', 'display:none !important; visibility:hidden !important; position:fixed !important; left:-9999px !important; top:-9999px !important; width:1px !important; height:1px !important;');
                }
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
            const button = container ? container.querySelector('.lang-globe-btn') : null;
            if (!container || !picker || !button) return;

            if (container.classList.contains('open')) {
                closeLanguagePicker();
                return;
            }

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

        document.addEventListener('click', function (event) {
            const container = document.querySelector('.simple-google-translate');
            if (!container) return;
            if (!container.contains(event.target)) {
                container.classList.remove('open');
            }
        });

        window.addEventListener('resize', closeLanguagePicker);
        window.addEventListener('load', hideGoogleTranslateUI);
        setTimeout(hideGoogleTranslateUI, 300);

        window.changeLanguage = changeLanguage;
        window.toggleLanguagePicker = toggleLanguagePicker;
        window.closeLanguagePicker = closeLanguagePicker;
    </script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</head>
<body>
    <div id="google_translate_element" class="google-translate-host" aria-hidden="true"></div>
    <div id="infoBackdrop" class="site-overlay" aria-hidden="true" onclick="closeOpenPanel()"></div>
    <div class="ticker-overlay" aria-label="Barra de navegação superior">
        <div class="ticker-wrapper">
            <div class="ticker-actions">
                <a href="#cursos" class="ticker-link" onclick="event.preventDefault(); openCourseCatalog();">Cursos</a>
                <a href="#sms-gallery" class="ticker-link" onclick="event.preventDefault(); openSmsGallery();">Galeria</a>
                <a href="#contato" class="ticker-link" onclick="event.preventDefault(); scrollToContacts();">Contato</a>
                <a href="Privacidade & termos.html" class="ticker-link" onclick="event.preventDefault(); window.open('Privacidade & termos.html', '_blank');">Termos</a>
                <div class="simple-google-translate" aria-label="Google Translate">
                    <button type="button" class="lang-globe-btn" onclick="toggleLanguagePicker(event)" aria-label="Traduzir para outro idioma">🌐</button>
                    <div class="lang-picker" role="menu" aria-label="Escolha o idioma">
                        <button type="button" onclick="changeLanguage('en'); closeLanguagePicker();" role="menuitem">English</button>
                        <button type="button" onclick="changeLanguage('fr'); closeLanguagePicker();" role="menuitem">Français</button>
                        <button type="button" onclick="changeLanguage('es'); closeLanguagePicker();" role="menuitem">Español</button>
                    </div>
                </div>
                <button id="infoToggleAllBtn" class="buy-button info-toggle-button" type="button" onclick="toggleAllInfoSections()">Ver informações</button>
                <button id="buyMenuToggleBtn" type="button" class="ticker-link" onclick="toggleBuyMenu()">Manuais</button>
                  <a href="FAQ.html" class="ticker-link">FAQ</a>
            </div>
        </div>
    </div>
    <!-- HEADER COM MENU -->
    <header>
        <div class="header-container">
            <script>
                (function(){
                    window.hideBuyMenu = function(){
                        var menu = document.getElementById('buy-menu');
                        var button = document.getElementById('buyMenuToggleBtn');
                        if(!menu) return;
                        menu.classList.remove('show');
                        menu.style.display = 'none';
                        menu.setAttribute('aria-hidden','true');
                        if (button) button.textContent = 'Comprar';
                    }

                    document.addEventListener('click', function(e){
                        var menu = document.getElementById('buy-menu');
                        if(!menu) return;
                        if (menu.classList.contains('show')){
                            if (!menu.contains(e.target) && !e.target.closest('#buyMenuToggleBtn')){
                                hideBuyMenu();
                            }
                        }
                    });
                })();
            </script>
            <a href="#sms-gallery" class="logo" onclick="event.preventDefault(); openSmsGallery();"><img src="Image/favicon2.jpg" alt="S.M.S - Academia de Linguas & Habilidades" class="logo-official"></a>
            <h1 class="store-name">S.M.S - Academia de Linguas & Habilidades</h1>
            <div id="buy-menu" class="buy-menu" aria-hidden="true">
                    <div class="buy-menu-header">
                        <h2>Manuais por Categoria</h2>
                        <button type="button" class="buy-menu-close site-close-button" onclick="hideBuyMenu()" aria-label="Fechar menu">×</button>
                    </div>
                    <div class="buy-menu-content">
                        <!-- STANDARD ENGLISH -->
                        <div class="manual-category-unified">
                            <img src="ManuaisFT/standard cover.png" alt="Standard English" class="category-image">
                            <div class="category-content">
                                <h3 class="manual-category-title">Standard English</h3>
                                <p class="category-description">Programa completo com os fundamentos essenciais do inglês. Este pacote inclui:</p>
                                <ul class="manual-list">
                                    <li>Standard Vocabulary</li>
                                    <li>Standard Grammar</li>
                                    <li>Standard Dialogue</li>
                                    <li>Standard Practicing</li>
                                </ul>
                                <p class="category-price">💰Preço:<strong>5.000 Kz</strong></p>
                                <div class="category-buttons">
                                    <button type="button" onclick="openPurchaseFormWithoutPassword('Standard English - Pacote Completo', '1', '5.000 Kz')">Comprar</button>
                                    <button type="button" class="get-now-btn" onclick="openPasswordModal('Standard', 'Study')">Estudar</button>
                                </div>
                            </div>
                        </div>
                        <!-- FOUNDATION ENGLISH -->
                        <div class="manual-category-unified">
                            <img src="ManuaisFT/Foundation cover.png" alt="Foundation English" class="category-image">
                            <div class="category-content">
                                <h3 class="manual-category-title">Foundation English</h3>
                                <p class="category-description">Nível intermediário com conceitos avançados de linguagem. Este pacote inclui:</p>
                                <ul class="manual-list">
                                    <li>Foundation Vocabulary</li>
                                    <li>Foundation Grammar</li>
                                    <li>Foundation Dialogue</li>
                                    <li>Foundation Practicing</li>
                                </ul>
                                <p class="category-price">💰 Preço: <strong>5.000 Kz</strong></p>
                                <div class="category-buttons">
                                    <button type="button" onclick="openPurchaseFormWithoutPassword('Foundation English - Pacote Completo', '2', '5.000 Kz')">Comprar</button>
                                    <button type="button" class="get-now-btn" onclick="openPasswordModal('Foundation', 'Study')">Estudar</button>
                                </div>
                            </div>
                        </div>

                        <!-- INTERMEDIATE ENGLISH -->
                        <div class="manual-category-unified">
                            <img src="ManuaisFT/Verbs Regular and Irregular.jpg" alt="Intermediate English" class="category-image">
                            <div class="category-content">
                                <h3 class="manual-category-title">Intermediate English</h3>
                                <p class="category-description">Aprofundamento da linguagem com foco em fluência e expressão. Este pacote inclui:</p>
                                <ul class="manual-list">
                                    <li>Intermediate Vocabulary</li>
                                    <li>Intermediate Grammar</li>
                                    <li>Intermediate Dialogue</li>
                                    <li>Intermediate Practicing</li>
                                </ul>
                                <p class="category-price">💰 Preço: <strong>5.000 Kz</strong></p>
                                <div class="category-buttons">
                                    <button type="button" onclick="openPurchaseFormWithoutPassword('Intermediate English - Pacote Completo', '3', '5.000 Kz')">Comprar</button>
                                    <button type="button" class="get-now-btn" onclick="openPasswordModal('Intermediate', 'Study')">Estudar</button>
                                </div>
                            </div>
                        </div>

                        <!-- FLUENCY ACCELERATION -->
                        <div class="manual-category-unified">
                            <img src="ManuaisFT/Fluency.jpg" alt="Fluency Acceleration" class="category-image">
                            <div class="category-content">
                                <h3 class="manual-category-title">Aceleração da Fluência</h3>
                                <p class="category-description">Método revolucionário para falar inglês com naturalidade e confiança. Este pacote inclui:</p>
                                <ul class="manual-list">
                                    <li>Fluency Acceleration Vocabulary</li>
                                    <li>Fluency Acceleration Grammar</li>
                                    <li>Fluency Acceleration Dialogue</li>
                                    <li>Fluency Acceleration Practicing</li>
                                </ul>
                                <p class="category-price">💰 Preço: <strong>5.000 Kz</strong></p>
                                <div class="category-buttons">
                                    <button type="button" onclick="openPurchaseFormWithoutPassword('Aceleração da Fluência - Pacote Completo', '4', '5.000 Kz')">Comprar</button>
                                    <button type="button" class="get-now-btn" onclick="openPasswordModal('Fluency Acceleration', 'Study')">Estudar</button>
                                </div>
                            </div>
                        </div>

                        <!-- PROGRAMA KIDS (JOY) -->
                        <div class="manual-category-unified">
                            <img src="ManuaisFT/Listed Lessons.png" alt="Programa Kids Joy" class="category-image">
                            <div class="category-content">
                                <h3 class="manual-category-title">Programa Kids (Joy)</h3>
                                <p class="category-description">Aprendizado lúdico e divertido para crianças. Este pacote inclui:</p>
                                <ul class="manual-list">
                                    <li>Joy Vocabulary</li>
                                    <li>Joy Grammar</li>
                                    <li>Joy Dialogue</li>
                                    <li>Joy Practicing</li>
                                </ul>
                                <p class="category-price">💰 Preço: <strong>5.000 Kz</strong></p>
                                <div class="category-buttons">
                                    <button type="button" onclick="openPurchaseFormWithoutPassword('Programa Kids Joy - Pacote Completo', '5', '5.000 Kz')">Comprar</button>
                                    <button type="button" class="get-now-btn" onclick="openPasswordModal('Joy', 'Study')">Estudar</button>
                                </div>
                            </div>
                        </div>
                        <!-- PACOTE AUTODIDATA -->
                        <div class="manual-category-unified">
                            <img src="ManuaisFT/Listed Lessons.png" alt="Pacote Autodidata" class="category-image">
                            <div class="category-content">
                                <h3 class="manual-category-title">Pacote Autodidata</h3>
                                <p class="category-description">Aprendizado autônomo e autodirigido para alunos independentes. Este pacote inclui:</p>
                                <ul class="manual-list">
                                    <li>Autodidata Vocabulary</li>
                                    <li>Autodidata Grammar</li>
                                    <li>Autodidata Dialogue</li>
                                    <li>Autodidata Practicing</li>
                                </ul>
                                <p class="category-price">💰 Preço: <strong>5.000 Kz</strong></p>
                                <div class="category-buttons">
                                    <button type="button" onclick="openPurchaseFormWithoutPassword('Pacote Autodidata - Completo', '6', '5.000 Kz')">Comprar</button>
                                    <button type="button" class="get-now-btn" onclick="openPasswordModal('Autodidata', 'Study')">Estudar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                        <div id="purchase-form" class="purchase-form hidden">
                            <div class="purchase-form-header">
                                <h3 id="selectedManualTitle">Pedido de compra</h3>
                                <p>Preencha os dados abaixo para receber o manual rapidamente ou receber de forma física.</p>
                            </div>
                            <p id="selectedManualPrice" class="migrated-inline-002">Preço: —</p>
                            <form id="purchaseRequestForm" class="purchase-request-form" onsubmit="return false;">
                                <label for="buyerName">Nome completo</label>
                                <input type="text" id="buyerName" placeholder="Ex: João Silva" required>

                                <label for="buyerEmail">Email</label>
                                <input type="email" id="buyerEmail" placeholder="seu@email.com" required>

                                <label for="courseType">Tipo de curso</label>
                                <select id="courseType" required>
                                    <option value="">Selecione...</option>
                                    <option value="Inglês">Inglês</option>
                                    <option value="Francês">Excel Avançado</option>
                                    <option value="Alemão">Gestão de Projetos</option>
                                    <option value="Espanhol">Higiene & Segurança No Trabalho</option>
                                    <option value="Italiano">Informática Na Óptica do Utilizador</option>
                                    <option value="Português">Logística Internacional</option>
                                    <option value="Outro">Outro</option>
                                </select>

                                <label for="proofFile" class="full-width">Comprovante de pagamento</label>
                                <input type="file" id="proofFile" accept="application/pdf" required>

                                <input type="hidden" id="purchaseManualId">
                                <input type="hidden" id="purchaseManualPrice">
                                <div class="buttons-row">
                                    <button type="button" class="purchase-submit-button" onclick="submitPurchaseRequest()">Virtual</button>
                                    <button type="button" class="purchase-submit-button" onclick="submitPhysicalPurchaseRequest()">Físico</button>
                                    <button type="button" class="purchase-cancel-button" onclick="closePurchaseForm()">Cancelar</button>
                                </div>
                                <p class="purchase-note">📋 Use Virtual para finalizar por email <br/> Físico para abrir o WhatsApp com <br/>instruções de entrega impressa.</p>
                                <div id="purchaseStatus" class="migrated-inline-004"></div>
                            </form>
                        </div>
                        <div id="afterFinalizeArea" class="manual-documents">
                            <p id="downloadDocumentName" class="migrated-inline-006">Documento solicitado: <span>—</span></p>
                            <div id="purchaseSummary" class="migrated-inline-007">
                                <p class="migrated-inline-008"><strong>Nome:</strong> <span id="summaryName">—</span></p>
                                <p class="migrated-inline-008"><strong>Email:</strong> <span id="summaryEmail">—</span></p>
                                <p class="migrated-inline-008"><strong>Curso:</strong> <span id="summaryCourseType">—</span></p>
                                <p class="migrated-inline-008"><strong>Comprovativo:</strong> <span id="summaryProof">—</span></p>
                                <p class="migrated-inline-008"><strong>Preço:</strong> <span id="summaryPrice"></span></p>
                            </div>
                            <div class="migrated-inline-009">
                                <button id="downloadChosenBtn" class="purchase-submit-button" onclick="downloadRequestedDocument()">Baixar documento</button>
                                <button id="invoiceBtn" class="purchase-submit-button" onclick="generateInvoice()">Receber Fatura</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section class="banner">
            <div class="banner-slider" id="bannerSlider">
                <div class="banner-slide" style="background-image: url('DashBoard/BannerPro.png');">
                    <div>
                        <h2>Conquiste fluência com aulas práticas</h2>
                        <p>Metodologia SMS: conversação, vocabulário e gramática em um único percurso.</p>
                    </div>
                </div>
                <div class="banner-slide" style="background-image: url('DashBoard/BannerPro2.png');">
                    <div>
                        <h2>Turmas reduzidas e atenção individual</h2>
                        <p>Professores experientes orientando cada passo do aluno para resultados rápidos.</p>
                    </div>
                </div>
                <div class="banner-slide" style="background-image: url('DashBoard/BannerPro3.png');">
                    <div>
                        <h2>Aulas Online e Presenciais em Luanda</h2>
                        <p>Flexibilidade para estudar de qualquer lugar com horários adaptados à sua rotina.</p>
                    </div>
                </div>
                <div class="banner-slide" style="background-image: url('DashBoard/BannerPro4.png');">
                    <div>
                        <h2>Recursos exclusivos para alunos</h2>
                        <p>Manuais, vídeos e suporte via WhatsApp para manter o estudo ativo todos os dias.</p>
                    </div>
                </div>
                <div class="banner-slide" style="background-image: url('DashBoard/BannerPro5.png');">
                    <div>
                        <h2>Inscrições abertas agora</h2>
                        <p>Garanta sua vaga e avance no inglês com um plano pedagógico completo.</p>
                    </div>
                </div>
            </div>
            <div class="banner-dots">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
                <span class="dot" onclick="currentSlide(5)"></span>
            </div>
        </section>

        <section class="info-highlight-card">
            <div class="info-highlight-copy">
                <span class="eyebrow eyebrow-soft">Por que escolher a SMS</span>
                <h2>Aprender inglês com método claro, apoio real e resultados visíveis.</h2>
                <p>Na S.M.S, cada aluno recebe orientação prática, recursos completos e uma experiência de estudo organizada para crescer com confiança.</p>
            </div>
            <div class="info-highlight-pills">
                <span>Metodologia prática</span>
                <span>Professores experientes</span>
                <span>Aulas online e presenciais</span>
                <span>Suporte contínuo</span>
            </div>
        </section>

        <div class="info-system collapsed" id="infoPanel">
            <div class="info-system-header">
                <div>
                    <span class="eyebrow eyebrow-soft">Informações da SMS</span>
                    <h2>Tudo o que você precisa saber em um só lugar</h2>
                </div>
                <button type="button" class="info-system-close-button site-close-button" onclick="toggleAllInfoSections()" aria-label="Ocultar informações">×</button>
            </div>
            <div class="info-system-content">
                <section class="info-section opened">
                    <div class="info-section-body">
                        <div class="info-summary-grid">
                            <article class="info-card info-location-card">
                                <div class="info-card-label">📍 Localização & contato</div>
                                <p>Academia em Luanda, com atendimento personalizado e aulas online ou presenciais.</p>
                                <div class="location-details">
                                    <div><strong>Endereço:</strong> Av. Deolinda Rodrigues, nº 475, Rangel, Luanda, Angola</div>
                                    <div><strong>Horário:</strong> Segunda a Sexta, 07:30 - 20:00</div>
                                    <div><strong>Telefone:</strong> +244 951 474872</div>
                                    <div><strong>Email:</strong> VendasRhSms@outlook.com</div>
                                </div>
                                <div class="map-shell">
                                    <iframe src="https://maps.google.com/maps?q=Av.+Deolinda+Rodrigues+475+Luanda+Angola&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa da S.M.S"></iframe>
                                </div>
                            </article>
                            <article class="info-card">
                                <h3>🏛️ Sobre nós</h3>
                                <p>A S.M.S é uma academia de idiomas e habilidades que combina metodologia moderna, apoio personalizado e foco em resultados reais.</p>
                                <ul>
                                    <li>Academia de especialização em formação de adultos e jovens.</li>
                                    <li>Equipe de professores qualificados, motivados e bilíngues.</li>
                                    <li>Aulas adaptadas ao ritmo e objetivos de cada aluno.</li>
                                    <li>Ambiente acolhedor e suporte contínuo durante o aprendizado.</li>
                                </ul>
                            </article>
                            <article class="info-card">
                                <h3>💳 Pagamentos e comprovante</h3>
                                <p>As inscrições são confirmadas após o envio do comprovativo de pagamento.</p>
                                <ul>
                                    <li><strong>Banco:</strong> Milénio Atlântico</li>
                                    <li><strong>Titular:</strong> Estevão André Lizi</li>
                                    <li><strong>Conta:</strong> 226182555.10001</li>
                                    <li><strong>IBAN:</strong> 0055.0000.2618.2555.1010.7</li>
                                    <li><strong>Referência:</strong> SMS-ACADEMIA DE LÍNGUAS-2026</li>
                                </ul>
                            </article>
                            <article class="info-card" id="termos-privacidade">
                                <h3>🔒 Termos e privacidade</h3>
                                <p>Seu contato e dados são tratados com responsabilidade e usados apenas para apoiar o processo educativo.</p>
                                <ul>
                                    <li>Política clara de uso e proteção de dados</li>
                                    <li>Informações objetivas sobre aulas e políticas</li>
                                    <li>Atendimento transparente para alunos e responsáveis</li>
                                </ul>
                            </article>
                        </div>
                        <div class="info-feature-grid">
                            <article class="info-card partner-panel">
                                <h3>🤝 Parceiros estratégicos</h3>
                                <p>Parceiros que ampliam oportunidades e apoio para os nossos alunos.</p>
                                <div class="partner-grid">
                                    <div class="partner-card">
                                        <a class="partner-link" href="https://horizon-groupindia.com/" target="_blank" rel="noopener noreferrer">
                                            <img src="Image/parceiro4.jpg" alt="Parceiro Educacional" class="partner-image">
                                        </a>
                                        <span>HORIZON-GROUP PVT</span>
                                        <p>Empresa especializada em soluções de Desminagem emuito mais, globalmente.</p>
                                    </div>
                                    <div class="partner-card">
                                        <a class="partner-link" href="https://www.inefop.gov.ao/" target="_blank" rel="noopener noreferrer">
                                            <img src="Image/parceiro5.jpg" alt="Parceiro Digital" class="partner-image">
                                        </a>
                                        <span>INEFOP-LUANDA</span>
                                        <p>Rede de apoio e recursos para instituições educacionais em Luanda.</p>
                                    </div>
                                    <div class="partner-card">
                                        <a class="partner-link" href="https://www.governo.gov.ao" target="_blank" rel="noopener noreferrer">
                                            <img src="Image/parceiro2.jpg" alt="Parceiro Comunitário" class="partner-image">
                                        </a>
                                        <span>GOVERNO ANGOLA</span>
                                        <p>Rede de eventos, workshops e intercâmbios para alunos SMS.</p>
                                    </div>
                                </div>
                            </article>
                            <article class="info-card testimonial-panel">
                                <h3>🌟 Depoimentos e impacto</h3>
                                <p>Alunos reais, experiências reais e resultados visíveis.</p>
                                <div class="testimonial-grid">
                                    <div class="testimonial-card">
                                        <div class="testimonial-avatar">
                                            <img src="Image/favicon2.jpg" alt="Avatar da aluna Rita">
                                        </div>
                                        <p>“A SMS me deu confiança para falar inglês em entrevistas e viagens. A equipe acompanha cada etapa.”</p>
                                        <div class="rating-stars">★★★★★</div>
                                        <span>Rita M., estudante</span>
                                    </div>
                                    <div class="testimonial-card">
                                        <div class="testimonial-avatar">
                                            <img src="Image/favicon2.jpg" alt="Avatar do aluno João">
                                        </div>
                                        <p>“Os professores são excelentes e o método é prático. Senti progresso real desde as primeiras semanas.”</p>
                                        <div class="rating-stars">★★★★★</div>
                                        <span>João P., profissional</span>
                                    </div>
                                    <div class="testimonial-card">
                                        <div class="testimonial-avatar">
                                            <img src="Image/favicon2.jpg" alt="Avatar da aluna Ana">
                                        </div>
                                        <p>“O ambiente é acolhedor e o suporte personalizado faz toda a diferença no aprendizado.”</p>
                                        <div class="rating-stars">★★★★★</div>
                                        <span>Ana L., aluna</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <section class="gallery sms-gallery-section" id="sms-gallery" hidden>
            <div class="sms-gallery-shell">
                <button class="site-close-button gallery-close" aria-label="Fechar galeria" onclick="closeSmsGallery()">✕</button>
                <div class="sms-gallery-header">
                    <span class="eyebrow eyebrow-soft">Galeria institucional</span>
                    <div class="sms-gallery-tabs" role="tablist" aria-label="Opções da galeria">
                        <button type="button" class="sms-tab active" data-target="photosDemo" role="tab" aria-selected="true">Fotos</button>
                        <button type="button" class="sms-tab" data-target="videoDemo" role="tab" aria-selected="false">Vídeos</button>
                    </div>
                </div>
                <div class="sms-gallery-viewport" aria-label="Conteúdo da galeria SMS">
                    <!-- Fotos (demo intercalado em uma única linha) -->
                    <div id="photosDemo" class="sms-gallery-panel">
                        <div class="sms-gallery-track">
                            <div class="sms-gallery-card">
                                <img src="GALERIA DE FOTO/BREVEMEMTE  CURSO DE GESTAO DE PROJETOS.jpg " alt="Aulas da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">Brevemente</strong>
                                <span>O curso de gestão de projetos estará disponível em breve.</span>
                            </div>
                             <div class="sms-gallery-card">
                              <img src="GALERIA DE FOTO/BREVEMEMTE CURSO DE EXCEL AVANÇADO.jpg " alt="Aulas da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">Brevemente</strong>
                                <span>O curso de Excel Avançado estará disponível em breve, só aqui na Academia SMS.</span>
                            </div>
                             <div class="sms-gallery-card">
                              <img src="GALERIA DE FOTO/BREVEMEMTE CURSO DE INFORMATICA.jpg " alt="Aulas da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">Brevemente</strong>
                                <span>O curso de Informática estará disponível em breve, na Academia SMS.</span>
                            </div>
                             <div class="sms-gallery-card">
                              <img src="GALERIA DE FOTO/BREVEMEMTE HIGIENE E SEGURANÇA NO TRABALHO.jpg " alt="Aulas da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">Brevemente</strong>
                                <span>A Academia SMS disponibilizará o curso de Higiene e Segurança no Trabalho em breve.</span>
                            </div>
                            <div class="sms-gallery-card">
                              <img src="GALERIA DE FOTO/BREVEMENTE CURSO DE LOGISTICA INTERNACIONAL.jpg " alt="Aulas da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">Brevemente</strong>
                                <span>A Academia SMS disponibilizará o curso de Logística Internacional muito em breve, fique ligado.</span>
                            </div>
                            <div class="sms-gallery-card">
                                <img src="GALERIA DE FOTO/A NOSSA EQUIPA (4).jpg" alt="Estudantes da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">Sobre nós</strong>
                                <span>Venha nos visitar</span>
                            </div>
                            <div class="sms-gallery-card">
                                <img src="GALERIA DE FOTO/NOSSO ESPACO (3).png " alt="Atividades da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">A nossa equipa</strong>
                                <span>Professores dedicados e treinados</span>
                            </div>
                             <div class="sms-gallery-card">
                                <img src="GALERIA DE FOTO/A NOSSA EQUIPA (2).jpg" alt="Atividades da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">A nossa equipa</strong>
                                <span>Colaboradores dedicados e profissionais</span>
                            </div>
                            <div class="sms-gallery-card">
                                <img src="GALERIA DE FOTO/SALA DE AULA (1).jpg" alt="Sala de aula da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">O nosso espaço</strong>
                                <span>Salas confortáveis e modernas</span>
                            </div>
                            <div class="sms-gallery-card">
                                <img src="GALERIA DE FOTO/A NOSSA EQUIPA (5).jpg " alt="Sala de aula da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">Mr Steve</strong>
                                <span>Professor de Inglês Prof. Steve Number 1 na SMS.</span>
                            </div>
                            <div class="sms-gallery-card">
                                <img src="GALERIA DE FOTO/NOSSO ESPACO.jpg" alt="Sala de aula da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">O nosso espaço</strong>
                                <span>Localizados na Terra Nova BFA do Volante</span>
                            </div>
                            <div class="sms-gallery-card">
                                <img src="GALERIA DE FOTO/NOSSO ESPACO (1).jpg" alt="Sala de aula da S.M.S" class="sms-gallery-image">
                                <strong class="sms-gallery-card-title">O nosso espaço</strong>
                                <span>Logo após a pedonal do cemiterio da Santa Ana</span>
                            </div>
                        </div>
                    </div>
                    <div id="videoDemo" class="sms-gallery-panel video-gallery-section" hidden style="display:none;">
                        <div class="video-gallery-shell">
                            <div class="video-carousel" aria-label="Carrossel de vídeos">
                                <button class="video-prev" aria-label="Anterior">‹</button>
                              
                                <div class="video-slides">
                                    <div class="video-slide"><video controls muted playsinline preload="metadata" src="GALERIA DE VIDEOS/1-SMS Academia de Formação.mp4"></video></div>
                                    <div class="video-slide"><video controls muted playsinline preload="metadata" src="GALERIA DE VIDEOS/3-VID- Oque temos ara o mes de agosto.mp4"></video></div>
                                    <div class="video-slide"><video controls muted playsinline preload="metadata" src="GALERIA DE VIDEOS/6-VID JOY DUNKIN 1.mp4"></video></div>
                                    <div class="video-slide"><video controls muted playsinline preload="metadata" src="GALERIA DE VIDEOS/4-VID-Interview with tino.mp4"></video></div>
                                    <div class="video-slide"><video controls muted playsinline preload="metadata" src="GALERIA DE VIDEOS/FINAL DOS VIDEOS.mp4"></video></div>
                                </div>
                                <button class="video-next" aria-label="Próximo">›</button>
                            </div>
                            <div class="video-dots" role="tablist" aria-label="Navegação de vídeos"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <main>
            <section class="hero">
                <div class="hero-inner">
                    <div class="hero-copy">
                        <span class="eyebrow">Academia de Línguas com foco em resultados</span>
                        <h1>Aprenda inglês com aulas práticas e apoio personalizado.</h1>
                        <p>A S.M.S ajuda você a dominar inglês para trabalho, viagens e estudos com métodos adaptados ao seu ritmo e objetivos.</p>
                    </div>
                    <div class="hero-card">
                        <h2>Destaques SMS</h2>
                        <ul>
                            <li>Turmas reduzidas e acompanhamento individual</li>
                            <li>Cursos para nível básico, intermediário e profissional</li>
                            <li>Material digital, propina e a inscrição podem ser pago apartir do site, suporte via WhatsApp</li>
                            <li>Atendimento em Luanda aulas online e presencial</li>
                        </ul>
                    </div>
                </div>
            </section>

    <!-- DASHBOARD COM CURSOS -->
    <section class="dashboard" id="cursos">   
        <h2 class="section-title">Catálogo de Cursos</h2>

        <div class="course-programs-shell">
            <button class="program-nav-arrow" data-side="prev" type="button" onclick="changeProgram(-1)" aria-label="Programa anterior">‹</button>
            <div class="course-programs-carousel">
                <div class="course-programs-track" id="programsTrack">
                    <div class="course-program-card active">
                        <div class="course-program-header">
                            <img src="DashBoard/ProgramaBasico1.png" alt="Programa Básico" class="course-program-image">
                            <div>
                                <h3>Programa Básico</h3>
                                <p>Base sólida para quem quer começar do zero e evoluir de forma prática.</p>
                            </div>
                        </div>
                        <div class="products-grid">
                            <div class="product-card">
                                <img src="DashBoard/StandardEnglish1.png" alt="Standard English Estágio 1" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Standard English – Estágio 1</div>
                                    <p class="product-meta">Modalidade: Presencial</p>
                                    <div class="product-price">5.000 KZ</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Standard English – Estágio 1', 5000.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Standard English – Estágio 1', 5000.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card">
                                <img src="DashBoard/StandardEnglish2.png" alt="Standard English Estágio 2" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Standard English – Estágio 2</div>
                                    <p class="product-meta">Modalidade: Presencial</p>
                                    <div class="product-price">8.000 KZ</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Standard English – Estágio 2', 8000.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Standard English – Estágio 2', 8000.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card">
                                <img src="DashBoard/StandardEnglish3.png" alt="Standard English Estágio 3" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Standard English – Estágio 3</div>
                                    <p class="product-meta">Modalidade: Presencial</p>
                                    <div class="product-price">12.500 KZ</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Standard English – Estágio 3', 12500.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Standard English – Estágio 3', 12500.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="course-program-card">
                        <div class="course-program-header">
                            <img src="DashBoard/ProgramaGeral.png" alt="Programa Geral" class="course-program-image">
                            <div>
                                <h3>Programa Geral</h3>
                                <p>Para quem já tem base e quer ganhar fluência e confiança em comunicação.</p>
                            </div>
                        </div>
                        <div class="products-grid">
                            <div class="product-card">
                                <img src="DashBoard/Foundationenglish.jpg" alt="Foundation English" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Foundation English</div>
                                    <div class="product-price">15.000 KZ / mês</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Foundation English', 15000.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Foundation English', 15000.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card">
                                <img src="DashBoard/Intermediate english.jpg" alt="Intermediate English" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Intermediate English</div>
                                    <div class="product-price">20.000 KZ / mês</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Intermediate English', 20000.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Intermediate English', 20000.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card">
                                <img src="DashBoard/Aceleração da fluencia.jpg" alt="Aceleração da Fluência" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Aceleração da Fluência</div>
                                    <div class="product-price">25.000 KZ</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Aceleração da Fluência', 25000.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Aceleração da Fluência', 25000.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="course-program-card">
                        <div class="course-program-header">
                            <img src="DashBoard/Programaprofissional.png" alt="Programa Profissional" class="course-program-image">
                            <div>
                                <h3>Programa Profissional</h3>
                                <p>Preparação para contextos de trabalho, negócios e oportunidades internacionais.</p>
                            </div>
                        </div>
                        <div class="products-grid">
                            <div class="product-card">
                                <img src="DashBoard/Profissional english.jpg" alt="Professional English" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Professional English</div>
                                    <div class="product-price">20.000 KZ - 180.000 KZ</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Professional English', 20000.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Professional English', 20000.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card">
                                <img src="DashBoard/Preparatorio.jpg" alt="Preparatório" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Preparatório</div>
                                    <div class="product-price">15.000 KZ / aula</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Preparatório', 15000.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Preparatório', 15000.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card">
                                <img src="DashBoard/Habilidades de Comunicação.jpg" alt="Habilidades de Comunicação" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Habilidades de Comunicação</div>
                                    <div class="product-price">18.000 KZ / aula</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Habilidades de Comunicação', 18000.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Habilidades de Comunicação', 18000.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="course-program-card">
                        <div class="course-program-header">
                            <img src="DashBoard/Kindergarten presencial.png" alt="Programa Kids" class="course-program-image">
                            <div>
                                <h3>Programa Kids</h3>
                                <p>Ensino lúdico e progressivo para crianças aprenderem inglês com prazer.</p>
                            </div>
                        </div>
                        <div class="products-grid">
                            <div class="product-card">
                                <img src="DashBoard/Kindergarten presencial.png" alt="Programa Kids" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Programa Kids</div>
                                    <div class="product-price">26.500 KZ / mês</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Programa Kids', 26500.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Programa Kids', 26500.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="course-program-card">
                        <div class="course-program-header">
                            <img src="Image/Aulas ao domicilio2.jpg" alt="Programas Flexíveis" class="course-program-image">
                            <div>
                                <h3>Programas Flexíveis</h3>
                                <p>Opções adaptadas à rotina, ao domicilio e à aprendizagem autónoma.</p>
                            </div>
                        </div>
                        <div class="products-grid">
                            <div class="product-card">
                                <img src="Image/Aulas ao domicilio2.jpg" alt="Aulas ao Domicílio" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Aulas ao Domicílio</div>
                                    <div class="product-price">30.000 KZ / mês</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Aulas ao Domicílio', 30000.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Aulas ao Domicílio', 30000.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-card">
                                <img src="DashBoard/Club Meetings.png" alt="Club Meetings" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Club Meetings</div>
                                    <div class="product-price">Grátis</div>
                                    <a class="buy-button free" role="button" href="https://chat.whatsapp.com/H2eDhya4kXm4hmZ5G95BXL?s=sw&p=a&ilr=4&amv=3" target="_blank" rel="noopener noreferrer">Entrar no grupo</a>
                                </div>
                            </div>
                            <div class="product-card">
                                <img src="DashBoard/Pacote Autodidata.png" alt="Pacote Autodidata" class="product-image-img">
                                <div class="product-info">
                                    <div class="product-name">Pacote Autodidata</div>
                                    <div class="product-price">10.000 KZ</div>
                                    <div class="course-buttons-container">
                                        <button class="buy-button" onclick="bookCourse('Pacote Autodidata (25 aulas)', 10000.00); showRegistrationAndPayment();">Inscrever-se</button>
                                        <button class="buy-button propina-btn" onclick="openProptinaModal('Pacote Autodidata (YouTube + WhatsApp)', 10000.00);">Propina</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="program-nav-arrow" data-side="next" type="button" onclick="changeProgram(1)" aria-label="Próximo programa">›</button>
        </div>
    </section>
    <!-- FORMULÁRIO PARA INSCRIÇÃO -->
    <section id="agendamento" class="migrated-inline-087">
        <div class="whatsapp-section">
            <div class="migrated-inline-088">
                <h2 class="migrated-inline-089">📱 Inscrever-se</h2>
                <button type="button" onclick="closeEnrollmentForm()" aria-label="Fechar formulário" class="migrated-inline-090">×</button>
            </div>
            <p class="migrated-inline-091">Preencha todos os campos abaixo para inscrever-se em seu curso ou entre em contato conosco</p>
            
            <div class="form-group">
                <label for="courseName">📚 Curso:</label>
                <input type="text" id="courseName" placeholder="Nome do curso" readonly class="migrated-inline-092">
            </div>

            <div class="form-group" id="courseVariantGroup">
                <label for="courseVariantSelect" id="courseVariantLabel">Opção:</label>
                <select id="courseVariantSelect" class="migrated-inline-093">
                    <option value="">Selecione uma opção...</option>
                </select>
            </div>

            <div class="form-group">
                <label for="coursePrice">💵 Preço:</label>
                <input type="text" id="coursePrice" placeholder="Preço do curso" readonly class="migrated-inline-092">
                <input type="hidden" id="courseBasePrice" value="0">
            </div>

            <div class="form-group">
                <div class="form-label">🧭 Como deseja estudar? <span class="migrated-inline-094">(Escolha uma opção)</span></div>
                <div class="radio-group">
                    <label class="radio-option" for="enrollModalityOnline"><input id="enrollModalityOnline" type="radio" name="enrollModality" value="online"><span>Online</span></label>
                    <label class="radio-option" for="enrollModalityPresencial"><input id="enrollModalityPresencial" type="radio" name="enrollModality" value="presencial"><span>Presencial</span></label>
                </div>
                <div id="modalityConfirmation" class="modality-confirmation hidden" aria-live="polite"></div>
            </div>

            <div class="form-group">
                <label for="scheduleDate">📅 Data Preferida:</label>
                <input type="date" id="scheduleDate" required>
            </div>

            <div class="form-group">
                <label for="scheduleTime">⏰ Horário Preferido:</label>
                <select id="scheduleTime" required class="migrated-inline-093">
                    <option value="">Selecione um horário...</option>
                    <option value="08:00">08:00</option>
                    <option value="10:00">10:00</option>
                    <option value="12:00">12:00</option>
                    <option value="14:00">14:00</option>
                    <option value="16:00">16:00</option>
                    <option value="18:00">18:00</option>
                    <option value="online">Online</option>
                </select>
            </div>

            <div class="form-group">
                <label for="name">👤 Seu Nome Completo:</label>
                <input type="text" id="name" placeholder="Digite seu nome completo" required>
            </div>

            <div class="form-group">
                <label for="phone">📱 Número de telemovél:</label>
                <input type="tel" id="phone" placeholder="+244 951474872" required>
            </div>

            <div class="form-group">
                <label for="email">📧 Email:</label>
                <input type="email" id="email" placeholder="VendasRhSms@outlook.com" required>
            </div>

            <div class="form-group">
                <label for="idNumber">🆔 BI / Passaporte:</label>
                <input type="text" id="idNumber" placeholder="Ex: 123456789AB123 (BI) ou AB1234567 (Passaporte)" class="migrated-inline-095" required>
                <small class="migrated-inline-096">Seu documento será para nossa base de dados.</small>
            </div>

            <div class="form-group">
                <label for="municipality">🏘️ Localização:</label>
                <select id="municipality" required class="migrated-inline-093">
                    <option value="">Selecione um município...</option>
                    <option value="Luanda">Online</option>
                    <option value="Estrangeiro">Estrangeiro</option>
                    <option value="Luanda">Luanda</option>
                    <option value="Rangel">Rangel</option>
                    <option value="Bengo">Bengo</option>
                    <option value="Benguela">Benguela</option>
                    <option value="Bié">Bié</option>
                    <option value="Cabinda">Cabinda</option>
                    <option value="Cuando Cubango">Cuando Cubango</option>
                    <option value="Cuanza Norte">Cuanza Norte</option>
                    <option value="Cuanza Sul">Cacuaco</option>
                    <option value="Cunene">Icolo & Bengo</option>
                    <option value="Palanca">Palanca</option>
                    <option value="Capolo">Capolo</option>
                    <option value="Kina-xixi">Kina-xixi</option>
                    <option value="Samba">Samba</option>
                    <option value="Sapú">Sapú</option>
                    <option value="Terra Nova">Terra Nova</option>
                    <option value="Talatona">Talatona</option>
                    <option value="Camama">Camama</option>
                    <option value="Nova Vida">Nova Vida</option>
                    <option value="Benfica">Benfica</option>
                    <option value="Viana">Viana</option>
                    <option value="Cacuaco">Cacuaco</option>
                    <option value="Kilamba Kiaxi">Kilamba Kiaxi</option>
                    <option value="Outros">Outros</option>
                </select>
            </div>

            <div class="form-group">
                <label for="notes">📝 Observações:</label>
                <textarea id="notes" placeholder="Alguma observação adicional?" class="migrated-inline-097"></textarea>
            </div>
            <div class="migrated-inline-098">
                <i>Após clicar no botão abaixo, você será redirecionado para confirmar a Inscrição.</i>
            </div>
            
            <div class="migrated-inline-099">
                <button class="whatsapp-button" onclick="proceedToPayment()">
                    💬 Ir para pagamento
                </button>
            </div>
        </div>
    </section>
    
    <!-- MODAL DE PAGAMENTO DE PROPINAS -->
    <div id="propina-modal" class="propina-modal">
        <div class="propina-modal-content">
            <div class="propina-modal-header">
                <div class="propina-modal-title-row">
                    <h2>💳 Formulário de Propina</h2>
                    <button type="button" class="propina-modal-close site-close-button" onclick="closeProptinaModal()" aria-label="Fechar modal">×</button>
                </div>
                <div class="iban-display">
                    <p><strong >IBAN para Pagamento:</strong></p>
                    <p class="iban-code">0055.0000.2618.2555.1010.7</p>
                    <p class="migrated-inline-100">
                        <strong>⚠️ Instruções:</strong> Efetue o pagamento para o IBAN acima, preencha os dados abaixo e anexe o comprovante antes de clicar em "Eu paguei".
                    </p>
                </div>
            </div>

            <form id="propina-form" class="propina-form" onsubmit="submitProptinaForm(event);">
                <!-- Dados do Cliente -->
                <fieldset class="propina-fieldset">
                    <legend>📋 Dados do Cliente</legend>
                    <div class="form-group">
                        <label for="propina-name">Nome Completo:</label>
                        <input type="text" id="propina-name" name="name" placeholder="Ex: João Silva" required>
                    </div>
                    <div class="form-group">
                        <label for="propina-email">E-mail:</label>
                        <input type="email" id="propina-email" name="email" placeholder="seu@email.com" required>
                    </div>
                    <div class="form-group">
                        <label for="propina-phone">Telefone / WhatsApp:</label>
                        <input type="tel" id="propina-phone" name="phone" placeholder="+244 9XX XXX XXX" required>
                    </div>
                </fieldset>

                <!-- Objetivo do Pagamento -->
                <fieldset class="propina-fieldset">
                    <legend>🎯 Objetivo do Pagamento</legend>
                    <div class="form-group">
                        <label for="propina-course">Curso:</label>
                        <input type="text" id="propina-course" name="course" readonly placeholder="Curso será preenchido automaticamente" class="migrated-inline-101">
                    </div>
                    <div class="form-group">
                        <label for="propina-stage">Estágio:</label>
                        <select id="propina-stage" name="stage" required>
                            <option value="">-- Selecione --</option>
                            <option value="Estágio 1">Estágio 1</option>
                            <option value="Estágio 2">Estágio 2</option>
                            <option value="Estágio 3">Estágio 3</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="propina-purpose">Objetivo do pagamento:</label>
                        <input type="text" id="propina-purpose" name="purpose" placeholder="Ex: Propina / Avaliação / Continuidade" required>
                    </div>
                </fieldset>

                <!-- Tipo de Pagamento -->
                <fieldset class="propina-fieldset">
                    <legend>💰 Tipo de Pagamento</legend>
                    <div class="form-group">
                        <label for="propina-type">Selecione o Tipo de Pagamento:</label>
                        <select id="propina-type" name="payment_type" required onchange="updatePaymentTypeFields();">
                            <option value="">-- Selecione --</option>
                            <option value="monthly">Dívida de Mensalidade</option>
                            <option value="package">Dívida de Pacote Único</option>
                            <option value="corporate">Pacote Empresas</option>
                        </select>
                    </div>

                    <!-- Campos para Mensalidade -->
                    <div id="monthly-fields" class="monthly-fields">
                        <label for="propina-month">Referência da Mensalidade:</label>
                        <select id="propina-month" name="month_ref">
                            <option value="">-- Selecione --</option>
                            <option value="2º mês">2º mês</option>
                            <option value="3º mês">3º mês</option>
                            <option value="4º mês">4º mês</option>
                            <option value="5º mês">5º mês</option>
                            <option value="6º mês">6º mês</option>
                        </select>
                    </div>

                    <!-- Campos para Pacote Único -->
                    <div id="package-fields" class="monthly-fields">
                        <label for="propina-package">Referência de Pacote Único:</label>
                        <select id="propina-package" name="package_ref">
                            <option value="">-- Selecione --</option>
                            <option value="Reforço">Reforço</option>
                            <option value="Segunda etapa">Segunda etapa</option>
                            <option value="Sessão de Avaliação">Sessão de Avaliação</option>
                            <option value="Plano de Continuidade">Plano de Continuidade</option>
                            <option value="Sessão Extra">Sessão Extra</option>
                            <option value="Apoio Intensivo">Apoio Intensivo</option>
                        </select>
                    </div>

                    <!-- Campos para Pacote Empresas -->
                    <div id="corporate-fields" class="monthly-fields">
                        <label for="propina-corporate">Categoria de Pacote Empresas:</label>
                        <select id="propina-corporate" name="corporate_category" onchange="updateCorporateAmount();">
                            <option value="">-- Selecione --</option>
                            <option value="Business English">Business English — 70.000</option>
                            <option value="Academic English">Academic English — 60.000</option>
                            <option value="Travel English">Travel English — 20.000</option>
                            <option value="Professional English">Professional English — 50.000</option>
                            <option value="Technical English">Technical English — 40.000</option>
                            <option value="Specialized English">Specialized English — 180.000</option>
                            <option value="Team/Company 3 Member">Team/Company 3 Member — 100.000</option>
                        </select>
                    </div>
                </fieldset>

                <!-- Montante a Pagar -->
                <fieldset class="propina-fieldset">
                    <legend>💵 Montante a Pagar</legend>
                    <div class="form-group">
                        <label for="propina-amount">Valor (KZ):</label>
                        <input type="number" id="propina-amount" name="amount" placeholder="Ex: 25000" step="0.01" readonly class="migrated-inline-101" required>
                    </div>
                </fieldset>

                <!-- Anexar Comprovante -->
                <fieldset class="propina-fieldset">
                    <legend>📎 Comprovante de Pagamento</legend>
                    <div class="form-group">
                        <label for="propina-proof">Anexar Comprovante (Imagem/PDF):</label>
                        <input type="file" id="propina-proof" name="proof" accept="image/*,.pdf" required>
                        <p class="migrated-inline-103">Formatos aceitos: JPG, PNG, PDF (máx. 10 MB)</p>
                    </div>
                </fieldset>

                <!-- Botões -->
                <div class="propina-buttons">
                    <button type="submit" class="propina-submit-btn">Eu paguei ✓</button>
                    <button type="button" class="propina-cancel-btn" onclick="closeProptinaModal();">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
    
    <!-- DADOS BANCÁRIOS E PAGAMENTO -->
    <section class="payment-section" id="pagamento" hidden>
        <div class="payment-container">
            <h2 class="migrated-inline-106">💳 Dados Bancários & Comprovante de Pagamento</h2>
            <div id="paymentSummaryBox" class="migrated-inline-107">
                <h3 class="migrated-inline-108">Resumo da Inscrição</h3>
                <p class="migrated-inline-109"><strong>Curso:</strong> <span id="summary_course">—</span></p>
                <p class="migrated-inline-109"><strong>Valor do curso:</strong> <span id="summary_base">—</span></p>
                <p class="migrated-inline-109"><strong>Taxa de inscrição:</strong> <span id="summary_fee">—</span></p>
                <p class="migrated-inline-110"><strong>Total final:</strong> <span id="summary_total" class="migrated-inline-111">—</span></p>
                <p class="migrated-inline-109"><strong>Referência:</strong> <span id="summary_reference">—</span></p>
                <p class="migrated-inline-109"><strong>Nome:</strong> <span id="summary_name">—</span></p>
                <p class="migrated-inline-109"><strong>Telefone:</strong> <span id="summary_phone">—</span></p>
                <p class="migrated-inline-109"><strong>Email:</strong> <span id="summary_email">—</span></p>
                <p class="migrated-inline-109"><strong>BI/Passaporte:</strong> <span id="summary_idNumber">—</span></p>
                <p class="migrated-inline-109"><strong>Município:</strong> <span id="summary_municipality">—</span></p>
                <p class="migrated-inline-109"><strong>Data / Hora:</strong> <span id="summary_schedule">—</span></p>
                <p class="migrated-inline-109"><strong>Observações:</strong> <span id="summary_notes">—</span></p>
            </div>
            <!-- DADOS BANCÁRIOS -->
            <div class="migrated-inline-066">
                <h3 class="migrated-inline-112">📋 Dados Bancários</h3>
                <div class="migrated-inline-068">
                    <div>
                        <label class="migrated-inline-069">Titulare da Conta:</label>
                        <p class="migrated-inline-070">Estevão André Lizi</p>
                    </div>
                    <div class="migrated-inline-113">
                        <div>
                            <label class="migrated-inline-069">Banco:</label>
                            <p class="migrated-inline-070">Milénio Atlântico</p>
                            <label class="migrated-inline-114">Número da Conta:</label>
                            <p class="migrated-inline-072">226182555.10001</p>
                        </div>
                    </div>
                    <div class="migrated-inline-113">
                        <div>
                            <label class="migrated-inline-069">IBAN:</label>
                            <p class="migrated-inline-115"><span></span>0055.0000.2618.2555.1010.7</p>
                            <button type="button" onclick="copyIBAN()" class="migrated-inline-116">Copiar IBAN</button>
                            <label class="migrated-inline-114">Referência:</label>
                            <p class="migrated-inline-072">SMS-ACADEMIA DE LÍNGUAS-2026</p>
                        </div>
                    </div>
                </div>
                <div class="migrated-inline-073">
                    <strong>⚠️ Importante:</strong> Após efetuar o pagamento, envie o comprovante para confirmar sua inscrição.
                </div>
            </div>
            <!-- FORMULÁRIO DE ENVIO DE COMPROVANTE -->
            <div class="migrated-inline-117">
                <h3 class="migrated-inline-118">📤 Enviar Comprovante de Pagamento</h3>
                 <div class="form-group">
                    <label for="proofAttachment">📎 Anexar Comprovante (Imagem/PDF):</label>
                    <input type="file" id="proofAttachment" accept="image/*,.pdf" class="migrated-inline-120">
                </div>
                <div class="migrated-inline-121">
                    <button id="enrollGenerateInvoiceBtn" type="button" onclick="generateEnrollmentInvoice()" disabled class="migrated-inline-122">Gerar Fatura</button>
                    <button id="enrollSendWhatsAppBtn" type="button" onclick="submitAllDataVia('whatsapp')" class="migrated-inline-123">Enviar Comprovante via WhatsApp</button>
                </div>

                <!-- removed duplicate send buttons; kept single WhatsApp action above -->
                <div class="migrated-inline-124">
                    <i>Todos os dados serão enviados junto com o comprovante de pagamento.</i>
                </div>
            </div>
        </div>
    </section>

    <!-- MODAL DE COMPRA COM COMPROVATIVO (V2) -->
    <div id="purchaseFormWithPasswordModal" class="purchase-password-modal" style="display: none;">
        <div class="purchase-password-content">
            <button class="purchase-password-close" onclick="closePurchaseFormWithPassword()">×</button>
            
            <div class="purchase-password-header">
                <h2 id="purchaseModalTitle">Comprar Manual</h2>
                <p id="purchaseModalPrice" class="purchase-price">Preço: —</p>
            </div>

            <div class="purchase-password-body">
                <p class="purchase-instruction">Preencha seus dados e envie o comprovativo de pagamento.</p>

                <!-- SEÇÃO 1: Dados do Cliente (Editáveis) -->
                <fieldset class="purchase-fieldset">
                    <legend>📋 Seus Dados</legend>
                    
                    <div class="purchase-field">
                        <label for="purchaseFormName">👤 Nome Completo:</label>
                        <input type="text" id="purchaseFormName" placeholder="Ex: João Silva" required>
                    </div>

                    <div class="purchase-field">
                        <label for="purchaseFormEmail">📧 Email:</label>
                        <input type="email" id="purchaseFormEmail" placeholder="seu@email.com" required>
                    </div>

                    <div class="purchase-field">
                        <label for="purchaseFormPhone">📱 Telefone:</label>
                        <input type="tel" id="purchaseFormPhone" placeholder="+244 951474872" required>
                    </div>
                </fieldset>

                <!-- SEÇÃO 1B: Seletor de Curso (Apenas para Standard) -->
                <fieldset class="purchase-fieldset" id="purchaseCourseSelector" style="display: block;">
                    <legend>📚 Selecione o Curso</legend>
                    
                    <div class="purchase-field">
                        <label for="purchaseCourseSelect">Qual curso você deseja?</label>
                        <select id="purchaseCourseSelect" required>
                            <option value="">-- Selecione --</option>
                            <option value="Standard 1">Standard 1</option>
                            <option value="Standard 2">Standard 2</option>
                            <option value="Standard 3">Standard 3</option>
                        </select>
                    </div>
                </fieldset>

                <!-- SEÇÃO 2: Comprovativo de Pagamento -->
                <fieldset class="purchase-fieldset">
                    <legend>📄 Comprovativo de Pagamento</legend>
                    
                    <div class="purchase-field">
                        <label for="proofFileInput">
                            📎 Enviar Comprovativo (PDF, JPG, PNG):
                            <br><small style="color: #666;">Tamanho máximo: 10MB</small>
                        </label>
                        <input type="file" 
                               id="proofFileInput" 
                               accept=".pdf,.jpg,.jpeg,.png" 
                               onchange="validateProofUpload(event)" 
                               required>
                    </div>

                    <!-- Feedback do Upload -->
                    <div id="proofFeedback" class="proof-feedback" style="display: none;"></div>
                </fieldset>

                <!-- SEÇÃO 3: Botão de Download (Aparece após comprovativo válido) -->
                <div id="downloadButtonContainer" class="purchase-download-container" style="display: none;">
                    <button type="button" class="purchase-download-btn" onclick="processPurchaseDownload()">
                        📥 Baixar Meu Manual
                    </button>
                    <p class="purchase-note">✓ Academia SMS Será notificada.</p>
                </div>

                <!-- Mensagem de Sucesso -->
                <div id="successMessage" class="success-message" style="display: none;">
                    <p>✅ Compra confirmada! Seu manual está sendo preparado.</p>
                </div>

                <!-- Botão de Cancelar -->
                <button type="button" class="purchase-cancel-btn" onclick="closePurchaseFormWithPassword()">Cancelar</button>
            </div>
        </div>
    </div>

    <!-- Overlay de fundo -->
    <div id="purchasePasswordOverlay" class="purchase-password-overlay" style="display: none;" onclick="closePurchaseFormWithPassword()"></div>

        </main>
    <!-- FOOTER -->
    <footer id="contato"> 
        <section id="contato-social">  
            <p>Visite as nossas redes sociais</p>
        <div class="social-media">
            <a href="https://www.facebook.com/profile.php?id=61575589767936" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com/saraswati.sms?igsh=eXduNjJvazhrZThl" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/saraswati-maa-school-399831402?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://wa.me/244951474872" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="https://youtube.com/@saraswatimaaschool?si=Cj7UdMQNY221QcJ6" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://pin.it/7Mj6hXgYW" target="_blank"><i class="fab fa-pinterest"></i></a>
            <a href="https://www.tiktok.com/@saraswati.maa.school?_r=1&_t=ZS-95SXQH2QT5u" target="_blank"><i class="fab fa-tiktok"></i></a>
            <a href="https://www.reddit.com/user/Imaginary-Shock5217/?utm_source=share&utm_medium=mweb3x&utm_name=mweb3xcss&utm_term=1&utm_content=share_button" target="_blank"><i class="fab fa-reddit"></i></a>
            <a href="FAQ.html" target="_blank">FAQ</a>
        </div>
        <section id="contato-info" class="migrated-inline-125">
            <p><strong>🕐 Horário de Atendimento:</strong> Segunda a Sexta, 07:30 - 18:00</p>
        </section>
        <p class="migrated-inline-084">&copy; 2026 S.M.S - Academia de Linguas & Habilidades - Todos os direitos reservados.</p>
        <!-- Botão de rolagem/voltar ao topo -->
<button id="scrollToTopBtn" title="Voltar ao topo" class="migrated-inline-087">up</button>
    </footer>
<script>
        // Slides automáticos e controles do site
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

        // Gallery open/close functions are defined in Script.js.
        function scrollToContacts() {
            const footer = document.getElementById('contato');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        (function(){
            // Smooth scroll only for in-page anchors
            document.querySelectorAll('nav a[href^="#"]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.getAttribute('href'));
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Toggle buy menu (used by onclick in HTML)
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
                    document.body.classList.add('site-overlay-open');
                    document.body.style.overflow = 'hidden';
                    showBackdrop();
                    if (button) button.textContent = 'Fechar';
                } else {
                    buyMenu.style.display = 'none';
                    buyMenu.setAttribute('aria-hidden', 'true');
                    buyMenu.style.removeProperty('z-index');
                    document.body.classList.remove('site-overlay-open');
                    document.body.style.overflow = '';
                    hideBackdrop();
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

            window.openPurchaseForm = function(manualTitle, manualId) {
                closeAllInteractivePanels(['purchase']);
                const formWrapper = document.getElementById('purchase-form');
                if (!formWrapper) return;
                document.getElementById('selectedManualTitle').textContent = `Comprar ${manualTitle}`;
                document.getElementById('purchaseManualId').value = manualId;
                formWrapper.classList.remove('hidden');
                formWrapper.classList.add('show');
                formWrapper.hidden = false;
                formWrapper.style.display = 'grid';
                restorePurchaseDraft();
                const nameInput = document.getElementById('buyerName');
                if (nameInput) nameInput.focus();
            };

            window.closePurchaseForm = function() {
                savePurchaseDraft();
                const formWrapper = document.getElementById('purchase-form');
                if (formWrapper) {
                    formWrapper.classList.add('hidden');
                    formWrapper.classList.remove('show');
                    formWrapper.hidden = true;
                    formWrapper.style.display = 'none';
                }
            };

            window.submitPurchaseRequest = function() {
                const name = document.getElementById('buyerName').value.trim();
                const buyerEmail = document.getElementById('buyerEmail').value.trim();
                const courseType = document.getElementById('courseType').value.trim();
                const proofFile = document.getElementById('proofFile').files[0];
                const manualTitle = document.getElementById('selectedManualTitle').textContent.replace('Comprar ', '').trim();
                const manualPrice = document.getElementById('purchaseManualPrice')?.value || document.getElementById('selectedManualPrice')?.textContent || '—';

                if (!name || !buyerEmail || !courseType || !proofFile) {
                    alert('Preencha o nome, email, tipo de curso e anexe o comprovante em PDF.');
                    return;
                }
                if (proofFile.type !== 'application/pdf') {
                    alert('O comprovante deve ser um arquivo PDF.');
                    return;
                }
                if (proofFile.size > 8 * 1024 * 1024) {
                    alert('O comprovante não pode ter mais de 8 MB.');
                    return;
                }

                const draftPayload = {
                    name,
                    buyerEmail,
                    courseType,
                    manualTitle,
                    manualPrice,
                    proofFileName: proofFile.name,
                    proofFileType: proofFile.type,
                    proofFileSize: proofFile.size,
                    expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000)
                };
                localStorage.setItem('sms_purchase_draft', JSON.stringify(draftPayload));

                const email = 'VendasRhSms@outlook.com';
                const subject = encodeURIComponent(`Pedido de compra - ${manualTitle}`);
                const body = encodeURIComponent(
                    `Pedido de compra de ${manualTitle}\n` +
                    `Nome: ${name}\n` +
                    `Email: ${buyerEmail}\n` +
                    `Tipo de curso: ${courseType}\n` +
                    `Preço: ${manualPrice}\n` +
                    `Comprovante: ${proofFile.name}\n\n` +
                    `**Envie o seu comprovante manualmente para acelerar a sua validação.**\n\n` +
                    `**O seu pedido será validado, assim que confirmarmos o recebimento do Pagamento.** Vamos encaminhar o EBOOK ESCOLHIDO apartir deste mesmo E-mail. PDF manualmente enviado dentro de 24 horas ao cliente. Agradecemos a sua preferência e confiança na S.M.S - Academia de Línguas & Habilidades. Estamos ansiosos para ajudá-lo a alcançar seus objetivos de aprendizagem! Em caso de dúvidas ou para mais informações, não hesite em entrar em contato conosco. Estamos aqui para ajudar!`
                );

                const whatsappMessage = encodeURIComponent(`Olá! Recebi um pedido de compra de manual.\n\nManual: ${manualTitle}\nNome: ${name}\nEmail: ${buyerEmail}\nTipo de curso: ${courseType}\nPreço: ${manualPrice}\nComprovante: ${proofFile.name}`);
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                window.open(`https://wa.me/244951474872?text=${whatsappMessage}`, '_blank');
                closePurchaseForm();
            };

            document.addEventListener('DOMContentLoaded', function() {
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
            });

            // Safe handlers for scrollToTop button
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

            // Prevent errors when hiding sections
            window.hideAllSections = function() {
                const ag = document.getElementById('agendamento'); if (ag) ag.style.display = 'none';
                const pg = document.getElementById('pagamento'); if (pg) pg.style.display = 'none';
                const fs = document.getElementById('formulario-section'); if (fs) fs.style.display = 'none';
            };
        })();
        // Inscrição e automatização
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

        function openEnrollmentPanel() {
            closeAllInteractivePanels(['enrollment']);
            const section = document.getElementById('agendamento');
            if (!section) return;
            section.hidden = false;
            section.removeAttribute('hidden');
            section.classList.add('show');
            section.style.display = 'flex';
            section.style.setProperty('display', 'flex', 'important');
            section.setAttribute('aria-hidden', 'false');
            document.body.classList.add('site-overlay-open');
            document.body.style.overflow = 'hidden';
            showBackdrop();
            setTimeout(() => {
                document.getElementById('scheduleDate')?.focus();
                section.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }

        function bookCourse(courseName, coursePrice) {
            document.getElementById('courseName').value = courseName;
            const priceInput = document.getElementById('coursePrice');
            const baseInput = document.getElementById('courseBasePrice');
            if (priceInput) priceInput.value = 'Kz ' + Number(coursePrice || 0).toFixed(2).replace('.', ',');
            if (baseInput) baseInput.value = Number(coursePrice || 0);
            updateCourseVariantUI(courseName, coursePrice);
            applyEnrollmentModalityRules(courseName);
            openEnrollmentPanel();
        }

        function toggleOrderSection() {
            const section = document.getElementById('agendamento');
            if (!section) return;
            if (section.hidden) {
                openEnrollmentPanel();
            } else {
                closeAllInteractivePanels();
            }
        }

        function sendToWhatsApp() {
            const name = document.getElementById('name').value;
            const course = document.getElementById('courseName').value;
            const price = document.getElementById('coursePrice').value;
            const date = document.getElementById('scheduleDate').value;
            const time = document.getElementById('scheduleTime').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const municipality = document.getElementById('municipality').value;
            const notes = document.getElementById('notes').value;

            if (!name || !course || !date || !time || !phone || !email || !municipality) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }

            const message = `Olá! Gostaria de agendar uma aula.%0A%0A📚 Curso: ${course}%0A💵 Preço: ${price}%0A📅 Data: ${date}%0A⏰ Horário: ${time}%0A👤 Nome: ${name}%0A📧 Email: ${email}%0A📱 WhatsApp: ${phone}%0A🏘️ Município: ${municipality}%0A📝 Observações: ${notes}`;
            const whatsappUrl = `https://wa.me/244951474872?text=${message}`;

            window.open(whatsappUrl, '_blank');
        }

        // Registros & Pagamento
        function toggleAllInfoSections() {
            const infoSystem = document.querySelector('.info-system');
            const button = document.getElementById('infoToggleAllBtn');
            const infoBackdrop = document.getElementById('infoBackdrop');
            if (!infoSystem || !button || !infoBackdrop) return;

            const isCollapsed = infoSystem.classList.toggle('collapsed');
            infoSystem.classList.toggle('is-open', !isCollapsed);
            infoSystem.hidden = isCollapsed;
            infoSystem.style.display = isCollapsed ? 'none' : 'block';
            infoSystem.setAttribute('aria-hidden', isCollapsed ? 'true' : 'false');
            button.textContent = isCollapsed ? 'Ver informações' : 'Ocultar informações';
            sectionsCloseAll();

            if (!isCollapsed) {
                infoBackdrop.setAttribute('aria-hidden', 'false');
                infoBackdrop.style.display = 'block';
                infoBackdrop.style.opacity = '1';
                infoBackdrop.style.pointerEvents = 'none';
                infoBackdrop.classList.add('is-open');
                document.body.classList.add('site-overlay-open');
                document.body.style.overflow = 'hidden';
                setTimeout(() => {
                    infoSystem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 40);
            } else {
                infoBackdrop.setAttribute('aria-hidden', 'true');
                infoBackdrop.style.display = 'none';
                infoBackdrop.style.opacity = '0';
                infoBackdrop.style.pointerEvents = 'none';
                infoBackdrop.classList.remove('is-open');
                document.body.classList.remove('site-overlay-open');
                document.body.style.overflow = '';
            }
        }

        function sectionsCloseAll() {
            document.querySelectorAll('.info-section').forEach(section => {
                section.classList.remove('opened');
            });
        }

        function setupInfoAccordion() {
            const infoSystem = document.querySelector('.info-system');
            if (!infoSystem) return;

            const sections = Array.from(infoSystem.querySelectorAll('.info-section'));
            sections.forEach(section => {
                const heading = section.querySelector('h2');
                if (!heading) return;

                heading.addEventListener('click', () => {
                    const isOpen = section.classList.toggle('opened');
                    infoSystem.classList.remove('collapsed');
                    const button = document.getElementById('infoToggleAllBtn');
                    if (button) button.textContent = 'Ocultar informações';
                    if (isOpen) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        }

        document.addEventListener('DOMContentLoaded', setupInfoAccordion);

        document.addEventListener('DOMContentLoaded', function() {
            const actions = document.querySelectorAll('.course-category-action');
            const panels = document.querySelectorAll('.course-group-content');

            actions.forEach(action => {
                action.addEventListener('click', () => {
                    const card = action.closest('.course-category-card');
                    const panel = card ? card.querySelector('.course-group-content') : null;
                    const shouldOpen = panel ? panel.hidden : false;

                    panels.forEach(item => {
                        item.hidden = true;
                    });

                    actions.forEach(item => {
                        item.setAttribute('aria-expanded', 'false');
                        item.textContent = 'Abrir catálogo';
                    });

                    if (panel && shouldOpen) {
                        panel.hidden = false;
                        action.setAttribute('aria-expanded', 'true');
                        action.textContent = 'Fechar catálogo';
                    }
                });
            });
        });

        // Habilita/desabilita botão de gerar fatura quando houver comprovante anexado
        document.addEventListener('DOMContentLoaded', function(){
            const proof = document.getElementById('proofAttachment');
            const enrollBtn = document.getElementById('enrollGenerateInvoiceBtn');
            const purchaseInvBtn = document.getElementById('invoiceBtn');
            function updateInvoiceButtons(){
                const hasFile = proof && proof.files && proof.files.length;
                if (enrollBtn){ enrollBtn.disabled = !hasFile; enrollBtn.style.opacity = hasFile ? '1' : '0.6'; }
                if (purchaseInvBtn){ purchaseInvBtn.style.display = hasFile ? 'inline-flex' : 'none'; }
            }
            if (proof) proof.addEventListener('change', updateInvoiceButtons);
            updateInvoiceButtons();
        });

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

        function setupEnrollModalityOptions() {
            const options = document.querySelectorAll('.radio-option');
            options.forEach(option => {
                const input = option.querySelector('input[type="radio"]');
                if (!input) return;

                option.addEventListener('click', () => {
                    input.checked = true;
                    updateModalityConfirmation();
                });

                input.addEventListener('change', updateModalityConfirmation);
            });
            applyEnrollmentModalityRules(document.getElementById('courseName')?.value || '');
        }

        document.addEventListener('DOMContentLoaded', function() {
            setupEnrollModalityOptions();
            restoreEnrollmentDraft();
            restoreCareerDraft();
            const draftFields = ['courseName','courseVariantSelect','coursePrice','courseBasePrice','scheduleDate','scheduleTime','name','phone','email','idNumber','municipality','notes'];
            draftFields.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.addEventListener('input', saveEnrollmentDraft);
                    el.addEventListener('change', saveEnrollmentDraft);
                }
            });
            document.querySelectorAll('input[name="enrollModality"]').forEach(input => {
                input.addEventListener('change', saveEnrollmentDraft);
            });
            ['appName','appEmail','appPhone','jobPosition','appMessage'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.addEventListener('input', saveCareerDraft);
                    el.addEventListener('change', saveCareerDraft);
                }
            });
        });

        function proceedToPayment() {
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

            // cálculo de taxa automática
            const modality = modalityEl.value; // 'online' | 'presencial'
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

            // validar BI / Passaporte
            const idNumber = (document.getElementById('idNumber')?.value || '').trim();
            const idCheck = validateIdNumber(idNumber);
            if (!idCheck.valid) {
                alert('Por favor, preencha um BI ou Passaporte válido antes de prosseguir. Exemplo de BI: 123456789AB123; Exemplo de Passaporte: AB1234567');
                return;
            }

            // gerar referência aleatória
            const reference = generateReference();

            // preencher resumo na UI
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

            // guardar reserva local por 10 minutos
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

            const agendamento = document.getElementById('agendamento');
            const pagamento = document.getElementById('pagamento');

            if (agendamento) {
                agendamento.hidden = true;
                agendamento.removeAttribute('hidden');
                agendamento.style.display = 'none';
                agendamento.setAttribute('aria-hidden', 'true');
            }

            if (pagamento) {
                pagamento.hidden = false;
                pagamento.removeAttribute('hidden');
                pagamento.style.display = 'block';
                pagamento.style.setProperty('display', 'block', 'important');
                pagamento.setAttribute('aria-hidden', 'false');
                pagamento.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

            return `*S.M.S - INSCRIÇÃO COMPLETA*\n\n👤 Nome: ${name}\n📱 Telefone: ${phone}\n📧 Email: ${email}\n🆔 BI/Passaporte: ${idNumber}\n🏘️ Município: ${municipality}\n📚 Curso: ${courseName}${selectedVariant}\n💵 Preço do curso: ${coursePrice}\n💳 Taxa de inscrição: ${enrollmentFee}\n💰 Total a pagar: ${enrollmentTotal}\n📅 Data: ${scheduleDate}\n⏰ Horário: ${scheduleTime}\n📝 Observações: ${notes}\n\n${instruction}${proofInfo}\n\n📝 *Agradecimentos:* 🎓 Bem-vindo(a) à Saraswati MAA Mind School – S.M.S!\nÉ um grande prazer acompanhá-lo(a) nesta jornada de aprendizado em inglês.`;
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
            const agendamento = document.getElementById('agendamento');
            const pagamento = document.getElementById('pagamento');
            const formulario = document.getElementById('formulario-section');

            if (agendamento) {
                agendamento.hidden = true;
                agendamento.style.display = 'none';
                agendamento.setAttribute('aria-hidden', 'true');
            }
            if (pagamento) {
                pagamento.hidden = true;
                pagamento.style.display = 'none';
                pagamento.setAttribute('aria-hidden', 'true');
            }
            if (formulario) {
                formulario.hidden = true;
                formulario.style.display = 'none';
                formulario.setAttribute('aria-hidden', 'true');
            }
        }
 // Candidaturas & Formas da Aplicação
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

        // Scroll to top button functionality
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        let bottomTimeCounter = 0;
        let bottomTimeInterval = null;
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
            
            // Detectar se está no fundo da página
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
        
        if (scrollToTopBtn) {
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

         //-- ticker - texto rolando -->

        window.addEventListener('DOMContentLoaded', function() {
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

        // Removed invalid buyBtn listener; buy menu managed by toggleBuyMenu()
        
            /* --- Funções auxiliares para inscrição e pagamento --- */
            function generateReference(){
                const rnd = Math.floor(1000 + Math.random()*9000);
                const d = new Date();
                const date = `${d.getFullYear()}${(d.getMonth()+1).toString().padStart(2,'0')}${d.getDate().toString().padStart(2,'0')}`;
                return `SMS-INV-${date}-${rnd}`;
            }

            // Validação simples para BI / Passaporte
            function validateIdNumber(value){
                if (!value || !value.trim()) return { valid: false, type: null };
                const v = value.trim();
                const passportRegex = /^(?:[A-Za-z]{2}\d{7}|\d{7}[A-Za-z]{2})$/; // AB1234567 ou 1234567AB
                const biRegex = /^\d{9}[A-Za-z]{2}\d{3}$/i; // 123456789AB123
                if (passportRegex.test(v)) return { valid: true, type: 'passport' };
                if (biRegex.test(v)) return { valid: true, type: 'bi' };
                return { valid: false, type: null };
            }

            function copyIBAN(){
                const iban = '0055.0000.2618.2555.1010.7';
                if (navigator.clipboard && navigator.clipboard.writeText){
                    navigator.clipboard.writeText(iban).then(()=> alert('IBAN copiado para a área de transferência.')).catch(()=> alert('Não foi possível copiar o IBAN automaticamente.'));
                } else {
                    // fallback
                    const tmp = document.createElement('textarea'); tmp.value = iban; document.body.appendChild(tmp); tmp.select(); try { document.execCommand('copy'); alert('IBAN copiado'); } catch(e){ alert('Copie manualmente: ' + iban);} tmp.remove();
                }
            }

            function generateEnrollmentInvoice(){
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
                    `${messageBody}\n\n`+
                    `📄 Referência: ${enrollment.reference}\n`+
                    `🏦 Dados Bancários:\nBanco: Milénio Atlântico\nTitular: Estevão André Lizi\nIBAN: 0055.0000.2618.2555.1010.7\nNº Conta: 226182555.10001\n\n`+
                    `Por favor, anexe o comprovativo de pagamento e envie este email para confirmação.`
                );
                const mailto = `mailto:${centerEmail}?subject=${subject}&body=${body}`;
                window.open(mailto, '_blank');
            }

            function openWhatsAppEnrollment(){
                const enrollment = JSON.parse(localStorage.getItem('sms_enrollment') || '{}');
                if (!enrollment || !enrollment.name) { alert('Nenhuma inscrição encontrada.'); return; }
                const text = encodeURIComponent(`Olá, efetuei o pagamento. Ref: ${enrollment.reference}. Nome: ${enrollment.name}. Curso: ${enrollment.course}. Total: Kz ${Number(enrollment.total).toLocaleString('pt-PT')}. Envio comprovativa em anexo.`);
                const phone = '244951474872';
                window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
            }
        </script>

        <!-- Password Modal for Manual Download -->
        <div id="passwordModal" class="password-modal">
            <div class="password-modal-content">
                <div class="password-modal-header">
                    <h3>📚 Obter Manual</h3>
                    <p>Preencha os seus dados para abrir o manual.</p>
                </div>
                <div id="passwordMessage" class="password-message" style="display: none;"></div>
                <form class="password-modal-form" onsubmit="return false;">
                    <div id="standardStageSelection" style="display: none;">
                        <label for="standardStageSelect">Etapa do Standard English</label>
                        <select id="standardStageSelect">
                            <option value="">Selecione a etapa...</option>
                            <option value="Standard 1">Standard 1</option>
                            <option value="Standard 2">Standard 2</option>
                            <option value="Standard 3">Standard 3</option>
                        </select>
                    </div>
                    <div id="manualSelectionGroup">
                        <label for="manualSelectionSelect">Tipo de Manual</label>
                        <select id="manualSelectionSelect">
                            <option value="">Selecione o manual...</option>
                        </select>
                    </div>
                    <div>
                        <label for="studyLeadName">Nome completo:</label>
                        <input type="text" id="studyLeadName" placeholder="Ex: João Silva" autocomplete="name" required>
                    </div>
                    <div>
                        <label for="studyLeadClass">Qual é o teu curso?</label>
                        <input type="text" id="studyLeadClass" placeholder="Ex: English Course" autocomplete="off" required>
                    </div>
                    <div>
                        <label for="studyLeadPhone">Número:</label>
                        <input type="tel" id="studyLeadPhone" placeholder="Ex: +244 951 474 872" autocomplete="tel" required>
                    </div>
                    <div>
                        <label for="studyLeadLocation">Sua localização:</label>
                        <input type="text" id="studyLeadLocation" placeholder="Ex: Luanda, Angola" autocomplete="address-level2" required>
                    </div>
                </form>
                <div class="password-modal-buttons">
                    <button type="button" onclick="verifyAndDownloadManual()">Abrir Manual</button>
                    <button type="button" onclick="closePasswordModal()">Cancelar</button>
                </div>
            </div>
        </div>
</body>
</html>

