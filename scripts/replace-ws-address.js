const fs = require('fs');
const path = require('path');

// Default WebSocket address
const DEFAULT_WS_ADDRESS = 'ws://0.0.0.0:8802';
// New WebSocket address (can be set via environment variable)
const WS_ADDRESS = process.env.WS_ADDRESS || DEFAULT_WS_ADDRESS;

// Path to main.ts in the temporary TypeScript directory
const mainTsPath = path.join(__dirname, '..', 'tempts', 'main.ts');

try {
    // Read the file
    let content = fs.readFileSync(mainTsPath, 'utf8');
    
    // Replace the WebSocket address
    content = content.replace(
        new RegExp(DEFAULT_WS_ADDRESS, 'g'), 
        WS_ADDRESS
    );
    
    // Write the modified content back to the file
    fs.writeFileSync(mainTsPath, content, 'utf8');
    
    console.log(`Successfully replaced WebSocket address with: ${WS_ADDRESS}`);
} catch (error) {
    console.error('Error replacing WebSocket address:', error);
    process.exit(1);
} 