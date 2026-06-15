// Importar SDK de open route; uso de funciones avanzadas
// Importar dotenv apra usar variables de entorno de .env
import { OpenRouter } from '@openrouter/sdk';
import 'dotenv/config';

// Inicializar cliente SDK OpenRouter con credenciales y URL base
const client = new OpenRouter({
  apiKey: process.env.AI_KEY,
  baseURL: process.env.AI_URL,
});

// Mensaje/Prompt de usuario 
const userPrompt = "What is the meaning of life?";

// Envolver mensaje/prompt para API openRoute
const userMessages = { 
    role: "user", 
    content: userPrompt 
}

//Llamar API con mensaje/prompt y modelo deseado
const response = await client.chat.send({
  chatRequest: {
    model: process.env.AI_MODEL,
    messages: [userMessages]
  }
});

// Mostrar respuesta de modelo
console.log(response.choices[0].message.content);

