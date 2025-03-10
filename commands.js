var logB1Unlocked = false;
var securityLevel = 0;

// Store commands in an object
const commands = {
    "tc unlock logb1": () => {
        logB1Unlocked = true;
        return "[System] LogB1 has been unlocked.";
    },
    "tc increase security": () => {
        securityLevel++;
        return `[System] Security level increased to ${securityLevel}.`;
    },
    "tc decrease security": () => {
        if (securityLevel > 0) {
            securityLevel--;
            return `[System] Security level decreased to ${securityLevel}.`;
        }
        return "[System] Security level is already at the lowest setting.";
    },
    "tc status": () => {
        return `[System] LogB1: ${logB1Unlocked ? "Unlocked" : "Locked"} | Security Level: ${securityLevel}`;
    }
};

// Function to process commands
function processCommand(input) {
    input = input.toLowerCase(); // Convert input to lowercase
    if (commands[input]) {
        return commands[input](); // Execute command function
    }
    return "[System] Unknown command.";
}

