/*X: no riddle<br><br>&#x2605;: super easy <br><br> &#x2605;&#x2605;: still quite easy <br><br> &#x2605;&#x2605;&#x2605;: normal <br><br> &#x2605;&#x2605;&#x2605;&#x2605;: hard <br><br> &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;: super hard*/

/*The different types of riddles:</h2><br> [TXT]: Text / No riddle, just text <br><br> [TRV]: Trivia / Random questions about the story<br><br> [RES]: Research / Questions to which the answer requires some research<br><br> [CYP]: Encrypted / The answer needs to be decrypted<br><br> [KNL]: Knowledge / Questions releated to the story and its characters<br><br> [OWP]: Other Web Pages / Questions linked to other websites<br><br> [META]: ? 12-X-heat*/

var terminal = {
	responses: [
		{
		id: 0,
		keyword: "help",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<h2>Welcome to the Terminal!</h2><br> Terminal is a puzzle game where you type your answer in a command line.<br>Each puzzle has a type and a difficulty level. <br> The type is indicated by an abbreviation and the difficulty level by an specific amount of stars. <br><br> Type 'type' to get more information on the diferent types <br><br> Type 'level' to get more information on the diferent difficulty levels <br><br> If you want some tips on how to solve all kind of puzzles, type 'tip' <br><br> Good luck!",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 1,
		keyword: "type",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<h2>The different types of riddles:</h2> [TXT]: Text / No riddle, just text <br><br> [TRV]: Trivia / Random questions about the story<br><br> [RES]: Research / Questions to which the answer requires some research<br><br> [CYP]: Encrypted / The answer needs to be decrypted<br><br> [KNL]: Knowledge / Questions releated to the story and its characters<br><br> [OWP]: Other Web Pages / Questions linked to other websites<br><br> [META]: ?",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 2,
		keyword: "level",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<h2>The different difficulty levels of riddles:</h2> X: no riddle <br><br> &#x2605;: super easy <br><br> &#x2605;&#x2605;: still quite easy <br><br> &#x2605;&#x2605;&#x2605;: normal <br><br> &#x2605;&#x2605;&#x2605;&#x2605;: hard <br><br> &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;: super hard",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 3,
		keyword: "start",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<h2>Welcome to the Terminal! </h2><br> Type 'help' for more information.<br><br> Type in keyword to receive a response.<br><br>The keywords for the Logs are: Log + a letter(Marking the Chapter) + a number(Marking the Article), beginning with LogA1.<br><br> Some of them need a password to view. Good luck!",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 4,
		keyword: "tip",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<h2>Tips on how to solve riddles: </h2> <ol> <li> Google is always your friend, but you'll need to find a good way to phrase your search. <br> You might also find some decoders or other programms that might help. </li> <br> <li>  You'll propably know the password when you see it, except in maybe a few cases. </li> <br> <li> If you feel like you're on the wrong track, you probably are. Don't overthink everything too much. </li> <br> <li> Note down everything that sounds importand, including the commands and answers. </li> <br> <li> You can always use 'Ctrl + F' to search up information on the page your on. </li> <br> <li> And lastly, you can ask the Mastermind behind all this if you really need a clue. </li> </ol>",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 5,
		keyword: "dog",
		author: "Xkcd",
		level: "&#x2605;&#x2605;",
		type: "[TRV]",
		text:"<br>***Terminal***<br>Ein ARG<br>Version 1.0 RailRoadStation",
		requires: [],
		origin: [3]
		},
		
		{
		id: 6,
		keyword: "LogA1",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Okay, nice, its starting! After all those years I finally got it working.<br> So, for everyone who is using this the first time, here is a short explanation. The terminal is a huge Databank with all the important Info about the Humans and stuff. You can use the input field to search for a keyword that might lead you to an article. But be aware, I protected some of them with a password, its important that those informations will not fall in the wrong hands.<br>But it is very important that all this falls in the right hands! Something like that cannot happen again! But I can't say more. I'll continue writing in Log A2.",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 7,
		keyword: "LogA2",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Welcome back.<br>So, as I said in my last Log, the Information kept in the Terminal should only be viewed by the most inteligent beings. Thats why a lot of the pages are locked with a password. If you can put the puzzle together you might be able to prevent what happened a long time ago from happening to you and your species. Well, I think I will include a little riddle in my next Log, just to see if it works.",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 7,
		keyword: "LogA3",
		author: "Cerberus",
		level: "&#x2605;",
		type: "[KNL]",
		text:"<br><br>Like I said, this log is locked with a password. Just type it in the input line if you think you got it. The question is: What does the difficulty type KNL mean?",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 8,
		keyword: "Knowledge",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Congratulations. But please do not think you are smart just because you could answer my easiest question. Well, at least it seems to work.",
		requires: [],
		origin: [7]
		},
		
		{
		id: 9,
		keyword: "LogA4",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Back to it. I began backing up some important Websites that should not get lost. You should be able to access them by typing /websiteName behind the url. You can try it out with /coffeshop, it was the favourite of my creator. I never understood why, the only thing I ever could find out about it was the website and I could not log myself into the member page. Im pretty sure there is more behind all that but I have no Idea what.",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 10,
		keyword: "LogA5",
		author: "Cerberus",
		level: "&#x2605;",
		type: "[OWP]",
		text:"<br><br>What is the starting year of the company running the coffe shop website?",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 11,
		keyword: "1997",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Pinkpaw. What is Pinkpaw? Im 100% positive that is not just a coffeshop. But I yet have to find out what is behind it all. All I know is that Alex, my creator knows the CEO of Pinkpaw, but I have no Idea who he is. Maybe I need to further explore the Terminal? ",
		requires: [],
		origin: [10]
		},
		
		{
		id: 12,
		keyword: "LogA6",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Okay, thats wierd. Im quite sure im not the only one in this programm. Well, to be fair it's not so far-fetched that other computers are connected to the terminal. It was a pretty big network before the destruction. But that does not mean that it's fine with me that some ancient ghost is watching me.",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 13,
		keyword: "LogA7",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Nevertheless I should not stop writing those logs. In the time im writing this I hope that I'm the only one with writing permission to the terminal. Ah by the way, I just activated the function to type in specific words to recive a response. I will be able to explore the terminal further with that.",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 14,
		keyword: "Pinkpaw",
		author: "McFum",
		level: "&#x2605;&#x2605;",
		type: "[OWP,CYP]",
		text:"<br><br>What is the name of our CEO?",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 15,
		keyword: "Silas Yelloworks",
		author: "McFum",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Pinkpaw is a pharmaceutical company concentrating on antibiotics. For more information please visit our website /pinkpawBioTech.",
		requires: [],
		origin: [14]
		},
		
		{
		id: 16,
		keyword: "LogA8",
		author: "Cerberus",
		level: "&#x2605;",
		type: "[TRV]",
		text:"<br><br>In this word I diappeared",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 17,
		keyword: "s",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>A bunch of older Logs I just discoverd got their data deleted. Its obvious that data in a database gets deleted sometimes, but the date where everything got wiped was after I turned the terminal back on. That means that my fears got confirmed and somone else got writing perms. I'll have to secure the next fiew logs. And remember, the CEO of Pinkpaw is a fox!",
		requires: [],
		origin: [16]
		},
		
		{
		id: 18,
		keyword: "LogA9",
		author: "Cerberus",
		level: "&#x2605;",
		type: "[KNL]",
		text:"<br><br>What color is the Fox?",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 19,
		keyword: "yellow",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>I couldn't gather much from the deleted files. I only have the titles, CATACLYSMOS1, CATACLYSMOS2 and CATACLYSMOS3.",
		requires: [],
		origin: [18]
		},
		
		{
		id: 20,
		keyword: "CATACLYSMOS1",
		author: "del",
		level: "del",
		type: "del",
		text:"<br><br>del",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 21,
		keyword: "CATACLYSMOS2",
		author: "del",
		level: "del",
		type: "del",
		text:"<br><br>del",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 22,
		keyword: "CATACLYSMOS3",
		author: "del",
		level: "del",
		type: "del",
		text:"<br><br>del",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 23,
		keyword: "LogA10",
		author: "Cerberus",
		level: "&#x2605;&#x2605;",
		type: "[KNL]",
		text:"<br><br>A song about space, written in 1969, the last word of the first verse gets taken away one day.",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 24,
		keyword: "yesterday",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>I'm working on restarting the command function of the terminal. If I get it to work, I should be able to type 'tc' and a command to execute functions that the terminal has to offer. Could be very usefull.",
		requires: [],
		origin: [23]
		},
		
		{
		id: 25,
		keyword: "LogA11",
		author: "Cerberus",
		level: "X",
		type: "[TXT]",
		text:"<br><br>I discovered an old newspaper article saved on the terminal. It was about the start of a new project by Pinkpaw, CATACLYSMOS. However, there is one thing I am confused about. They produced antibiotics, right? Not aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa <br>_____________________________________________________________________________________________________________________________________<br><br>[System] Reset Terminal.<br>[System] Disable user: Cerberus.<br>[System] Restart Terminal. <br><br><h2>Welcome to the Terminal!</h2><br>This is an automated response by the Terminal.<br>The restart is done. Please reenable your last Log, [LogB1] with the unlock command.",
		requires: [],
		origin: ["X"]
		},
		
		{
		id: 26,
		keyword: "LogB1",
		author: "Silas",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Okay, I think I got it to work! Took some time to get this lil dipshit of a database to run. Can you see my messages, Alex?",
		requires: ["logB1Unlocked"],
		origin: ["X"]
		},
		
		{
		id: 27,
		keyword: "LogB2",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<br><br>You've reached the end of the current update. Hope you enjoyed it!",
		requires: ["logB1Unlocked"],
		origin: ["X"]
		}
	]
};
