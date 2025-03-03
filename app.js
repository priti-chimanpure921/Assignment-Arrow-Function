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