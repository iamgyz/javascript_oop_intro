/*
    GYzheng, http://github.com/iamgyz
    inheritance.js
*/

//Define parent class  
var Car = function (carName){  
    this.carName = carName;  
};  
Car.prototype.run = function(){  
    console.log(this.carName+' is running!');
};  

//Define child class  
/* Step 1. 先定義constructor */  
function Benz(carName,model){  
    //呼叫parent's constructor  
    Car.call(this,carName);
    //初始化child class的property  
    this.model = model;  
};  

/* Step 2. create "Benz.prototype object"來繼承Car.prototype */  
//using Object.create, NOT using 'new Car()'  
Benz.prototype = Object.create(Car.prototype);  
//現在我們已經繼承了Car的prototype，有了Car的方法與屬性，但我們要將constructor指向child class  
Benz.prototype.constructor = Benz;  

/* Step3. 新增child class自己的方法與屬性*/  
Benz.prototype.accerate = function(){  
    console.log(this.carName+' with model '+this.model+ ' is accerating!');  
};

//Define object  
var benz = new Benz('BENZ','c200');  
benz.run();//由Car繼承而來  
benz.accerate();//Benz特有的方法  
