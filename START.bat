@echo off
title S.M.S Webb - Manual Viewer
cd /d "%~dp0"

REM Verifica se o Python está instalado
python --version >nul 2>&1
if errorlevel 1 (
    echo Erro: Python não encontrado!
    echo Por favor, instale Python primeiro.
    pause
    exit /b 1
)

REM Inicia o servidor HTTP
echo Iniciando servidor local...
start "" python pdf-server.py

REM Aguarda o servidor iniciar
timeout /t 2 /nobreak

REM Abre o navegador
start http://127.0.0.1:8000

pause
