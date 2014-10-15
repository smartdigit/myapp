var questions = 
[
	{"id":"1","text":"Are you happy?"},
	{"id":"2","text":"Is the store clean?"},
	{"id":"3","text":"Are your work hours good?"},
	{"id":"4","text":"Is your boss nice to you?"},
	{"id":"5","text":"Are your co-workers pleasant?"},
	{"id":"6","text":"Do you like working here?"},
	{"id":"7","text":"How is the bathroom?"}
];

var answers =
[
	{"questionID":"1","answer":""},
	{"questionID":"2","answer":""},
	{"questionID":"3","answer":""},
	{"questionID":"4","answer":""},
	{"questionID":"5","answer":""},
	{"questionID":"6","answer":""},
	{"questionID":"7","answer":""}
	
];

function loadQuiz()
{
	var newQuestions = "";
	for(var i = 0; i < questions.length; i++)
	{
		newQuestions += "<div class='ui-field-contain'>"+
										"<label id='question"+ 	questions[i].id +"'>"+ questions[i].text +"</label>"+
										"<input id='answer"+questions[i].id+"' value='5' min='1' max='10'  type='range'>"+
									"</div>";
	//	console.log(questions[i].id + " " + questions[i].text)
		
	}
	$("#questionsContainer").html(newQuestions);
}

function saveAnswers()
{
	//save the answers to the quiz in the answers array
	for( var i = 0; i < answers.length; i++)
	{
		answers[i].answer = $("#answer"+answers[i].questionID).val();
		//console.log(answers[i].answer);
	}
	showResults();
}
function getQuestionById(id)
{
	for(var i = 0; i < questions.length; i++)
	{
		if(questions[i].id === id)
		{
			return questions[i];
		}
	}
	return null;
}
function showResults()
{
	$("#resultsHeader").html("Store "+$("#StoreSelect").val()+" quiz results");
	var answer = "";
	for( var i = 0; i < answers.length; i++)
	{
		try
		{
			answer += "Question: "+getQuestionById(answers[i].questionID).text+" - " + answers[i].answer + "/10<br>";
		}
		catch(err)
		{
			console.log(err.message);
		}
	}
	$("#answersContainer").html(answer);
}