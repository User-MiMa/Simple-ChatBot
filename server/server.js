// Importar SDK de open route; uso de funciones avanzadas
// Importar dotenv para usar variables de entorno de .env
// Importar express para inicializar servidor
import { OpenRouter } from '@openrouter/sdk';
import 'dotenv/config';
import express from 'express';

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
const systemPrompt = `You are an efficient and smart assistant. Your goal is
                        to provide answers that are as short as possible and
                        simple to understand to any person. 
                        If the user prompt lacks enough context to achieve the main goal,
                        ask questions to provide a more accurate answer`;


// Envolver mensaje/prompt para API openRoute
const userMessages = [
    {
        role:"system",
        content: systemPrompt
    },
];

// Crear endpoint HTTP POST para
app.post('/chat', async function(req,res){

    //Agregar prompt de usuario a arreglo
    userMessages.push({role: 'user', content: `${req.body.prompt}`})

    //Llamar API con mensaje/prompt y modelo deseado
    const response = await client.chat.send({
        chatRequest: {
            model: process.env.AI_MODEL,
            messages: userMessages
        }
    });

    // Convertir en json la respuesta obtenida del modelo para devolver al front
    res.json({reply: response.choices[0].message.content});

});

//Inicar servidor en puerto 3000
app.listen(3000);
