Javascript, the OOP concept  
http://guang.logdown.com/posts/261831-javascript-oop  

For the slides, you can refer to http://gyzlab.com/jsoop


### The Class  
Javascript是屬於`prototype-based`語言，並沒有C++/Java中的`class`敘述. Javascript使用`function`來定義classes.  
```javascript
//define a new class called Car
var Car = function() {}; 
```  
### The constructor 建構子  
簡單來說，constructor就是在宣告物件時第一個被呼叫的`method`，通常被用來進行變數的初始化。Javascript中並不需要特別宣告constructor method，因為被定義class function中的action都會在物件被宣告時執行。基本上無需撰寫return，如果constructor有回傳值，那回傳值就會被當作最後名稱所參考的值  
```javascript
var Car = function() {  
    //以下就是constructor  
    console.log("The Car object created!");  
};  
```  
### The property    
property代表的是物件屬性，`this`代表目前的`object`，在class內，會透過this.property來操作當前這個物件的屬性或方法;在class外，會透過objectname.property來操作  
```javascript
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
```  
### The method  
method代表物件的方法，呼叫method的方式與property相同，定義的方法也一樣  
```javascript  
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
```  
### The prototype  
剛剛我們在定義property與method時，都是直接定義在一開始的宣告裡面，其實也可以透過新增class的prototype property/method 的方式來定義  
```javascript  
// Define class
var Car = function (carName){  
    if(carName!=null)  
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
```  
執行結果:  
```sh
BENZ is running!  
No-name is running!  
```  

### Inheritance 繼承  
繼承也是OOP中非常重要的概念之一，javascript目前只支援單一繼承，關鍵字是`Object.create`  
```javascript
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
}  
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
benz.run(); //由Car繼承而來
benz.accerate(); //Benz特有的方法  
```  

Reference  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript  

