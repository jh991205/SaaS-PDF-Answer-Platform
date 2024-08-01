const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();
const { Pinecone } = require('@pinecone-database/pinecone');

async function testPineconeAndOpenAI() {
  try {
    const pinecone = new Pinecone({
        apiKey: process.env.PINECONE_API_KEY
    });

    const pineconeIndex = pinecone.Index('saas');
    console.log('Attempting to describe index stats for "saas"...');
    const indexStats = await pineconeIndex.describeIndexStats();
    console.log('Pinecone index "saas" is accessible:', indexStats);
  } catch (err) {
    console.error('Error during test:', err);
    if (err.response) {
      console.error('Response data:', err.response.data);
    }
  }
}

testPineconeAndOpenAI();
