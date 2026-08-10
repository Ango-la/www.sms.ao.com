# 📖 Guia de Implementação - Sistema de Compra de Manuais com Formspree

## 🎯 Visão Geral

Este guia descreve como o novo sistema de compra de manuais funciona com integração ao **Formspree** para envio automático de emails.

## 📋 Fluxo de Compra

### 1️⃣ Cliente clica no botão "Comprar"
- A modal de compra se abre
- Título e preço do manual são exibidos

### 2️⃣ Preencher dados pessoais
Cliente deve preencher:
- ✅ Nome completo
- ✅ Email
- ✅ Número de telefone
- ✅ Senha (mesma do botão "Estudar")

### 3️⃣ Validação de Senha
- A senha deve começar com a categoria (Standard, Foundation, etc.)
- Deve conter pelo menos 4 números
- Exemplo: `Standard 1 1234` ou `Foundation 5555`

### 4️⃣ Clique em "Baixar e Confirmar Compra"
- O documento PDF é baixado automaticamente
- Um email é enviado para **saraswatimaaschool@gmail.com** com:
  - Nome do cliente
  - Email
  - Telefone
  - Manual comprado
  - Valor
  - Data e hora da compra

## 🔧 Configuração Técnica

### Arquivos Modificados:

1. **purchase-flow.js** (novo)
   - Lógica completa de compra
   - Integração com Formspree
   - Validação de senha e dados

2. **index.html**
   - Nova modal HTML para compra
   - Referências aos scripts
   - Botões "Comprar" atualizados

3. **style.css**
   - Estilos da nova modal
   - Animações e responsividade

### Integração Formspree

**Endpoint:** `https://formspree.io/f/xvkpzyov`

**Email destino:** `saraswatimaaschool@gmail.com`

**Dados enviados:**
```
- Nome do cliente
- Email do cliente
- Telefone do cliente
- Nome do manual
- Preço do manual
- Data e hora da compra
```

## 📦 Manuais Disponíveis

| ID | Manual | Preço |
|:--:|--------|-------|
| 1 | Standard English - Pacote Completo | 5.000 Kz |
| 2 | Foundation English - Pacote Completo | 5.000 Kz |
| 3 | Intermediate English - Pacote Completo | 5.000 Kz |
| 4 | Aceleração da Fluência - Pacote Completo | 5.000 Kz |
| 5 | Programa Kids Joy - Pacote Completo | 5.000 Kz |
| 6 | Pacote Autodidata - Completo | 5.000 Kz |

## 🔐 Senhas por Categoria

As senhas são as mesmas usadas no botão "Estudar":

- **Standard** (inclui variações: Standard 1, Standard 2, Standard 3)
- **Foundation**
- **Intermediate**
- **Fluency Acceleration**
- **Joy**
- **Autodidata**

Formato esperado: `[Categoria] [números]`
Exemplos: 
- `Standard 1234`
- `Foundation 5555`
- `Intermediate 1111`

## 🎨 UI/UX

### Modal de Compra
- Campo responsivo em dispositivos móveis
- Validação em tempo real da senha
- Mensagens de erro/sucesso visuais
- Overlay escurecido de fundo
- Botão fechar (×) no canto superior

### Animações
- Transição suave da modal
- Feedback visual na validação
- Loading message durante processamento

## ⚡ Funcionalidades

✅ **Validação em Tempo Real**
- Email válido verificado
- Senha validada com regex
- Campos obrigatórios

✅ **Download Automático**
- PDF disparado diretamente
- Sem redirect ou pop-ups desnecessários

✅ **Email Automático**
- Integração AJAX com Formspree
- Sem refresh de página
- Confirmação silenciosa

✅ **Segurança**
- Mesma senha do sistema "Estudar"
- Validação CORS-safe com Formspree
- Sem exposição de dados sensíveis

## 🚀 Como Testar

1. Abra o site em um navegador
2. Procure um manual e clique em "Comprar"
3. Preencha os dados:
   - Nome: João Silva
   - Email: seu.email@exemplo.com
   - Telefone: +244 951474872
   - Senha: Standard 1234
4. Clique em "Baixar e Confirmar Compra"
5. Verifique:
   - ✅ Download do PDF
   - ✅ Email recebido em saraswatimaaschool@gmail.com

## 📞 Suporte

Em caso de dúvidas ou erros:
1. Verifique console do navegador (F12)
2. Confirme se os arquivos estão carregando:
   - purchase-flow.js
   - Formspree library
3. Teste a conexão com Formspree

## 📝 Notas Importantes

- Não há limite de compras por cliente
- Emails são enviados em tempo real (podem levar segundos)
- O Formspree tem plano gratuito com até 50 envios/mês
- Para mais de 50 envios, upgrade para plano pago

---

**Versão:** 1.0  
**Última atualização:** 2026-08-09
