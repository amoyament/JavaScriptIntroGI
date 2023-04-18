//EASY: Create two variables and assign a person’s name to each. 
let firstPerson = 'Aubrey';
let secondPerson = 'Clayton';


//Console log a statement that says which name is shorter or longer, and by how many characters. Example output: “The name Thomas is longer than John by 2 characters”

console.log('The name', secondPerson, 'is longer than', firstPerson, 'by', secondPerson.length - firstPerson.length, 'character(s).');


//If we want to be able to change these variables and log those differences on the accordingly, we can use a conditional

if (firstPerson.length > secondPerson.length) {
    console.log('The name', firstPerson, 'is longer than', secondPerson, 'by', firstPerson.length - secondPerson.length, 'character(s).');
} else if (firstPerson.length < secondPerson.length) {
    console.log('The name', secondPerson, 'is longer than', firstPerson, 'by', secondPerson.length - firstPerson.length, 'character(s).');
} else if (firstPerson.length = secondPerson.length) {
    console.log('The name', firstPerson, 'and', secondPerson, 'are the same length.')
}