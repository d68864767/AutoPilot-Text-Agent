const { receiveMessages } = require('./messageReceiver.js');
const { generateResponse } = require('./responseGenerator.js');
const { sendMessage } = require('./messageSender.js');

// Function to start the autopilot
async function startAutopilot() {
    try {
        // Continuously check for new messages
        while (true) {
            // Receive new messages
            const messages = await receiveMessages();

            // For each message
            for (let message of messages) {
                // Generate a response
                const response = await generateResponse(message);

                // Send the response
                await sendMessage(message.sender, response);
            }

            // Wait for a short period before checking for new messages again
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    } catch (error) {
        console.error('Error in autopilot:', error);
    }
}

// Start the autopilot
startAutopilot();
