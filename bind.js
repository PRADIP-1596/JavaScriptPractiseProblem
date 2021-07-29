var firstPerson = {firstName: 'pradip', lastName: 'Yadav'};
var secondPerson = {firstName: 'bcbqsbcs', lastName: 'bcbqwbsbwbb'};

var thirdPerson = {firstName: 'kyra', lastName: 'bscbasbbc'};
var fourthPerson = {firstName: 'meetcool', lastName: 'nsnasnnans'};

function display() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHellopradip = display.bind(firstPerson);
var sayHellobcbqsbcs = display.bind(secondPerson);

sayHellopradip(); 
sayHellobcbqsbcs();


function show() {
    console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHellokyra=  show.bind(firstPerson);
var sayHellomeetcool =  show.bind(secondPerson);

sayHellokyra(); 
sayHellomeetcool();