const express = require('express');
const app = express();
const port = 3000;

var people = [
		{
			firstName: "Tyler",
			lastName: "Durden",
			loginID: "tjd4",
			startDate: "01/23/18"
		},
    {
			firstName: "Isaac",
			lastName: "Favila",
			loginID: "imf2",
			startDate: "04/13/04"
		},
    {
			firstName: "Mark",
			lastName: "Wissink",
			loginID: "mdw33",
			startDate: "12/11/14"
		},
    {
			firstName: "Kyle",
			lastName: "Harkema",
			loginID: "kjh22",
			startDate: "04/30/12"
		},
];

function getSeniority(person) {
	var start = new Date(Date.parse(person.startDate));
	var currentDat = new Date(Date.now());
	var numYears = now.getFullYear() - start.getFullYear();
	return person.firstName + " " + person.lastName + " has worked at the company for " + years + " years."
}

function printPerson(person) {
	return '<br>' + "First Name: " + person.firstName + '<br>'
		+  "Last Name: " + person.lastName + '<br>'
		+  "loginID: " + person.loginID + '<br>'
		+  "startDate: " + person.startDate + '<br><br>'
}

app.use('/', express.static('public'))

app.get('/people', (req, res) => res.send(people))

//adds person pages for the record at /people/loginID
people.forEach(person => app.get('/people/' + person.loginID, (req, res) => res.send(printPerson(person))))
//adds person pages for the name at /people/loginID/name
people.forEach(person => app.get('/people/' + person.loginID + "/name", (req, res) => res.send(person.firstName + " " + person.lastName)))
//adds person pages for all years at /people/loginID/years
people.forEach(person => app.get('/people/' + person.loginID + "/years/", (req, res) => res.send(getSeniority(person))))

// Add 404 response
app.get('*', (req, res) => res.send("404 Error - The page you are looking for doesn't exist :/"));

app.listen(port, () => console.log(`Listening on port ${port}!`))
