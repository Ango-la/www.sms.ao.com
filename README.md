<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="./">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="S.M.S - Escola de Linguas & Habilidades">
    <meta name="description" content="S.M.S - Escola de Linguas & Habilidades - Aprenda idiomas e desenvolva novas competências. Agende suas aulas hoje!">
    <meta name="keywords" content="Escola de Linguas, Idiomas, Habilidades, Cursos, Aprendizado, Inglês, Francês, Alemão, Espanhol">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="./">
    <meta property="og:url" content="./">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Saraswati MAA Mind School - Aprenda com Profissionais Experientes">
    <meta property="og:description" content="S.M.S - Escola de Linguas & Habilidades - Aprenda idiomas e desenvolva novas competências. Agende suas aulas hoje!">
    <meta property="og:image" content="Image/favicon.jpg">
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
        html, body {
            overflow-x: hidden;
        }
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
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            color: #fff;
            border: none;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
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
            position: relative;
            white-space: normal;
            font-size: 11px;
            font-weight: 400;
            letter-spacing: 0.4px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            min-height: 18px;
        }

        .ticker-item {
            position: absolute;
            inset: 0;
            padding: 0 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            opacity: 0;
            transition: opacity 0.45s ease;
            white-space: normal;
            line-height: 1.4;
            word-break: break-word;
            overflow-wrap: anywhere;
            font-weight: 300;
        }

        .ticker-item.active {
            opacity: 1;
        }

        /* pause-on-hover intentionally omitted because the ticker overlay
           uses pointer-events:none to avoid blocking header interactions */

        @media (max-width: 768px) {
            .ticker-wrapper {
                min-height: 52px;
                padding: 10px 0;
            }

            .ticker-content {
                min-height: 32px;
            }

            .ticker-item {
                padding: 0 14px;
                font-size: 11px;
            }
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
            overflow-x: hidden;
            word-break: break-word;
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

        /* Responsive Payment & Purchase Forms for today's updates */
        .payment-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
            margin-top: 40px;
            overflow-x: hidden;
            word-break: break-word;
        }

        .payment-info-block {
            background: rgba(255, 255, 255, 0.95);
            padding: 24px;
            border-radius: 12px;
            margin-bottom: 20px;
            overflow-x: hidden;
            word-break: break-word;
            word-wrap: break-word;
        }

        .payment-info-block h3 {
            font-size: 16px;
            color: #764ba2;
            margin-bottom: 12px;
        }

        .payment-info-block p {
            color: #333;
            font-size: 14px;
            line-height: 1.6;
            margin: 8px 0;
        }

        @media (max-width: 768px) {
            .payment-section {
                padding: 24px 16px;
                margin-top: 24px;
                overflow-x: hidden;
            }

            .payment-info-block {
                padding: 18px;
                border-radius: 10px;
                margin-bottom: 16px;
                overflow-x: hidden;
                word-break: break-word;
            }

            .payment-info-block h3 {
                font-size: 15px;
                margin-bottom: 10px;
            }

            .payment-info-block p {
                font-size: 13px;
            }

            .whatsapp-section {
                max-width: 100%;
                padding: 24px 16px;
                margin: 20px auto;
            }

            .whatsapp-button {
                padding: 12px;
                font-size: 16px;
            }

            .form-group input {
                padding: 10px;
                font-size: 14px;
            }

            .form-group input[readonly] {
                background: #f0f4ff;
                color: #374151;
                cursor: not-allowed;
            }
        }

        @media (max-width: 480px) {
            .payment-section {
                padding: 16px 12px;
                margin-top: 16px;
                overflow-x: hidden;
            }

            .payment-info-block {
                padding: 14px;
                border-radius: 8px;
                margin-bottom: 12px;
                overflow-x: hidden;
                word-break: break-word;
            }

            .payment-info-block h2 {
                font-size: 18px;
            }

            .payment-info-block h3 {
                font-size: 14px;
                margin-bottom: 8px;
            }

            .payment-info-block p {
                font-size: 12px;
                margin: 6px 0;
            }

            .whatsapp-section {
                max-width: 100%;
                padding: 16px 12px;
                margin: 16px auto;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            .whatsapp-section h2 {
                font-size: 16px;
                margin-bottom: 12px;
            }

            .form-group {
                margin-bottom: 12px;
            }

            .form-group label {
                font-size: 12px;
                margin-bottom: 6px;
            }

            .form-group input {
                padding: 8px;
                font-size: 13px;
            }

            .form-group input[readonly] {
                background: #f0f4ff;
                color: #374151;
                cursor: not-allowed;
                word-break: break-word;
            }

            .whatsapp-button {
                padding: 10px 12px;
                font-size: 14px;
            }

            .purchase-form {
                padding: 12px;
                border-radius: 10px;
            }

            .purchase-form h3 {
                font-size: 14px;
                margin: 0 0 12px 0;
            }

            .purchase-request-form input,
            .purchase-request-form select {
                padding: 8px;
                font-size: 13px;
                margin-bottom: 10px;
            }

            .purchase-submit-button,
            .purchase-cancel-button {
                padding: 8px 12px;
                font-size: 12px;
            }

            .purchase-note {
                font-size: 12px;
                margin: 8px 0;
            }
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
.info-system-close-button,
.site-close-button {
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
}

.info-system-close-button:hover,
.site-close-button:hover {
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
  overflow-x: hidden;
  word-break: break-word;
  touch-action: pan-y;
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
   padding: 8px 16px;
   border-radius: 8px;
   font-size: 14px;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
   color: white;
   border: none;
   cursor: pointer;
   box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
   transition: all 0.4s ease;
   position: relative;
   overflow: hidden;
   white-space: nowrap;
   line-height: 1.2;
 }

 .info-toggle-button::before {
   content: '';
   position: absolute;
   top: 0;
   left: -100%;
   width: 100%;
   height: 100%;
   background: rgba(255, 255, 255, 0.2);
   transition: left 0.4s ease;
 }

 .info-toggle-button:hover::before {
   left: 100%;
 }

 .info-toggle-button:hover {
   transform: translateY(-3px);
   background-position: 100% 0;
   box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
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

.info-section-body .testimonial-header {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 18px;
}

.info-section-body .testimonial-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eef2ff;
    color: #1e3a8a;
    font-weight: 700;
    font-size: 0.95rem;
    flex-shrink: 0;
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
            background-color: #f5f5f5;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
            overflow: hidden;
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
            transform: none;
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
            border-color: rgba(102, 126, 234, 0.3);
        }
        
        .product-card:hover::before {
            opacity: 0.08;
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
            flex: 1;
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
            text-decoration: none;
        }

        .course-buttons-container {
            display: flex;
            gap: 12px;
            width: 100%;
        }

        .course-buttons-container .buy-button {
            flex: 1;
        }

        .propina-btn {
            background: linear-gradient(135deg, #f093fb 0%, #667eea 50%, #764ba2 100%) !important;
        }

        .propina-btn:hover {
            background-position: 100% 0 !important;
            box-shadow: 0 8px 25px rgba(240, 147, 251, 0.5) !important;
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

        /* PROPINA MODAL STYLES */
        .propina-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: flex-start;
            justify-content: center;
            z-index: 2000;
            padding: 100px 20px 20px;
            overflow-y: auto;
            overflow-x: hidden;
            backdrop-filter: blur(4px);
        }

        .propina-modal-content {
            background: white;
            border-radius: 16px;
            max-width: 600px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            overflow-x: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            position: relative;
            animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
            from {
                transform: translateY(30px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        /* Use same layout/appearance as site-close-button so X is consistent across desktop and mobile */
        .propina-modal-close {
            width: 44px;
            height: 44px;
            border: 0;
            border-radius: 50%;
            background: transparent;
            color: #000;
            font-size: 24px;
            font-weight: 700;
            line-height: 1;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-shadow: none;
            transition: transform 0.18s ease;
        }

        .propina-modal-close:hover {
            transform: translateY(-1px);
        }

        .buy-menu-header,
        .propina-modal-title-row,
        .info-system-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            width: 100%;
            margin-bottom: 18px;
        }

        .buy-menu-header h2,
        .propina-modal-title-row h2,
        .info-system-header h2 {
            margin: 0;
            flex: 1;
            color: #000;
            font-size: 1.25rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .buy-menu-header button,
        .propina-modal-title-row button,
        .info-system-header button {
            position: relative;
            flex-shrink: 0;
        }

        @media (max-width: 768px) {
            .propina-modal-content,
            .info-system {
                position: relative !important;
            }

            #buy-menu {
                position: fixed !important;
                top: 84px !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                width: min(96%, 920px) !important;
                max-width: 620px !important;
                max-height: calc(100vh - 94px) !important;
                z-index: 9999 !important;
            }

            .site-close-button,
            .propina-modal-close,
            .buy-menu-close,
            .info-system-close-button {
                width: 44px !important;
                height: 44px !important;
                min-width: 44px !important;
                min-height: 44px !important;
                border-radius: 50% !important;
                background: transparent !important;
                color: #000 !important;
                font-size: 24px !important;
                font-weight: 700 !important;
                line-height: 1 !important;
                box-shadow: none !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
            }
        }

        .propina-modal-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            color: white;
            padding: 28px 24px;
            border-radius: 16px 16px 0 0;
            margin-bottom: 24px;
        }

        .propina-modal-header h2 {
            margin: 0 0 16px 0;
            font-size: 24px;
        }

        .iban-display {
            background: rgba(255, 255, 255, 0.15);
            padding: 16px;
            border-radius: 12px;
            backdrop-filter: blur(10px);
        }

        .iban-display p {
            margin: 8px 0;
            font-size: 14px;
            white-space: normal;
            word-break: break-word;
            overflow-wrap: anywhere;
        }

        .iban-display .iban-code {
            font-family: monospace;
            font-size: 18px;
            background: #080808;
            color: white;
            padding: 12px;
            border-radius: 8px;
            margin: 8px 0;
            overflow-x: hidden;
            word-break: break-all;
            white-space: normal;
        }

        .propina-form {
            padding: 24px;
        }

        .propina-fieldset {
            border: none;
            padding: 0 0 24px 0;
            margin: 0;
            border-bottom: 1px solid #e5e7eb;
        }

        .propina-fieldset:last-of-type {
            border-bottom: none;
        }

        .propina-fieldset legend {
            font-size: 16px;
            font-weight: 700;
            color: #111827;
            margin-bottom: 16px;
            padding: 0;
            display: block;
        }

        .propina-form .form-group {
            margin-bottom: 16px;
        }

        .propina-form .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #374151;
            font-size: 14px;
        }

        .propina-form input,
        .propina-form select {
            width: 100%;
            padding: 12px;
            border: 1.5px solid #d1d5db;
            border-radius: 8px;
            font-size: 14px;
            font-family: inherit;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
            background: white;
        }

        .propina-form input:focus,
        .propina-form select:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .monthly-fields {
            padding: 12px;
            background: #f8fbff;
            border-radius: 8px;
            border-left: 4px solid #667eea;
        }

        .monthly-fields label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #374151;
            font-size: 14px;
        }

        .monthly-fields select {
            width: 100%;
            padding: 12px;
            border: 1.5px solid #d1d5db;
            border-radius: 8px;
            font-size: 14px;
        }

        .propina-buttons {
            display: flex;
            gap: 12px;
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid #e5e7eb;
        }

        .propina-submit-btn,
        .propina-cancel-btn {
            flex: 1;
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .propina-submit-btn {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .propina-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
        }

        .propina-submit-btn:active {
            transform: translateY(0);
        }

        .propina-cancel-btn {
            background: #f3f4f6;
            color: #374151;
            border: 1px solid #d1d5db;
        }

        .propina-cancel-btn:hover {
            background: #e5e7eb;
            border-color: #9ca3af;
        }

        @media (max-width: 768px) {
            .propina-modal-content {
                max-height: 95vh;
                border-radius: 12px;
            }

            .propina-form {
                padding: 16px;
            }

            .propina-modal-header {
                padding: 16px;
                border-radius: 12px 12px 0 0;
            }

            .propina-modal-header h2 {
                font-size: 20px;
                margin-bottom: 12px;
            }

            .iban-display {
                padding: 12px;
            }

            .iban-display p {
                font-size: 13px;
            }

            .propina-fieldset {
                padding: 0 0 16px 0;
                margin-bottom: 8px;
            }

            .propina-fieldset legend {
                font-size: 15px;
                margin-bottom: 12px;
            }

            .propina-form .form-group {
                margin-bottom: 12px;
            }

            .propina-form .form-group label {
                font-size: 13px;
                margin-bottom: 6px;
            }

            .propina-form input,
            .propina-form select {
                padding: 10px;
                font-size: 14px;
            }

            .propina-form input[readonly] {
                background: #f0f4ff;
                color: #374151;
            }

            .monthly-fields {
                padding: 10px;
                margin-top: 8px;
            }

            .monthly-fields label {
                font-size: 13px;
                margin-bottom: 6px;
            }

            .monthly-fields select {
                padding: 10px;
                font-size: 14px;
            }

            .propina-buttons {
                flex-direction: column;
                gap: 10px;
                margin-top: 16px;
                padding-top: 16px;
            }

            .propina-submit-btn,
            .propina-cancel-btn {
                padding: 10px 16px;
                font-size: 14px;
            }

            .course-buttons-container {
                flex-direction: column;
                gap: 10px;
            }

            .course-buttons-container .buy-button {
                width: 100%;
            }
        }

        @media (max-width: 480px) {
            .propina-modal {
                padding: 12px;
            }

            .propina-modal-content {
                border-radius: 10px;
                max-height: 98vh;
            }

            .propina-form {
                padding: 12px;
            }

            .propina-modal-header {
                padding: 12px;
                margin-bottom: 16px;
            }

            .propina-modal-header h2 {
                font-size: 18px;
                margin-bottom: 8px;
            }

            /* Keep close button size consistent across breakpoints (fixed overlay) */

            .propina-modal {
                padding: 80px 12px 12px;
            }

            .propina-modal-content {
                max-width: 100%;
            }

            .iban-display .iban-code {
                font-size: 15px;
                padding: 10px;
            }

            .iban-display {
                padding: 10px;
            }

            .iban-display p {
                font-size: 12px;
                margin: 6px 0;
            }

            .propina-fieldset {
                padding: 0 0 12px 0;
                margin-bottom: 6px;
            }

            .propina-fieldset legend {
                font-size: 14px;
                margin-bottom: 10px;
            }

            .propina-form .form-group {
                margin-bottom: 10px;
            }

            .propina-form .form-group label {
                font-size: 12px;
                margin-bottom: 5px;
            }

            .propina-form input,
            .propina-form select {
                padding: 8px;
                font-size: 13px;
            }

            .propina-form input[readonly] {
                background: #f0f4ff;
                color: #374151;
                word-break: break-word;
            }

            .monthly-fields {
                padding: 8px;
                margin-top: 6px;
            }

            .monthly-fields label {
                font-size: 12px;
                margin-bottom: 5px;
            }

            .monthly-fields select {
                padding: 8px;
                font-size: 13px;
            }

            .propina-buttons {
                flex-direction: column;
                gap: 8px;
                margin-top: 12px;
                padding-top: 12px;
            }

            .propina-submit-btn,
            .propina-cancel-btn {
                padding: 8px 12px;
                font-size: 13px;
            }
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
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
            z-index: 2000;
            align-items: flex-start;
            justify-content: center;
            padding: 100px 20px 20px;
            overflow-x: hidden;
            overflow-y: auto;
            touch-action: pan-y;
        }

        #agendamento.show {
            display: flex;
        }

        /* FORMULÁRIO WHATSAPP */
        .whatsapp-section {
            background: white;
            padding: 24px;
            border-radius: 12px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            text-align: left;
            overflow-x: hidden;
            word-break: break-word;
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
            cursor: pointer;
        }

        .form-group input:not([type="radio"]) {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        .form-group input[type="radio"] {
            width: auto;
            margin: 0;
            cursor: pointer;
        }

        .form-group input:not([type="radio"]):focus {
            outline: none;
            border-color: #667eea;
        }

        .radio-group {
            display: flex;
            gap: 12px;
            align-items: center;
            margin-top: 6px;
            touch-action: manipulation;
        }

        .radio-option {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 12px;
            border: 1px solid #ddd;
            border-radius: 10px;
            cursor: pointer;
            transition: background 0.2s, border-color 0.2s;
            user-select: none;
            position: relative;
            pointer-events: auto;
        }

        .radio-option:hover {
            background: rgba(102, 126, 234, 0.08);
            border-color: #667eea;
        }

        .radio-option input[type="radio"] {
            cursor: pointer;
            position: relative;
            z-index: 2;
        }

        .radio-option span {
            cursor: pointer;
        }

        .radio-option input[type="radio"] + span {
            display: inline-block;
        }

        .radio-option input[type="radio"]:checked + span {
            font-weight: 700;
            color: #1f2937;
        }

        .modality-confirmation {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 6px 10px;
            margin-top: 10px;
            border-radius: 999px;
            background: #16a34a;
            color: #ffffff;
            font-size: 0.85rem;
            font-weight: 700;
            border: 1px solid rgba(59, 130, 246, 0.15);
            box-shadow: 0 3px 10px rgba(22, 163, 74, 0.16);
        }

        .modality-confirmation.hidden {
            display: none !important;
        }

        @media (max-width: 768px) {
            .modality-confirmation {
                width: auto;
                padding: 8px 12px;
            }
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
            #buy-menu,
            .buy-menu {
                top: 88px !important;
                left: 0;
                transform: none;
                width: calc(100% - 10px);
                max-width: none;
                max-height: calc(100vh - 94px);
                height: calc(100vh - 94px);
                border-radius: 0 0 16px 16px;
                margin: 0 5px 0 5px;
                z-index: 90 !important; /* put below header (header z-index:100) */
            }
        }
        @media (max-width: 480px) {
            .buy-menu {
                top: 110px;
                max-height: calc(100vh - 116px);
                height: calc(100vh - 116px);
            }
        }
        @media (max-width: 360px) {
            .buy-menu {
                top: 130px;
                max-height: calc(100vh - 136px);
                height: calc(100vh - 136px);
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
            #agendamento {
                padding: 80px 16px 16px;
            }

            .whatsapp-section {
                padding: 18px;
                max-width: 100%;
            }

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
            #agendamento {
                padding: 70px 12px 12px;
            }

            .whatsapp-section {
                padding: 14px;
                border-radius: 10px;
            }

            .whatsapp-section h2 {
                font-size: 18px;
            }

            .form-group {
                margin-bottom: 14px;
            }

            .form-group label {
                font-size: 13px;
            }

            .form-group input,
            .form-group select {
                font-size: 15px;
                padding: 10px;
            }

            .whatsapp-button {
                padding: 12px;
                font-size: 16px;
            }

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
            min-width: 100%;
            min-height: 100%;
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
            display: none;
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
            opacity: 0;
            width: 52px;
            height: 52px;
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
                min-width: 40px;
                min-height: 40px;
                max-width: 40px;
                max-height: 40px;
                font-size: 14px;
            }

            .buy-button,
            .whatsapp-button,
            .order-toggle-btn {
                min-width: 100%;
                box-sizing: border-box;
            }

            .floating-report-btn {
                right: 12px;
            }
        }

        @media (max-width: 420px) {
            #scrollToTopBtn {
                right: 10px;
                bottom: 10px;
                width: 36px;
                height: 36px;
                min-width: 36px;
                min-height: 36px;
                max-width: 36px;
                max-height: 36px;
                padding: 0;
                font-size: 12px;
            }
        }

            .banner-slide {
                padding: 18px 12px;
            }

            .banner-slide > div {
                padding: 0 10px;
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
                top: 130px;
                left: 0;
                transform: none;
                width: calc(100% - 10px);
                max-width: none;
                max-height: calc(100vh - 140px);
                height: calc(100vh - 140px);
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
                    top: 96px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: min(96%, 920px);
                    max-width: 620px;
                    max-height: calc(100vh - 116px);
                    overflow-y: auto;
                    overflow-x: hidden;
                    background: #ffffff;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                    border-radius: 12px;
                    padding: 18px;
                    z-index: 9999;
                    display: none;
                    touch-action: pan-y;
                }
                .buy-menu.show { display: block !important; }
                .buy-menu-close {
                    width: 44px;
                    height: 44px;
                    min-width: 44px;
                    min-height: 44px;
                    border: none;
                    border-radius: 50%;
                    background: transparent;
                    color: #000;
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 1;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
                }
                .buy-menu-content h2 { margin-top: 0; }
                .buy-menu-content ul { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; list-style: none; padding: 0; margin: 0; }
                .buy-menu-content ul li { background: transparent; border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 8px; }
                .buy-menu-content ul li img { width: 180px; height: 120px; object-fit: cover; border-radius: 8px; }
                .purchase-form { max-width: 760px; width: 100%; margin: 12px auto; padding: 12px; box-sizing: border-box; }
                .manual-pdf-area embed { width: 100%; height: 360px; }
                .purchase-submit-button, .purchase-cancel-button { padding: 10px 14px; border-radius: 8px; }

                /* Purchase form styling (refined) */
                .purchase-form { width: 100%; max-width: 720px; box-sizing: border-box; background: rgba(255,255,255,0.98); border: 1px solid rgba(79,70,229,0.12); backdrop-filter: blur(12px); border-radius: 22px; padding: 24px; box-shadow: 0 20px 50px rgba(15,23,42,0.08); margin: 16px auto; }
                .purchase-form h3 { margin: 0 0 12px 0; font-size: 1.45rem; color: #111827; font-weight: 800; letter-spacing: 0.01em; }
                .purchase-form.hidden { display: none; }
                .purchase-form.show { display: block; }
                .purchase-form .purchase-form-header { margin-bottom: 18px; padding: 18px 20px; background: linear-gradient(135deg, rgba(79,70,229,0.08), rgba(59,130,246,0.08)); border-radius: 18px; border: 1px solid rgba(79,70,229,0.14); }
                .purchase-form .purchase-form-header p { margin: 0; color: #475569; font-size: 0.95rem; line-height: 1.7; }
                .purchase-request-form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; align-items: stretch; }
                .purchase-request-form label { display: block; font-size: 0.94rem; color: #334155; font-weight: 700; margin-bottom: 8px; }
                .purchase-request-form input[type="text"],
                .purchase-request-form input[type="email"],
                .purchase-request-form select,
                .purchase-request-form input[type="file"] { width: 100%; padding: 14px 16px; border: 1px solid rgba(148,163,184,0.35); border-radius: 16px; background: #f8fbff; box-shadow: inset 0 1px 2px rgba(15,23,42,0.04); font-size: 0.95rem; color: #0f172a; font-family: inherit; transition: border-color 0.2s, box-shadow 0.2s; }
                .purchase-request-form input[type="text"]:focus,
                .purchase-request-form input[type="email"]:focus,
                .purchase-request-form select:focus,
                .purchase-request-form input[type="file"]:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 4px rgba(79,70,229,0.12); }
                .purchase-request-form input[type="file"] { padding: 12px 14px; height: auto; }
                .purchase-request-form .full-width { grid-column: 1 / -1; }
                #purchase-form .purchase-request-form .buttons-row { display: flex !important; flex-direction: row !important; gap: 12px !important; justify-content: flex-end !important; align-items: center !important; flex-wrap: wrap !important; margin-top: 16px !important; }
                .purchase-request-form .buttons-row { grid-column: 1 / -1; display: flex; gap: 12px; justify-content: flex-end; align-items: center; flex-wrap: wrap; flex-direction: row; margin-top: 16px; }
                #purchase-form .purchase-request-form .buttons-row button { display: inline-flex !important; white-space: nowrap; min-width: 90px; width: auto !important; flex: 0 1 auto !important; padding: 10px 14px; font-size: 0.92rem; }
                .purchase-request-form .buttons-row .purchase-cancel-button { flex: 0 1 auto; }
                .purchase-note { font-size: 0.88rem; color: #475569; margin-top: 16px; grid-column: 1 / -1; line-height: 1.75; background: #eef2ff; padding: 14px 16px; border-radius: 16px; border: 1px solid rgba(79,70,229,0.14); }
                .purchase-submit-button { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #fff; border: none; font-weight: 600; padding: 10px 16px; border-radius: 8px; cursor: pointer; transition: all 0.3s; font-size: 0.9rem; }
                .purchase-submit-button:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(16,185,129,0.3); }
                .purchase-cancel-button { background: #f3f4f6; color: #374151; border: 1.5px solid #d1d5db; padding: 11px 18px; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 0.95rem; transition: all 0.3s; }
                .purchase-cancel-button:hover { background: #e5e7eb; border-color: #9ca3af; }

                @media (max-width: 900px) {
                    .purchase-request-form { grid-template-columns: 1fr; gap: 12px; }
                    .purchase-form { max-width: calc(100% - 24px); padding: 16px; }
                }
                @media (max-width: 600px) {
                    .purchase-form { max-width: calc(100% - 16px); padding: 12px; margin: 10px 8px; overflow-x: hidden; }
                    .purchase-request-form { gap: 10px; grid-template-columns: 1fr; }
                    .purchase-request-form label { font-size: 0.86rem; }
                    .purchase-request-form input,
                    .purchase-request-form select { font-size: 15px; height: 40px; }
                    .purchase-request-form input[type="file"] { padding: 10px 12px; }
                    .purchase-request-form .buttons-row { flex-direction: column !important; gap: 8px !important; align-items: stretch !important; }
                    .purchase-request-form .buttons-row button { width: 100% !important; min-width: 0 !important; max-width: none !important; padding: 8px 12px !important; font-size: 0.82rem !important; }
                    .purchase-submit-button,
                    .purchase-cancel-button { padding: 8px 12px; font-size: 0.82rem; min-width: 0; }
                    .purchase-note { font-size: 0.82rem; padding: 12px 14px; }
                    #buy-menu {
                        position: fixed !important;
                        top: 0 !important;
                        left: 12px !important;
                        right: 12px !important;
                        width: calc(100% - 24px) !important;
                        max-width: none !important;
                        transform: none !important;
                        overflow-x: hidden;
                        z-index: 9999 !important;
                    }
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
                    .header-actions .info-toggle-button { padding: 8px 10px; font-size: 0.8rem; min-width: 0; }
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
                <!-- Catálogo (removido conforme solicitação) -->
                    <div class="buy-button-container">
                    <button id="buyMenuToggleBtn" type="button" class="buy-button" onclick="toggleBuyMenu()">Manuais</button>
                </div>
                    <div id="buy-menu" class="buy-menu" aria-hidden="true" style="display:none;">
                        <div class="buy-menu-header">
                            <h2>Manuais</h2>
                            <button type="button" class="buy-menu-close site-close-button" onclick="hideBuyMenu()" aria-label="Fechar menu">×</button>
                        </div>
                        <div class="buy-menu-content">
                            <ul>
                                <li id="summeryprice">
                                    <img src="ManuaisFT/Listed Lessons.png" alt="Guia S.M.S">
                                    <h3>Guia S.M.S</h3>
                                    <p>Guia Onde todas as informações <br/>estão disponíveis sobre a sua aula.</p>
                                    <p id="manualPrice1" >Preço: 2.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Guia S.M.S', 1, '2.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="ManuaisFT/Dialogue and meetings.jpg" alt="Dialogue & Meetings">
                                    <h3>DIALOGUE & MEETINGS</h3>
                                    <p>O master que te ensina a se comunicar <br/> efetivamente em reuniões e diálogos profissionais.</p>
                                    <p id="manualPrice2" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Dialogue & Meetings', 2, '3.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="ManuaisFT/Grammar book.jpg" alt="Grammar Book">
                                    <h3>GRAMMAR BOOK</h3>
                                    <p>O livro completo sobre gramática inglesa, <br/> com exercícios práticos e explicações detalhadas.</p>
                                    <p id="manualPrice3" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Grammar Book', 3, '3.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="ManuaisFT/Vocabulary.jpg" alt="Vocabulário">
                                    <h3>VOCABULÁRIO</h3>
                                    <p>O livro completo sobre vocabulário inglês, <br/> com fonéticas e explicações detalhadas.</p>
                                    <p id="manualPrice4" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Vocabulário', 4, '3.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="ManuaisFT/Text and reading Skills.jpg" alt="Textos & Habilidades de Leitura">
                                    <h3>TEXTOS & HABILIDADES DE LEITURA</h3>
                                    <p>O livro completo sobre habilidades de leitura <br/> e escrita em inglês, com exercícios práticos<br/>  e explicações detalhadas.</p>
                                    <p id="manualPrice5" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Textos & Habilidades de Leitura', 5, '3.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="ManuaisFT/Verbs Regular and Irregular.jpg" alt="Verbos Regulares & Irregulares">
                                    <h3>OS VERBOS REGULARES & IRREGULARES</h3>
                                    <p>O livro completo sobre verbos ingleses, <br/> com exercícios práticos e explicações detalhadas.</p>
                                    <p id="manualPrice6" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Verbos Regulares & Irregulares', 6, '3.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="ManuaisFT/Fluency.jpg" alt="Aceleração da Fluência">
                                    <h3>Aceleração da Fluência</h3>
                                    <p> O método revolucionário para dominar <br/> o inglês com rapidez e eficácia.</p>
                                    <p id="manualPrice7" >Preço: 6.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Aceleração da Fluência', 7, '6.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="ManuaisFT/Not Available.png " alt="Um Estrangeiro Perdido">
                                    <h3>UM ESTRANGEIRO PERDIDO</h3>
                                    <p>O livro que conta a história de um estrangeiro perdido <br/> em uma terra desconhecida, cheio de desafios <br/> e descobertas.</p>
                                    <p id="manualPrice8" >Preço: 6.500 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('Um Estrangeiro Perdido', 8, '6.500 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="ManuaisFT/Not Available.png " alt="O Dicionário S.M.S">
                                    <h3>O DICIONÁRIO S.M.S</h3>
                                    <p>Dicionário completo com mais de 5.000 <br/> palavras e expressões em inglês.</p>
                                    <p id="manualPrice9" >Preço: 9.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('O Dicionário S.M.S', 9, '9.000 Kz')">Comprar</button>
                                </li>
                                <li>
                                    <img src="ManuaisFT/Not Available.png " alt="500 Conversas">
                                    <h3>500 CONVERSAS</h3>
                                    <p>O livro completo com 500 conversas práticas em inglês, <br/> ideal para melhorar a fala e a compreensão auditiva.</p>
                                    <p id="manualPrice10" >Preço: 3.000 Kz</p>
                                    <button type="button" onclick="openPurchaseForm('500 Conversas', 10, '3.000 Kz')">Comprar</button>
                                </li>
                            </ul>

                            <div id="purchase-form" class="purchase-form hidden">
                                <div class="purchase-form-header">
                                    <h3 id="selectedManualTitle">Pedido de compra</h3>
                                    <p>Preencha os dados abaixo para <br/>receber o manual rapidamente <br/>
                                        ou receber de forma física.</p>
                                </div>
                                <p id="selectedManualPrice" style="margin:0 0 18px; color:#334155; font-weight:600;">Preço: —</p>
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
                                        <button type="button" class="purchase-submit-button" onclick="submitPhysicalPurchaseRequest()" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">Físico</button>
                                        <button type="button" class="purchase-cancel-button" onclick="closePurchaseForm()">Cancelar</button>
                                    </div>
                                    <p class="purchase-note">📋 Use Virtual para finalizar por email <br/> Físico para abrir o WhatsApp com <br/>instruções de entrega impressa.</p>
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
                    <div class="info-system-header">
                        <h2>Informações</h2>
                        <button type="button" class="info-system-close-button site-close-button" onclick="toggleAllInfoSections()" aria-label="Fechar informações">×</button>
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
                                            <p style="margin: 0; color: #475569;">Email: VendasRhSms@outlook.com</p>
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
                                                <p style="margin:0; font-size:0.9rem; color:#6b7280;">Também pode enviar o seu CV para <a href="mailto:VendasRhSms@outlook.com">VendasRhSms@outlook.com</a></p>
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
                                            <p style="margin: 0 0 14px; color: #475569;">Envie seu currículo para <a href="mailto:VendasRhSms@outlook.com" style="color: #1d4ed8; text-decoration: none;">VendasRhSms@outlook.com</a> e seja considerado para futuras oportunidades.</p>
                                            <a href="mailto:VendasRhSms@outlook.com" onclick="window.location.href=this.href; return false;" style="display:inline-block; padding: 12px 20px; background: #1d4ed8; color: #fff; text-decoration: none; border-radius: 12px; font-weight: 600;">Enviar Currículo</a>
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
                                                <div class="testimonial-header">
                                                    <div class="testimonial-avatar">AL</div>
                                                    <div>
                                                        <strong style="display: block; color: #111827; font-size: 1rem; margin-bottom: 4px;">Ana Luiza</strong>
                                                        <span style="color: #64748b; font-size: 0.95rem;">Estudante de inglês</span>
                                                    </div>
                                                </div>
                                                <p style="margin: 0; color: #334155; line-height: 1.8;">“A S.M.S transformou meu desempenho em conversação. O acompanhamento é atencioso e a metodologia faz com que eu evolua com confiança em cada aula.”</p>
                                            </article>
                                            <article style="background: #ffffff; border: 1px solid rgba(148, 163, 184, 0.18); border-radius: 20px; padding: 20px; box-shadow: 0 16px 30px rgba(15, 23, 42, 0.06);">
                                                <div class="testimonial-header">
                                                    <div class="testimonial-avatar">JM</div>
                                                    <div>
                                                        <strong style="display: block; color: #111827; font-size: 1rem; margin-bottom: 4px;">João Marcos</strong>
                                                        <span style="color: #64748b; font-size: 0.95rem;">Responsável</span>
                                                    </div>
                                                </div>
                                                <p style="margin: 0; color: #334155; line-height: 1.8;">“O suporte humano e dedicado fez a diferença para meu filho. As aulas são personalizadas e o progresso é visível desde o primeiro mês.”</p>
                                            </article>
                                            <article style="background: #ffffff; border: 1px solid rgba(148, 163, 184, 0.18); border-radius: 20px; padding: 20px; box-shadow: 0 16px 30px rgba(15, 23, 42, 0.06);">
                                                <div class="testimonial-header">
                                                    <div class="testimonial-avatar">CB</div>
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
                                            <p style="margin: 0 0 14px; color: #475569;">Envie seu depoimento para <a href="mailto:VendasRhSms@outlook.com">VendasRhSms@outlook.com</a></p>
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
                        <p style="margin: 5px 0; color: #666;">HORIZON ASSIGNMENTES INDIA PRIVATE LIMITED</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <label style="font-weight: bold; color: #333;">Banco:</label>
                            <p style="margin: 5px 0; color: #666;">Banco Yetu.</p>
                        </div>
                        <div>
                            <label style="font-weight: bold; color: #333;">Número da Conta:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">7899088.10001</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div>
                            <label style="font-weight: bold; color: #333;">IBAN:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">AO6.0066.0000.0789.9088.1013.0</p>
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
            <div class="banner-slide" style="background-image: url('DashBoard/BannerPro.png');"></div>
            <div class="banner-slide" style="background-image: url('DashBoard/BannerPro2.png');"></div>
            <div class="banner-slide" style="background-image: url('DashBoard/BannerPro3.png');"></div>
            <div class="banner-slide" style="background-image: url('DashBoard/BannerPro4.png');"></div>
            <div class="banner-slide" style="background-image: url('DashBoard/BannerPro5.png');"></div>
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
        <h2 class="section-title">Catálogo de Cursos</h2>

        <div class="course-group">
            <h3 class="course-group-title">Programas Principais</h3>
            <div class="products-grid">
                <div class="product-card">
                    <img src="DashBoard/Foundationenglish.jpg" alt="Foundation English" class="product-image-img">
                    <div class="product-info">
                        <div class="product-name">Foundation English</div>
                        <p class="product-meta">15.000 KZ / mês · 3 meses · 2 horas por aula · Modalidade: Online / Presencial</p>
                        <div class="product-price">15.000 KZ / mês</div>
                        <div class="product-description">Ideal para iniciantes que buscam construir a base do inglês. Foco em comunicação básica, compreensão e vocabulário inicial.</div>
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
                        <p class="product-meta">20.000 KZ / mês · 4 meses · 2 horas por aula · Modalidade: Online / Presencial</p>
                        <div class="product-price">20.000 KZ / mês</div>
                        <div class="product-description">Para alunos com base em inglês que desejam desenvolver comunicação prática e ganhar confiança no uso cotidiano da língua.</div>
                        <div class="course-buttons-container">
                            <button class="buy-button" onclick="bookCourse('Intermediate English', 20000.00); showRegistrationAndPayment();">Inscrever-se</button>
                            <button class="buy-button propina-btn" onclick="openProptinaModal('Intermediate English', 20000.00);">Propina</button>
                        </div>
                    </div>
                </div>

                <div class="product-card">
                    <img src="DashBoard/Profissional english.jpg" alt="Professional English" class="product-image-img">
                    <div class="product-info">
                        <div class="product-name">Professional English</div>
                        <p class="product-meta">De 25.000 KZ até 99.000 KZ · 1h30 ou 3h por aula · Duração variável · Modalidade: Online / Presencial</p>
                        <div class="product-price">25.000 KZ - 99.000 KZ</div>
                        <div class="product-description">Programa avançado com categorias como Business, Academic, Technical, Travel e Specialized English. Estrutura personalizada conforme seu objetivo profissional.</div>
                        <div class="course-buttons-container">
                            <button class="buy-button" onclick="bookCourse('Professional English', 25000.00); showRegistrationAndPayment();">Inscrever-se</button>
                            <button class="buy-button propina-btn" onclick="openProptinaModal('Professional English', 25000.00);">Propina</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="course-group">
            <h3 class="course-group-title">Outros Programas</h3>
            <div class="products-grid">
                <div class="product-card">
                    <img src="DashBoard/Aceleração da fluencia.jpg" alt="Aceleração da Fluência" class="product-image-img">
                    <div class="product-info">
                        <div class="product-name">Aceleração da Fluência</div>
                        <p class="product-meta">25.000 KZ · 3 meses · 2 horas por aula · Modalidade: Online / Presencial</p>
                        <div class="product-price">25.000 KZ</div>
                        <div class="product-description">Para quem já fala inglês e quer acelerar o domínio completo da língua com prática intensiva e foco em fluência.</div>
                        <div class="course-buttons-container">
                            <button class="buy-button" onclick="bookCourse('Aceleração da Fluência', 25000.00); showRegistrationAndPayment();">Inscrever-se</button>
                            <button class="buy-button propina-btn" onclick="openProptinaModal('Aceleração da Fluência', 25000.00);">Propina</button>
                        </div>
                    </div>
                </div>

                <div class="product-card">
                    <img src="DashBoard/Habilidades de Comunicação.jpg" alt="Habilidades de Comunicação" class="product-image-img">
                    <div class="product-info">
                        <div class="product-name">Habilidades de Comunicação</div>
                        <p class="product-meta">18.000 KZ / aula · 6 horas · Intervalo de 30 minutos · Modalidade: Online / Presencial</p>
                        <div class="product-price">18.000 KZ / aula</div>
                        <div class="product-description">Diversifique entre inglês americano, britânico e nigeriano, aumentando sua capacidade de diálogo, pronúncia e versatilidade.</div>
                        <div class="course-buttons-container">
                            <button class="buy-button" onclick="bookCourse('Habilidades de Comunicação', 18000.00); showRegistrationAndPayment();">Inscrever-se</button>
                            <button class="buy-button propina-btn" onclick="openProptinaModal('Habilidades de Comunicação', 18000.00);">Propina</button>
                        </div>
                    </div>
                </div>

                <div class="product-card">
                    <img src="DashBoard/Preparatorio.jpg" alt="Preparatório" class="product-image-img">
                    <div class="product-info">
                        <div class="product-name">Preparatório</div>
                        <p class="product-meta">15.000 KZ / aula · 4 horas · Intervalo de 10 minutos · Modalidade: Online / Presencial</p>
                        <div class="product-price">15.000 KZ / aula</div>
                        <div class="product-description">Preparação para entrevistas de emprego, escolar, universitário, emigração, logística e outros objetivos com foco em desempenho.</div>
                        <div class="course-buttons-container">
                            <button class="buy-button" onclick="bookCourse('Preparatório', 15000.00); showRegistrationAndPayment();">Inscrever-se</button>
                            <button class="buy-button propina-btn" onclick="openProptinaModal('Preparatório', 15000.00);">Propina</button>
                        </div>
                    </div>
                </div>

                <div class="product-card">
                    <img src="Image/Aulas ao domicilio2.jpg" alt="Aulas ao Domicílio" class="product-image-img">
                    <div class="product-info">
                        <div class="product-name">Aulas ao Domicílio</div>
                        <p class="product-meta">30.000 KZ mensal · 2 horas por aula · Duração sob consulta · Modalidade: Domicílio</p>
                        <div class="product-price">30.000 KZ / mês (base)</div>
                        <div class="product-description">Aulas no domicílio com valor sujeito a alteração conforme horário e localização. Ideal para quem busca conforto e flexibilidade.</div>
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
                        <p class="product-meta">Presencial: 08:00–12:00 · Online: 19:00–21:00 · Modalidade: Híbrida · Gratuito</p>
                        <div class="product-price">Entrar no grupo (grátis)</div>
                        <div class="product-description">Encontros de prática em grupo para conversação e troca cultural. Participação aberta sem pagamento — entre no grupo via convite WhatsApp.</div>
                        <a class="buy-button free" role="button" href="https://chat.whatsapp.com/H2eDhya4kXm4hmZ5G95BXL?s=sw&p=a&ilr=4&amv=3" target="_blank" rel="noopener noreferrer">Entrar no grupo</a>
                    </div>
                </div>

                <div class="product-card">
                    <img src="DashBoard/Pacote Autodidata.png " alt="Pacote Autodidata - 25 aulas" class="product-image-img">
                    <div class="product-info">
                        <div class="product-name">Pacote Autodidata (YouTube + WhatsApp)</div>
                        <p class="product-meta">Pacote único · 25 aulas liberadas · Modalidade: Online (YouTube / WhatsApp)</p>
                        <div class="product-price">10.000 KZ (pacote único)</div>
                        <div class="product-description">Aulas gravadas liberadas no nosso canal do YouTube com suporte via grupo WhatsApp. Ideal para estudo autónomo sem professor presente.</div>
                        <div class="course-buttons-container">
                            <button class="buy-button" onclick="bookCourse('Pacote Autodidata (25 aulas)', 10000.00); showRegistrationAndPayment();">Inscrever-se</button>
                            <button class="buy-button propina-btn" onclick="openProptinaModal('Pacote Autodidata (YouTube + WhatsApp)', 10000.00);">Propina</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="course-group">
            <h3 class="course-group-title">Cursos Infantis</h3>
            <div class="products-grid">
                <div class="product-card">
                    <img src="DashBoard/Kindergarten presencial.png " alt="Aulas Infantis Kindergarten Presencial" class="product-image-img">
                    <div class="product-info">
                        <div class="product-name">Aulas Infantis Kindergarten – Presencial</div>
                        <p class="product-meta">26.500 KZ mensalidade · 5 meses · 1h30/aula (3 primeiros meses), 2h/aula (últimos 2 meses) · Modalidade: Presencial</p>
                        <div class="product-price">26.500 KZ / mês</div>
                        <div class="product-description">Curso infantil presencial com foco em comunicação e conversação progressiva, desenvolvido para o crescimento do aprendizado desde cedo.</div>
                        <div class="course-buttons-container">
                            <button class="buy-button" onclick="bookCourse('Aulas Infantis Kindergarten – Presencial', 26500.00); showRegistrationAndPayment();">Inscrever-se</button>
                            <button class="buy-button propina-btn" onclick="openProptinaModal('Aulas Infantis Kindergarten – Presencial', 26500.00);">Propina</button>
                        </div>
                    </div>
                </div>

                <div class="product-card">
                    <img src=" DashBoard/Kindergarten online.png" alt="Aulas Infantis Kindergarten Online" class="product-image-img">
                    <div class="product-info">
                        <div class="product-name">Aulas Infantis Kindergarten – Online</div>
                        <p class="product-meta">20.000 KZ mensal · 6 meses · 1h/aula (3 primeiros meses), 1h30/aula (últimos 3 meses) · Modalidade: Online</p>
                        <div class="product-price">20.000 KZ / mês</div>
                        <div class="product-description">Acompanhamento contínuo com aulas em tempo real, videoaulas, flashcards, áudios Playcast e brincadeiras com Joy Dunkin Kid.</div>
                        <div class="course-buttons-container">
                            <button class="buy-button" onclick="bookCourse('Aulas Infantis Kindergarten – Online', 20000.00); showRegistrationAndPayment();">Inscrever-se</button>
                            <button class="buy-button propina-btn" onclick="openProptinaModal('Aulas Infantis Kindergarten – Online', 20000.00);">Propina</button>
                        </div>
                    </div>
                </div>
                
                <div class="product-card">
                    <div class="course-video" style="position:relative;width:100%;height:300px;overflow:hidden;">
                            <div id="joyPlayerContainer" style="position:absolute;inset:0;width:100%;height:100%;padding-bottom:0;">
                                <div id="joyPlayer" style="position:absolute;left:0;top:0;width:100%;height:100%;"></div>
                                <button id="joySoundBtn" aria-label="Ativar som" style="position:absolute;top:8px;right:8px;width:38px;height:38px;border-radius:6px;background:rgba(0,0,0,0.45);color:#fff;border:0;font-size:16px;display:flex;align-items:center;justify-content:center;z-index:12">🔈</button>
                            </div>
                        </div>
                    <div class="product-info">
                        <div class="name-row">
                            <img src="ManuaisFT/Joy dunkin avatar.png" alt="Joy Dunkin Avatar" class="joy-avatar">
                            <div class="product-name">Escrever para Joy Dunkin Kid</div>
                        </div>
                        <p class="product-meta">Atendimento via avatar Joy Dunkin Kid · Modalidade: Online · Gratuito</p>
                        <div class="product-price">Custo: 0 KZ</div>
                        <div class="product-description">As crianças podem escrever e interagir com nosso avatar Joy Dunkin Kid para atividades, dúvidas e brincadeiras educativas — sem teacher e sem custo.</div>
                    
                        <a class="buy-button free" role="button" href="https://wa.me/244951474872?text=Olá%20Joy%20Dunkin%20Kid%20%e2%9c%8c%20Quero%20interagir" target="_blank" rel="noopener noreferrer">Escrever para Joy</a>
                    </div>
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
                <label for="coursePrice">💵 Preço:</label>
                <input type="text" id="coursePrice" placeholder="Preço do curso" readonly style="background-color: #f0f0f0;">
                <input type="hidden" id="courseBasePrice" value="0">
            </div>

            <div class="form-group">
                <div class="form-label">🧭 Como deseja estudar? <span style="font-size:0.9rem; color:#6b7280;">(Escolha uma opção)</span></div>
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
                <input type="email" id="email" placeholder="VendasRhSms@outlook.com" required>
            </div>

            <div class="form-group">
                <label for="idNumber">🆔 BI / Passaporte:</label>
                <input type="text" id="idNumber" placeholder="Ex: 123456789AB123 (BI) ou AB1234567 (Passaporte)" style="width:100%; padding:12px; border:1px solid #ddd; border-radius:6px;" required>
                <small style="color:#6b7280; display:block; margin-top:6px;">Seu documento será para nossa base de dados.</small>
            </div>

            <div class="form-group">
                <label for="municipality">🏘️ Localização:</label>
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
                    💬 Ir para pagamento
                </button>
            </div>
        </div>
    </section>
    
    <!-- MODAL DE PAGAMENTO DE PROPINAS -->
    <div id="propina-modal" class="propina-modal" style="display: none;">
        <div class="propina-modal-content">
            <div class="propina-modal-header">
                <div class="propina-modal-title-row">
                    <h2>💳 Formulário de Propina</h2>
                    <button class="propina-modal-close site-close-button" onclick="closeProptinaModal()" aria-label="Fechar modal">×</button>
                </div>
                <div class="iban-display">
                    <p><strong >IBAN para Pagamento:</strong></p>
                    <p class="iban-code">AO6.0066.0000.0789.9088.1013.0</p>
                    <p style="font-size: 14px; color: #000000; margin-top: 10px;">
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
                        <input type="text" id="propina-course" name="course" readonly placeholder="Curso será preenchido automaticamente" style="background: #f5f5f5; cursor: not-allowed;">
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
                    <div id="monthly-fields" class="monthly-fields" style="display: none; margin-top: 15px;">
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
                    <div id="package-fields" class="monthly-fields" style="display: none; margin-top: 15px;">
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
                    <div id="corporate-fields" class="monthly-fields" style="display: none; margin-top: 15px;">
                        <label for="propina-corporate">Categoria de Pacote Empresas:</label>
                        <select id="propina-corporate" name="corporate_category" onchange="updateCorporateAmount();">
                            <option value="">-- Selecione --</option>
                            <option value="Business English">Business English — 35.000</option>
                            <option value="Academic English">Academic English — 30.000</option>
                            <option value="Travel English">Travel English — 25.000</option>
                            <option value="Professional English">Professional English — 50.000</option>
                            <option value="Technical English">Technical English — 60.000</option>
                            <option value="Specialized English">Specialized English — 75.000</option>
                            <option value="Team/Company 3 Member">Team/Company 3 Member — 100.000</option>
                        </select>
                    </div>
                </fieldset>

                <!-- Montante a Pagar -->
                <fieldset class="propina-fieldset">
                    <legend>💵 Montante a Pagar</legend>
                    <div class="form-group">
                        <label for="propina-amount">Valor (KZ):</label>
                        <input type="number" id="propina-amount" name="amount" placeholder="Ex: 25000" step="0.01" readonly style="background: #f5f5f5; cursor: not-allowed;" required>
                    </div>
                </fieldset>

                <!-- Anexar Comprovante -->
                <fieldset class="propina-fieldset">
                    <legend>📎 Comprovante de Pagamento</legend>
                    <div class="form-group">
                        <label for="propina-proof">Anexar Comprovante (Imagem/PDF):</label>
                        <input type="file" id="propina-proof" name="proof" accept="image/*,.pdf" required>
                        <p style="font-size: 12px; color: #666; margin-top: 8px;">Formatos aceitos: JPG, PNG, PDF (máx. 10 MB)</p>
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
    <section class="payment-section" id="pagamento" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; margin-top: 40px; display: none;">
        <div class="payment-container" style="max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
            <h2 style="text-align: center; color: #333; margin-bottom: 30px;">💳 Dados Bancários & Comprovante de Pagamento</h2>
            <div id="paymentSummaryBox" style="background:#fff8eb; padding:16px; border-radius:10px; margin-bottom:18px; border:1px solid rgba(212,160,36,0.12);">
                <h3 style="margin:0 0 8px 0; color:#333;">Resumo da Inscrição</h3>
                <p style="margin:6px 0; color:#475569;"><strong>Curso:</strong> <span id="summary_course">—</span></p>
                <p style="margin:6px 0; color:#475569;"><strong>Valor do curso:</strong> <span id="summary_base">—</span></p>
                <p style="margin:6px 0; color:#475569;"><strong>Taxa de inscrição:</strong> <span id="summary_fee">—</span></p>
                <p style="margin:6px 0; color:#111827;"><strong>Total final:</strong> <span id="summary_total" style="color:#d4a024; font-weight:800; font-size:1.1rem;">—</span></p>
                <p style="margin:6px 0; color:#475569;"><strong>Referência:</strong> <span id="summary_reference">—</span></p>
                <p style="margin:6px 0; color:#475569;"><strong>Nome:</strong> <span id="summary_name">—</span></p>
                <p style="margin:6px 0; color:#475569;"><strong>Telefone:</strong> <span id="summary_phone">—</span></p>
                <p style="margin:6px 0; color:#475569;"><strong>Email:</strong> <span id="summary_email">—</span></p>
                <p style="margin:6px 0; color:#475569;"><strong>BI/Passaporte:</strong> <span id="summary_idNumber">—</span></p>
                <p style="margin:6px 0; color:#475569;"><strong>Município:</strong> <span id="summary_municipality">—</span></p>
                <p style="margin:6px 0; color:#475569;"><strong>Data / Hora:</strong> <span id="summary_schedule">—</span></p>
                <p style="margin:6px 0; color:#475569;"><strong>Observações:</strong> <span id="summary_notes">—</span></p>
            </div>
            <!-- DADOS BANCÁRIOS -->
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #667eea;">
                <h3 style="color: #667eea; margin-bottom: 15px;">📋 Dados Bancários</h3>
                <div style="display: grid; gap: 15px;">
                    <div>
                        <label style="font-weight: bold; color: #333;">Titulare da Conta:</label>
                        <p style="margin: 5px 0; color: #666;">HORIZON ASSIGNMENTES INDIA PRIVATE LIMITED</p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 6px;">
                        <div>
                            <label style="font-weight: bold; color: #333;">Banco:</label>
                            <p style="margin: 5px 0; color: #666;">Banco Yetu.</p>
                            <label style="font-weight: bold; color: #333; margin-top:8px; display:block;">Número da Conta:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace;">7899088.10001</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 6px;">
                        <div>
                            <label style="font-weight: bold; color: #333;">IBAN:</label>
                            <p style="margin: 5px 0; color: #666; font-family: monospace; display:inline-block;"><span>AO6.</span>0066.0000.0789.9088.1013.0</p>
                            <button type="button" onclick="copyIBAN()" style="margin-left:12px; padding:6px 10px; border-radius:8px; border:none; background:#d4a024; color:#072040; font-weight:700; cursor:pointer;">Copiar IBAN</button>
                            <label style="font-weight: bold; color: #333; margin-top:8px; display:block;">Referência:</label>
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
                <div style="display:flex; gap:10px; margin-bottom:12px; flex-wrap:wrap;">
                    <button id="enrollGenerateInvoiceBtn" type="button" onclick="generateEnrollmentInvoice()" disabled style="padding:8px 12px; border-radius:8px; border:none; background:#667eea; color:white; font-weight:700; cursor:pointer; opacity:0.6;">Gerar Fatura</button>
                    <button id="enrollSendWhatsAppBtn" type="button" onclick="submitAllDataVia('whatsapp')" style="padding:8px 12px; border-radius:8px; border:none; background:#25D366; color:white; font-weight:700; cursor:pointer;">Enviar Comprovante via WhatsApp</button>
                </div>

                <!-- removed duplicate send buttons; kept single WhatsApp action above -->
                <div style="font-size: 12px; color: #666; margin-top: 15px; text-align: center;">
                    <i>Todos os dados serão enviados junto com o comprovante de pagamento.</i>
                </div>
            </div>
        </div>
    </section>
    <!-- GALERIA DE FOTOS -->
    <section class="gallery" id="galeria">
        <h2 class="section-title">Jornal SMS</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="Image/Modelo 1.jpg" alt="Aula de Inglês" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Curso de Excel Avançado Já estará disponível e todos poderão se inscrever</h3>
                </div>
            </div>
            <div class="gallery-item">
                <img src="Image/Modelo 2.jpg" alt="Sala de Aula" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Curso de Gestão de Projetos Vem aí!</h3>
                </div>
            </div>
            <div class="gallery-item">
                <img src="Image/Modelo 3.jpg" alt="Estudantes" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Higiene e Segurança no Trabalho - quem dirige a segurança agora é você!</h3>
                </div>
            </div>
            <div class="gallery-item">
                <img src="Image/Modelo 4.jpg" alt="Materiais" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Informática está chegando até você traga seu computador na SMS</h3>
                </div>
            </div>
            <div class="gallery-item">
                <img src="Image/Modelo 5.jpg" alt="Programação" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Como assim ainda não se inscreveu?</h3>
                </div>
            </div>
            <div class="gallery-item">
                <img src="Image/Modelo 6.jpg" alt="Grupo de Estudo" class="gallery-image">
                <div class="gallery-overlay">
                    <h3>Já tens o Passaporte? Essa viagem é internacional venha fazer a logística </h3>
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
                    // If on small screens, compute the header bottom and position the menu below it
                    try {
                        const header = document.querySelector('header');
                        if (header && window.innerWidth <= 600) {
                                const rect = header.getBoundingClientRect();
                                const topPx = Math.ceil(rect.bottom) + 6; // small gap
                                buyMenu.style.setProperty('top', topPx + 'px', 'important');
                                buyMenu.style.setProperty('left', '0', 'important');
                                buyMenu.style.setProperty('transform', 'none', 'important');
                                buyMenu.style.setProperty('z-index', '90', 'important');
                            } else {
                                // revert to CSS default for larger screens
                                buyMenu.style.removeProperty('top');
                                buyMenu.style.removeProperty('left');
                                buyMenu.style.removeProperty('transform');
                                buyMenu.style.removeProperty('z-index');
                            }
                    } catch (e) {
                        buyMenu.style.top = '';
                    }
                    buyMenu.style.display = 'block';
                    buyMenu.setAttribute('aria-hidden', 'false');
                    if (button) button.textContent = 'Fechar';
                } else {
                    // hide and reset any inline positioning
                    buyMenu.style.display = 'none';
                    buyMenu.setAttribute('aria-hidden', 'true');
                    buyMenu.style.removeProperty('top');
                    buyMenu.style.removeProperty('left');
                    buyMenu.style.removeProperty('transform');
                    buyMenu.style.removeProperty('z-index');
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

                const email = 'VendasRhSms@outlook.com';
                const subject = encodeURIComponent(`Pedido de compra - ${manualTitle}`);
                const body = encodeURIComponent(
                    `Pedido de compra de ${manualTitle}\n` +
                    `Nome: ${name}\n` +
                    `Tipo de curso: ${courseType}\n` +
                    `Comprovante: ${proofFile.name}\n\n` +
                    `**Envie o seu comprovante manualmente para acelerar a sua validação.**\n\n` +
                    `**O seu pedido será validado, assim que confirmarmos o recebimento do Pagamento.** Vamos encaminhar o EBOOK ESCOLHIDO apartir deste mesmo E-mail. PDF manualmente enviado dentro de 24 horas ao cliente.      Agradecemos a sua preferência e confiança na S.M.S - Escola de Línguas & Habilidades. Estamos ansiosos para ajudá-lo a alcançar seus objetivos de aprendizagem!  em caso de dúvidas ou para mais informações, não hesite em entrar em contato conosco. Estamos aqui para ajudar!`
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
            // preencher preço formatado e guardar preço base num campo oculto (valor numérico)
            document.getElementById('coursePrice').value = 'Kz ' + coursePrice.toFixed(2).replace('.', ',');
            const baseInput = document.getElementById('courseBasePrice');
            if (baseInput) baseInput.value = Number(coursePrice || 0);
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

            const message = `Olá! Gostaria de agendar uma aula.%0A%0A📚 Curso: ${course}%0A💵 Preço: ${price}%0A📅 Data: ${date}%0A⏰ Horário: ${time}%0A👤 Nome: ${name}%0A📧 Email: ${email}%0A📱 WhatsApp: ${phone}%0A🏘️ Município: ${municipality}%0A📝 Observações: ${notes}`;
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
            document.getElementById('agendamento').style.display = 'block';
            document.getElementById('agendamento').scrollIntoView({ behavior: 'smooth' });
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
            updateModalityConfirmation();
        }

        document.addEventListener('DOMContentLoaded', setupEnrollModalityOptions);

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
            const FEE_PRESENTIAL = 5000;
            const FEE_ONLINE = 5000;
            const fee = (modality === 'presencial') ? FEE_PRESENTIAL : FEE_ONLINE;
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
            const courseName = document.getElementById('courseName').value;
            document.getElementById('summary_course').textContent = courseName || '—';
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
            document.getElementById('agendamento').style.display = 'none';
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
            const idNumber = (document.getElementById('idNumber')?.value || '').trim();
            const proofFile = document.getElementById('proofAttachment').files[0];

            if (!name || !phone || !email || !municipality || !scheduleDate || !scheduleTime) {
                alert('Por favor, preencha todos os campos obrigatórios!');
                return;
            }

            if (!proofFile) {
                alert('Por favor, anexe o comprovante de pagamento!');
                return;
            }

            const instruction = 'Envie o seu comprovante manualmente para acelerar a sua validação.';
            const proofInfo = proofFile ? `\nArquivo do comprovante: ${proofFile.name}` : '';
            const enrollmentFee = '5.000 Kz';
            const enrollmentTotal = coursePrice ? `${coursePrice} + ${enrollmentFee}` : enrollmentFee;

            if (method === 'whatsapp') {
                const message = encodeURIComponent(`*S.M.S - INSCRIÇÃO COMPLETA* \n\n👤 Nome: ${name}\n📱 Telefone: ${phone}\n📧 Email: ${email}\n🆔 BI/Passaporte: ${idNumber}\n🏘️ Município: ${municipality}\n📚 Curso: ${courseName}\n💵 Preço do curso: ${coursePrice}\n💳 Taxa de inscrição: ${enrollmentFee}\n💰 Total a pagar: ${enrollmentTotal}\n📅 Data: ${scheduleDate}\n⏰ Horário: ${scheduleTime}\n📝 Observações: ${notes}\n\n${instruction}${proofInfo}\n\n📝 *Agradecimentos:* 🎓 Bem-vindo(a) à Saraswati MAA Mind School – S.M.S!\nÉ um grande prazer acompanhá-lo(a) nesta jornada de aprendizado em inglês.`);
                window.location.href = `https://api.whatsapp.com/send?phone=244951474872&text=${message}`;
            } else if (method === 'email') {
                const subject = encodeURIComponent('S.M.S - INSCRIÇÃO COMPLETA');
                const body = encodeURIComponent(`**S.M.S - INSCRIÇÃO COMPLETA**\n\n👤 Nome: ${name}\n📱 Telefone: ${phone}\n📧 Email: ${email}\n🆔 BI/Passaporte: ${idNumber}\n🏘️ Município: ${municipality}\n📚 Curso: ${courseName}\n💵 Preço do curso: ${coursePrice}\n💳 Taxa de inscrição: ${enrollmentFee}\n💰 Total a pagar: ${enrollmentTotal}\n📅 Data: ${scheduleDate}\n⏰ Horário: ${scheduleTime}\n📝 Observações: ${notes}\n\n${instruction}${proofInfo}\n\n📝 **Agradecimentos:**🎓 Bem-vindo(a) à Saraswati MAA Mind School – S.M.S!\nÉ um grande prazer acompanhá-lo(a) nesta jornada de aprendizado em inglês.`);
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
            const body = encodeURIComponent(`Olá,%0A%0AGostaria de candidatar-me para a vaga de **${position}**.%0A%0ANome: ${name}%0AEmail: ${email}%0ATelemóvel: ${phone}%0A%0A**Mensagem:**%0A${message}`);
            window.location.href = `mailto:VendasRhSms@outlook.com?subject=${subject}&body=${body}`;
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
                const intervalMs = 3800;

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
                const iban = 'AO6.0066.0000.0789.9088.1013.0';
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
                const body = encodeURIComponent(
                    `S.M.S - Escola de Línguas & Habilidades\n`+
                    `NIF: 500188916\n`+
                    `Endereço: TERRA NOVA BFA DO VOLANTE CASA N° 475\n`+
                    `Telefone: +244 951 474 872\n\n`+
                    `Referência: ${enrollment.reference}\n`+
                    `Nome: ${enrollment.name}\n`+
                    `BI/Passaporte: ${enrollment.idNumber || '—'}\n`+
                    `Curso: ${enrollment.course}\n`+
                    `Modalidade: ${enrollment.modality}\n`+
                    `Valor do curso: Kz ${Number(enrollment.basePrice).toLocaleString('pt-PT')}\n`+
                    `Taxa de inscrição: Kz ${Number(enrollment.fee).toLocaleString('pt-PT')}\n`+
                    `Total: Kz ${Number(enrollment.total).toLocaleString('pt-PT')}\n\n`+
                    `Dados Bancários:\nBanco: Banco Yetu.\nTitular: HORIZON ASSIGNMENTES INDIA PRIVATE LIMITED\nIBAN: AO6.0066.0000.0789.9088.1013.0\nNº Conta: 7899088.10001\nNIF: 500188916\n\n`+
                    `Por favor, anexe o comprovativo de pagamento e envie este email para confirmação.`
                );
                const mailto = `mailto:${centerEmail}?subject=${subject}&body=${body}`;
                window.open(mailto, '_blank');
            }

            function openWhatsAppEnrollment(){
                const enrollment = JSON.parse(localStorage.getItem('sms_enrollment') || '{}');
                if (!enrollment || !enrollment.name) { alert('Nenhuma inscrição encontrada.'); return; }
                const text = encodeURIComponent(`Olá, efetuei o pagamento. Ref: ${enrollment.reference}. Nome: ${enrollment.name}. Curso: ${enrollment.course}. Total: Kz ${Number(enrollment.total).toLocaleString('pt-PT')}. Envio comprovativo em anexo.`);
                const phone = '244951474872';
                window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
            }
        </script>
</body>
</html>

