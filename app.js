
//Implementing the concept of Arrow function
const add = (a,b)=> a+b ; //return statement and paranthesis are optional in return single value in arrow functions
console.log(add(2,3));

const cube = n => n*n*n ;// () are optional in case of single argument in arrow functions 
console.log(cube(2));

const hello = () => {
    console.log("Hello");// () are compulsory when there is no any argument in arrow function
}; 
hello();

const square = (n)=> n*n;
console.log(square(2));


//'this' keyword with Arrow function and normal function
const student = {
    name : "Priti",
    marks : 90,
    prop : this,
    getName : function (){
        console.log(this);//calling object here is student i.e.'student' object.
        console.log(this.name);
    },
    getMarks : ()=>{
        console.log(this);//parent's scope , 'this' of parent , 'this' of student  i.e. 'window' object.
        console.log(this.marks);// marks is undefined for window object . Marks variable is known to student object.
    },
    getInfo1 : function(){
        setTimeout(function (){
            console.log(this);//in normal function 'this' is calling object i.e. 'window'
        },2000);

    },
    getInfo2 : function(){
        setTimeout(()=>{
            console.log(this);//in arrow function 'this' is parent scope of calling object which is function
        },2000);
    }
};

console.log("window object",student.prop); //scope of student object is global so the value of this here is a 'window' object.
console.log("student object");
student.getName();//student object
// student.getMarks();//window object
console.log("window object");
student.getInfo1();//window object 
console.log("student object");
student.getInfo2();//student object


//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAverage = (arr)=>{
    let sum = 0;
    let avg = 0;
    for(ele of arr)
    {
        sum = sum + ele;    
    }
    return sum/arr.length ;
};

console.log("Average of array element is ", arrayAverage([1,2,3,4,5,6]));

//Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.
const isEven = n => n%2 == 0;
if(isEven(6))
{
    console.log("Number is even...");
}

//What is the output of the following code:
const object = { 
    message:'Hello,World!',
    logMessage()
    {
        console.log(this.message);
    }
};
setTimeout(object.logMessage,1000);//window object 

//What is the output of the following code
let length = 4;
function callback()
{
    console.log(this.length);
}
const object1 = {
    length:5,
    method(callback)
    {
        console.log(callback);
        callback();
    },
};
object1.method(callback,1,2);

