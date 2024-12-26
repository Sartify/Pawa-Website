import axios from "axios";
import { headers } from "next/headers";




// services/chatService.ts
  
  export interface ChatCompletionRequest {
    model: string;
    messages: Array<{
      role: string;
      content: string;
    }>;
    temperature: number;
    max_tokens: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
    seed: number;
    stream: boolean;
    save_history: boolean;
  }
  
  export async function chatCompletionStream(
    requestData: ChatCompletionRequest,
    onChunk: (chunk: string) => void, // <--- Accept a callback
  ): Promise<void> {
    // 1. Fetch the streaming response
    const response = await fetch('http://localhost:4000/api/v1/chats/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });
  
    // 2. Check for errors or empty body
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    if (!response.body) {
      throw new Error('No response body available for streaming.');
    }
  
    // 3. Create a reader and decode chunks
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
  
    // 4. Read chunks in a loop
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
  
      // Decode chunk to string
      const chunkText = decoder.decode(value, { stream: true });
      // Pass the chunk to the callback
      onChunk(chunkText);
    }
  }
  
  





// export const chatCompletion = async () =>{

//     try {
//         const response = await axios.post(
//             'http://localhost:4000/api/v1/chats/completions',

//             {
//                 "model": "pawa-mini-v0",
//                 "messages": [
//                   {
//                     "role": "user",
//                     "content": "unaweza kueleza kwa kina maana ya neno upendo?"
//                   }
//                 ],
//                 "temperature": 0.1,
//                 "max_tokens": 1024,
//                 "top_p": 0.95,
//                 "frequency_penalty": 0.3,
//                 "presence_penalty": 0.3,
//                 "seed": 2024,
//                 "stream": true,
//                 "save_history": true
//               },
//               {
//                 headers: {
//                   'Content-Type': 'application/json',
//                 }, // withCredentials: true,  // If tokens or cookies are used
//               }
//         )

//         return response.data;
        
//     } catch (error) {
//         console.log(error)
//         throw new Error('Chat not sent. Please try again.');
        
//     }
// }