const { googleAuthClient } = require('./authentication.js');

// Google Voice API library
const googleVoice = require('google-voice');

// Initialize Google Voice client
const voiceClient = new googleVoice(googleAuthClient);

// Function to receive incoming messages
async function receiveMessages() {
    try {
        // Fetch new messages
        const messages = await voiceClient.messages.list({
            labelIds: ['INBOX'],
            q: 'is:unread'
        });

        // Extract and return the message data
        return messages.data.messages.map(message => {
            return {
                id: message.id,
                text: message.snippet,
                sender: message.payload.headers.find(header => header.name === 'From').value
            };
        });
    } catch (error) {
        console.error('Failed to fetch messages:', error);
    }
}

module.exports = {
    receiveMessages
};
