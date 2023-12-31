const fs = require('fs');
const googleAuth = require('google-auth-library');
const openai = require('openai');

// Load config.json
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// Google Voice API Authentication
const googleVoiceAPI = config.googleVoiceAPI;
const googleAuthClient = new googleAuth.OAuth2Client(
    googleVoiceAPI.apiKey,
    googleVoiceAPI.apiSecret,
    'http://localhost:3000/callback' // This should be your redirect URL
);

// OpenAI API Authentication
const openAIAPI = config.openAIAPI;
const openaiClient = new openai.OpenAIAPI({
    apiKey: openAIAPI.apiKey,
    apiSecret: openAIAPI.apiSecret
});

module.exports = {
    googleAuthClient,
    openaiClient
};
