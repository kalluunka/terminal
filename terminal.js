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
	var info = ""
	for(var i = 0; i < terminal.responses.length; i++){
		if(terminal.responses[i].keyword == tell.value){
			if(terminal.responses[i].origin == "X"){
				var text = "Author: " + terminal.responses[i].author + "<br>" + "Type: " + terminal.responses[i].type + "<br>" + "Level: " + terminal.responses[i].level + terminal.responses[i].text + "<br><br>";
				lastid = terminal.responses[i].id;
			}else{
				if(terminal.responses[i].origin == lastid){
					var text = "Author: " + terminal.responses[i].author + "<br>" + "Type: " + terminal.responses[i].type + "<br>" + "Level: " + terminal.responses[i].level + terminal.responses[i].text + "<br><br>";
					lastid = terminal.responses[i].id;
				}
			}
		}
	}
	monitor.innerHTML = info + text;
	return;
}
