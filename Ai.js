import { ChatGPTAPI } from 'chatgpt';

// Initialize the ChatGPT API with your OpenAI API key
const api = new ChatGPTAPI({
  apiKey: 'sk-abcdijkl1234uvwxabcdijkl1234uvwxabcdijkl' // Replace with your actual OpenAI API key
});

async function main() {
  try {
    // Send a message and await the response
    const response = await api.sendMessage('Hello, how are you?');

    // Log the response text
    console.log(response.text);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
