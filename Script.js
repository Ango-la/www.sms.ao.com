    
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

            const message = `Olá! Gostaria de agendar uma aula.%0A%0A📚 Curso: ${course}%0A💵 Preço Mensal: ${price}%0A📅 Data: ${date}%0A⏰ Horário: ${time}%0A👤 Nome: ${name}%0A📧 Email: ${email}%0A📱 WhatsApp: ${phone}%0A🏘️ Município: ${municipality}%0A📝 Observações: ${notes}`;
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
            
            const formData = new FormData();
            formData.append('courseName', courseName);
            formData.append('coursePrice', coursePrice);
            formData.append('scheduleDate', scheduleDate);
            formData.append('scheduleTime', scheduleTime);
            formData.append('name', name);
            formData.append('phone', phone);
            formData.append('email', email);
            formData.append('municipality', municipality);
            formData.append('notes', notes);
            formData.append('proofAttachment', proofFile);
            formData.append('method', method);
            
            if (method === 'whatsapp') {
                const message = encodeURIComponent(`*S.M.S - INSCRIÇÃO COMPLETA*\n\n👤 Nome: ${name}\n📱 Telefone: ${phone}\n📧 Email: ${email}\n🏘️ Município: ${municipality}\n📚 Curso: ${courseName}\n💵 Preço: ${coursePrice}\n📅 Data: ${scheduleDate}\n⏰ Horário: ${scheduleTime}\n📝 Observações: ${notes}\n\n✅ Comprovante de pagamento anexado`);
                window.location.href = `https://api.whatsapp.com/send?phone=244951474872&text=${message}`;
            } else if (method === 'email') {
                const subject = encodeURIComponent('S.M.S - INSCRIÇÃO COMPLETA');
                const body = encodeURIComponent(`S.M.S - INSCRIÇÃO COMPLETA\n\n👤 Nome: ${name}\n📱 Telefone: ${phone}\n📧 Email: ${email}\n🏘️ Município: ${municipality}\n📚 Curso: ${courseName}\n💵 Preço: ${coursePrice}\n📅 Data: ${scheduleDate}\n⏰ Horário: ${scheduleTime}\n📝 Observações: ${notes}\n\n✅ Comprovante de pagamento em anexo`);
                window.location.href = `mailto:saraswatimaaschool@gmail.com?subject=${subject}&body=${body}`;
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
        