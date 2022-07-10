// Q1.An array is given, return the sum of all the positives numbers. const input = [ 1, -5, 2, 10, -30, 29, 50];

const input = [ 1, -5, 2, 10, -30, 29, 50];

const newArray = input.filter(function(e){
    return e > 0;
})
console.log(newArray);
let sum=0;
function sumOfPositiveNumbers(arr){
   
    for(let i=0;i<=arr.length-1;i++){
        sum = sum + arr[i];
    }
    return sum;
}
sumOfPositiveNumbers(newArray);
console.log(sum);

// Q2.Multiple records of people are given, you have to print the first name and last name . 
// let friends = [ 
 //  {fname: 'Rachal', lname:"Green" ,id: 1, marks : 98 }, 
//  {fname: 'Ross',lname:"Geller" , id: 2, marks : 23 },          
// {fname: 'Monica ',lname:"Geller" , id: 3, marks : 75 },          
// {fname: 'Joey',lname:" Tribbiani" , id: 4, marks : 46 },          
// {fname: 'Chandler  ',lname:"Bing" , id: 5, marks : 78 },          
// {fname: 'Phoebe',lname:"Buffay" , id: 6, marks : 45 } ]

let friends = [ 
   {fname: 'Rachal', lname:"Green" ,id: 1, marks : 98 }, 
   {fname: 'Ross',lname:"Geller" , id: 2, marks : 23 },          
   {fname: 'Monica ',lname:"Geller" , id: 3, marks : 75 },          
   {fname: 'Joey',lname:" Tribbiani" , id: 4, marks : 46 },          
   {fname: 'Chandler  ',lname:"Bing" , id: 5, marks : 78 },          
   {fname: 'Phoebe',lname:"Buffay" , id: 6, marks : 45 } ] 

   function printFirstAndLastName(arr){
     for(let i=0;i<=arr.length-1;i++){
        console.log(arr[i].fname+ " " +arr[i].lname);
     }
   }
   printFirstAndLastName(friends);

//Q.3 You are given some names of different cities and a ordered list html element; 
// add a list item for each to the ordered list.   
// city = ['Delhi', 'Mumbai', 'Jaipur','Kolkata','Indore' ]; (below html code and output is given)

// Answer in test.html =>



 



