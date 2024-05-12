/*X: no riddle<br><br>&#x2605;: super easy <br><br> &#x2605;&#x2605;: still quite easy <br><br> &#x2605;&#x2605;&#x2605;: normal <br><br> &#x2605;&#x2605;&#x2605;&#x2605;: hard <br><br> &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;: super hard*/

/*The different types of riddles:</h2><br> [TXT]: Text / No riddle, just text <br><br> [TRV]: Trivia / Random questions about the story<br><br> [RES]: Research / Questions to which the answer requires some research<br><br> [CYP]: Encrypted / The answer needs to be decrypted<br><br> [KNL]: Knowledge / Questions releated to the story and its characters<br><br> [OWP]: Other Web Pages / Questions linked to other websites<br><br> [META]: ?*/

var terminal = {
	responses: [
		{
		id: 0,
		keyword: "help",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<h2>Welcome to the Terminal!</h2><br> Terminal is a puzzle game where you type your answer in a command line.<br>Each puzzle has a type and a difficulty level. <br> The type is indicated by an abbreviation and the difficulty level by an specific amount of stars. <br><br> Type 'type' to get more information on the diferent types <br><br> Type 'level' to get more information on the diferent difficulty levels <br><br> If you want some tips on how to solve all kind of puzzles, type 'tip' <br><br> Good luck!",
		origin: ["X"]
		},
		
		{
		id: 1,
		keyword: "type",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<h2>The different types of riddles:</h2> [TXT]: Text / No riddle, just text <br><br> [TRV]: Trivia / Random questions about the story<br><br> [RES]: Research / Questions to which the answer requires some research<br><br> [CYP]: Encrypted / The answer needs to be decrypted<br><br> [KNL]: Knowledge / Questions releated to the story and its characters<br><br> [OWP]: Other Web Pages / Questions linked to other websites<br><br> [META]: ?",
		origin: ["X"]
		},
		
		{
		id: 2,
		keyword: "level",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<h2>The different difficulty levels of riddles:</h2> X: no riddle <br><br> &#x2605;: super easy <br><br> &#x2605;&#x2605;: still quite easy <br><br> &#x2605;&#x2605;&#x2605;: normal <br><br> &#x2605;&#x2605;&#x2605;&#x2605;: hard <br><br> &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;: super hard",
		origin: ["X"]
		},
		
		{
		id: 3,
		keyword: "start",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<h2>Welcome to the Terminal! </h2><br> Type 'help' for more information.<br><br> Type in keyword to receive a response.<br><br>The keywords for the Logs are: Log + a letter(Marking the Chapter) + a number(Marking the Article), beginning with LogA1.<br><br> Some of them need a password to view. Good luck!",
		origin: ["X"]
		},
		
		{
		id: 4,
		keyword: "tip",
		author: "Mastermind",
		level: "X",
		type: "[TXT]",
		text:"<h2>Tips on how to solve riddles: </h2> <ol> <li> Google is always your friend, but you'll need to find a good way to phrase your search. <br> You might also find some decoders or other programms that might help. </li> <br> <li>  You'll propably know the password when you see it, except in maybe a few cases. </li> <br> <li> If you feel like you're on the wrong track, you probably are. Don't overthink everything too much. </li> <br> <li> Note down everything that sounds importand, including the commands and answers. </li> <br> <li> You can always use 'Ctrl + F' to search up information on the page your on. </li> <br> <li> And lastly, you can ask the Mastermind behind all this if you realy need a clue. </li> </ol>",
		origin: ["X"]
		},
		
		{
		id: 5,
		keyword: "dog",
		author: "Xkcd",
		level: "&#x2605;&#x2605;",
		type: "[TRV]",
		text:"<br>***Terminal***<br>Ein ARG<br>Version 1.0 RailRoadStation",
		origin: [3]
		},
		
		{
		id: 6,
		keyword: "LogA1",
		author: "X-12-heat",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Okay, nice, its starting! After all those years I finally got it working.<br> So, for everyone who is using this the first time, here is a short explanation. The terminal is a huge Databank with all the important Info about the Humans and stuff. You can use the input field to search for a keyword that might lead you to an article. But be aware, I protected some of them with a password, its important that those informations will not fall in the wrong hands.<br>But it is very important that all this falls in the right hands! Something like that cannot happen again! But I can't say more. I'll continue writing in Log A2.",
		origin: ["X"]
		},
		
		{
		id: 7,
		keyword: "LogA2",
		author: "X-12-heat",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Welcome back.<br>So, as I said in my last Log, the Information kept in the Terminal should only be viewed by the most inteligent beings. Thats why a lot of the pages are locked with a password. If you can put the puzzle together you might be able to prevent what happened a long time ago from happening to you and your species. Well, I think I will include a little riddle in my next Log, just to see if it works.",
		origin: ["X"]
		},
		
		{
		id: 7,
		keyword: "LogA3",
		author: "X-12-heat",
		level: "&#x2605;",
		type: "[KNL]",
		text:"<br><br>Like I said, this log is locked with a password. Just type it in the input line if you think you got it. The question is: What does the difficulty type KNL mean?",
		origin: ["X"]
		},
		
		{
		id: 8,
		keyword: "Knowledge",
		author: "X-12-heat",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Congratulations. But please do not think you are smart just because you could answer my easiest question. Well, at least it seems to work.",
		origin: [7]
		},
		
		{
		id: 9,
		keyword: "LogA4",
		author: "X-12-heat",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Back to it. I began backing up some important Websites that should not get lost. You should be able to access them by typing /websiteName behind the url. You can try it out with /coffeshop, it was the favourite of my creator. I never understood why, the only thing I ever could find out about it was the website and I could not log myself into the member page. Im pretty sure there is more behind all that but I have no Idea what.",
		origin: ["X"]
		},
		
		{
		id: 10,
		keyword: "LogA5",
		author: "X-12-heat",
		level: "&#x2605;",
		type: "[OWP]",
		text:"<br><br>What is the starting year of the company running the coffe shop website?<br>",
		origin: ["X"]
		},
		
		{
		id: 11,
		keyword: "1997",
		author: "X-12-heat",
		level: "X",
		type: "[TXT]",
		text:"<br><br>Pinkpaw. What is Pinkpaw? Im 100% positive that is not just a coffeshop. But I yet have to find out what is behind it all. All I know is that Alex, my creator knows the CEO of Pinkpaw, but I have no Idea who he is. Maybe I need to further explore the Terminal? ",
		origin: ["10"]
		}
	]
};

