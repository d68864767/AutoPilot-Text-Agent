const { googleAuthClient } = require('./authentication.js');

// Function to send a message using Google Voice API
async function sendMessage(to, message) {
    try {
        // Create a new message
        const messageData = {
            to: to,
            text: message
        };

        // Use the Google Voice API client to send the message
        const res = await googleAuthClient.request({
            url: 'https://voice.googleapis.com/v1/messages:send',
            method: 'POST',
            data: messageData
        });

        // Log the response from the Google Voice API
        console.log('Message sent: ', res.data);
    } catch (error) {
        console.error('Error sending message: ', error);
    }
}

module.exports = {
    sendMessage
};
