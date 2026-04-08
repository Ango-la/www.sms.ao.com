# SMS Portal

## Overview
The SMS Portal is a web application that allows users to manage their SMS services efficiently. Users can send, receive, and manage their SMS messages through a user-friendly interface.

## Features
- **User Authentication:** Secure user login and registration.
- **SMS Management:** Send, receive, and manage SMS messages.
- **User Dashboard:** Real-time statistics and user-friendly analytics.
- **Support:** Access to customer support and troubleshooting guides.

## Security Enhancements
- **HTTPS:** All connections to the SMS Portal are secured through HTTPS to ensure data privacy.
- **Input Validation:** Sanitize and validate user inputs to prevent XSS and SQL injection attacks.
- **Session Management:** Implement secure session management policies (e.g., setting HttpOnly and Secure flags for cookies).
- **Rate Limiting:** Implement rate limiting for API endpoints to prevent abuse.

## Performance Improvements
- **Caching:** Use browser and server-side caching to enhance loading speeds.
- **Minification:** Compress and minify CSS and JavaScript files to reduce load time.
- **Asynchronous Loading:** Load resources asynchronously to minimize render-blocking resources.

## Accessibility Features
- **Semantic HTML:** Use proper HTML elements to enhance document structure and accessibility.
- **ARIA Roles:** Implement ARIA roles for better screen reader compatibility.
- **Keyboard Navigation:** Ensure all interactive elements are accessible via keyboard.
- **Color Contrast:** Maintain adequate contrast between text and background for readability.

# SMS Portal

## Overview
The SMS Portal is a web application that allows users to manage their SMS services efficiently. Users can send, receive, and manage their SMS messages through a user-friendly interface.

## Features
- **User Authentication:** Secure user login and registration.
- **SMS Management:** Send, receive, and manage SMS messages.
- **User Dashboard:** Real-time statistics and user-friendly analytics.
- **Support:** Access to customer support and troubleshooting guides.

## Security Enhancements
- **HTTPS:** All connections to the SMS Portal are secured through HTTPS to ensure data privacy.
- **Input Validation:** Sanitize and validate user inputs to prevent XSS and SQL injection attacks.
- **Session Management:** Implement secure session management policies (e.g., setting HttpOnly and Secure flags for cookies).
- **Rate Limiting:** Implement rate limiting for API endpoints to prevent abuse.

## Performance Improvements
- **Caching:** Use browser and server-side caching to enhance loading speeds.
- **Minification:** Compress and minify CSS and JavaScript files to reduce load time.
- **Asynchronous Loading:** Load resources asynchronously to minimize render-blocking resources.

## Accessibility Features
- **Semantic HTML:** Use proper HTML elements to enhance document structure and accessibility.
- **ARIA Roles:** Implement ARIA roles for better screen reader compatibility.
- **Keyboard Navigation:** Ensure all interactive elements are accessible via keyboard.
- **Color Contrast:** Maintain adequate contrast between text and background for readability.
<!DOCTYPE html> 
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="S.M.S - Escola de Linguas & Habilidades">
    <meta name="description" content="S.M.S - Escola de Linguas & Habilidades - Aprenda idiomas e desenvolva novas competências. Agende suas aulas hoje!">
    <meta name="keywords" content="Escola de Linguas, Idiomas, Habilidades, Cursos, Aprendizado, Inglês, Francês, Alemão, Espanhol">
    <meta name="robots" content="index, follow">
    <title>Saraswati Maa Mind School-Experience</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="Style.css">
    <link rel="icon" type="image/png" href="Image/favicon.jpg">
    <script src="script.js" defer></script>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'pt', includedLanguages: 'en,fr,es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
        }
    </script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</head>
<body>
    <!-- HEADER COM MENU -->
    <header>
        <div class="header-container">
            <a href="#galeria" class="logo" ><img src="Image/favicon2.jpg" alt="S.M.S - Escola de Linguas & Habilidades" class="logo-official"></a>
            <h1 class="store-name">S.M.S - Escola de Linguas & Habilidades</h1>
            <nav>
                <ul>
                    <li><div id="google_translate_element" style="margin: 0 15px;"></div></li>
                    <li><a href="#cursos">Cursos</a></li>
                    <li><a href="#galeria">Galeria</a></li>
                    <li>  <div class="sidebar3">
                <div id="mySidenav" class="sidenav">
                    <!-- TERMOS E PRIVACIDADE -->
    <section class="terms-privacy" id="termos-privacidade">
        <div class="terms-container">
            <h2>Termos de Serviço e Privacidade</h2>
            
            <div class="terms-content">
                <h3>1. Termos de Serviço</h3>
                <p>Bem-vindo à S.M.S - Escola de Linguas & Habilidades. Ao usar nosso site, você concorda com os seguintes termos e condições:</p>
                <ul>
                    <li>Todas as aulas são agendadas conforme disponibilidade</li>
                    <li>Os preços estão sujeitos a alterações sem aviso prévio</li>
                    <li>Os alunos são responsáveis pela precisão das informações fornecidas no agendamento</li>
                    <li>Reservamos o direito de recusar ou cancelar qualquer agendamento</li>
                    <li>As imagens dos cursos são apenas ilustrativas</li>
                </ul>

                <h3>2. Política de Privacidade</h3>
                <p>A S.M.S - Escola de Linguas & Habilidades respeita sua privacidade. Informamos como coletamos e usamos seus dados:</p>
                <ul>
                    <li><strong>Coleta de Dados:</strong> Coletamos informações pessoais como nome, telefone, endereço e email quando você agenda uma aula</li>
                    <li><strong>Uso de Dados:</strong> Seus dados são usados exclusivamente para processar agendamentos e melhorar nossos serviços</li>
                    <li><strong>Proteção de Dados:</strong> Mantemos suas informações seguras e confidenciais</li>
                    <li><strong>Compartilhamento:</strong> Não compartilhamos seus dados com terceiros sem sua autorização</li>
                    <li><strong>Cookies:</strong> Nosso site pode usar cookies para melhorar sua experiência</li>
                </ul>

                <h3>3. Direitos do Aluno</h3>
                <p>Você tem direito a:</p>
                <ul>
                    <li>Receber informações claras sobre os cursos</li>
                    <li>Cancelamento de aulas dentro do prazo estabelecido</li>
                    <li>Acesso às políticas de aulas e cancelamento</li>
                    <li>Contato com nosso suporte ao cliente</li>
                </ul>

                <h3>4. Limitação de Responsabilidade</h3>
                <p>A S.M.S - Escola de Linguas & Habilidades não se responsabiliza por danos indiretos ou consequentes resultantes do uso de nossos serviços ou aulas.</p>

                <h3>5. Alterações nos Termos</h3>
                <p>Reservamos o direito de alterar estes termos a qualquer momento. Recomendamos que revise esta página regularmente.</p>
            </div>
        </div>
    </section>
                </div>
            </div>
                <span style="font-size: 15px; cursor: pointer;" onclick="openNav()">&#9776; Outros</span>
            </div></li>
                </ul>
            </nav>
        </div>

    </header>
    <!-- BANNER COM SLIDES -->
    <section class="banner">
        <div class="banner-slider" id="bannerSlider">
            <div class="banner-slide">
                <img src="Image/bannersms.png " alt="S.M.S Escola de Linguas" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="banner-slide">
                <div>
                    <h1 style="font-size: 36px; margin-bottom: 10px;color: rgb(134, 238, 252);">SARASWATI MAA MIND SCHOOL</h1>
                    <p style="font-size: 24px; margin-top: 10px; color: rgb(134, 233, 246);">Eduque a mente conecta o mundo</p>
                     <p style="font-size: 20px; margin-top: 10px; color: rgb(134, 240, 254);">Seja bem vindo á S.M.S</p>
                </div>
            </div>
            <div class="banner-slide">
                <div>
                    <h1>Cursos Intensivos</h1>
                    <p style="font-size: 24px; margin-top: 10px;">Inglês por Estagío e muito Mais</p>
                </div>
            </div>
            <div class="banner-slide">
                <div>
                    <h1>Agende Sua Aula</h1>
                    <p style="font-size: 24px; margin-top: 10px;">WhatsApp para Contacto</p>
                </div>
            </div>
        </div>
        <div class="banner-dots">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
        </div>
    </section>
    <!-- DASHBOARD COM CURSOS -->
    <section class="dashboard" id="cursos">   
        <h2 class="section-title">Nossos Cursos</h2>
        <div class="products-grid">
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop" alt="Inglês" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">ESTAGÍO 1</div>
                    <p> Duração: 4 meses, 2 horas de Aulas, </p>
                    <div class="product-price">Kz 25.000,00/mês</div>
                    <div class="product-description">o portal da eficacia linguistica, introdução,conversação,dialógica,em 4 meses nós garantimos a fala dos nossos Alunos </div>
                    <button class="buy-button" onclick="bookCourse('ESTAGIO 1', 25000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Francês" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">ESTAGÍO 2</div>
                                        <p> Duração: 4,5 meses, 2 horas de Aulas, </p>
                    <div class="product-price">Kz 35.000,00/mês</div>
                    <div class="product-description">O Monge da lingua, Conversação sem bloqueios, audição aperfeiçoada,Super calmo pratico numa conversa. </div>
                    <button class="buy-button" onclick="bookCourse('ESTAGÍO 2', 35000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" alt="Espanhol" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">ESTAGÍO 3</div>
                    <p> Duração: por consulta,(Online) 1:30 horas de Aulas</p>
                    <div class="product-price">Kz 20.000,00/mês</div>
                    <div class="product-description">Domine o mercado de trabalho no mundo das Linguas com á S.M.S</div>
                    <button class="buy-button" onclick="bookCourse('ESTAGÍO 3', 20000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop" alt="Alemão" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">PREPARATÓRIO</div>
                    <p> Duração: por consulta,(Online) 1:30 horas de Aulas</p>
                    <div class="product-price">Kz 15.000,00/Aula</div>
                    <div class="product-description">Curso preparatório para o mercado de trabalho ou Universidade</div>
                    <button class="buy-button" onclick="bookCourse('PREPARATÓRIO', 15000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop" alt="Habilidades de Comunicação" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">HABILIDADES DE COMUNICAÇÃO</div>
                    <p> Duração: por consulta,(Online) 1:30 horas de Aulas</p>
                    <div class="product-price">Kz 12.000,00/Aula</div>
                    <div class="product-description">Desenvolva suas habilidades interpessoais</div>
                    <button class="buy-button" onclick="bookCourse('Habilidades de Comunicação', 12000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Programação Básica" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">ACELERAÇÃO DA FLUÊNCIA NA FALA E AUDIÇÃO</div>
                    <p> Duração: por consulta,(Online) 1:30 horas de Aulas</p>
                    <div class="product-price">Kz 25.000,00/mês</div>
                    <div class="product-description">Introdução à aceleração da fluência na fala e audição como um nativo</div>
                    <button class="buy-button" onclick="bookCourse('Aceleração da fluência na Fala e Audição', 25000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>
        </div>
    </section>

    <!-- FORMULÁRIO PARA INSCRIÇÃO -->
    <section id="agendamento" style="display: none;">
        <div class="whatsapp-section">
            <h2>📱 Inscrever-se</h2>
            <p style="color: #666; margin-bottom: 20px;">Preencha todos os campos abaixo para inscrever-se em seu curso ou entre em contato conosco</p>
            
            <div class="form-group">
                <label for="courseName">📚 Curso:</label>
                <input type="text" id="courseName" placeholder="Nome do curso" readonly style="background-color: #f0f0f0;">
            </div>

            <div class="form-group">
                <label for="coursePrice">💵 Preço Mensal:</label>
                <input type="text" id="coursePrice" placeholder="Preço do curso" readonly style="background-color: #f0f0f0;">
            </div>

            <div class="form-group">
                <label for="scheduleDate">📅 Data Preferida:</label>
                <input type="date" id="scheduleDate" required>
            </div>

            <div class="form-group">
                <label for="scheduleTime">⏰ Horário Preferido:</label>
                <select id="scheduleTime" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; font-size: 16px;">
                    <option value="">Selecione um horário...</option>
                    <option value="08:00">08:00</option>
                    <option value="10:00">10:00</option>
                    <option value="14:00">14:00</option>
                    <option value="16:00">16:00</option>
                    <option value="18:00">18:00</option>
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
                <input type="email" id="email" placeholder="saraswatimaaschool@gmailcom" required>
            </div>

            <div class="form-group">
                <label for="municipality">🏘️ Município (Localização):</label>
                <select id="municipality" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; font-size: 16px;">
                    <option value="">Selecione um município...</option>
                    <option value="Luanda">Luanda</option>
                    <option value="Bengo">Rangel</option>
                    <option value="Benguela">Viana</option>
                    <option value="Bié">Zango 0,1,2,3</option>
                    <option value="Cabinda">Cazenga</option>
                    <option value="Cuando Cubango">Sambizanga</option>
                    <option value="Cuanza Norte">Ingombota</option>
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
                </select>
            </div>

            <div class="form-group">
                <label for="notes">📝 Observações:</label>
                <textarea id="notes" placeholder="Alguma observação adicional?" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; font-size: 16px; resize: vertical; min-height: 80px;"></textarea>
            </div>
            <div style="font-size: 14px; color: #666; margin-bottom: 20px;">
                <i>Após clicar no botão abaixo, você será redirecionado para confirmar a Inscrição.</i>
            </div>
            
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <button class="whatsapp-button" onclick="proceedToPayment()">
                    💬 Finalizar a Inscrição
                </button>
            </div>
        </div>
    </section>

    <!-- DADOS BANCÁRIOS E PAGAMENTO -->
    <section class="payment-section" id="pagamento" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; margin-top: 40px; display: none;">
        <div class="payment-container" style="max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px;">💳 Dados Bancários & Comprovante de Pagamento</h2>
            
            <!-- DADOS BANCÁRIOS -->
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #667eea;">
                <h3 style="color: #667eea; margin-bottom: 15px;">📋 Dados Bancários</h3>
                <div style="display: grid; gap: 15px;">
                    <div>
                        <label style="font-weight: bold; color: #333;">Titulare da Conta:</label>
                        <p style="margin: 5px 0; color: #666;">S.M.S - Escola de Linguas & Habilidades</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <label style="font-weight: bold; color: #333;">Banco:</label>
                            <p style="margin: 5px 0; color: #666;">BAI (Banco Angolano de Investimento )</p>
                        </div>
                        <div>
                            <label style="font-weight: bold; color: #333;">Número da Conta:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">123456789</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <label style="font-weight: bold; color: #333;">IBAN:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">AO06.0001.1234.5678.9012.1</p>
                        </div>
                        <div>
                            <label style="font-weight: bold; color: #333;">Referência:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">SMS-ESCUELA-2025</p>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 15px; padding: 10px; background: #fff3cd; border-radius: 5px; color: #856404;">
                    <strong>⚠️ Importante:</strong> Após efetuar o pagamento, envie o comprovante para confirmar sua inscrição.
                </div>
            </div>
            <!-- FORMULÁRIO DE ENVIO DE COMPROVANTE -->
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #764ba2;">
                <h3 style="color: #764ba2; margin-bottom: 20px;">📤 Enviar Comprovante de Pagamento</h3>
                <div class="form-group" style="margin-top: 15px;">
                    <label for="proofAttachment">📎 Anexar Comprovante (Imagem/PDF):</label>
                    <input type="file" id="proofAttachment" accept="image/*,.pdf" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; font-size: 14px;">
                </div>

                <div style="display: flex; gap: 10px; margin-top: 25px; flex-wrap: wrap;">
                    <button style="flex: 1; padding: 12px 20px; background: #25D366; color: white; border: none; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: background 0.3s;" onclick="submitAllDataVia('whatsapp')" onmouseover="this.style.background='#20BA58'" onmouseout="this.style.background='#25D366'">
                        <i class="fab fa-whatsapp"></i> Enviar Inscrição via WhatsApp
                    </button>
                    <button style="flex: 1; padding: 12px 20px; background: #EA4335; color: white; border: none; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: background 0.3s;" onclick="submitAllDataVia('email')" onmouseover="this.style.background='#D33425'" onmouseout="this.style.background='#EA4335'">
                        <i class="fas fa-envelope"></i> Enviar Inscrição via Email
                    </button>
                </div>
                <div style="font-size: 12px; color: #666; margin-top: 15px; text-align: center;">
                    <i>Todos os dados serão enviados junto com o comprovante de pagamento.</i>
                </div>
            </div>
        </div>
    </section>
    <!-- GALERIA DE FOTOS -->
    <section class="gallery" id="galeria">
        <h2 class="section-title">Informa-te Aqui!</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="Image/Pub1.jpg" alt="Aula de Inglês" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Estamos abertos para Inscrições Online</h3>
                </div>
            </div>
            <div class="gallery-item">
                <img src="Image/Sala de aulas.jpg " alt="Sala de Aula" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Sala de Aula Moderna</h3>
                </div>
            </div>
            <div class="gallery-item">
                <img src="Image/Pub2.jpg" alt="Estudantes" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Somos a sua família de aprendizagem</h3>
                </div>
            </div>
            <div class="gallery-item">
                <img src="Image/Flayer1.jpg " alt="Materiais" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Temos uma equipe qualificada</h3>
                </div>
            </div>
            <div class="gallery-item">
                <img src="Image/Flayer3.jpg " alt="Programação" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Aula de Programação</h3>
                </div>
            </div>
            <div class="gallery-item">
                <img src="Image/Anuncio1.jpg " alt="Grupo de Estudo" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Estamos Contratando!</h3>
                </div>
            </div>
        </div>
    </section>
    <!-- PARCEIROS SECTION -->
    <section id="parceiros" class="parceiros-section">
        <h2 class="section-title">Nossos Parceiros</h2>
        <div class="parceiros-gallery" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 30px;">
            <div class="parceiro-item" style="border: 4px solid #FFD700; border-radius: 50%; padding: 15px; display: flex; align-items: center; justify-content: center; width: 150px; height: 150px;">
                <img src="Image/parceiro1.jpg " alt="Parceiro 1" class="parceiro-logo" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
            </div>
            <div class="parceiro-item" style="border: 4px solid #FFD700; border-radius: 50%; padding: 15px; display: flex; align-items: center; justify-content: center; width: 150px; height: 150px;">
                <img src="Image/parceiro2.jpg " alt="Parceiro 2" class="parceiro-logo" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
            </div>
            <div class="parceiro-item" style="border: 4px solid #FFD700; border-radius: 50%; padding: 15px; display: flex; align-items: center; justify-content: center; width: 150px; height: 150px;">
                <img src="Image/favicon1.jpg" alt="Parceiro 3" class="parceiro-logo" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
            </div>
            <div class="parceiro-item" style="border: 4px solid #FFD700; border-radius: 50%; padding: 15px; display: flex; align-items: center; justify-content: center; width: 150px; height: 150px;">
                <img src="Image/parceiro4.jpg " alt="Parceiro 4" class="parceiro-logo" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
            </div>
            <div class="parceiro-item" style="border: 4px solid #FFD700; border-radius: 50%; padding: 15px; display: flex; align-items: center; justify-content: center; width: 150px; height: 150px;">
                <img src="Image/parceiro5.jpg " alt="Parceiro 5" class="parceiro-logo" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
            </div>
            <div class="parceiro-item" style="border: 4px solid #FFD700; border-radius: 50%; padding: 15px; display: flex; align-items: center; justify-content: center; width: 150px; height: 150px;">
                <img src="Image/parceiro6.jpg " alt="Parceiro 6" class="parceiro-logo" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover;">
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer id="contato"> 
        <section id="contato-social">  
            <p>Visite as nossas redes sociais</p>
        <div class="social-media">
            <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.whatsapp.com" target="_blank"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.pinterest.com" target="_blank"><i class="fab fa-pinterest"></i></a>
            <a href="https://www.snapchat.com" target="_blank"><i class="fab fa-snapchat"></i></a>
            <a href="https://www.tiktok.com" target="_blank"><i class="fab fa-tiktok"></i></a>
            <a href="https://www.reddit.com" target="_blank"><i class="fab fa-reddit"></i></a>
            <a href="FAQ.html" target="_blank">FAQ</a>
        </div>
        </section>
        <section id="contato-info" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
            <p><strong>📞 Contato da Recepção:</strong></p>
            <p style="font-size: 18px; margin: 10px 0;"><a href="tel:+244951474872" style="color: #25D366; text-decoration: none; font-weight: bold;">S.M.S</a></p>
            <p><strong>🕐 Horário de Atendimento:</strong> Segunda a Sexta, 08:00 - 18:00</p>
        </section>
        <p style="margin-top: 20px;">&copy; 2026 S.M.S - Escola de Linguas & Habilidades - Todos os direitos reservados.</p>
        <button id="scrollToTopBtn" style="display: none; position: fixed; bottom: 30px; right: 30px; background-color: #FFD700; color: #000; border: none; padding: 15px 20px; border-radius: 50%; cursor: pointer; font-size: 24px; z-index: 99; font-weight: bold;">↑</button>

    </footer>
</body>
</html>
