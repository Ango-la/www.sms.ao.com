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

// FUNÇÕES DO MODAL DE COMPRA
function openPurchaseModal(courseName, coursePrice) {
    document.getElementById('purchaseModal').classList.add('show');
    document.getElementById('modalCourseName').textContent = courseName;
    document.getElementById('modalCoursePrice').textContent = 'Kz ' + coursePrice.toFixed(2).replace('.', ',');
    
    // Armazenar dados do curso para uso posterior
    document.getElementById('purchaseModal').dataset.courseName = courseName;
    document.getElementById('purchaseModal').dataset.coursePrice = coursePrice;
    
    // Prevenir scroll da página
    document.body.style.overflow = 'hidden';
}

function closePurchaseModal() {
    document.getElementById('purchaseModal').classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // Limpar formulário
    document.getElementById('purchaseForm').reset();
    document.getElementById('modalFileName').style.display = 'none';
}

// Fechar modal ao clicar fora dele
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('purchaseModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closePurchaseModal();
            }
        });
    }
    
    // Manipular upload de arquivo
    const fileInput = document.getElementById('modalProofFile');
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const fileName = this.files[0]?.name || '';
            if (fileName) {
                document.getElementById('modalFileNameText').textContent = fileName;
                document.getElementById('modalFileName').style.display = 'flex';
            }
        });
        
        // Drag and drop
        const fileUploadArea = document.querySelector('.purchase-file-upload');
        if (fileUploadArea) {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                fileUploadArea.addEventListener(eventName, preventDefaults, false);
            });
            
            function preventDefaults(e) {
                e.preventDefault();
                e.stopPropagation();
            }
            
            ['dragenter', 'dragover'].forEach(eventName => {
                fileUploadArea.addEventListener(eventName, highlight, false);
            });
            
            ['dragleave', 'drop'].forEach(eventName => {
                fileUploadArea.addEventListener(eventName, unhighlight, false);
            });
            
            function highlight(e) {
                fileUploadArea.style.borderColor = '#764ba2';
                fileUploadArea.style.backgroundColor = 'rgba(102, 126, 234, 0.15)';
            }
            
            function unhighlight(e) {
                fileUploadArea.style.borderColor = '#667eea';
                fileUploadArea.style.backgroundColor = 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(240, 147, 251, 0.05) 100%)';
            }
            
            fileUploadArea.addEventListener('drop', handleDrop, false);
            
            function handleDrop(e) {
                const dt = e.dataTransfer;
                const files = dt.files;
                fileInput.files = files;
                
                // Disparar evento de mudança
                const event = new Event('change', { bubbles: true });
                fileInput.dispatchEvent(event);
            }
        }
    }
    
    // Iniciar slides automáticos
    startAutoSlide();
});

// Submeter formulário de compra
function submitPurchaseFormVia(method) {
    const name = document.getElementById('modalName').value.trim();
    const email = document.getElementById('modalEmail').value.trim();
    const phone = document.getElementById('modalPhone').value.trim();
    const municipality = document.getElementById('modalMunicipality').value.trim();
    const date = document.getElementById('modalDate').value;
    const time = document.getElementById('modalTime').value;
    const notes = document.getElementById('modalNotes').value.trim();
    const proofFile = document.getElementById('modalProofFile').files[0];
    const courseName = document.getElementById('purchaseModal').dataset.courseName;
    const coursePrice = document.getElementById('purchaseModal').dataset.coursePrice;
    
    // Validação
    if (!name || !email || !phone || !municipality || !date || !time) {
        alert('⚠️ Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    if (!proofFile) {
        alert('⚠️ Por favor, anexe o comprovante de pagamento!');
        return;
    }
    
    // Validar tamanho do arquivo (5MB)
    if (proofFile.size > 5 * 1024 * 1024) {
        alert('⚠️ O arquivo é muito grande. Máximo 5MB.');
        return;
    }
    
    // Montar mensagem
    const message = `*S.M.S - FORMULÁRIO DE COMPRA COMPLETO*

👤 *Nome:* ${name}
📧 *Email:* ${email}
📱 *Telefone:* ${phone}
🏘️ *Município:* ${municipality}
📚 *Curso:* ${courseName}
💵 *Preço:* Kz ${coursePrice.toFixed(2).replace('.', ',')}
📅 *Data da Aula:* ${date}
⏰ *Horário:* ${time}
📝 *Observações:* ${notes || 'Nenhuma'}
📄 *Comprovante:* Anexado`;
    
    if (method === 'whatsapp') {
        const whatsappMessage = encodeURIComponent(message);
        window.open(`https://wa.me/244951474872?text=${whatsappMessage}`, '_blank');
    } else if (method === 'email') {
        const subject = encodeURIComponent('S.M.S - Formulário de Compra');
        const body = encodeURIComponent(message);
        window.location.href = `mailto:saraswatimaaschool@gmail.com?subject=${subject}&body=${body}`;
    }
    
    // Fechar modal após 500ms
    setTimeout(() => {
        closePurchaseModal();
        alert('✅ Seu pedido foi enviado! Em breve entraremos em contato.');
    }, 500);
}

// Scroll suave para menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navegação do sidebar
function openNav() {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
        sidenav.style.width = '60%';
    }
}

function closeNav() {
    const sidenav = document.getElementById('mySidenav');
    if (sidenav) {
        sidenav.style.width = '0';
    }
}

// Links do sidebar
document.querySelectorAll('.sidenav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeNav();
    });
});

// Responsividade do sidebar
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeNav();
    }
});