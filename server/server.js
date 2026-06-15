import { OpenRouter } from '@openrouter/sdk';
import 'dotenv/config';

const client = new OpenRouter({
  apiKey: process.env.AI_KEY,
  baseURL: process.env.AI_URL,
});

const completion = await client.chat.send({
  chatRequest: {
    model: process.env.AI_MODEL,
    messages: [
      { role: "user", content: "What is the meaning of life?" }
    ]
  }
});

console.log(completion.choices[0].message.content);

