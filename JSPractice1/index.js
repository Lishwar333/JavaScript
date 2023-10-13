console.log('Hi World');

//Variables
let First_name = 'Lishwar';
console.log('My name is '+ First_name);
console.log('Type of name is '+ typeof(First_name));

//Constants
const height = 178;
console.log('Height is '+ height+'cm');

//Objects
let skills = {
    primary : 'Java',
    secondary: 'Python'
};
console.log('My primary skill is '+ skills.primary+ ' and secondary skill is '+ skills['secondary']); 

//Arrays
let hobbies = ['Cricket', 'Clash of Clans'];
console.log('My hobbies are '+ hobbies);

//Functions

//Performing task
function greeting(name){
    console.log("Welcome to the JS world "+ name);
}
greeting(First_name);

//Calculating task
function heightInMeters(height){

    return height/100;
}
console.log('Your height in meters is '+ heightInMeters(height)+ 'm');