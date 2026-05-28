     
        let currentSlideIndex = 0;
        let slideInterval;

        function showSlides(n) {
            const slides = document.querySelectorAll('.banner-slide');
            const dots = document.querySelectorAll('.dot');
            
            if (n >= slides.length) currentSlideIndex = 0;
            if (n < 1) currentSlideIndex = slides.length - 3;
            
            const offset = -currentSlideIndex * 100;
            document.getElementById('bannerSlider').style.transform = `translateX(${offset}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.remove('active');
                if (index === currentSlideIndex) {
                    dot.classList.add('active');
                }
            });
        }

        function currentSlide(n) {
            currentSlideIndex = n;
            clearInterval(slideInterval);
            showSlides(currentSlideIndex);
            startAutoSlide();
        }

        function nextSlide() {
            currentSlideIndex++;
            showSlides(currentSlideIndex);
        }

        function startAutoSlide() {
            slideInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        function bookCourse(courseName, coursePrice) {
            document.getElementById('courseName').value = courseName;
            document.getElementById('coursePrice').value = 'Kz ' + coursePrice.toFixed(2).replace('.', ',');
            const section = document.getElementById('agendamento');
            section.classList.add('show');
            setTimeout(() => {
                document.getElementById('scheduleDate').focus();
                section.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }

        function toggleOrderSection() {
            const section = document.getElementById('agendamento');
            section.classList.toggle('show');
            if (section.classList.contains('show')) {
                section.scrollIntoView({ behavior: 'smooth' });
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

            const message = `Olá! Gostaria de agendar uma aula.%0A%0A📚 Curso: ${course}%0A💵 Preço Mensal: ${price}%0A📅 Data: ${date}%0A⏰ Horário: ${time}%0A👤 Nome: ${name}%0A📧 Email: ${email}%0A📍 Município: ${municipality}${notes ? '%0A📝 Notas: ' + notes : ''}`;
            const whatsappUrl = `https://wa.me/244951474872?text=${message}`;

            window.open(whatsappUrl, '_blank');
        }

        // Iniciar slides automáticos
        startAutoSlide();

        // Scroll suave para menu
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'fast' });
                }
            });
        });

        // Function to handle navigation functionality
function openNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        sidenav.style.width = "60%";
        let closeBtn = document.getElementById("closeNavBtn");
        if (!closeBtn) {
            closeBtn = document.createElement("button");
            closeBtn.id = "closeNavBtn";
            closeBtn.textContent = "Fechar";
            closeBtn.style.fontWeight = "bold";
            closeBtn.style.position = "absolute";
            closeBtn.style.bottom = "10px";
            closeBtn.style.left = "10px";
            closeBtn.style.right = "10px";
            closeBtn.style.background = "transparent";
            closeBtn.style.color = "red";
            closeBtn.style.border = "none";
            closeBtn.style.fontSize = "24px";
            closeBtn.style.cursor = "pointer";
            closeBtn.onclick = closeNav;
            sidenav.appendChild(closeBtn);
        }
    } else {
        console.error('Sidenav element not found.');
    }
}
window.onload = function() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        sidenav.style.width = "0";
    }
};
function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        sidenav.style.width = "0";
    } else {
        console.error('Sidenav element not found.');
    }
};

        function showRegistrationAndPayment() {
            document.getElementById('agendamento').style.display = 'block';
            document.getElementById('agendamento').scrollIntoView({ behavior: 'smooth' });
        }
        
        function proceedToPayment() {
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const municipality = document.getElementById('municipality').value.trim();
            const scheduleDate = document.getElementById('scheduleDate').value;
            const scheduleTime = document.getElementById('scheduleTime').value;
            
            if (!name || !phone || !email || !municipality || !scheduleDate || !scheduleTime) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }
            
            document.getElementById('pagamento').style.display = 'block';
            document.getElementById('pagamento').scrollIntoView({ behavior: 'smooth' });
        }

        /**
         * SISTEMA DE ENVIO DE PDFs AOS CLIENTES
         * Gerencia o envio automático de documentos após compra confirmada
         */

        // Mapeamento de cursos com seus PDFs
        const coursePDFMap = {
            'Inglês Básico': [
                { name: 'Manual_Ingles_Basico.pdf', url: 'https://seu-servidor.com/pdfs/Manual_Ingles_Basico.pdf' },
                { name: 'Exercicios_Ingles.pdf', url: 'https://seu-servidor.com/pdfs/Exercicios_Ingles.pdf' }
            ],
            'Francês Intermediário': [
                { name: 'Manual_Frances_Intermediario.pdf', url: 'https://seu-servidor.com/pdfs/Manual_Frances_Intermediario.pdf' }
            ],
            'Alemão Avançado': [
                { name: 'Manual_Alemao_Avancado.pdf', url: 'https://seu-servidor.com/pdfs/Manual_Alemao_Avancado.pdf' }
            ],
            'Espanhol Básico': [
                { name: 'Manual_Espanhol_Basico.pdf', url: 'https://seu-servidor.com/pdfs/Manual_Espanhol_Basico.pdf' }
            ]
        };

        // Armazenar dados de compra no localStorage
        function savePurchaseData(purchaseData) {
            const purchases = JSON.parse(localStorage.getItem('purchases')) || [];
            purchases.push({
                ...purchaseData,
                timestamp: new Date().toISOString(),
                id: Date.now()
            });
            localStorage.setItem('purchases', JSON.stringify(purchases));
            return purchaseData;
        }

        // Recuperar PDFs relacionados ao curso
        function getPDFsForCourse(courseName) {
            return coursePDFMap[courseName] || [];
        }

        // Enviar PDFs por email usando FormSubmit.co (serviço gratuito) ou backend próprio
        async function sendPDFsViaEmail(email, courseName, pdfList) {
            try {
                const pdfLinks = pdfList.map(pdf => `${pdf.name}: ${pdf.url}`).join('\n');
                
                const emailData = {
                    email: email,
                    subject: `📚 Seus Documentos do Curso: ${courseName}`,
                    message: `
Olá,

Parabéns por se inscrever no curso ${courseName}! 🎉

Segue em anexo os documentos e materiais do seu curso:

${pdfLinks}

Bons estudos!

Atenciosamente,
S.M.S - Escola de Linguas & Habilidades
                    `
                };

                // Usando FormSubmit.co (serviço gratuito - configure antes em https://formsubmit.co)
                const response = await fetch('https://formsubmit.co/saraswatimaaschool@gmail.com', {
                    method: 'POST',
                    body: JSON.stringify(emailData),
                    headers: { 'Content-Type': 'application/json' }
                });

                if (response.ok) {
                    console.log('PDFs enviados com sucesso para:', email);
                    return true;
                }
            } catch (error) {
                console.error('Erro ao enviar PDFs:', error);
            }
            return false;
        }

        // Enviar PDFs por WhatsApp (com links)
        function sendPDFsViaWhatsApp(phone, courseName, pdfList) {
            const pdfMessage = pdfList.map(pdf => `📄 ${pdf.name}: ${pdf.url}`).join('\n');
            const message = encodeURIComponent(
                `🎉 *Seus Documentos Estão Prontos!*\n\n` +
                `Curso: ${courseName}\n\n` +
                `${pdfMessage}\n\n` +
                `Baixe seus materiais através dos links acima!\n\n` +
                `Qualquer dúvida, estamos à disposição!`
            );
            window.open(`https://wa.me/244951474872?text=${message}`, '_blank');
        }

        // Exibir PDFs no navegador
        function displayPDFsInBrowser(courseName, pdfList) {
            const pdfContainer = document.querySelector('.manual-pdf-area');
            if (!pdfContainer) return;

            let htmlContent = `<h4>Documentos do Curso: ${courseName}</h4>`;
            
            pdfList.forEach(pdf => {
                htmlContent += `
                    <div class="pdf-item" style="margin: 15px 0; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
                        <a href="${pdf.url}" target="_blank" download class="pdf-link" style="color: #667eea; text-decoration: none; font-weight: bold;">
                            <i class="fas fa-file-pdf"></i> ${pdf.name}
                        </a>
                    </div>
                `;
            });

            pdfContainer.innerHTML = htmlContent;
            pdfContainer.classList.add('visible');
        }

        // Função principal: Submeter dados e enviar PDFs
        function submitAllDataVia(method) {
            const courseName = document.getElementById('courseName').value;
            const coursePrice = document.getElementById('coursePrice').value;
            const scheduleDate = document.getElementById('scheduleDate').value;
            const scheduleTime = document.getElementById('scheduleTime').value;
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const municipality = document.getElementById('municipality').value;
            const notes = document.getElementById('notes').value;
            const proofFile = document.getElementById('proofAttachment').files[0];
            
            if (!name || !phone || !email || !municipality || !scheduleDate || !scheduleTime) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }
            
            if (!proofFile) {
                alert('Por favor, anexe o comprovante de pagamento!');
                return;
            }

            // Obter PDFs do curso
            const pdfList = getPDFsForCourse(courseName);

            // Salvar dados da compra
            const purchaseData = {
                courseName,
                coursePrice,
                scheduleDate,
                scheduleTime,
                name,
                phone,
                email,
                municipality,
                notes,
                method
            };
            savePurchaseData(purchaseData);

            // Exibir PDFs no navegador
            if (pdfList.length > 0) {
                displayPDFsInBrowser(courseName, pdfList);
            }

            if (method === 'whatsapp') {
                const message = encodeURIComponent(`*S.M.S - INSCRIÇÃO COMPLETA*\n\n👤 Nome: ${name}\n📱 Telefone: ${phone}\n📧 Email: ${email}\n🏘️ Município: ${municipality}\n📚 Curso: ${courseName}\n💵 Preço: ${coursePrice}\n📅 Data: ${scheduleDate}\n⏰ Horário: ${scheduleTime}${notes ? '\n📝 Notas: ' + notes : ''}`);
                window.location.href = `https://api.whatsapp.com/send?phone=244951474872&text=${message}`;
                
                // Enviar PDFs via WhatsApp após 1 segundo
                if (pdfList.length > 0) {
                    setTimeout(() => {
                        sendPDFsViaWhatsApp(phone, courseName, pdfList);
                    }, 1000);
                }
            } else if (method === 'email') {
                const subject = encodeURIComponent('S.M.S - INSCRIÇÃO COMPLETA');
                const body = encodeURIComponent(`S.M.S - INSCRIÇÃO COMPLETA\n\n👤 Nome: ${name}\n📱 Telefone: ${phone}\n📧 Email: ${email}\n🏘️ Município: ${municipality}\n📚 Curso: ${courseName}\n💵 Preço: ${coursePrice}\n📅 Data: ${scheduleDate}\n⏰ Horário: ${scheduleTime}${notes ? '\n📝 Notas: ' + notes : ''}`);
                window.location.href = `mailto:saraswatimaaschool@gmail.com?subject=${subject}&body=${body}`;
                
                // Enviar PDFs por email após 1 segundo
                if (pdfList.length > 0) {
                    setTimeout(() => {
                        sendPDFsViaEmail(email, courseName, pdfList);
                    }, 1000);
                }
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

        // Scroll to top button functionality
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        if (scrollToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                    scrollToTopBtn.style.display = 'block';
                } else {
                    scrollToTopBtn.style.display = 'none';
                }
            });
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
