/*
    GYzheng, http://github.com/iamgyz
    property.js
*/

// Define class
var Car = function (carName){  
    //透過this.property來操作 
    this.carName = carName;  
    console.log("The Car object created!");  
};  
// Declare object  
var benz = new Car('BENZ');  
//透過objectname.property來操作
console.log('My car name is ' + benz.carName);
