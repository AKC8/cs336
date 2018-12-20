const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const people = [
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/addPerson.html'));

const getYear = (startDate) => {
  const today = new Date();
  const birthDate = new Date(startDate);
  let year = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    year--;
  }
  return year;
}

//function fo find a person with specific id
const findPerson = (res, id) => {
  const person = people.find(person => person.loginID === id);
  if (person === undefined) {
    res.sendStatus(404);
  }
  return person;
}

app.use('/', express.static('public'))

app.get('/people', (req, res) => res.json(people))
    .post('/people', (req, res) => {
	// Make sure the loginId is unique
	for (let person of people) {
	    if (person.loginId === req.body.loginId) {
		res.sendStatus(400);
		return;
	    }
	}
	// Very unsafe but whatever
	people.push(req.body);
	res.sendStatus(200);
    });

app.get('/person/:id', (req, res) => {
  const person = findPerson(res, req.params.id);
  if (person !== undefined) {
    res.json(person);
  }
});

app.get('/person/:id/name', (req, res) => {
  const person = findPerson(res, req.params.id);
  if (person !== undefined) {
    res.json(`${person.firstName} ${person.lastName}`);
  }
});

app.get('/person/:id/year', (req, res) => {
  const person = findPerson(res, req.params.id);
  if (person !== undefined) {
    res.json(getYear(person.startDate));
  }
});

// Add 404 response
app.get('*', (req, res) => res.send("404 Error - The page you are looking for doesn't exist :/"));

app.listen(port, () => console.log(`Listening on port ${port}!`))
