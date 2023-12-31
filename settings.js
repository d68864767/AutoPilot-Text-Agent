const fs = require('fs');

// Load config.json
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// Auto Responder Settings
const autoResponderSettings = config.autoResponderSettings;

module.exports = {
    autoResponderSettings
};
