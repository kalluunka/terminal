function checkRequirements(requirements) {
    for (let requirement of requirements) {
        if (requirement === "logB1Unlocked" && !logB1Unlocked) {
            return false;
        }
        if (requirement === "securityHigh" && securityLevel < 3) {
            return false;
        }
    }
    return true;  // Return true if all conditions are met
}
