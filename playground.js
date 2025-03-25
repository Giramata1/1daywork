
//1.Define variables for a user profile scenario

let username= "Keza";

const birth_year=2004;
const current_year=2025;
 const userage=current_year-birth_year;
 
 const message=`your username is ${username}, you are age is ${userage} years old.`;
 console.log(message);
 //3.Write Arrow Functions
 const calculatebirth_year = (userage) => current_year-userage
    console.log(`you were born in ${calculatebirth_year(21)}`);


    //4.Apply Destructuring

    const user= {name:"Keza",age:21,country:"Rwanda"};
    const {name,age,country} = user;
    console.log(`your name is ${name}, your age is ${age}, your country is ${country}`);

   
    
    const colors =["red","blue","yellow","green","black"];
    const [first,second] = colors;
    console.log(`your first color is ${first}, your second color is ${second}`);

    //5.Experiment with Rest and Spread Operators
    function sum(...num){
        return num.reduce((a,b)=>a+b,0);
    }
console.log(sum(10,2,4));

const Array1=[2,4];
const Array2=[3,6];
const merged=[...Array1,...Array2];
console.log(merged);

//6. Asynchronous programming with Promises

const fetchData = () => {
     return new Promise((resolve, reject) => {
     setTimeout(() => {
     resolve("Data fetched well!");
     }, 3000);
     });
     };
    
    fetchData()
     .then((data) => console.log(data))

 .catch((error) => console.error(error));
    

    


    
    
    
    

    
    

 