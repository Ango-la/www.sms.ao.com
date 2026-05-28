const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const app = express();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 12 * 1024 * 1024 } });
const port = Number(process.env.PORT || 3000);

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_TO = process.env.EMAIL_TO || 'saraswatimaaschool@gmail.com';
const EMAIL_FROM = process.env.EMAIL_FROM || SMTP_USER || `no-reply@localhost`;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.warn('Atenção: as variáveis SMTP_HOST, SMTP_USER e SMTP_PASS não estão definidas. O envio de e-mail não funcionará até configurar o arquivo .env.');
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '.')));

async function sendEmail(subject, text, attachments = []) {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('Servidor de email não configurado. Verifique as variáveis SMTP no .env.');
  }

  return transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject,
    text,
    attachments,
  });
}

const manualFiles = {
  '1': 'Guia S.M.S_protected.pdf',
  '2': 'S.M.S DIALOGUE AND MEETINGS_protected.pdf',
  '3': 'S.M.S GRAMMAR BOOK_protected.pdf',
  '4': 'S.M.S VOCABULARY_protected.pdf',
  '5': 'TEXT & READING SKILLS _protected.pdf',
  '6': 'S.M.S REGULAR & INRREGULAR VERBS_protected.pdf',
  '7': 'S.M.S LISTENING SKILLS_protected.pdf',
  '8': 'S.M.S SPEAKING SKILLS_protected.pdf',
  '9': 'S.M.S MANUAL 9_protected.pdf',
  '10': 'S.M.S MANUAL 10_protected.pdf',
};

app.post('/api/purchase', upload.single('proofFile'), async (req, res) => {
  try {
    const { buyerName, courseType, manualTitle, manualId } = req.body;
    const file = req.file;

    if (!buyerName || !courseType || !manualTitle || !manualId || !file) {
      return res.status(400).json({ error: 'Dados incompletos. Preencha todos os campos e anexe o comprovante.' });
    }

    const subject = `Pedido de compra - ${manualTitle}`;
    const text = `Pedido de compra de ${manualTitle}\nNome: ${buyerName}\nTipo de curso: ${courseType}\nArquivo de pagamento: ${file.originalname}`;

    const attachments = [
      {
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      },
    ];

    const manualFileName = manualFiles[String(manualId)];
    if (manualFileName) {
      const manualPath = path.join(__dirname, 'documentos', manualFileName);
      if (fs.existsSync(manualPath)) {
        attachments.push({
          filename: manualFileName,
          path: manualPath,
          contentType: 'application/pdf',
        });
      } else {
        console.warn(`PDF do manual não encontrado no servidor: ${manualFileName}`);
      }
    }

    await sendEmail(subject, text, attachments);

    return res.json({ ok: true, message: 'Pedido de compra enviado com sucesso.' });
  } catch (error) {
    console.error('Erro ao enviar compra:', error);
    return res.status(500).json({ error: 'Erro interno ao enviar o pedido de compra.' });
  }
});

app.post('/api/registration', upload.single('proofAttachment'), async (req, res) => {
  try {
    const {
      courseName,
      coursePrice,
      scheduleDate,
      scheduleTime,
      name,
      phone,
      email,
      municipality,
      notes,
      method,
    } = req.body;
    const file = req.file;

    if (!courseName || !coursePrice || !scheduleDate || !scheduleTime || !name || !phone || !email || !municipality || !file) {
      return res.status(400).json({ error: 'Dados incompletos. Preencha todos os campos e anexe o comprovante.' });
    }

    const subject = `Inscrição S.M.S - ${courseName} - ${name}`;
    const text = `Nova inscrição S.M.S.\n\nNome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMunicípio: ${municipality}\nCurso: ${courseName}\nPreço: ${coursePrice}\nData: ${scheduleDate}\nHorário: ${scheduleTime}\nMétodo: ${method}\nObservações: ${notes}\n\nO comprovante está anexado.`;

    await sendEmail(subject, text, [
      {
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      },
    ]);

    return res.json({ ok: true, message: 'Inscrição enviada com sucesso.' });
  } catch (error) {
    console.error('Erro ao enviar inscrição:', error);
    return res.status(500).json({ error: 'Erro interno ao enviar a inscrição.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Servidor rodando' });
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
