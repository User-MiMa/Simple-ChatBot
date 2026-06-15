// Importar SDK de open route; uso de funciones avanzadas
// Importar dotenv para usar variables de entorno de .env
import { OpenRouter } from '@openrouter/sdk';
import 'dotenv/config';

// Inicializar cliente SDK OpenRouter con credenciales y URL base
const client = new OpenRouter({
  apiKey: process.env.AI_KEY,
  baseURL: process.env.AI_URL,
});

// Mensaje/Prompt de usuario 
const userPrompt = "What is the meaning of life?";

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
    { 
        role: "user", 
        content: userPrompt 
    }
];

//Llamar API con mensaje/prompt y modelo deseado
const response = await client.chat.send({
  chatRequest: {
    model: process.env.AI_MODEL,
    messages: userMessages
  }
});

// Mostrar respuesta de modelo
console.log(response.choices[0].message.content);

