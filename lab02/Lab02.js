function Person(f_name, l_name, bday, friends) {
  this.f_name = f_name;
  this.l_name = l_name;
  this.bday = bday;
  this.friends = friends;
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

Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
  return this.friend;
}

Person.prototype.Greeting = function() {
  console.log("I'm a person");
}

function Student(f_name, l_name, bday, friends, subject) {
    Person.call(this, f_name, l_name, bday, friends);
    this.subject = subject;

}
Student.prototype = Object.create(Person.prototype);
Student.prototype.Greeting = function() {
    console.log("I'm a student");
};

//tests the person creator
const Person1 = new Person('Alex', 'Cho', '04/27/1997', []);
console.log(Person1);

//another way to check the person creator
const Person2 = new Person('Balex', 'Mo', '05/28/1998', []);
console.assert(Person2.f_name === 'Balex');
console.assert(Person2.l_name === 'Mo');
//people age. It is hard to test for age since updating is required.
console.log(Person2);

//tests adding friends
console.log(Person2.friends);
Person2.addFriend(Person1);
console.log(Person2);

//tests the greeting function
Person2.Greeting();



const Student1 = new Student('Alex', 'Cho', '04/27/1997', [], 'Philosophy');
console.log(Student1);

console.log(Student1 instanceof Person);
console.log(Person1 instanceof Person);

console.log(Student1 instanceof Student);
console.log(Person1 instanceof Student);
