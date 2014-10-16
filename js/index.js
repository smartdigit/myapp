/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//var db = {};
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		$(function() {
		FastClick.attach(document.body);
		});
        app.receivedEvent('deviceready');
		alert("Device ready");
		//var db = window.openDatabase("test", "1.0", "Demo DB", 200000);
		//console.log(db);
		//db.transaction(getFirstQuestion, errorCB);
		
		//GetFirstQuestion();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
*/
        console.log('Received Event: ' + id);
    }
};

/*
function getFirstQuestion(tx)
{
	var query = "SELECT Text FROM questions WHERE QuestionID = '1' ";
	//console.log(tx);
	tx.executeSql("SELECT * FROM questions", [], querySuccess, errorCB);
	//console.log(db);
	
}
function initDB(tx)
{
	tx.executeSql("DROP TABLE IF EXISTS questions");
	tx.executeSql("CREATE TABLE IF NOT EXISTS questions (questionID, text)");
	tx.executeSql("INSERT INTO questions (questionID, text) VALUES (1, 'Can you hear me')");
}
function errorCB(err)
{
	console.log("Error processing SQL: "+err + ": " + err.code);
}

function successCB()
{
	//console.log("Result: " + results.row.item(0).data);
	console.log("SuccessCB");
	var db = window.openDatabase("test", "1.0", "Demo DB", 200000);
	db.transaction(getFirstQuestion, errorCB);
}

function querySuccess(tx, results)
{
	console.log("results.rows.item(0).text: " + results.rows.item(0).text);
	console.log("results.rows.item(0).questionID: " + results.rows.item(0).questionID);
}

var questions = 
[
	{"id":"1","text":"Do you like it?"},
	{"id":"2","text":"Do you hate it?"},
	{"id":"3","text":"Do you fiddle it?"}
];

var answers =
[
	{"questionID":"1","answer":""},
	{"questionID":"2","answer":""},
	{"questionID":"3","answer":""}
];

function loadQuiz()
{
	var l = questions.length;
	for(var i = 0; i < l; i++)
	{
		console.log(questions[i].id + " " + questions[i].text)
		$("#question"+questions[i].id).text(questions[i].text);
	}
}
*/

app.initialize();