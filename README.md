# chatBOT

**Español:** Un servicio conversacional de IA usando OpenRouter con respuestas en tiempo real con Markdown a HTML. Este proyecto muestra el uso simple de SDKs de IA junto con HTML, CSS y Docker.

**English:** A conversational AI service powered by OpenRouter with Markdown-to-HTML streaming responses. This project showcases using AI SDKs in JavaScript alongside HTML, CSS, and Docker.

## 🏁 Inicio Rápido / Quick Start

**Español:**  
1. **Clona repositorio:** Sigue un tutorial de tu elección, ya sea vía HTTPS, SSH o GitHub CLI.  
2. **Para desarrollo local:** `pnpm install` → `pnpm start` (o `node server/server.js`)  
3. **Para contenedorizar:** `docker build -t chatbot .` → `docker run -p 3001:3001 --env-file .env chatbot`

**English:**  
1. **Clone repository:** Follow a tutorial of your choice, whether using HTTPS, SSH, or GitHub CLI.  
2. **For local development:** `pnpm install` → `pnpm start` (or `node server/server.js`)  
3. **For containerization:** `docker build -t chatbot .` → `docker run -p 3001:3001 --env-file .env chatbot`

---

### Qué hace esta app / What this app does

**Español:**  
* Puedes chatear con una IA en tu navegador  
* Las respuestas llegan en tiempo real 
* La IA recuerda el historial de conversación para mantener respuestas relevantes
* Funciona tanto en tu máquina como en Docker  

**English:**  
* Chat with AI directly in your browser  
* Responses stream in real time   
* AI remembers conversation history to maintain relevant answers  
* Works both locally and in Docker  

---

## 📁 Archivos del proyecto / Project files

**Español:**  
- Frontend: `public/index.html`, `public/script.js`, `public/style.css`  
- Backend: `server/server.js` (servidor Express)  
- Configuración: `.env` (tu API key), `.env.example` (plantilla)  
- Docker: `Dockerfile` y `.dockerignore` (para contenedorización)  

**English:**  
- Frontend: `public/index.html`, `public/script.js`, `public/style.css`  
- Backend: `server/server.js` (Express server)  
- Config: `.env` (your API key), `.env.example` (template)  
- Docker: `Dockerfile` and `.dockerignore` (for containerization)  

---
## ▶️ Cómo empezar a usarlo / How to start using it

### Opción 1: Localmente / Locally
```bash
pnpm install
pnpm start
```

### Qué hace / What this does

**Español:**  
* Instala dependencias con pnpm  
* Inicia el servidor en http://localhost:3001  

**English:**  
* Installs dependencies with pnpm  
* Starts the server at http://localhost:3001  

---

### Option 2: Docker (Contenedor/Container)
```bash
docker build -t chatbot .
docker run -p 3001:3001 --env-file .env chatbot
```

### Qué hace / What this does

**Español:**  
* Construye una imagen ligera de Docker  
* Corre con tus credenciales de API (desde `.env`)
* Expone app en http://localhost:3001  

**English:**  
* Builds a lightweight Docker image  
* Runs with your API credentials (from `.env`)
* Exposes app in http://localhost:3001  

---

## 📦 Qué necesitas? / What you need?

**Español:**  
* Una clave de API de OpenRouter (gratis en https://openrouter.ai/keys)  
* Node.js 20+ (para uso local)  
* Docker (para contenedorización)  

**English:**  
* An OpenRouter API key (free at https://openrouter.ai/keys)  
* Node.js 20+ (for local)  
* Docker (for containerization)  


**Español:**  
Después de la configuración, abre tu navegador en http://localhost:3001 y comienza a chatear.  

**English:**  
After setup, open your browser to http://localhost:3001 and start chatting. 

---

## ⁉️ ¿Puedo usar otro proveedor de modelos? / Can I use another model provider?

**Español:**  
Sí, pero necesitas hacer modificaciones en el backend, importando y usando apropiadamente el SDK correspondiente.  

**English:**  
Yes, but you need to make backend modifications, importing and properly using the relevant SDK.  


