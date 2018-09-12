function Person(f_name, l_name, bday, friends) {
  this.f_name = f_name;
  this.l_name = l_name;
  this.bday = bday;
  this.friend = friends;
}

Person.prototype.addF_name = function() {
  return this.f_name;
}

Person.prototype.addL_name = function() {
  return this.l_name;
}

Person.prototype.getAge = function() {
  var today = new Date();
  var birthDate = new Date(this.bday);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

Person.prototype.addFriend = function(friends) {
  this.friend.push(friends);
  return this.friend;
}

Person.prototype.Greeting = function() {
  console.log("I'm a person");
}

const Person1 = new Person('Alex', 'Cho', '04/27/1997', []);
console.log(Person1);

const Person2 = new Person('Balex', 'Mo', '05/28/1998', []);
console.assert(Person2.f_name === 'alex');
console.log(Person2);






















//Excercise 1.2
//Adds Student using Inheritance
function Student(f_name, l_name, bday, friends, subject){
  this.subject = subject;
}

Student.prototype.addSubject = function() {
  return this.subject;
}

Student.prototype.studentGreeting = function() {
  console.log("I'm a student");
}

const student1 = new Student('Mark', 'Wissink', '12/11/1997', [], 'Philosophy')
