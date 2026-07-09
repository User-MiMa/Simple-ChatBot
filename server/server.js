// Importar SDK de open route; uso de funciones avanzadas
// Importar dotenv para usar variables de entorno de .env
// Importar express para inicializar servidor
// Importar marked para mark a HTML
// Importar DOMPurify para sanitizar HTML
import { OpenRouter } from '@openrouter/sdk';
import 'dotenv/config';
import express from 'express';
import { marked } from "marked";
import DOMPurify from 'isomorphic-dompurify';

//Instanciar servidor
// Middleware para convertir body de peticiones entrantes de JSON a JS Object
// Servir archivos estáticos
const app = express();
app.use(express.json());
app.use(express.static('public'));

// Inicializar cliente SDK OpenRouter con credenciales y URL base
const client = new OpenRouter({
  apiKey: process.env.AI_KEY,
  baseURL: process.env.AI_URL,
});

// Reglas para modelo
const systemPrompt = `You are an efficient and smart assistant. 
                      You respond using Markdown formatting. 
                      Structure your answers with clear sections 
                      using ## headings, use bullet lists (-) and numbered
                      lists (1.) when listing items, use **bold** for emphasis,
                      and include \`code\` blocks when showing code. 
                      Keep answers concise but well-structured so they render
                      beautifully as HTML.`;

// Historial completo de la conversación (persiste mientras el server corra)
const userMessages = [
    {
        role:"system",
        content: systemPrompt,
    },
];

// Crear endpoint POST para enviar mensajes modelo
app.post('/chat', async function(req,res){

    try {

        //Agregar prompt de usuario al historial
        userMessages.push({role: 'user', content: `${req.body.prompt}`});

        //Llamar API con mensaje/prompt y modelo deseado
        const response = await client.chat.send({
            chatRequest: {
                model: process.env.AI_MODEL,
                messages: userMessages,
                stream:true,
            }
        });


        // Buffer para markdown parcial, parsear y sanitizar HTML en cada chunk
        let fullContent = "";

        for await (const chunk of response) {
            const content = chunk.choices?.[0]?.delta?.content;
            if (content) {
                fullContent += content;
                const html = marked.parse(fullContent);
                const clean = DOMPurify.sanitize(html);
                res.write(clean);
            }
        }

        res.end();

        // Guardar respuesta del assistant para mantener contexto en siguientes mensajes
        userMessages.push({role: 'assistant', content: fullContent});

    } catch (err) {

        console.error('Error en /chat:', err);
        // Eliminar el mensaje de usuario que causó el error para mantener coherencia
        userMessages.pop();
        res.status(500).json({ error: 'Error al procesar la solicitud' });

    }

   


});

// Iniciar servidor en puerto definido por variable de entorno o 3001 por defecto
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
