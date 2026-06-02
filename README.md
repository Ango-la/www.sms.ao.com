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
    <!-- Título da página, utilizado em navegadores, pesquisas e resultados de mecanismos de busca -->
    <title>Saraswati MAA Mind School - Aprenda com Profissionais Experientes</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="Image/favicon.jpg">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="Script.js" defer></script>
<style>
    /* RESET E ESTILIZAÇÃO GLOBAL */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
            background-size: 400% 400%;
            animation: fadeIn 1s ease-in, gradientShift 15s ease infinite;
            position: relative; }
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="10" y="50" font-size="12" opacity="0.03" fill="black">📚</text></svg>'),
                url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="50" y="50" font-size="12" opacity="0.03" fill="black">🌍</text></svg>'),
                url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text x="80" y="50" font-size="12" opacity="0.03" fill="black">👨‍🎓</text></svg>');
            background-size: 300px 300px, 350px 350px, 400px 400px;
            background-position: 0 0, 40px 60px, 130px 270px;
            animation: slide 20s linear infinite;
            pointer-events: none;
            z-index: -1; }
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; } }
        @keyframes slide {
            0% { background-position: 0 0, 40px 60px, 130px 270px; }
            100% { background-position: 300px 300px, 340px 360px, 430px 570px; } }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; } }

        /* TICKER - SCROLLING TEXT */
        .ticker-wrapper {
            background: linear-gradient(90deg, #764ba2 0%, #667eea 50%, #4facfe 100%);
            color: white;
            padding: 12px 0;
            overflow: hidden;
            position: relative;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            width: 100%;}
            t
        .ticker-content {
            display: flex;
            animation: scroll-left 40s linear infinite;
            white-space: nowrap;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 1px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        .ticker-item {
            padding: 0 30px;
            display: inline-flex;
            align-items: center; }
        .ticker-item::before {
            content: '✦';
            margin-right: 15px;
            color: #f093fb;  }
        @keyframes scroll-left {
            0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(-100%);  }}
        /* HEADER E MENU */
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            color: white;
            padding: 20px 0;
            box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
            position: sticky;
            top: 0;
            z-index: 100;
            backdrop-filter: blur(10px);
            border-bottom: 3px solid rgba(255, 255, 255, 0.2); }
        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px;
            font-weight: bold;
            gap: 16px;
            flex-wrap: wrap;
        }

        .header-actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-end;
            gap: 12px;
            margin-left: 0;
            flex-shrink: 0;
        }

        .header-actions > * {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 10px 14px;
            border-radius: 999px;
            font-size: 13px;
            font-weight: 600;
            transition: all 0.25s ease;
            white-space: nowrap;
        }

        .header-actions .buy-button,
        .header-actions .info-toggle-button {
            width: auto;
            padding: 8px 14px;
            font-size: 13px;
            border-radius: 10px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
        }

        .header-actions .info-toggle-button {
            background: rgba(255,255,255,0.18);
            color: #fff;
            border: 1px solid rgba(255,255,255,0.32);
        }

        .header-actions .buy-button:hover,
        .header-actions .info-toggle-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(102, 126, 234, 0.35);
        }

        .buy-button-container {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        @media (max-width: 900px) {
            .header-container {
                justify-content: center;
            }
            .store-name {
                flex: 1 1 100%;
                text-align: center;
                font-size: 18px;
            }
            .header-actions {
                width: 100%;
                justify-content: center;
            }
            .header-actions > * {
                flex: 1 1 auto;
                min-width: 150px;
            }
            .header-actions .google-translate {
                width: 100%;
                justify-content: center;
            }
            .header-actions .google-translate-button {
                width: 100%;
            }
        }

        @media (max-width: 650px) {
            header {
                padding: 10px 0;
            }

            .header-container {
                padding: 0 12px;
            }

            .store-name {
                font-size: 15px;
                line-height: 1.2;
            }

            .header-actions {
                gap: 6px;
                flex-wrap: wrap;
                justify-content: center;
                width: 100%;
            }
            .header-actions > * {
                flex: 1 1 0;
                min-width: 0;
                max-width: 140px;
                font-size: 11px;
                padding: 7px 10px;
            }
            .header-actions .google-translate {
                width: auto;
                min-width: 40px;
            }
            .header-actions .google-translate-button {
                padding: 8px 10px;
            }
            .google-translate-text {
                display: none;
            }
            .google-chevron {
                margin-left: 0;
                font-size: 0.9rem;
            }
            .buy-button-container {
                width: auto;
            }
            .header-actions .buy-button,
            .header-actions .info-toggle-button {
                font-size: 11px;
                padding: 7px 10px;
                min-width: 0;
            }
        }

        .ticker-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 34px;
            z-index: 110;
            pointer-events: none;
            overflow: hidden;
        }

        .ticker-wrapper {
            background: linear-gradient(90deg, rgba(118, 75, 162, 0.95) 0%, rgba(102, 126, 234, 0.95) 50%, rgba(79, 172, 254, 0.95) 100%);
            color: white;
            padding: 8px 0;
            overflow: hidden;
            position: relative;
            width: 100%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .ticker-content {
            display: flex;
            animation: scroll-left 35s linear infinite;
            white-space: nowrap;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.6px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            align-items: center;
        }

        .ticker-item {
            padding: 0 22px;
            display: inline-flex;
            align-items: center;
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0 15px;
            font-weight: bold;
            gap: 0;
            flex-wrap: nowrap;
            white-space: nowrap;
        }

        .header-actions {
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: flex-end;
            gap: 16px;
            margin-left: 0;
            flex-shrink: 0;
        }

        .header-actions > * {
            display: inline-flex;
            align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 10px 14px;
                border-radius: 999px;
                font-size: 13px;
                font-weight: 600;
                transition: all 0.25s ease;
        }

        .header-actions .buy-button {
            width: auto;
            padding: 7px 14px;
            font-size: 13px;
            border-radius: 8px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            color: white;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
            transition: all 0.25s ease;
            white-space: nowrap;
        }

        .header-actions .buy-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 16px rgba(102, 126, 234, 0.35);
        }

        .buy-button-container {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }

        .hidden {
            display: none !important;
        }

        .purchase-form {
            background: #f8fafc;
            border: 1px solid rgba(102, 126, 234, 0.18);
            border-radius: 14px;
            padding: 18px;
            margin-top: 20px;
            box-shadow: 0 12px 32px rgba(102, 126, 234, 0.12);
        }

        .purchase-form.show {
            display: block;
        }

        .purchase-form h3 {
            margin: 0 0 14px 0;
            font-size: 18px;
            color: #2d3748;
        }

        .purchase-request-form {
            display: grid;
            gap: 12px;
        }

        .purchase-request-form label {
            display: block;
            font-size: 13px;
            color: #334155;
            margin-bottom: 4px;
        }

        .purchase-request-form input,
        .purchase-request-form select {
            width: 100%;
            padding: 10px 12px;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            font-size: 14px;
            background: white;
            margin-bottom: 12px;
        }

        .purchase-submit-button,
        .purchase-cancel-button {
            padding: 10px 16px;
            border-radius: 10px;
            border: none;
            font-weight: 700;
            cursor: pointer;
        }

        .purchase-submit-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .purchase-cancel-button {
            background: #cbd5e1;
            color: #1f2937;
        }

        .purchase-note {
            margin: 0;
            color: #475569;
            font-size: 13px;
            line-height: 1.5;
        }

        .manual-documents {
            margin-top: 16px;
            display: grid;
            gap: 12px;
        }

        .manual-pdf-area {
            display: none;
            border: 1px solid rgba(102, 126, 234, 0.18);
            border-radius: 12px;
            overflow: hidden;
            background: #ffffff;
            padding: 10px;
        }

        .manual-pdf-area embed {
            width: 100%;
            height: 220px;
            border: none;
        }

        .manual-pdf-area.visible {
            display: block;
        }

        .purchase-form p {
            margin-top: 10px;
        }
        .logo-official {
            max-height: 90px;
            width: 100px;
            border-radius: 10%;
            flex-shrink: 0;
        }
        .store-name {
            font-size: 20px;
            font-weight: bold;
            color: white;
            flex: 1 1 auto;
            min-width: 0;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        nav {
            margin-left: auto;  }
        nav ul {
            display: flex;
            list-style: none;
            gap: 30px; }
        nav a {
            color: white;
            text-decoration: none;
            font-size: 16px;
            transition: all 0.3s ease;
            position: relative;
            padding: 8px 15px;
            border-radius: 5px; }
        nav a:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
            box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);  }
        .google-translate {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px; }
        .google-translate-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            min-width: 120px;
            padding: 10px 14px;
            background: rgba(255,255,255,0.95);
            color: #111827;
            border-radius: 999px;
            border: 1px solid rgba(15,23,42,0.12);
            box-shadow: 0 16px 40px rgba(15,23,42,0.12);
            transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
            font-weight: 600;
        }
        .google-translate-button:hover {
            transform: translateY(-1px);
            background: #ffffff;
            box-shadow: 0 18px 44px rgba(15,23,42,0.16);
        }
        .google-translate-icon {
            width: 20px;
            height: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #f3f4f6;
            color: #111827;
            font-size: 14px;
            font-weight: 700;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.08);
        }
        .google-translate-menu {
            position: absolute;
            top: calc(100% + 8px);
            right: 0;
            width: 280px;
            background: #ffffff;
            border: 1px solid rgba(15,23,42,0.08);
            border-radius: 18px;
            box-shadow: 0 24px 60px rgba(15,23,42,0.14);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-12px);
            transition: opacity 0.26s ease, transform 0.26s ease;
            z-index: 1200;
            overflow: hidden;
        }
        .google-translate:hover .google-translate-menu,
        .google-translate:focus-within .google-translate-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .google-translate-menu:hover {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .google-translate-menu button {
            width: 100%;
            padding: 12px 16px;
            border: none;
            background: none;
            text-align: left;
            font-size: 14px;
            font-weight: 700;
            color: #111827;
            cursor: pointer;
            transition: background 0.2s ease;
        }
        .google-translate-menu button:hover {
            background: #f8fafc;
        }
        @media screen and (max-width: 768px) {
            .google-translate-menu {
                right: 0;
                left: auto;
                width: 100%;
                min-width: auto;
                max-width: 300px;
            }
            .google-translate-button {
                min-width: 0;
                width: 100%;
                justify-content: center;
            }
            .google-translate {
                width: 100%;
            }
        }
        /* RESPONSIVO - TABLETS E CELULARES */
        @media screen and (max-width: 768px) {
            .header-container {
                flex-wrap: wrap;
                gap: 10px; }
            
            .store-name {
                font-size: 18px;
            }
            
            nav ul {
                gap: 15px;
            }
            
            nav a {
                font-size: 14px;
                padding: 6px 10px;
            }

            .products-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }

            .product-image-img {
                height: 200px;
            }

            .product-image {
                height: 200px;
            }

            .section-title {
                font-size: 32px;
            }

            .banner-slide {
                font-size: 32px;
            }

            .dashboard {
                margin: 30px auto;
                padding: 0 15px;
            }

            .banner {
                height: 350px;
            }  }
        @media screen and (max-width: 480px) {
            .header-container {
                padding: 0 10px;
                gap: 8px; }

            .logo-official {
                max-height: 60px;
                width: 70px;
            }

            .store-name {
                font-size: 14px;
            }

            nav ul {
                gap: 10px;
                flex-wrap: wrap;
            }

            nav a {
                font-size: 12px;
                padding: 5px 8px;
            }

            .products-grid {
                grid-template-columns: 1fr;
                gap: 15px;
            }

            .product-image-img {
                height: 180px;
            }

            .product-image {
                height: 180px;
            }

            .section-title {
                font-size: 24px;
                margin-bottom: 20px;
            }

            .banner-slide {
                font-size: 20px;
            }

            .banner {
                height: 250px;
            }

            .dashboard {
                margin: 20px auto;
                padding: 0 10px;
            }

            .terms-container {
                padding: 20px;
            }

            .terms-container h2 {
                font-size: 22px;
            }

            .terms-content h3 {
                font-size: 16px;
            }

            .terms-content p {
                font-size: 14px;
            }}

.info-system {
  position: fixed;
  top: 100px;
  right: 20px;
  width: min(420px, calc(100vw - 32px));
  max-height: calc(100vh - 120px);
  overflow: hidden;
  margin: 0;
  background: rgba(248, 251, 255, 0.98);
  border-radius: 22px;
  box-shadow: 0 28px 80px rgba(15, 23, 42, 0.18);
  padding: 14px;
  z-index: 9999;
  backdrop-filter: blur(10px);
}

.info-system .info-system-close-wrap {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 1001;
}

.info-system-close-button {
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;
  background: rgba(255,255,255,0.92);
  color: #334155;
  font-size: 18px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}

.info-system-close-button:hover {
  transform: translateY(-1px);
}

.info-system.collapsed {
  display: none;
}

.info-system-content {
  padding: 0;
  max-width: 100%;
  margin: 0;
  max-height: calc(88vh - 56px);
  overflow-y: auto;
}

.buy-menu-content ul li {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.buy-menu-content ul li img {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.buy-menu-content ul li h3,
.buy-menu-content ul li p,
.buy-menu-content ul li #manualPrice1,
.buy-menu-content ul li #manualPrice2,
.buy-menu-content ul li #manualPrice3,
.buy-menu-content ul li #manualPrice4,
.buy-menu-content ul li #manualPrice5,
.buy-menu-content ul li #manualPrice6,
.buy-menu-content ul li #manualPrice7,
.buy-menu-content ul li #manualPrice8,
.buy-menu-content ul li #manualPrice9,
.buy-menu-content ul li #manualPrice10 {
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
}

.buy-menu-content ul li button {
  width: 100%;
  max-width: 100%;
  padding: 10px 12px;
}

.info-system-toggle-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 18px;
}

.info-toggle-button {
  width: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 130px;
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 13px;
}

.info-toggle-button:hover {
  transform: translateY(-3px);
}

.info-system.collapsed .info-section {
  display: none;
}

.info-system .info-section > *:not(h2) {
  max-height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.35s ease, transform 0.35s ease;
}

.info-system.collapsed .info-section > *:not(h2) {
  max-height: 0;
  opacity: 0;
  visibility: hidden;
}

.info-section.opened > *:not(h2) {
  max-height: 9999px;
  opacity: 1;
  visibility: visible;
}

.info-section {
  margin-bottom: 12px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(102, 126, 234, 0.14);
  border-radius: 16px;
  box-shadow: 0 12px 22px rgba(15, 23, 42, 0.05);
  padding: 12px;
  overflow: hidden;
  transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
}

.info-section.opened {
  box-shadow: 0 18px 36px rgba(102, 126, 234, 0.12);
  transform: translateY(-1px);
}

.info-section h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 16px;
  margin-bottom: 10px;
  color: #1f2937;
  background: #f7f9ff;
  padding: 10px 14px;
  border-radius: 14px;
  cursor: pointer;
  border: 1px solid rgba(102, 126, 234, 0.12);
  transition: background 0.25s ease, color 0.25s ease;
}

.info-section h2::after {
  content: '⯈';
  font-size: 1.1rem;
  transition: transform 0.25s ease;
}

.info-section.opened h2::after {
  transform: rotate(90deg);
}

.info-section h2:hover {
  background: #eef4ff;
}

.info-section-body {
  display: grid;
  gap: 14px;
}

.info-section-body p,
.info-section-body li,
.info-section-body label,
.info-section-body h3,
.info-section-body strong,
.info-section-body .contact-item {
  color: #475569;
  line-height: 1.75;
}

.info-section-body > div,
.info-section-body > .parceiros-gallery,
.info-section-body > .vagas-container,
.info-section-body > div[class*="contact-item"] {
  width: 100%;
}

.info-section-body .parceiros-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 14px;
}

.info-section-body .parceiro-item,
.info-section-body .vaga-card,
.info-section-body .contact-item,
.info-section-body .info-card {
  background: #f8fbff;
  border: 1px solid rgba(102, 126, 234, 0.14);
  border-radius: 16px;
  padding: 14px;
}

.info-section-body .vaga-card {
  box-shadow: 0 12px 28px rgba(102, 126, 234, 0.08);
}

.info-section-body .contact-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.info-system-content p {
  color: #475569;
  line-height: 1.8;
  margin-bottom: 18px;
  font-size: 15px;
}
.terms-container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.terms-container h2 {
  color: #667eea;
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 3px solid #667eea;
  padding-bottom: 15px;
}
.terms-content h3 {
  color: #333;
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 12px;
  border-left: 4px solid #667eea;
  padding-left: 15px;
}
.terms-content p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 15px;
  font-size: 15px;
}
.terms-content ul {
  margin-left: 25px;
  margin-bottom: 20px;
}
.terms-content li {
  color: #666;
  margin-bottom: 10px;
  line-height: 1.6;
}
.terms-content strong {
  color: #667eea;
  font-weight: 600;
}
        /* BANNER */
        .banner {
            position: relative;
            width: 100%;
            height: 500px;
            overflow: hidden;
            background: #f5f5f5;
        }
        .banner-slider {
            display: flex;
            width: 100%;
            height: 100%;
            transition: transform 0.8s ease-in-out;
        }
        .banner-slide {
            min-width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
            font-size: 48px;
            font-weight: bold;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
        }
        .banner-slide::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: none;
            z-index: 1;
        }
        .banner-slide > div {
            position: relative;
            z-index: 2;
        }
        .banner-slide:nth-child(2) > div {
             display: none;
        }
        .banner-slide:nth-child(1) > div {
           display: none;
        }

        .banner-slide:nth-child(3) {
            background-image: url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=500&fit=crop');
        }

        .banner-slide:nth-child(4) {
            background-image: url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=500&fit=crop');
        }

        .banner-slide:nth-child(5) {
            background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=500&fit=crop');
        }

        .banner-dots {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 5;
        }

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.55);
            cursor: pointer;
            transition: background 0.3s, transform 0.2s;
            touch-action: manipulation;
        }

        .dot:hover,
        .dot:focus {
            transform: scale(1.1);
        }

        .dot.active {
            background: white;
        }

        @media (max-width: 768px) {
            .banner {
                height: 320px;
            }

            .banner-dots {
                bottom: 16px;
                gap: 8px;
            }

            .dot {
                width: 14px;
                height: 14px;
            }
        }

        @media (max-width: 480px) {
            .banner {
                height: 260px;
            }

            .banner-dots {
                bottom: 14px;
            }

            .dot {
                width: 16px;
                height: 16px;
            }
        }

        /* DASHBOARD */
        .dashboard {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .section-title {
            font-size: 42px;
            margin-bottom: 30px;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 900;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            animation: titlePulse 2s ease-in-out infinite;
        }
        
        @keyframes titlePulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-bottom: 50px;
        }

        .product-card {
            background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            border: 2px solid rgba(102, 126, 234, 0.1);
            position: relative;
        }
        
        .product-card::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -50%;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
            border-radius: 50%;
            opacity: 0;
            transition: all 0.4s;
            z-index: -1;
        }

        .product-card:hover {
            transform: translateY(-15px) rotate(2deg);
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
            border-color: rgba(102, 126, 234, 0.3);
        }
        
        .product-card:hover::before {
            top: 0;
            right: 0;
            opacity: 0.1;
        }

        .product-image-img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            display: block;
        }

        .product-image {
            width: 100%;
            height: 300px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
            background-size: 400% 400%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            color: white;
            font-size: 14px;
            position: relative;
            animation: productGradient 6s ease infinite;
            overflow: hidden;
        }
        
        @keyframes productGradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
        
        .product-image::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
            pointer-events: none;
        }

        .product-image-text {
            background: rgba(0, 0, 0, 0.6);
            padding: 12px 20px;
            border-radius: 8px;
            margin-bottom: 15px;
            text-align: center;
        }

        .product-info {
            padding: 20px;
        }

        .product-name {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #333;
        }

        .product-price {
            font-size: 24px;
            color: #667eea;
            font-weight: bold;
            margin-bottom: 15px;
        }

        .product-description {
            font-size: 14px;
            color: #666;
            margin-bottom: 15px;
        }

        .buy-button {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            background-size: 200% 200%;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.4s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
            position: relative;
            overflow: hidden;
        }
        
        .buy-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.2);
            transition: left 0.4s ease;
        }
        
        .buy-button:hover::before {
            left: 100%;
        }

        .buy-button:hover {
            background-position: 100% 0;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
            transform: translateY(-3px);
            animation: buttonPulse 0.6s;
        }

        @keyframes buttonPulse {
            0%, 100% { transform: translateY(-3px); }
            50% { transform: translateY(-8px); }
        }

        .order-toggle-btn {
            display: block;
            margin: 40px auto;
            padding: 18px 50px;
            background: linear-gradient(135deg, #25d366 0%, #128c7e 50%, #00a884 100%);
            background-size: 200% 200%;
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.4s ease;
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
            position: relative;
            overflow: hidden;
        }
        
        .order-toggle-btn::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }
        
        .order-toggle-btn:hover::after {
            width: 300px;
            height: 300px;
        }

        .order-toggle-btn:hover {
            background-position: 100% 0;
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.5);
            transform: translateY(-3px) scale(1.05);
        }

        #agendamento {
            display: none;
        }

        #agendamento.show {
            display: block;
        }

        /* FORMULÁRIO WHATSAPP */
        .whatsapp-section {
            background: white;
            padding: 40px;
            border-radius: 10px;
            max-width: 500px;
            margin: 40px auto;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .whatsapp-section h2 {
            margin-bottom: 20px;
            color: #333;
        }

        .form-group {
            margin-bottom: 20px;
            text-align: left;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #333;
        }

        .form-group input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        .form-group input:focus {
            outline: none;
            border-color: #667eea;
        }

        .whatsapp-button {
            width: 100%;
            padding: 15px;
            background: linear-gradient(135deg, #25d366 0%, #128c7e 50%, #00a884 100%);
            background-size: 200% 200%;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.4s ease;
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3);
            position: relative;
        }

        .whatsapp-button:hover {
            background-position: 100% 0;
            box-shadow: 0 10px 30px rgba(37, 211, 102, 0.5);
            transform: translateY(-3px);
        }

        /* GALERIA */
        .gallery {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            border: 2px solid rgba(102, 126, 234, 0.1);
        }

        .gallery-item:hover {
            box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
        }

        .gallery-image {
            width: 110%;
            height: 600px;
            object-fit: cover;
            display: block;
        }

        .gallery-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.3);
            color: white;
            padding: 15px;
            text-align: center;
            transform: translateY(100%);
            transition: transform 0.3s;
        }

        .gallery-item:hover .gallery-overlay {
            transform: translateY(0);
        }

        .gallery-overlay h3 {
            margin: 0;
            font-size: 18px;
        }

        /* FOOTER */
        footer {
            background: linear-gradient(135deg, #333 0%, #1a1a1a 50%, #0d0d0d 100%);
            color: white;
            text-align: center;
            padding: 40px 20px;
            margin-top: 50px;
            box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.2);
        }

        .social-media {
            margin-top: 10px;
        }

        .social-media a {
            color: white;
            text-decoration: none;
            margin: 0 10px;
            font-size: 18px;
            transition: color 0.3s;
        }

        .social-media a:hover {
            color: #f093fb;
            transform: scale(1.3);
            transition: all 0.3s ease;
        }

        /* BUY BUTTON AND MENU */
        .buy-button-container {
            position: relative;
            display: inline-flex;
            align-items: center;
        }
        /* make the buy menu fixed and centered so it never opens off-screen */
        .buy-menu {
            display: none;
            position: fixed;
            top: 64px; /* sits just under the header */
            left: 50%;
            transform: translateX(-50%);
            background: white;
            border-radius: 12px;
            box-shadow: 0 14px 40px rgba(0, 0, 0, 0.22);
            z-index: 1200;
            width: min(92%, 900px);
            max-height: calc(100vh - 120px);
            overflow-y: auto;
            margin-top: 0;
            animation: fadeIn 0.25s ease;
            -webkit-overflow-scrolling: touch;
        }
        @media (max-width: 600px) {
            .buy-menu {
                top: 88px;
                left: 0;
                transform: none;
                width: calc(100% - 10px);
                max-width: none;
                max-height: calc(100vh - 94px);
                height: calc(100vh - 94px);
                border-radius: 0 0 16px 16px;
                margin: 0 5px 0 5px;
            }
        }
        .buy-menu.show {
            display: block;
        }
        .buy-menu-content {
            padding: 20px;
        }
        .buy-menu-content h2 {
            color: #667eea;
            margin-bottom: 20px;
            text-align: center;
            font-size: 24px;
        }
        .buy-menu-content ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .buy-menu-content li {
            background: linear-gradient(135deg, #f5f7ff 0%, #ffffff 100%);
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 15px;
            border: 1px solid rgba(102, 126, 234, 0.2);
            transition: all 0.3s ease;
        }
        .buy-menu-content li:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
        }
        .buy-menu-content li h3 {
            color: #333;
            margin: 0 0 10px 0;
            font-size: 18px;
        }
        .buy-menu-content li p {
            color: #666;
            margin: 5px 0;
            font-size: 14px;
        }
        .buy-menu-content li img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 10px;
        }
        .buy-menu-content li button {
            width: 100%;
            padding: 10px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 10px;
        }
        .buy-menu-content li button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        @media (max-width: 1024px) {
            .header-container {
                padding: 0 10px;
                gap: 10px;
            }

            .store-name {
                font-size: 20px;
            }

            nav ul {
                gap: 20px;
            }

            nav a {
                font-size: 14px;
                padding: 6px 12px;
            }

            .banner {
                height: 400px;
            }

            .banner-slide {
                font-size: 36px;
            }

            .products-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 25px;
            }

            .gallery-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
        }

        @media (max-width: 768px) {
            header {
                padding: 15px 0;
            }

            .header-container {
                flex-direction: column;
                align-items: center;
                text-align: center;
                gap: 10px;
            }

            .logo-official {
                max-height: 60px;
                width: 80px;
            }

            .store-name {
                font-size: 18px;
            }

            nav {
                margin-left: 0;
                width: 100%;
            }

            nav ul {
                flex-direction: column;
                gap: 10px;
                align-items: center;
            }

            nav a {
                font-size: 14px;
                padding: 8px 12px;
            }

            .banner {
                height: 320px;
            }

            .banner-slide {
                font-size: 24px;
            }

            .products-grid {
                grid-template-columns: repeat(1, 1fr);
                gap: 20px;
                margin-bottom: 30px;
            }

            .product-image {
                height: 200px;
            }

            .product-image-img {
                height: 200px;
            }

            .product-name {
                font-size: 16px;
            }

            .product-price {
                font-size: 20px;
            }

            .product-description {
                font-size: 13px;
            }

            .buy-button {
                padding: 12px;
                font-size: 14px;
            }

            .section-title {
                font-size: 28px;
                margin-bottom: 20px;
            }

            .gallery-grid {
                grid-template-columns: repeat(1, 1fr);
                gap: 15px;
            }

            .gallery-image {
                height: 300px;
            }

            .order-toggle-btn {
                padding: 15px 30px;
                font-size: 16px;
                margin: 30px auto;
            }

            .whatsapp-section {
                padding: 25px;
                margin: 30px 15px;
                max-width: 100%;
            }

            .whatsapp-section h2 {
                font-size: 20px;
            }

            .form-group label {
                font-size: 14px;
            }

            .form-group input {
                padding: 10px;
                font-size: 14px;
            }

            .whatsapp-button {
                padding: 12px;
                font-size: 16px;
            }

            .terms-container {
                padding: 20px;
            }

            .terms-container h2 {
                font-size: 22px;
            }

            .terms-content h3 {
                font-size: 16px;
            }

            .terms-content p {
                font-size: 14px;
            }

        }

        @media (max-width: 480px) {
            header {
                padding: 10px 0;
            }

            .header-container {
                padding: 0 8px;
                gap: 8px;
            }

            .logo-official {
                max-height: 50px;
                width: 60px;
            }

            .store-name {
                font-size: 14px;
            }

            nav ul {
                gap: 5px;
            }

            nav a {
                font-size: 12px;
                padding: 5px 8px;
            }

            .banner {
                height: 260px;
            }

            .banner-slide {
                font-size: 18px;
            }

            .dot {
                width: 8px;
                height: 8px;
            }

            .banner-dots {
                bottom: 10px;
                gap: 5px;
            }

            .dashboard {
                margin: 20px auto;
                padding: 0 10px;
            }

            .section-title {
                font-size: 20px;
                margin-bottom: 15px;
            }

            .products-grid {
                gap: 15px;
                margin-bottom: 20px;
            }

            .product-card {
                border-radius: 10px;
            }

            .product-image {
                height: 150px;
            }

            .product-image-img {
                height: 150px;
            }

            .product-info {
                padding: 15px;
            }

            .product-name {
                font-size: 14px;
                margin-bottom: 8px;
            }

            .product-price {
                font-size: 18px;
                margin-bottom: 10px;
            }

            .product-description {
                font-size: 12px;
                margin-bottom: 10px;
            }

            .buy-button {
                padding: 10px;
                font-size: 13px;
            }

            .gallery-grid {
                gap: 10px;
            }

            .gallery-image {
                height: 200px;
            }

            .gallery-overlay h3 {
                font-size: 14px;
            }

            .order-toggle-btn {
                padding: 12px 20px;
                font-size: 14px;
                margin: 20px 10px;
            }

            .whatsapp-section {
                padding: 20px;
                margin: 20px 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }

            .whatsapp-section h2 {
                font-size: 18px;
                margin-bottom: 15px;
            }

            .form-group {
                margin-bottom: 15px;
            }

            .form-group label {
                font-size: 12px;
                margin-bottom: 6px;
            }

            .form-group input {
                padding: 8px;
                font-size: 13px;
            }

            .whatsapp-button {
                padding: 10px;
                font-size: 14px;
            }

            /* Removed duplicate/legacy .sidenav rules to avoid conflicts with the main responsive styles. */

            .terms-privacy {
                padding: 20px 10px;
                margin: 20px 0;
                height: auto;
            }

            .terms-container {
                padding: 15px;
                margin: 0 auto;
            }

            .terms-container h2 {
                font-size: 18px;
                margin-bottom: 20px;
            }

            .terms-content h3 {
                font-size: 14px;
                margin-top: 15px;
                margin-bottom: 10px;
            }

            .terms-content p {
                font-size: 12px;
                line-height: 1.6;
                margin-bottom: 10px;
            }

            .terms-content ul {
                margin-left: 15px;
                margin-bottom: 15px;
            }

            .terms-content li {
                font-size: 12px;
                margin-bottom: 8px;
            }

            footer {
                padding: 25px 15px;
                margin-top: 30px;
            }

            footer p {
                font-size: 12px;
                margin-bottom: 10px;
            }

            .social-media {
                margin-top: 10px;
            }

            .social-media a {
                margin: 0 8px;
                font-size: 16px;
            }

        }

        @media (max-width: 360px) {
            .banner {
                height: 150px;
            }

            .banner-slide {
                font-size: 16px;
            }

            .section-title {
                font-size: 18px;
            }

            .product-image {
                height: 120px;
            }

            .gallery-image {
                height: 150px;
            }
        }

        
        * {
            box-sizing: border-box;
        }
        
        @keyframes rotateParceiros {
            0% {
                transform: rotateY(0deg);
            }
            100% {
                transform: rotateY(360deg);
            }
        }
        .parceiro-item:nth-child(3n+1) {
            animation: rotateParceiros 2s infinite;
        }
        .parceiro-item:nth-child(3n+2) {
            animation: rotateParceiros 2s infinite 0.67s;
        }
        .parceiro-item:nth-child(3n) {
            animation: rotateParceiros 2s infinite 1.33s;
        }

        /* RESPONSIVE DESIGN */
        /* Mobile First - Extra Small (xs) */
        @media (max-width: 480px) {
            .header-container {
                flex-direction: column;
                text-align: center;
            }
            
            .store-name {
                font-size: 16px !important;
                margin: 10px 0;
            }
            
            .logo-official {
                width: 40px !important;
                height: 40px !important;
            }
            
            nav ul {
                flex-direction: column;
                gap: 10px;
            }
            
            nav li {
                width: 100%;
            }
            
            nav a {
                font-size: 14px;
                display: block;
                padding: 10px;
            }
            
            .banner-slide h1 {
                font-size: 18px !important;
            }
            
            .banner-slide p {
                font-size: 14px !important;
            }
            
            .section-title {
                font-size: 22px !important;
            }
            
            .products-grid {
                grid-template-columns: 1fr !important;
            }
            
            .product-card {
                margin: 10px 0;
            }
            
            .gallery-grid {
                grid-template-columns: 1fr !important;
            }
            
            .parceiros-gallery {
                flex-direction: column;
                gap: 20px !important;
            }
            
            .parceiro-item {
                width: 120px !important;
                height: 120px !important;
            }
            
            .parceiro-logo {
                width: 90px !important;
                height: 90px !important;
            }
            
            #agendamento .form-group label {
                font-size: 14px;
            }
            
            button {
                min-width: 100%;
                font-size: 14px;
            }
        }

        /* Small devices (sm) */
        @media (min-width: 481px) and (max-width: 768px) {
            .header-container {
                flex-direction: column;
                padding: 15px 10px;
            }
            
            .store-name {
                font-size: 18px !important;
                margin: 10px 0;
            }
            
            .logo-official {
                width: 50px !important;
                height: 50px !important;
            }
            
            nav ul {
                flex-direction: column;
                gap: 5px;
            }
            
            nav li {
                width: 100%;
            }
            
            nav a {
                font-size: 14px;
                padding: 8px 5px;
            }
            
            .banner-slide h1 {
                font-size: 24px !important;
            }
            
            .banner-slide p {
                font-size: 16px !important;
            }
            
            .section-title {
                font-size: 26px !important;
            }
            
            .products-grid {
                grid-template-columns: 1fr 1fr !important;
                gap: 15px;
            }
            
            .gallery-grid {
                grid-template-columns: 1fr 1fr !important;
                gap: 15px;
            }
            
            .parceiros-gallery {
                gap: 20px !important;
            }
            
            .parceiro-item {
                width: 130px !important;
                height: 130px !important;
                border-width: 3px;
            }
            
            .parceiro-logo {
                width: 100px !important;
                height: 100px !important;
            }
            
            .payment-container {
                padding: 20px !important;
            }
            
            #agendamento .form-group {
                margin-bottom: 12px;
            }
        }

        /* Medium devices (md) */
        @media (min-width: 769px) and (max-width: 1024px) {
            .products-grid {
                grid-template-columns: repeat(2, 1fr) !important;
            }
            
            .gallery-grid {
                grid-template-columns: repeat(2, 1fr) !important;
            }
            
            .parceiros-gallery {
                gap: 25px !important;
            }
        }

        /* Large devices (lg) and up */
        @media (min-width: 1025px) {
            .products-grid {
                grid-template-columns: repeat(3, 1fr) !important;
            }
            
            .gallery-grid {
                grid-template-columns: repeat(3, 1fr) !important;
            }
        }

        /* Touch-friendly adjustments for small screens */
        @media (max-width: 768px) {
            button {
                padding: 12px 16px !important;
                min-height: 44px;
            }
            
            input, select, textarea {
                font-size: 16px !important;
                padding: 12px !important;
            }
            
            .form-group {
                margin-bottom: 15px !important;
            }

            .info-system {
                position: fixed !important;
                top: 72px !important;
                left: 0 !important;
                right: 0 !important;
                width: 100% !important;
                max-width: 100% !important;
                height: calc(100vh - 72px) !important;
                border-radius: 0 !important;
                box-shadow: 0 16px 40px rgba(0,0,0,0.18) !important;
                background: rgba(255,255,255,0.98) !important;
                margin: 0 !important;
                overflow: hidden !important;
                z-index: 1000 !important;
            }

            .info-system.collapsed {
                display: none !important;
            }

            .info-system-content {
                max-height: calc(100vh - 72px);
                padding: 10px 12px 12px;
                overflow-y: auto;
            }

            .info-section {
                margin-bottom: 10px;
                padding: 10px;
            }

            .info-section h2 {
                font-size: 15px;
                padding: 10px 12px;
            }

            .info-section-body {
                gap: 12px;
            }
        }

        @media (max-width: 480px) {
            header {
                padding: 10px 0;
            }

            .header-container {
                padding: 0 10px;
            }

            .info-system {
                top: 66px !important;
                height: calc(100vh - 66px) !important;
            }

            .info-system-content {
                max-height: calc(100vh - 66px);
                padding: 10px 10px 10px;
            }

            .info-section h2 {
                font-size: 14px;
            }

            .info-section-body {
                gap: 10px;
            }

            .info-section-body .parceiro-item,
            .info-section-body .vaga-card,
            .info-section-body .contact-item,
            .info-section-body .info-card {
                padding: 12px;
            }
        }

        /* Google Translate widget com logo do Google */
        #google_translate_element {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #ffffff;
            border: 1px solid rgba(15, 23, 42, 0.12);
            box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
            overflow: hidden;
            transition: transform 0.18s ease, box-shadow 0.18s ease;
            position: relative;
        }

        #google_translate_element:hover {
            transform: translateY(-1px);
            box-shadow: 0 12px 28px rgba(15, 23, 42, 0.14);
        }

        #google_translate_element::before {
            content: "\f1a0";
            font-family: "Font Awesome 6 Brands";
            font-size: 20px;
            color: #4285f4;
            position: absolute;
            inset: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
        }

        #google_translate_element .goog-te-gadget-simple,
        #google_translate_element .goog-te-gadget {
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            opacity: 0 !important;
            z-index: 1 !important;
            pointer-events: auto !important;
        }

        #google_translate_element .goog-te-combo {
            display: none !important;
        }

        #google_translate_element .goog-te-gadget img {
            display: none !important;
        }

        img,
        iframe,
        video {
            max-width: 100%;
            height: auto;
        }

        .banner-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .product-info,
        .vagas-container,
        .gallery,
        .payment-container,
        .whatsapp-section,
        .terms-container,
        .header-container {
            width: 100%;
        }

        #scrollToTopBtn {
            display: none !important;
            position: fixed;
            bottom: 22px;
            right: 22px;
            background-color: #ffd700;
            color: #000;
            border: none;
            padding: 14px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 20px;
            z-index: 999;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
            transition: transform 0.2s ease, opacity 0.2s ease;
            opacity: 0 !important;
            width: 52px;
            height: 52px;
            pointer-events: none !important;
            align-items: center;
            justify-content: center;
        }

        #scrollToTopBtn:hover {
            transform: translateY(-3px);
        }

        @media (max-width: 768px) {
            #scrollToTopBtn {
                right: 16px;
                bottom: 16px;
                padding: 12px;
                width: 48px;
                height: 48px;
                font-size: 18px;
            }

            nav ul {
                flex-wrap: wrap;
                justify-content: center;
            }

            .header-container {
                justify-content: center;
            }

            .product-card,
            .gallery-item,
            .vaga-card {
                width: 100%;
            }

            .gallery-image {
                height: auto;
            }
        }

        @media (max-width: 480px) {
            #scrollToTopBtn {
                right: 12px;
                bottom: 12px;
                padding: 8px;
                width: 40px;
                height: 40px;
                font-size: 14px;
            }

            .buy-button,
            .whatsapp-button,
            .order-toggle-btn {
                min-width: 100%;
                box-sizing: border-box;
            }

            .banner-slide {
                padding: 18px 12px;
            }

            .banner-slide > div {
                padding: 0 10px;
            }
        }

        /* Center buy menu content on small screens and improve responsiveness */
        .buy-menu-content { text-align: center; }
        .buy-menu-content ul li { align-items: center; justify-content: center; text-align: center; max-width: 100%; overflow: hidden; }
        .buy-menu-content ul li h3,
        .buy-menu-content ul li p,
        .buy-menu-content ul li span,
        .buy-menu-content ul li strong {
            word-break: break-word;
            overflow-wrap: anywhere;
            max-width: 100%;
        }
        .buy-menu-content ul li button { margin-left: auto; margin-right: auto; max-width: 260px; }

        @media (max-width: 600px) {
            .buy-menu {
                top: 88px;
                left: 0;
                transform: none;
                width: calc(100% - 10px);
                max-width: none;
                max-height: calc(100vh - 94px);
                height: calc(100vh - 94px);
                border-radius: 0 0 16px 16px;
                margin: 0 5px;
            }
            .buy-menu-content { padding: 12px; }
            .buy-menu-content ul { grid-template-columns: 1fr; gap: 12px; }
            .buy-menu-content ul li { padding: 10px 10px 12px; }
            .buy-menu-content ul li img { width: 100%; height: 140px; object-fit: cover; }
            .buy-menu-content ul li h3 { font-size: 0.98rem; margin-bottom: 6px; }
            .buy-menu-content ul li p { font-size: 0.92rem; line-height: 1.4; margin: 0 0 10px; }
            .buy-menu-content ul li button { width: 100%; max-width: 100%; padding: 10px 12px; font-size: 0.95rem; }
        }
    </style>
    <!-- Google Translate widget com logo do Google -->
    <script>
        function googleTranslateElementInit() {
            const initTranslation = () => {
                const container = document.getElementById('google_translate_element');
                if (!container) {
                    return window.setTimeout(initTranslation, 50);
                }

                new google.translate.TranslateElement({
                    pageLanguage: 'pt',
                    includedLanguages: 'en,fr,es',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                }, 'google_translate_element');
            };

            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initTranslation);
            } else {
                initTranslation();
            }
        }
    </script>
    <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</head>
<body>
    <div class="ticker-overlay" aria-hidden="true">
        <div class="ticker-wrapper">
            <div class="ticker-content" role="marquee" aria-hidden="false"></div>
        </div>
    </div>
    <!-- HEADER COM MENU -->
    <header>
        <div class="header-container">
            <style>
                .header-container { position: relative; }
                .buy-button-container { display: inline-block; }
                #buy-menu {
                    position: fixed;
                    top: 84px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: min(96%, 920px);
                    max-width: 620px;
                    max-height: calc(100vh - 94px);
                    overflow-y: auto;
                    background: #ffffff;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                    border-radius: 12px;
                    padding: 18px;
                    z-index: 999;
                    display: none;
                }
                .buy-menu.show { display: block !important; }
                .buy-menu-close { position: absolute; top: 8px; right: 10px; background: transparent; border: none; font-size: 20px; line-height: 1; cursor: pointer; }
                .buy-menu-content h2 { margin-top: 0; }
                .buy-menu-content ul { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; list-style: none; padding: 0; margin: 0; }
                .buy-menu-content ul li { background: transparent; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; }
                .buy-menu-content ul li img { width: 180px; height: 120px; object-fit: cover; border-radius: 8px; }
                .purchase-form { max-width: 760px; width: 100%; margin: 12px auto; padding: 12px; box-sizing: border-box; }
                .manual-pdf-area embed { width: 100%; height: 360px; }
                .purchase-submit-button, .purchase-cancel-button { padding: 10px 14px; border-radius: 8px; }

                /* Purchase form styling (refined) */
                .purchase-form { width: 100%; max-width: 620px; box-sizing: border-box; background: linear-gradient(180deg,#ffffff 0%,#fbfdff 100%); border-radius: 14px; padding: 18px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); margin: 16px auto; }
                .purchase-form h3 { margin: 0 0 16px 0; font-size: 1.15rem; color: #111827; font-weight: 700; }
                .purchase-form.hidden { display: none; }
                .purchase-form.show { display: block; }
                .purchase-request-form { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; align-items: flex-start; }
                .purchase-request-form label { display: block; font-size: 0.9rem; color: #374151; font-weight: 500; margin-bottom: 6px; }
                .purchase-request-form input[type="text"],
                .purchase-request-form select,
                .purchase-request-form input[type="file"] { width: 100%; padding: 11px 12px; border: 1.5px solid #d1d5db; border-radius: 8px; background: #fff; box-shadow: inset 0 1px 2px rgba(0,0,0,0.04); font-size: 0.95rem; color: #111827; height: 44px; font-family: inherit; transition: border-color 0.2s; }
                .purchase-request-form input[type="text"]:focus,
                .purchase-request-form select:focus,
                .purchase-request-form input[type="file"]:focus { outline: none; border-color: #10b981; box-shadow: 0 0 0 3px rgba(16,185,129,0.1); }
                .purchase-request-form input[type="file"] { padding: 10px 12px; height: auto; }
                .purchase-request-form .full-width { grid-column: 1 / -1; }
                .purchase-request-form .buttons-row { grid-column: 1 / -1; display: flex; gap: 12px; justify-content: flex-end; margin-top: 12px; }
                .purchase-note { font-size: 0.82rem; color: #6b7280; margin-top: 12px; grid-column: 1 / -1; line-height: 1.5; }
                .purchase-submit-button { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #fff; border: none; font-weight: 600; padding: 11px 20px; border-radius: 8px; cursor: pointer; transition: all 0.3s; font-size: 0.95rem; }
                .purchase-submit-button:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(16,185,129,0.3); }
                .purchase-cancel-button { background: #f3f4f6; color: #374151; border: 1.5px solid #d1d5db; padding: 11px 18px; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 0.95rem; transition: all 0.3s; }
                .purchase-cancel-button:hover { background: #e5e7eb; border-color: #9ca3af; }

                @media (max-width: 900px) {
                    .purchase-request-form { grid-template-columns: 1fr; gap: 12px; }
                    .purchase-form { max-width: calc(100% - 24px); padding: 16px; }
                }
                @media (max-width: 600px) {
                    .purchase-form { max-width: calc(100% - 16px); padding: 14px; margin: 12px 8px; }
                    .purchase-request-form { gap: 10px; }
                    .purchase-request-form label { font-size: 0.88rem; }
                    .purchase-request-form input,
                    .purchase-request-form select { font-size: 16px; height: 42px; }
                    .purchase-request-form .buttons-row { flex-direction: column; gap: 10px; }
                    .purchase-submit-button,
                    .purchase-cancel-button { width: 100%; padding: 12px; }
                    #buy-menu { width: calc(100% - 24px); left: 12px; transform: none; }
                    .buy-menu-content { padding: 12px; }
                    .buy-menu-content ul { grid-template-columns: 1fr; }
                    .buy-menu-content ul li { padding: 10px; gap: 8px; }
                    .buy-menu-content ul li img { width: 100%; height: 180px; }
                    .buy-menu-content ul li button { width: 100%; max-width: none; padding: 10px 12px; font-size: 0.95rem; }
                    .buy-button-container { width: 100%; text-align: right; }
                    .header-actions { width: 100%; justify-content: space-between; gap: 8px; }
                    .header-actions > * { flex: 1 1 0; min-width: 0; max-width: 140px; }
                    .header-actions .google-translate { width: auto; min-width: 40px; }
                    .header-actions .buy-button,
                    .header-actions .info-toggle-button { padding: 8px 10px; font-size: 11px; min-width: 0; }
                    .google-translate-text { display: none; }
                    .google-chevron { margin-left: 0; font-size: 0.9rem; }
                }
            </style>
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
            <a href="#galeria" class="logo" ><img src="Image/favicon2.jpg" alt="S.M.S - Escola de Linguas & Habilidades" class="logo-official"></a>
            <h1 class="store-name">S.M.S - Escola de Linguas & Habilidades</h1>
            <div class="header-actions">
                <div class="google-translate" aria-label="Google Translate">
                    <button type="button" class="google-translate-button" aria-haspopup="true" aria-expanded="false" onclick="toggleGoogleTranslateMenu()">
                        <span class="google-translate-icon" aria-hidden="true">G</span>
                        <span class="google-translate-text">Idioma</span>
                        <i class="fa fa-chevron-down google-chevron" aria-hidden="true"></i>
                    </button>
                    <div id="google-translate-menu" class="google-translate-menu" role="menu" aria-hidden="true">
                        <div id="google_translate_element">selecione o idioma</div>
                    </div>
                </div>
                <div>  
                    <button id="infoToggleAllBtn" class="buy-button info-toggle-button" type="button" onclick="toggleAllInfoSections()">Ver informações</button>
                </div>
                <div class="buy-button-container">
                    <button id="buyMenuToggleBtn" type="button" class="buy-button" onclick="toggleBuyMenu()">Comprar</button>
                </div>
                    <div id="buy-menu" class="buy-menu" aria-hidden="true" style="display:none;">
                        <button type="button" class="buy-menu-close" onclick="hideBuyMenu()" aria-label="Fechar menu">×</button>
                        <div class="buy-menu-content">
                            <h2>Manuais</h2>
                            <ul>
                                <li id="summeryprice">
                                    <img src="Image/Guia S.M.S.jpg" alt="Guia S.M.S">
                                    <h3>Guia S.M.S</h3>
                                    <p>Guia Onde todas as informações <br/>estão disponíveis sobre a sua aula.</p>
                                    <p id="manualPrice1" >Preço: 2.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Guia S.M.S', 1, '2.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="Image/DIALOGUE & MEETING.jpg " alt="Dialogue & Meetings">
                                    <h3>DIALOGUE & MEETINGS</h3>
                                    <p>O master que te ensina a se comunicar <br/> efetivamente em reuniões e diálogos profissionais.</p>
                                    <p id="manualPrice2" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Dialogue & Meetings', 2, '3.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="Image/GRAMMAR BOOK.jpg " alt="Grammar Book">
                                    <h3>GRAMMAR BOOK</h3>
                                    <p>O livro completo sobre gramática inglesa, <br/> com exercícios práticos e explicações detalhadas.</p>
                                    <p id="manualPrice3" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Grammar Book', 3, '3.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="Image/VOCABULÁRIO.jpg" alt="Vocabulário">
                                    <h3>VOCABULÁRIO</h3>
                                    <p>O livro completo sobre vocabulário inglês, <br/> com fonéticas e explicações detalhadas.</p>
                                    <p id="manualPrice4" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Vocabulário', 4, '3.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="Image/TEXT & READING SKILLS.jpg " alt="Textos & Habilidades de Leitura">
                                    <h3>TEXTOS & HABILIDADES DE LEITURA</h3>
                                    <p>O livro completo sobre habilidades de leitura <br/> e escrita em inglês, com exercícios práticos<br/>  e explicações detalhadas.</p>
                                    <p id="manualPrice5" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Textos & Habilidades de Leitura', 5, '3.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="Image/OS VERBOS REGULARES & IRREGULARES.jpg" alt="Verbos Regulares & Irregulares">
                                    <h3>OS VERBOS REGULARES & IRREGULARES</h3>
                                    <p>O livro completo sobre verbos ingleses, <br/> com exercícios práticos e explicações detalhadas.</p>
                                    <p id="manualPrice6" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Verbos Regulares & Irregulares', 6, '3.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="Image/Flayer1.jpg" alt="Saraswati Knowledge">
                                    <h3>SARASWATI KNOWLEDGE</h3>
                                    <p>A história e vida de Saraswati pela luz e sabedoria, leia!</p>
                                    <p id="manualPrice7" >Preço: 5.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Saraswati Knowledge', 7, '5.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="Image/Flayer2.jpg" alt="Um Estrangeiro Perdido">
                                    <h3>UM ESTRANGEIRO PERDIDO</h3>
                                    <p>O livro que conta a história de um estrangeiro perdido <br/> em uma terra desconhecida, cheio de desafios <br/> e descobertas.</p>
                                    <p id="manualPrice8" >Preço: 6.500 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Um Estrangeiro Perdido', 8, '6.500 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="Image/Flayer3.jpg" alt="O Dicionário S.M.S">
                                    <h3>O DICIONÁRIO S.M.S</h3>
                                    <p>Dicionário completo com mais de 5.000 <br/> palavras e expressões em inglês.</p>
                                    <p id="manualPrice9" >Preço: 9.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('O Dicionário S.M.S', 9, '9.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="Image/PromoInfo3.jpg" alt="500 Conversas">
                                    <h3>500 CONVERSAS</h3>
                                    <p>O livro completo com 500 conversas práticas em inglês, <br/> ideal para melhorar a fala e a compreensão auditiva.</p>
                                    <p id="manualPrice10" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('500 Conversas', 10, '3.000 Kz')">Comprar</button>
                                </li>
                            </ul>

                            <div id="purchase-form" class="purchase-form hidden">
                                <h3 id="selectedManualTitle">Pedido de compra</h3>
                                    <p id="selectedManualPrice" style="margin:6px 0 16px; color:#334155; font-weight:600;">Preço: —</p>
                                <form id="purchaseRequestForm" class="purchase-request-form" onsubmit="return false;">
                                    <label for="buyerName">Nome completo</label>
                                    <input type="text" id="buyerName" placeholder="Ex: João Silva" required>

                                    <label for="buyerEmail">Email</label>
                                    <input type="email" id="buyerEmail" placeholder="seu@email.com" required>

                                    <label for="courseType">Tipo de curso</label>
                                    <select id="courseType" required>
                                        <option value="">Selecione...</option>
                                        <option value="Inglês">Inglês</option>
                                        <option value="Francês">Francês</option>
                                        <option value="Alemão">Alemão</option>
                                        <option value="Espanhol">Espanhol</option>
                                        <option value="Outro">Outro</option>
                                    </select>

                                    <label for="proofFile" class="full-width">Comprovante de pagamento</label>
                                    <input type="file" id="proofFile" accept="application/pdf" required>

                                    <input type="hidden" id="purchaseManualId">
                                    <input type="hidden" id="purchaseManualPrice">
                                    <div class="buttons-row">
                                        <button type="button" class="purchase-submit-button" onclick="submitPurchaseRequest()">Finalizar</button>
                                        <button type="button" class="purchase-cancel-button" onclick="closePurchaseForm()">Cancelar</button>
                                    </div>
                                    <p class="purchase-note">📋 Após enviar, você será redirecionado para confirmar<br/>  o documento e receber a senha.</p>
                                    <div id="purchaseStatus" style="margin-top:8px; font-weight:600; color:#065f46"></div>
                                </form>
                            </div>

                                    <!-- Area adicionada: documento solicitado e botão de fatura -->
                                    <div id="afterFinalizeArea" class="manual-documents" style="margin-top:18px; display:none; padding:16px; border:1px solid rgba(102,126,234,0.18); border-radius:12px; background:#f8fbff;">
                                        <p id="downloadDocumentName" style="margin:0 0 12px; font-weight:700; color:#334155;">Documento solicitado: <span>—</span></p>
                                        <div id="purchaseSummary" style="margin-top:12px; padding:12px 14px; background:#eef2ff; border-radius:10px; display:none;">
                                        <p style="margin:6px 0;"><strong>Nome:</strong> <span id="summaryName">—</span></p>
                                        <p style="margin:6px 0;"><strong>Email:</strong> <span id="summaryEmail">—</span></p>
                                        <p style="margin:6px 0;"><strong>Curso:</strong> <span id="summaryCourseType">—</span></p>
                                        <p style="margin:6px 0;"><strong>Comprovativo:</strong> <span id="summaryProof">—</span></p>
                                        <p style="margin:6px 0;"><strong>Preço:</strong> <span id="summaryPrice"></span></p>
                                    </div>
                                    <div style="display:flex; gap:10px; margin-top:10px;">
                                            <button id="downloadChosenBtn" class="purchase-submit-button" style="flex:1;" onclick="downloadRequestedDocument()">Baixar documento</button>
                                            <button id="invoiceBtn" class="purchase-submit-button" style="flex:1; display:none; background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);" onclick="generateInvoice()">Receber Fatura</button>
                                        </div>
                                    </div>
                            <!-- Embeds removidos: documentos não são mais servidos embutidos. Pedidos são enviados por email com a fatura no corpo da mensagem. -->
                        </div>
                    </div>
                </div>
            </div>
        </header>

    <div class="info-system collapsed">
                    <div class="info-system-close-wrap">
                        <button type="button" class="info-system-close-button" onclick="toggleAllInfoSections()" aria-label="Fechar informações">×</button>
                    </div>
                    <div class="info-system-content">
                       
                                    <!-- LOCALIZAÇÃO SECTION -->
                                    <section id="localizacao" class="info-section">
                                        <h2 style="color: #667eea;">📍 Localização</h2>
                                        <div class="info-section-body">
                                        <p style="color: #475569; line-height: 1.7;">Visite-nos ou agende sua aula online. <br/>Nossa escola está estrategicamente localizada<br/> em Luanda,com acesso facilitado e <br/>atendimento personalizado.</p>
                                        
                                        <div style="background: linear-gradient(135deg, #eef2ff, #f3f0ff); padding: 16px; border-radius: 12px; margin: 16px 0; border-left: 4px solid #667eea;">
                                            <p style="margin: 8px 0; color: #111827;"><strong>📮 Endereço:</strong></p>
                                            <p style="margin: 0 0 12px 0; color: #475569;">Av. Deolinda Rodrigues, nº 475, Rangel, <br/>Luanda, Angola</p>
                                            
                                            <p style="margin: 8px 0; color: #111827;"><strong>🕒 Horário de Funcionamento:</strong></p>
                                            <p style="margin: 0 0 12px 0; color: #475569;">Segunda a Sexta: 07:30 - 20:00</p>
                                            
                                            <p style="margin: 8px 0; color: #111827;"><strong>📞 Contactos:</strong></p>
                                            <p style="margin: 0 0 4px 0; color: #475569;">Telefone: +244 951 474872</p>
                                            <p style="margin: 0; color: #475569;">Email: saraswatimaaschool@gmail.com</p>
                                        </div>
                                        
                                        <div style="margin-top: 16px; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                                            <iframe src="https://maps.google.com/maps?q=-8.838337,13.234373&z=15&output=embed" width="100%" height="300" style="border:0; display: block;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                        
                                        <div style="margin-top: 20px; padding: 18px; background: linear-gradient(135deg, #f0fdf4, #dcfce7); border-radius: 12px; border-left: 4px solid #10b981;">
                                            <h3 style="margin: 0 0 12px 0; color: #111827; font-size: 1.1rem;">✨ Agende sua Visita</h3>
                                            <p style="margin: 0 0 12px 0; color: #475569; line-height: 1.6;">Entre em contato conosco para agendar uma <br/>visita à nossa escola.Nossa equipe confirmará <br/>o horário e detalhes com você.</p>
                                            <a href="https://wa.me/244951474872" style="display: inline-block; padding: 10px 16px; background: #10b981; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; transition: all 0.3s ease;" onmouseover="this.style.background='#059669';" onmouseout="this.style.background='#10b981';">💬 Contacte via WhatsApp</a>
                                        </div>
                                        </div>
                                    </section>
                                    <!-- PARCEIROS SECTION -->
                                   <section id="parceiros-sidenav" class="info-section">
                                    <h2 style="color: #667eea;">🤝 Nossos Parceiros</h2>
                                    <div class="info-section-body">
                                    <p style="color: #475569; line-height: 1.7;">Conheça as instituições que confiam <br/>em nosso trabalho e fazem parte da<br/> nossa jornada educacional.</p>
                                    <div class="parceiros-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 20px;">
                                        <div class="parceiro-item" style="border: 3px solid #667eea; border-radius: 12px; padding: 12px; display: flex; align-items: center; justify-content: center; aspect-ratio: 1; background: #f8fafc; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 8px 16px rgba(102, 126, 234, 0.2)';" onmouseout="this.style.boxShadow='none';">
                                            <img src="Image/parceiro1.jpg" alt="Parceiro 1" class="parceiro-logo" style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover;">
                                        </div>
                                        <div class="parceiro-item" style="border: 3px solid #667eea; border-radius: 12px; padding: 12px; display: flex; align-items: center; justify-content: center; aspect-ratio: 1; background: #f8fafc; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 8px 16px rgba(102, 126, 234, 0.2)';" onmouseout="this.style.boxShadow='none';">
                                            <img src="Image/parceiro2.jpg" alt="Parceiro 2" class="parceiro-logo" style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover;">
                                        </div>
                                        <div class="parceiro-item" style="border: 3px solid #667eea; border-radius: 12px; padding: 12px; display: flex; align-items: center; justify-content: center; aspect-ratio: 1; background: #f8fafc; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 8px 16px rgba(102, 126, 234, 0.2)';" onmouseout="this.style.boxShadow='none';">
                                            <img src="Image/favicon1.jpg" alt="Parceiro 3" class="parceiro-logo" style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover;">
                                        </div>
                                        <div class="parceiro-item" style="border: 3px solid #667eea; border-radius: 12px; padding: 12px; display: flex; align-items: center; justify-content: center; aspect-ratio: 1; background: #f8fafc; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 8px 16px rgba(102, 126, 234, 0.2)';" onmouseout="this.style.boxShadow='none';">
                                            <img src="Image/parceiro4.jpg" alt="Parceiro 4" class="parceiro-logo" style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover;">
                                        </div>
                                        <div class="parceiro-item" style="border: 3px solid #667eea; border-radius: 12px; padding: 12px; display: flex; align-items: center; justify-content: center; aspect-ratio: 1; background: #f8fafc; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 8px 16px rgba(102, 126, 234, 0.2)';" onmouseout="this.style.boxShadow='none';">
                                            <img src="Image/parceiro5.jpg" alt="Parceiro 5" class="parceiro-logo" style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover;">
                                        </div>
                                        <div class="parceiro-item" style="border: 3px solid #667eea; border-radius: 12px; padding: 12px; display: flex; align-items: center; justify-content: center; aspect-ratio: 1; background: #f8fafc; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 8px 16px rgba(102, 126, 234, 0.2)';" onmouseout="this.style.boxShadow='none';">
                                            <img src="Image/parceiro6.jpg" alt="Parceiro 6" class="parceiro-logo" style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover;">
                                        </div>
                                        </div>
                                   </section>
                                    <!-- CARREIRA SECTION -->
                                    <section id="carreira" class="info-section">
                                        <h2 style="color: #667eea;">Carreira</h2> 
                                        <div class="info-section-body">
                                        <!-- Application form (hidden by default) -->
                                        <div id="application-form" style="display:none; margin-top:18px; padding:18px; border-radius:12px; background:#ffffff; border:1px solid #e5e7eb;">
                                            <h3 style="margin-top:0;">Formulário de Candidatura</h3>
                                            <form id="careersForm" onsubmit="return submitCareerForm(event)" style="display:grid; gap:10px;">
                                                <input type="hidden" id="jobPosition" name="jobPosition" value="">

                                                <label for="appName" style="font-size:0.95rem; color:#374151; display:block;">Nome completo</label>
                                                <input required type="text" id="appName" name="name" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:8px;">

                                                <label for="appEmail" style="font-size:0.95rem; color:#374151; display:block;">Email</label>
                                                <input required type="email" id="appEmail" name="email" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:8px;">

                                                <label for="appPhone" style="font-size:0.95rem; color:#374151; display:block;">Telemóvel</label>
                                                <input required type="tel" id="appPhone" name="phone" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:8px;">

                                                <label for="appMessage" style="font-size:0.95rem; color:#374151; display:block;">Mensagem / Carta de Apresentação</label>
                                                <textarea id="appMessage" name="message" rows="4" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:8px;"></textarea>

                                                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                                                    <button type="button" onclick="applyViaWhatsApp()" style="padding:10px 14px; background:#16a34a; color:#fff; border-radius:10px; border:none;">Candidatar via WhatsApp</button>
                                                    <button type="submit" style="padding:10px 14px; background:#1d4ed8; color:#fff; border-radius:10px; border:none;">Enviar por Email</button>
                                                    <button type="button" onclick="hideApplicationForm()" style="padding:10px 14px; background:#6b7280; color:#fff; border-radius:10px; border:none;">Fechar</button>
                                                </div>
                                                <p style="margin:0; font-size:0.9rem; color:#6b7280;">Também pode enviar o seu CV para <a href="mailto:saraswatimaaschool@gmail.com">saraswatimaaschool@gmail.com</a></p>
                                            </form>
                                        </div>
                                        <p style="font-size: 1.05rem; color: #1f2937; margin-top: 10px;">Junte-se a uma equipa apaixonada por educação e por resultados. Aqui, você encontra oportunidades reais de crescimento, um ambiente inspirador e reconhecimento pelo seu talento.</p>
                                        <p style="margin-top: 12px; color: #4b5563;">Buscamos profissionais proativos, criativos e comprometidos com a transformação de vidas.</p>
                                        <div class="vagas-container" style="margin-top: 24px; display: grid; gap: 22px;">
                                            <article class="vaga-card" style="border-radius: 18px; padding: 22px; background: linear-gradient(135deg, #fff8ec, #fdf1da); box-shadow: 0 18px 28px rgba(0, 0, 0, 0.08);">
                                                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px;">
                                                    <div style="width: 42px; height: 42px; border-radius: 50%; background: #fbbf24; display: flex; align-items: center; justify-content: center; color: #1f2937; font-weight: 700;">1</div>
                                                    <h3 style="margin: 0; font-size: 1.35rem; color: #111827;">Professor de Inglês</h3>
                                                </div>
                                                <p style="color: #334155;">Inspire alunos de todas as idades com aulas dinâmicas, conversação prática e uma metodologia que gera confiança e resultados rápidos.</p>
                                                <ul style="margin: 16px 0 0 18px; color: #475569; line-height: 1.7;">
                                                    <li>Ambiente colaborativo com formação contínua</li>
                                                    <li>Carga horária flexível e plano de carreira claro</li>
                                                    <li><strong>Requisitos:</strong> Experiência em sala de aula, comunicação clara e fluência em inglês</li>
                                                </ul>
                                                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px;">
                                                    <a href="javascript:void(0)" onclick="showApplicationForm('Professor de Inglês','whatsapp')" style="display:inline-block; padding: 12px 18px; background: #16a34a; color: #fff; text-decoration: none; border-radius: 12px; font-weight: 600;">Candidatar via WhatsApp</a>
                                                    <a href="javascript:void(0)" onclick="showApplicationForm('Professor de Inglês','email')" style="display:inline-block; padding: 12px 18px; background: #1d4ed8; color: #fff; text-decoration: none; border-radius: 12px; font-weight: 600;">Enviar por email</a>
                                                </div>
                                            </article>
                                            <article class="vaga-card" style="border-radius: 18px; padding: 22px; background: linear-gradient(135deg, #eef2ff, #e0e7ff); box-shadow: 0 18px 28px rgba(0, 0, 0, 0.08);">
                                                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px;">
                                                    <div style="width: 42px; height: 42px; border-radius: 50%; background: #6366f1; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700;">2</div>
                                                    <h3 style="margin: 0; font-size: 1.35rem; color: #111827;">Coach de Desenvolvimento Pessoal</h3>
                                                </div>
                                                <p style="color: #334155;">Apoie nossos alunos em sua jornada de crescimento, motivando mudanças positivas e ajudando-os a atingir metas pessoais e profissionais.</p>
                                                <ul style="margin: 16px 0 0 18px; color: #475569; line-height: 1.7;">
                                                    <li>Trabalho com foco no desenvolvimento humano e resultados reais</li>
                                                    <li>Ambiente de apoio e feedback contínuo</li>
                                                    <li><strong>Requisitos:</strong> Experiência em coaching, empatia e metodologia centrada no aluno</li>
                                                </ul>
                                                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px;">
                                                    <a href="javascript:void(0)" onclick="showApplicationForm('Coach de Desenvolvimento Pessoal','whatsapp')" style="display:inline-block; padding: 12px 18px; background: #16a34a; color: #fff; text-decoration: none; border-radius: 12px; font-weight: 600;">Candidatar via WhatsApp</a>
                                                    <a href="javascript:void(0)" onclick="showApplicationForm('Coach de Desenvolvimento Pessoal','email')" style="display:inline-block; padding: 12px 18px; background: #1d4ed8; color: #fff; text-decoration: none; border-radius: 12px; font-weight: 600;">Enviar por email</a>
                                                </div>
                                            </article>
                                            <article class="vaga-card" style="border-radius: 18px; padding: 22px; background: linear-gradient(135deg, #ecfdf5, #d1fae5); box-shadow: 0 18px 28px rgba(0, 0, 0, 0.08);">
                                                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 14px;">
                                                    <div style="width: 42px; height: 42px; border-radius: 50%; background: #10b981; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700;">3</div>
                                                    <h3 style="margin: 0; font-size: 1.35rem; color: #111827;">Auxiliar Administrativo</h3>
                                                </div>
                                                <p style="color: #334155;">Garanta a organização das nossas operações, apoie a equipe e ofereça uma experiência de atendimento excepcional para alunos e responsáveis.</p>
                                                <ul style="margin: 16px 0 0 18px; color: #475569; line-height: 1.7;">
                                                    <li>Equipe acolhedora e foco em desenvolvimento profissional</li>
                                                    <li>Atuação em ambiente moderno e colaborativo</li>
                                                    <li><strong>Requisitos:</strong> Organização, proatividade e experiência com atendimento</li>
                                                </ul>
                                                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px;">
                                                    <a href="javascript:void(0)" onclick="showApplicationForm('Auxiliar Administrativo','whatsapp')" style="display:inline-block; padding: 12px 18px; background: #16a34a; color: #fff; text-decoration: none; border-radius: 12px; font-weight: 600;">Candidatar via WhatsApp</a>
                                                    <a href="javascript:void(0)" onclick="showApplicationForm('Auxiliar Administrativo','email')" style="display:inline-block; padding: 12px 18px; background: #1d4ed8; color: #fff; text-decoration: none; border-radius: 12px; font-weight: 600;">Enviar por email</a>
                                                </div>
                                            </article>
                                        </div>
                                        <div style="margin-top: 24px; padding: 20px; border-radius: 18px; background: #f8fafc; border: 1px solid #cbd5e1;">
                                            <p style="margin: 0 0 8px; font-weight: 700; color: #111827;">Não encontrou a vaga certa?</p>
                                            <p style="margin: 0 0 14px; color: #475569;">Envie seu currículo para <a href="mailto:saraswatimaaschool@gmail.com" style="color: #1d4ed8; text-decoration: none;">saraswatimaaschool@gmail.com</a> e seja considerado para futuras oportunidades.</p>
                                            <a href="mailto:saraswatimaaschool@gmail.com" onclick="window.location.href=this.href; return false;" style="display:inline-block; padding: 12px 20px; background: #1d4ed8; color: #fff; text-decoration: none; border-radius: 12px; font-weight: 600;">Enviar Currículo</a>
                                        </div>
                                        </div>
                                    </section>
                                    <!-- LOUVORES SECTION -->
                                    <section id="louvores" class="info-section">
                                        <h2 style="color: #667eea;">Louvores</h2>
                                        <div class="info-section-body">
                                        <p style="max-width: 720px; color: #475569; line-height: 1.75;">Veja como nossos alunos e parceiros reconhecem a qualidade pedagógica e o impacto das nossas aulas. Cada depoimento reflete a experiência real com atendimento acolhedor, resultados rápidos e suporte personalizado.</p>
                                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px;">
                                            <article style="background: #ffffff; border: 1px solid rgba(148, 163, 184, 0.18); border-radius: 20px; padding: 20px; box-shadow: 0 16px 30px rgba(15, 23, 42, 0.06);">
                                                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px;">
                                                    <img src="https://via.placeholder.com/80?text=AL" alt="Aluno satisfeito" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 2px solid #e2e8f0;">
                                                    <div>
                                                        <strong style="display: block; color: #111827; font-size: 1rem; margin-bottom: 4px;">Ana Luiza</strong>
                                                        <span style="color: #64748b; font-size: 0.95rem;">Estudante de inglês</span>
                                                    </div>
                                                </div>
                                                <p style="margin: 0; color: #334155; line-height: 1.8;">“A S.M.S transformou meu desempenho em conversação. O acompanhamento é atencioso e a metodologia faz com que eu evolua com confiança em cada aula.”</p>
                                            </article>
                                            <article style="background: #ffffff; border: 1px solid rgba(148, 163, 184, 0.18); border-radius: 20px; padding: 20px; box-shadow: 0 16px 30px rgba(15, 23, 42, 0.06);">
                                                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px;">
                                                    <img src="https://via.placeholder.com/80?text=JM" alt="Parceria escolar" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 2px solid #e2e8f0;">
                                                    <div>
                                                        <strong style="display: block; color: #111827; font-size: 1rem; margin-bottom: 4px;">João Marcos</strong>
                                                        <span style="color: #64748b; font-size: 0.95rem;">Responsável</span>
                                                    </div>
                                                </div>
                                                <p style="margin: 0; color: #334155; line-height: 1.8;">“O suporte humano e dedicado fez a diferença para meu filho. As aulas são personalizadas e o progresso é visível desde o primeiro mês.”</p>
                                            </article>
                                            <article style="background: #ffffff; border: 1px solid rgba(148, 163, 184, 0.18); border-radius: 20px; padding: 20px; box-shadow: 0 16px 30px rgba(15, 23, 42, 0.06);">
                                                <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px;">
                                                    <img src="https://via.placeholder.com/80?text=CB" alt="Aluno feliz" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 2px solid #e2e8f0;">
                                                    <div>
                                                        <strong style="display: block; color: #111827; font-size: 1rem; margin-bottom: 4px;">Camila Braga</strong>
                                                        <span style="color: #64748b; font-size: 0.95rem;">Parceira pedagógica</span>
                                                    </div>
                                                </div>
                                                <p style="margin: 0; color: #334155; line-height: 1.8;">“A equipe é preparada e acolhedora. Recomendo a S.M.S para quem busca um ensino de idiomas com foco em conversação e resultados rápidos.”</p>
                                            </article>
                                        </div>
                                        <div style="margin-top: 24px; padding: 20px; border-radius: 18px; background: #f8fafc; border: 1px solid #cbd5e1;">
                                            <p style="margin: 0 0 8px; font-weight: 700; color: #111827;">Quer compartilhar sua experiência?</p>
                                            <p style="margin: 0 0 14px; color: #475569;">Envie seu depoimento para <a href="mailto:depoimentos@sms.com.br">depoimentos@sms.com.br</a></p>
                                        </div>
                                        </div>
                                    </section>
                                    <!-- Dados-Bancarios SECTION -->
                                     <section id="Bankdetail" class="info-section">
                                         <h2 style="text-align: center; color: #667eea; margin-bottom: 30px;">💳 Dados Bancários & Comprovante</h2>
                                         <div class="info-section-body">
            
            <!-- DADOS BANCÁRIOS -->
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #667eea;">
                <h3 style="color: #333; margin-bottom: 15px;">📋 Dados Bancários</h3>
                <div style="display: grid; gap: 15px;">
                    <div>
                        <label style="font-weight: bold; color: #333;">Titular da Conta:</label>
                        <p style="margin: 5px 0; color: #666;">Estevão André Lizi</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <label style="font-weight: bold; color: #333;">Banco:</label>
                            <p style="margin: 5px 0; color: #666;">Banco Milénio Atlântico</p>
                        </div>
                        <div>
                            <label style="font-weight: bold; color: #333;">Número da Conta:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">226182555.10001</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <label style="font-weight: bold; color: #333;">IBAN:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">AO06.0055.2618.2555.1010.7</p>
                        </div>
                        <div>
                            <label style="font-weight: bold; color: #333;">Referência:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">SMS-ESCOLA DE LÍNGUAS-2026</p>
                        </div>
                    </div>
                </div>
                <div style="margin-top: 15px; padding: 10px; background: #fff3cd; border-radius: 5px; color: #856404;">
                    <strong>⚠️ Importante:</strong> Após efetuar o pagamento, envie o comprovante para confirmar sua inscrição.
                </div>
                    <div class="contact-item">
                        <strong style="color: #333;">Direção: Estevão A. Lizi</strong>
                        <p>(244) 929452645</p>
                    </div>
                    <div class="contact-item">
                        <strong style="color: #333;">WhatsApp:S.M.S</strong>
                        <p>(244) 951474872</p>
                    </div>
                    </div>  
                                    </section>
                                    <!-- TERMOS E PRIVACIDADE SECTION -->
                                    <section id="termos-privacidade" class="info-section">
                                        <h2 style="color: #667eea;">Termos de Serviço e Privacidade</h2>
                                        <div class="terms-container">
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
                        </div>
                </div>
            </div>
        </div>
    <!-- BANNER COM SLIDES -->
    <section class="banner">
        <div class="banner-slider" id="bannerSlider">
            <div class="banner-slide">
                <img src="Image/Documento3.jpg " alt="S.M.S Escola de Linguas" style="width: 100%; height: 100%; object-fit: cover;">
                           
            </div>
            <div class="banner-slide">
                <img src="Image/PromoInfo3.jpg " alt="S.M.S Escola de Linguas" style="width: 100%; height: 100%; object-fit: cover;">
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
            <span class="dot" onclick="currentSlide(5)"></span>
           
        </div>
    </section>
    <!-- DASHBOARD COM CURSOS -->
    <section class="dashboard" id="cursos">   
        <h2 class="section-title">Nossos Cursos</h2>
        <div class="products-grid">
            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop" alt="Estágio 1 - Inglês" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">Estágio 1</div>
                    <p style="color: #666; font-size: 0.95rem;">📅 Duração: 4 meses | ⏱️ 2 horas de aulas semanais</p>
                    <div class="product-price">Kz 25.000,00/mês</div>
                    <div class="product-description">Domine os fundamentos da língua inglesa com nossa metodologia comprovada. Introdução à conversação, diálogos práticos e pronúncia. Garantimos fluidez oral em 4 meses.</div>
                    <button class="buy-button" onclick="bookCourse('Estágio 1', 25000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" alt="Estágio 2 - Conversação" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">Estágio 2</div>
                    <p style="color: #666; font-size: 0.95rem;">📅 Duração: 4,5 meses | ⏱️ 2 horas de aulas semanais</p>
                    <div class="product-price">Kz 35.000,00/mês</div>
                    <div class="product-description">Desenvolva conversação natural e confiante. Audição aperfeiçoada, vocabulário avançado e expressão fluida. Ideal para profissionais que buscam maior segurança linguística.</div>
                    <button class="buy-button" onclick="bookCourse('Estágio 2', 35000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" alt="Estágio 3 - Profissional" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">Estágio 3</div>
                    <p style="color: #666; font-size: 0.95rem;">📅 Sob consulta | ⏱️ 1h30 de aulas (Online)</p>
                    <div class="product-price">Kz 20.000,00/mês</div>
                    <div class="product-description">Capacitação avançada para o mercado de trabalho. Inglês profissional, negociações internacionais e apresentações. Prepare-se para oportunidades globais com a S.M.S.</div>
                    <button class="buy-button" onclick="bookCourse('Estágio 3', 20000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop" alt="Preparatório" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">Preparatório</div>
                    <p style="color: #666; font-size: 0.95rem;">📅 Sob consulta | ⏱️ 1h30 de aulas (Online)</p>
                    <div class="product-price">Kz 15.000,00/aula</div>
                    <div class="product-description">Preparação intensiva para exames internacionais e oportunidades acadêmicas. Suporte personalizado para alcançar seus objetivos educacionais.</div>
                    <button class="buy-button" onclick="bookCourse('Preparatório', 15000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop" alt="Habilidades de Comunicação" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">Habilidades de Comunicação</div>
                    <p style="color: #666; font-size: 0.95rem;">📅 Sob consulta | ⏱️ 1h30 de aulas (Online)</p>
                    <div class="product-price">Kz 12.000,00/aula</div>
                    <div class="product-description">Desenvolva competências interpessoais essenciais: comunicação eficaz, liderança, inteligência emocional e apresentações profissionais.</div>
                    <button class="buy-button" onclick="bookCourse('Habilidades de Comunicação', 12000.00); showRegistrationAndPayment();">Inscrever-se</button>
                </div>
            </div>

            <div class="product-card">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Aceleração de Fluência" class="product-image-img">
                <div class="product-info">
                    <div class="product-name">Aceleração da Fluência</div>
                    <p style="color: #666; font-size: 0.95rem;">📅 Sob consulta | ⏱️ 1h30 de aulas (Online)</p>
                    <div class="product-price">Kz 25.000,00/mês</div>
                    <div class="product-description">Acelere sua fluência em conversação e audição. Alcance o nível de falante nativo com imersão total e prática intensiva orientada.</div>
                    <button class="buy-button" onclick="bookCourse('Aceleração da Fluência', 25000.00); showRegistrationAndPayment();">Inscrever-se</button>
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
                <input type="email" id="email" placeholder="saraswatimaaschool@gmailcom" required>
            </div>

            <div class="form-group">
                <label for="municipality">🏘️ Município (Localização):</label>
                <select id="municipality" required style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 5px; font-size: 16px;">
                    <option value="">Selecione um município...</option>
                      <option value="Luanda">Online</option>
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
                        <p style="margin: 5px 0; color: #666;">Estevão André Lizi</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <label style="font-weight: bold; color: #333;">Banco:</label>
                            <p style="margin: 5px 0; color: #666;">Banco Milénio Atlântico</p>
                        </div>
                        <div>
                            <label style="font-weight: bold; color: #333;">Número da Conta:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">226182555.10001</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <label style="font-weight: bold; color: #333;">IBAN:</label>
                            <span>AO06</span>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">0055.0000.2618.2555.1010.7</p>
                        </div>
                        <div>
                            <label style="font-weight: bold; color: #333;">Referência:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">SMS-ESCOLA DE LÍNGUAS-2026</p>
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
        <h2 class="section-title">Galeria de Fotos</h2>
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
        <section id="contato-info" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center;">
            <p><strong>🕐 Horário de Atendimento:</strong> Segunda a Sexta, 07:30 - 18:00</p>
        </section>
        <p style="margin-top: 20px;">&copy; 2026 S.M.S - Escola de Linguas & Habilidades - Todos os direitos reservados.</p>
        <!-- Botão de rolagem/voltar ao topo -->
<button id="scrollToTopBtn" title="Voltar ao topo" style="display: none;">up</button>
    </footer>
<script>
        // Slides automáticos e controles do site
        (function(){
            let currentSlideIndex = 0;
            let slideInterval = null;
            const slider = document.getElementById('bannerSlider');
            const slides = () => document.querySelectorAll('.banner-slide');
            const dots = () => document.querySelectorAll('.dot');

            function showSlides(index) {
                const s = slides();
                const d = dots();
                if (!s.length || !slider) return;
                if (index < 0) index = s.length - 1;
                if (index >= s.length) index = 0;
                currentSlideIndex = index;
                const offset = -currentSlideIndex * 100;
                slider.style.transform = `translateX(${offset}%)`;
                d.forEach((dot, i) => dot.classList.toggle('active', i === currentSlideIndex));
            }

            function nextSlide() { showSlides(currentSlideIndex + 1); }

            function startAutoSlide() {
                stopAutoSlide();
                slideInterval = setInterval(nextSlide, 6500);
            }

            function stopAutoSlide() {
                if (slideInterval) clearInterval(slideInterval);
                slideInterval = null;
            }

            // Expose for onclick attributes used in HTML
            window.currentSlide = function(n){
                // dots in HTML are 1-based (currentSlide(1)), convert to 0-based
                const idx = (typeof n === 'number') ? (n - 1) : 0;
                showSlides(idx);
                startAutoSlide();
            };

            // Start
            showSlides(0);
            startAutoSlide();

            // Make sure dots (if any) are clickable
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.addEventListener('click', () => { window.currentSlide(i+1); });
            });

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
                    buyMenu.setAttribute('aria-hidden', 'false');
                    if (button) button.textContent = 'Fechar';
                } else {
                    buyMenu.style.display = 'none';
                    buyMenu.setAttribute('aria-hidden', 'true');
                    if (button) button.textContent = 'Comprar';
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

            window.openPurchaseForm = function(manualTitle, manualId) {
                const formWrapper = document.getElementById('purchase-form');
                if (!formWrapper) return;
                document.getElementById('selectedManualTitle').textContent = `Comprar ${manualTitle}`;
                document.getElementById('purchaseManualId').value = manualId;
                formWrapper.classList.remove('hidden');
                formWrapper.classList.add('show');
                const nameInput = document.getElementById('buyerName');
                if (nameInput) nameInput.focus();
            };

            window.closePurchaseForm = function() {
                const formWrapper = document.getElementById('purchase-form');
                if (formWrapper) {
                    formWrapper.classList.add('hidden');
                    formWrapper.classList.remove('show');
                }
            };

            window.submitPurchaseRequest = function() {
                const name = document.getElementById('buyerName').value.trim();
                const courseType = document.getElementById('courseType').value.trim();
                const proofFile = document.getElementById('proofFile').files[0];
                const manualTitle = document.getElementById('selectedManualTitle').textContent.replace('Comprar ', '').trim();

                if (!name || !courseType || !proofFile) {
                    alert('Preencha o nome, tipo de curso e anexe o comprovante em PDF.');
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

                const email = 'saraswatimaaschool@gmail.com';
                const subject = encodeURIComponent(`Pedido de compra - ${manualTitle}`);
                const body = encodeURIComponent(
                    `Pedido de compra de ${manualTitle}\n` +
                    `Nome: ${name}\n` +
                    `Tipo de curso: ${courseType}\n` +
                    `Comprovante: ${proofFile.name}\n\n` +
                    `O seu pedido será validado, assim que confirmarmos o recebimento do Pagamento. Vamos encaminhar o EBOOK ESCOLHIDO apartir deste mesmo E-mail. PDF manualmente enviado dentro de 24 horas ao cliente.      Agradecemos a sua preferência e confiança na S.M.S - Escola de Línguas & Habilidades. Estamos ansiosos para ajudá-lo a alcançar seus objetivos de aprendizagem!  em caso de dúvidas ou para mais informações, não hesite em entrar em contato conosco. Estamos aqui para ajudar!`
                );

                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                closePurchaseForm();
            };

            // Toggle Google translate menu
            window.toggleGoogleTranslateMenu = function(){
                const menu = document.getElementById('google-translate-menu');
                if (!menu) return;
                const hidden = menu.getAttribute('aria-hidden') === 'true';
                menu.setAttribute('aria-hidden', hidden ? 'false' : 'true');
                menu.style.opacity = hidden ? '1' : '';
                menu.style.visibility = hidden ? 'visible' : '';
                menu.style.transform = hidden ? 'translateY(0)' : '';
            };

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
        function bookCourse(courseName, coursePrice) {
            document.getElementById('courseName').value = courseName;
            document.getElementById('coursePrice').value = 'Kz ' + coursePrice.toFixed(2).replace('.', ',');
            const section = document.getElementById('agendamento');
            section.classList.add('show');
            setTimeout(() => {
                document.getElementById('scheduleDate').focus();
                section.scrollIntoView({ behavior: 'smooth' });
            }, 100);        }

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

        // Registros & Pagamento
        function toggleAllInfoSections() {
            const infoSystem = document.querySelector('.info-system');
            const button = document.getElementById('infoToggleAllBtn');
            if (!infoSystem || !button) return;

            const isCollapsed = infoSystem.classList.toggle('collapsed');
            button.textContent = isCollapsed ? 'Ver informações' : 'Ocultar informações';
            sectionsCloseAll();

            if (!isCollapsed) {
                infoSystem.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                const message = encodeURIComponent(`*S.M.S - INSCRIÇÃO COMPLETA* \n\n👤 Nome: ${name}\n📱 Telefone: ${phone}\n📧 Email: ${email}\n🏘️ Município: ${municipality}\n📚 Curso: ${courseName}\n💵 Preço: ${coursePrice}\n📅 Data: ${scheduleDate}\n⏰ Horário: ${scheduleTime}\n📝 Observações: ${notes}\n✅ Comprovante de pagamento anexado\n\n📝 *Agradecimentos:* 🎓 Bem-vindo(a) à Saraswati MAA Mind School – S.M.S!
É um grande prazer ter você connosco nesta jornada de crescimento e desenvolvimento da língua inglesa.
🌍📚 Antes de iniciar, pedimos que certique a sua escolha:

🔹 *Estágio 1 – Iniciantes*
Indicado para alunos que ainda não conseguem falar inglês ou possuem dificuldades básicas de comunicação. Aqui você aprenderá desde a base até ganhar confiança para conversar.

🔹 *Estágio 2 – B2*
Indicado para alunos que passaram do basico e que já conseguem falar.  Audição aperfeiçoada, vocabulário avançado e expressão fluida. Ideal para profissionais que buscam maior segurança linguística.

🔹 *Estágio 3 – Profissional*
Indicado para alunos, empresas, Capacitação avançada para o mercado de trabalho. Inglês profissional, negociações internacionais e apresentações.

🔹 *Aceleração da Fluência*
Categoria recomendada para alunos que já falam inglês, mas desejam melhorar a comunicação, pronúncia, vocabulário e fluência no dia a dia e no ambiente profissional.

Em caso de erro na inscrição nós podemos ajudar...

Estamos preparados para ajudá-lo(a) a alcançar um novo nível.
Seja bem-vindo(a) à S.M.S! 🚀✨

📞 Receção S.M.S` );
                window.location.href = `https://api.whatsapp.com/send?phone=244951474872&text=${message}`;
            } else if (method === 'email') {
                const subject = encodeURIComponent('S.M.S - INSCRIÇÃO COMPLETA');
                const body = encodeURIComponent(`S.M.S - INSCRIÇÃO COMPLETA\n\n👤 Nome: ${name}\n📱 Telefone: ${phone}\n📧 Email: ${email}\n🏘️ Município: ${municipality}\n📚 Curso: ${courseName}\n💵 Preço: ${coursePrice}\n📅 Data: ${scheduleDate}\n⏰ Horário: ${scheduleTime}\n📝 Observações: ${notes}\n✅ Comprovante de pagamento em anexo \n\n📝 Agradecimentos:🎓 Bem-vindo(a) à Saraswati MAA Mind School – S.M.S!
É um grande prazer ter você connosco nesta jornada de crescimento e desenvolvimento da língua inglesa.
🌍📚 Antes de iniciar, pedimos que certique a sua escolha:

🔹 Estágio 1 – Iniciantes
Indicado para alunos que ainda não conseguem falar inglês ou possuem dificuldades básicas de comunicação. Aqui você aprenderá desde a base até ganhar confiança para conversar.

🔹 Estágio 2 – B2
Indicado para alunos que passaram do basico e que já conseguem falar.  Audição aperfeiçoada, vocabulário avançado e expressão fluida. Ideal para profissionais que buscam maior segurança linguística.

🔹 Estágio 3 – Profissional
Indicado para alunos, empresas, Capacitação avançada para o mercado de trabalho. Inglês profissional, negociações internacionais e apresentações.

🔹 Aceleração da Fluência
Categoria recomendada para alunos que já falam inglês, mas desejam melhorar a comunicação, pronúncia, vocabulário e fluência no dia a dia e no ambiente profissional.

Em caso de erro na inscrição nós podemos ajudar...

Estamos preparados para ajudá-lo(a) a alcançar um novo nível.
Seja bem-vindo(a) à S.M.S! 🚀✨

📞 Receção S.M.S` );
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
            const body = encodeURIComponent(`Olá,%0A%0AGostaria de candidatar-me para a vaga de ${position}.%0A%0ANome: ${name}%0AEmail: ${email}%0ATelemóvel: ${phone}%0A%0AMensagem:%0A${message}`);
            window.location.href = `mailto:saraswatimaaschool@gmail.com?subject=${subject}&body=${body}`;
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
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

         //-- ticker - texto rolando -->

        window.addEventListener('DOMContentLoaded', function() {
            const texts = [
                "Somos uma escola de línguas e desenvolvimento de habilidades com ensino presencial e online.",
                "Professores experientes e metodologia prática, com turmas reduzidas para atenção personalizada.",
                "Horários flexíveis, apoio contínuo e localização acessível em Luanda para melhor atendimento.",
            ];
            
            const tickerContent = document.querySelector('.ticker-content');
            if (tickerContent) {
                texts.forEach(function(text, index) {
                    const tickerItem = document.createElement('div');
                    tickerItem.className = 'ticker-item';
                    tickerItem.textContent = text;
                    tickerContent.appendChild(tickerItem);
                });
                
                // Repetir os textos para efeito contínuo
                texts.forEach(function(text) {
                    const tickerItem = document.createElement('div');
                    tickerItem.className = 'ticker-item';
                    tickerItem.textContent = text;
                    tickerContent.appendChild(tickerItem);
                });
            }
            if (typeof updateManualBuyButtons === 'function') {
                updateManualBuyButtons();
            }
        });

        // Removed invalid buyBtn listener; buy menu managed by toggleBuyMenu()
        </script>
</body>
</html>
