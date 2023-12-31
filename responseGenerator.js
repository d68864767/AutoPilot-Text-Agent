const { openaiClient } = require('./authentication.js');
const { autoResponderSettings } = require('./settings.js');

// Function to generate responses
async function generateResponse(message) {
    // If autoReply is enabled
    if (autoResponderSettings.autoReply) {
        try {
            // Generate a response using OpenAI API
            const response = await openaiClient.createCompletion({
                engine: 'davinci',
                prompt: message.text,
                maxTokens: 60,
                temperature: 0.5
            });

            // If a response is generated successfully, return it
            if (response && response.choices && response.choices.length > 0 && response.choices[0].text) {
                return response.choices[0].text.trim();
            }
        } catch (error) {
            console.error('Failed to generate response:', error);
        }
    }

    // If autoReply is disabled or if response generation fails, return the default response
    return autoResponderSettings.defaultResponse;
}

module.exports = {
    generateResponse
};
