var no = 1;
var lastid;

function getInputValue() {
        let inputVal = document.getElementById("inputId").value;
        alert(inputVal);
}
      
function search(input) {
	if(event.key === 'Enter') {
		response(input);	
		input.value = null;     
	}
}

function response(tell) {
    var info = "";
    var text = ""; // Initialize the text variable
    var commandResult = processCommand(tell.value); // Check for command

    // If a system command was found, use its result
    if (commandResult !== "[System] Unknown command.") {
        text = commandResult;
    } else {
        // Loop through terminal responses to find a match for the user input
        for (var i = 0; i < terminal.responses.length; i++) {
            if (terminal.responses[i].keyword == tell.value) {
				let requirementsMet = checkRequirements(terminal.responses[i].requires);
				if (requirementsMet) {
					if (terminal.responses[i].origin == "X") {
                    text = "Author: " + terminal.responses[i].author + "<br>" + 
                           "Type: " + terminal.responses[i].type + "<br>" + 
                           "Level: " + terminal.responses[i].level + "<br>" + 
                           terminal.responses[i].text + "<br><br>";
                    lastid = terminal.responses[i].id; // Update the lastid
                } else {
                    // If the origin matches the last ID, create the response text
                    if (terminal.responses[i].origin == lastid) {
                        text = "Author: " + terminal.responses[i].author + "<br>" + 
                               "Type: " + terminal.responses[i].type + "<br>" + 
                               "Level: " + terminal.responses[i].level + "<br>" + 
                               terminal.responses[i].text + "<br><br>";
                        lastid = terminal.responses[i].id; // Update the lastid
                    }
                }
					} else { 
						text = "Access Denied.";
						}
                // If the origin is "X", create the response text
                
            }
        }
    }

    // If text has been created, pass it to the typewriter effect
    if (text) {
        typeWriterEffect(monitor, info + text, 10); // Adjust speed as needed
    }
}


function typeWriterEffect(element, text, speed) {
    let i = 0;
    let textLength = text.length;
    let output = ""; // Store the content that is typed
    let typingSpeed = speed;

    function type() {
        if (i < textLength) {
            let currentChar = text.charAt(i);
            
            // If it's an HTML tag, add it directly to output (skip typing it)
            if (currentChar === '<') {
                let tagEnd = text.indexOf('>', i);
                if (tagEnd !== -1) {
                    output += text.substring(i, tagEnd + 1); // Add the entire HTML tag
                    i = tagEnd + 1; // Move the pointer to after the HTML tag
                }
            } else {
                // Otherwise, type out the current character
                output += currentChar;
                i++;
            }

            // Update the element with the typed content
            element.innerHTML = output;
            setTimeout(type, typingSpeed); // Call the function again after the defined speed
        }
    }

    type(); // Start the typewriter effect
}

