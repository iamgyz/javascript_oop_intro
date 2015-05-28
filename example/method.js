/*
    GYzheng, http://github.com/iamgyz
    method.js
*/
// Define class
var Car = function (carName){  
    //透過this.property來操作 
    this.carName = carName;
    this.run = function(){  
        console.log(this.carName+' is running!');
    };
};  
// Declare object  
var benz = new Car('BENZ');  
//透過objectname.property來操作
benz.run(); 
