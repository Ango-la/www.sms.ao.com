/**
 * SISTEMA DE CONTROLE DE ACESSO - BOTÃO ESTUDAR
 * 
 * Regras:
 * - Usuário tem direito a 15 SESSÕES (acessos) do mesmo documento
 * - Cada acesso = 1 sessão (independente do dia)
 * - Após 15 sessões = PERMANENTEMENTE BLOQUEADO
 * - Não há desbloqueio automático
 * 
 * Armazenamento: localStorage com chave 'study_access_log_v2'
 */

// Função para obter log de acessos do localStorage
function getAccessLog() {
  const log = localStorage.getItem('study_access_log_v2');
  return log ? JSON.parse(log) : [];
}

// Função para salvar log de acessos
function saveAccessLog(log) {
  localStorage.setItem('study_access_log_v2', JSON.stringify(log));
}

// Função para obter a chave única de um documento
function getDocumentKey(category, selectedManual, standardStage) {
  if (category === 'Standard' && standardStage) {
    return `${category}-${standardStage}-${selectedManual}`;
  }
  return `${category}-${selectedManual}`;
}

// Função para verificar e gerenciar acesso
function checkAndManageStudyAccess(userName, documentKey) {
  const log = getAccessLog();
  const now = new Date();
  const timestamp = now.toLocaleString('pt-BR');
  
  // Procura registro do usuário para este documento
  let userEntry = log.find(entry => 
    entry.name.toLowerCase() === userName.toLowerCase() && 
    entry.documentKey === documentKey
  );
  
  const MAX_SESSIONS = 15;
  
  if (!userEntry) {
    // Primeira sessão do usuário com este documento
    const newEntry = {
      name: userName,
      documentKey: documentKey,
      isBlocked: false,
      totalSessions: 1,
      sessionsRemaining: MAX_SESSIONS - 1,
      sessionTimestamps: [timestamp],
      firstSessionDate: timestamp,
      lastSessionDate: timestamp
    };
    log.push(newEntry);
    saveAccessLog(log);
    console.log(`✅ Primeira sessão registrada: ${userName} - ${documentKey}`);
    console.log(`   Sessões usadas: 1/${MAX_SESSIONS} | Restam: ${newEntry.sessionsRemaining}`);
    return { 
      blocked: false, 
      message: `Acesso permitido (sessão 1/15)`,
      sessionsUsed: 1,
      sessionsRemaining: newEntry.sessionsRemaining
    };
  }
  
  // Verificar se está permanentemente bloqueado
  if (userEntry.isBlocked) {
    const message = `🚫 ACESSO PERMANENTEMENTE BLOQUEADO! Você atingiu o limite de 15 sessões de estudo para este documento.`;
    console.warn(message);
    return { 
      blocked: true, 
      message: message,
      sessionsUsed: userEntry.totalSessions,
      sessionsRemaining: 0
    };
  }
  
  // Incrementar sessão
  userEntry.totalSessions += 1;
  userEntry.sessionsRemaining = MAX_SESSIONS - userEntry.totalSessions;
  userEntry.lastSessionDate = timestamp;
  userEntry.sessionTimestamps.push(timestamp);
  
  console.log(`📊 Nova sessão registrada. Total: ${userEntry.totalSessions}/${MAX_SESSIONS}`);
  
  // Verificar se atingiu limite de 15 sessões
  if (userEntry.totalSessions >= MAX_SESSIONS) {
    userEntry.isBlocked = true;
    const message = `🚫 LIMITE ATINGIDO! Você usou todas as 15 sessões permitidas para este documento. Acesso bloqueado permanentemente.`;
    console.warn(message);
    saveAccessLog(log);
    return { 
      blocked: true, 
      message: message,
      sessionsUsed: userEntry.totalSessions,
      sessionsRemaining: 0
    };
  }
  
  saveAccessLog(log);
  return { 
    blocked: false, 
    message: `Acesso permitido (sessão ${userEntry.totalSessions}/15)`,
    sessionsUsed: userEntry.totalSessions,
    sessionsRemaining: userEntry.sessionsRemaining
  };
}

// Função para obter informações de sessão do usuário
function getUserSessionInfo(userName, documentKey) {
  const log = getAccessLog();
  
  const userEntry = log.find(entry => 
    entry.name.toLowerCase() === userName.toLowerCase() && 
    entry.documentKey === documentKey
  );
  
  if (!userEntry) {
    return {
      sessionsUsed: 0,
      sessionsRemaining: 15,
      isBlocked: false,
      totalSessions: 0
    };
  }
  
  return {
    sessionsUsed: userEntry.totalSessions,
    sessionsRemaining: userEntry.sessionsRemaining,
    isBlocked: userEntry.isBlocked,
    totalSessions: userEntry.totalSessions,
    firstSessionDate: userEntry.firstSessionDate,
    lastSessionDate: userEntry.lastSessionDate
  };
}

// Função para limpar log (opcional, para testes)
function clearAccessLog() {
  localStorage.removeItem('study_access_log_v2');
  console.log('✅ Log de acessos limpo');
}

// Função para visualizar log (debug)
function viewAccessLog() {
  const log = getAccessLog();
  console.table(log);
  return log;
}

// Exportar funções globalmente
window.checkAndManageStudyAccess = checkAndManageStudyAccess;
window.getUserSessionInfo = getUserSessionInfo;
window.getAccessLog = getAccessLog;
window.clearAccessLog = clearAccessLog;
window.viewAccessLog = viewAccessLog;
