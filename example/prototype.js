/*
    GYzheng, http://github.com/iamgyz
    prototype.js
*/
// Define class
var Car = function (carName){  
    if(carName != null)  
        this.carName = carName;  
};  
//使用prototype來定義新的method
Car.prototype.run = function(){  
    console.log(this.carName+' is running!');
};  
//使用protopyte來定義新的property
Car.prototype.carName = "No-name";

// Declare object  
var benz = new Car('BENZ');  
benz.run();  
var mazda = new Car();  
mazda.run();  
