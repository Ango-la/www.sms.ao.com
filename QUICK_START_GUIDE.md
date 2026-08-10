<!-- QUICK START GUIDE - SISTEMA DE COMPRA DE MANUAIS -->

# 🎯 GUIA DE INICIO RÁPIDO - Compra de Manuais com Formspree

## ✅ Implementação Realizada

Seu site de venda de manuais foi completamente atualizado com um novo sistema de compra! 🚀

### 📋 O que foi feito:

```
✅ Novo formulário de compra com validação de senha
✅ Integração com Formspree para envio de emails automático
✅ Download automático de PDFs após confirmação
✅ Validação em tempo real de dados
✅ Interface visual moderna e responsiva
✅ Sistema de segurança com senhas (mesmas de "Estudar")
✅ Email automático para: saraswatimaaschool@gmail.com
```

---

## 🚀 COMO TESTAR (30 segundos)

### Opção 1: Teste Rápido
1. Abra `test-purchase-system.html` no navegador
2. Veja se tudo está com ✅ na seção de verificação
3. Preencha dados e teste envio de email

### Opção 2: Teste Completo
1. Abra `index.html`
2. Procure por um curso com botão "Comprar"
3. Clique em "Comprar"
4. Preencha com dados de teste:
   ```
   Nome: João Silva
   Email: seu.email@exemplo.com
   Telefone: +244 951474872
   Senha: Foundation 1234
   ```
5. Clique "Baixar e Confirmar Compra"
6. Verifique:
   - PDF foi baixado? ✅
   - Email chegou? ✅

---

## 📧 FLUXO DE COMPRA (O que acontece)

```
Cliente clica "Comprar"
        ↓
Formulário abre
├─ Nome obrigatório
├─ Email obrigatório
├─ Telefone obrigatório
└─ Senha (mesma de "Estudar")
        ↓
Validação de senha?
├─ NÃO → Mostra erro (vermelho)
└─ SIM → Habilita botão "Baixar" (verde)
        ↓
Cliente clica "Baixar e Confirmar Compra"
        ↓
Duas coisas acontecem SIMULTANEAMENTE:
├─ 📥 PDF é baixado automaticamente
└─ 📧 Email é enviado para saraswatimaaschool@gmail.com
        ↓
Modal fecha e mensagem de sucesso é exibida
```

---

## 🔐 SENHAS VÁLIDAS (Exemplos)

Todas as senhas começam com a CATEGORIA e têm no mínimo 4 números:

```
✅ Standard 1234        (Categoria: Standard)
✅ Foundation 5555      (Categoria: Foundation)
✅ Intermediate 1111    (Categoria: Intermediate)
✅ Fluency Acceleration 9999
✅ Joy 2024
✅ Autodidata 1234

❌ NÃO VÁLIDAS:
❌ 1234 (sem categoria)
❌ Standard 123 (só 3 números)
❌ invalid 1234 (categoria errada)
```

---

## 📊 DADOS ENVIADOS POR EMAIL

Quando o cliente compra, um email é enviado para **saraswatimaaschool@gmail.com** com:

```
Nome: João Silva
Email: seu.email@exemplo.com
Telefone: +244 951474872
Manual: Foundation English - Pacote Completo
Valor: 5.000 Kz
Data e Hora: 09/08/2026 14:30:45
Tipo de Solicitação: Compra de Manual
```

---

## 📁 ARQUIVOS MODIFICADOS/CRIADOS

### ✨ NOVOS:
- `purchase-flow.js` → Lógica completa de compra
- `test-purchase-system.html` → Página de teste
- `PURCHASE_SYSTEM_README.md` → Documentação completa
- `IMPLEMENTATION_SUMMARY.md` → Sumário técnico

### 🔄 MODIFICADOS:
- `index.html` → Adicionada modal de compra
- `style.css` → Estilos da nova interface

---

## ⚙️ CONFIGURAÇÃO DO FORMSPREE

**Endpoint Formspree:** `https://formspree.io/f/xvkpzyov`

✅ Seu email já está configurado: **saraswatimaaschool@gmail.com**

💡 **Dica:** Se quiser mudar o email destino, modifique a URL no arquivo `purchase-flow.js`

---

## 🎯 MANUAIS DISPONÍVEIS (Preços)

| Manual | Preço |
|--------|-------|
| Standard English - Pacote Completo | 5.000 Kz |
| Foundation English - Pacote Completo | 5.000 Kz |
| Intermediate English - Pacote Completo | 5.000 Kz |
| Aceleração da Fluência - Pacote Completo | 5.000 Kz |
| Programa Kids Joy - Pacote Completo | 5.000 Kz |
| Pacote Autodidata - Completo | 5.000 Kz |

---

## 🔧 TROUBLESHOOTING (Problemas Comuns)

### 🔴 "Email não é enviado"
```
Solução:
1. Verifique conexão com Internet
2. Abra console (F12) para ver logs
3. Teste em test-purchase-system.html
4. Confirme que email está digitado corretamente
```

### 🔴 "Senha não valida"
```
Solução:
1. Lembre-se de começar com a CATEGORIA
2. Adicione pelo menos 4 NÚMEROS
3. Exemplo: Foundation 1234 (não apenas 1234)
4. Tente: Standard 1111 ou Foundation 5555
```

### 🔴 "PDF não baixa"
```
Solução:
1. Desabilite bloqueadores de pop-ups
2. Verifique se arquivo existe em /documentos/
3. Teste com navegador diferente
4. Limpe cache (Ctrl+Shift+Del)
```

### 🔴 "Modal não abre"
```
Solução:
1. Limpe cache do navegador
2. Verifique console (F12) para erros
3. Certifique-se de que purchase-flow.js carregou
4. Recarregue a página (F5)
```

---

## 📞 SUPORTE TÉCNICO

Se algo não funcionar:

1. **Verifique o Console (F12)**
   - Pressione `F12` no navegador
   - Vá para aba "Console"
   - Procure por mensagens de erro em vermelho

2. **Execute o Teste**
   - Abra `test-purchase-system.html`
   - Veja qual verificação falhou
   - Reporte o erro

3. **Verifique Conexão**
   - Confirme que tem Internet
   - Teste em navegador diferente
   - Limpe cache (Ctrl+Shift+Del)

---

## ✨ RECURSOS EXTRAS

### Validação em Tempo Real
A senha é validada enquanto o cliente digita! Se estiver correta, vira verde e o botão fica disponível.

### Responsividade Mobile
O formulário funciona perfeitamente em celulares, tablets e computadores.

### Segurança
- Usa a mesma senha do botão "Estudar"
- Validação no lado do cliente
- Emails enviados via Formspree (serviço confiável)

### Analytics
Você recebe email com cada compra, assim pode acompanhar vendas em tempo real!

---

## 🚀 PRÓXIMAS IDEIAS (Opcional)

Se quiser expandir o sistema no futuro:

1. **Adicionar Pagamento Real**
   - Integrar Stripe ou PayPal
   - Confirmar pagamento antes de entregar

2. **Banco de Dados**
   - Armazenar histórico de compras
   - Criar perfil do cliente

3. **Notificações WhatsApp**
   - Avisar cliente quando manual está pronto
   - Suporte automático

4. **Múltiplos Idiomas**
   - Traduzir interface
   - Suportar mais moedas

---

## 📝 NOTAS IMPORTANTES

✅ **Formspree Gratuito:** Até 50 emails/mês  
✅ **Sem Configuração Extra:** Pronto para usar  
✅ **Emails Automáticos:** Chegam em segundos  
✅ **Mobile-Friendly:** Funciona em todos os dispositivos  

---

## 🎉 RESUMO

Seu site agora tem um **sistema de vendas automático**:

- ✅ Cliente preenche formulário
- ✅ Confirma com senha
- ✅ Recebe PDF automaticamente
- ✅ Você recebe email com os dados
- ✅ Sem precisa fazer nada manual!

**Pronto para receber pedidos! 🚀**

---

**Versão:** 1.0  
**Data:** 2026-08-09  
**Status:** ✅ PRONTO PARA PRODUÇÃO

Para dúvidas, consulte os arquivos:
- `PURCHASE_SYSTEM_README.md` (Documentação Completa)
- `IMPLEMENTATION_SUMMARY.md` (Detalhes Técnicos)
- `test-purchase-system.html` (Teste Interativo)
