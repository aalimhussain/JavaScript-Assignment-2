// ------------Chapters21-25----------


// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
var first = prompt("What is your first name?");
var last = prompt("What is your last name?");
var fullName = first + " " + last;
document.write("<b> Welcome </b>" +  fullName + "<br><br>");

// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user 
// input in your browser 
var mobileSpec = "<b> My favorite mobile-phone is: </b>";
var mobileSpe = " Samsung Galaxy S6 Edge Plus"; 
var mobileLen = mobileSpec.length;
var mobile = mobileSpe.length;
document.write(mobileSpec + mobileSpe + "<br>");     
document.write("<b> Length of string: </b>" + mobile + "<br><br>");

// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
var word = "Pakistani";
var find = word.indexOf("n");  
document.write("<b> String: </b>" + word + "<br>");
document.write("<b> index of 'n' : </b>" +  find + "<br><br>");

// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
var word1 = "Hello World";
var find1 = word1.lastIndexOf("l");
document.write("<b> String: </b>" + word1 + "<br>");
document.write("<b> Last Index of 'l' : </b>" +  find1 + "<br><br>");

// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser. 
var word2 = "Pakistani";
var find2 = word2.charAt(3);
document.write("<b> String: </b>" +  word2 + "<br>");
document.write("<b> Character at index 3: </b>" + find2 + "<br><br>");

// Repeat Q1 using string concat() method.
var first = prompt("What is your first name again? ");
var last = prompt("What is your last name again? ");
var fullName = first.concat(last);
document.write("<b> After concat method(): </b>" + "  " + fullName + "<br><br>");

// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var cityName = "Hyderabad";
var aCityName = "Hyderabad";
aCityName = aCityName.replace("Hyderabad", "Islamabad");
document.write("<b> City: </b>"+ cityName + "<br>");
document.write("<b> After replacement: </b>" + aCityName + "<br><br>");

// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and football together.”; 
var message = "Ali and Sami are best friends.They play cricket and football together." 
var replaceAMessage =  "Ali and Sami are best friends.They play cricket and football together."
replaceAMessage = replaceAMessage.replace("Ali and Sami are best friends.They play cricket and football together.","Ali & Sami are best friends.They play cricket & football together.");
document.write("<b> Message: </b> " + message + "<br>");
document.write("<b> After replacement: </b>" + replaceAMessage + "<br><br>");

// Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 
var num = 472;
var stringtoNum = num.toString();
var str = typeof(stringtoNum);
document.write("<b> Value: </b>" + stringtoNum + "<br>");
document.write("<b> Type: </b>" + str + "<br><br>");

// Write a program that takes user input. Convert and show the input in capital letters. 
var inp = "peanuts";
var inp1 = dry.toUpperCase();
document.write("<b> User input: </b>" + inp + "<br>");
document.write("<b> Upper case: </b>" + inp1 + "<br><br>");

// Write a program that takes user input. Convert and show the input in title case. 
var language = prompt('What is your favourite programming language')
var select = language.charAt(0).toUpperCase()
var slices = language.slice(1, 10) 
document.write("<b> User input: </b>" + language + "<br>");
document.write("<b> Title Case: </b>" + select + slices + "<br><br>");

// Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display 
// in your browser. 
var num = 35.36;
var numTOStrinG = num.toString();
var num1 = numTOStrinG.slice(0, 2);
var num2 = numTOStrinG.slice(3, 5);
var num3 = num1 + num2;
document.write("<b> Number: </b>" + num + "<br>")  
document.write("<b> Result: </b>" + num3 + "<br><br>");

// Write a program to take user input and store username in a variable. If the username contains any special symbol among 
// [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 
// Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64
var userName = prompt("Enter username");
for(var i = 0; i < userName.length; i++){
  if (userName.charCodeAt(i) === 38 || userName.charCodeAt(i) === 35 ||
      userName.charCodeAt(i) === 64 || userName.charCodeAt(i) === 36) {   
            alert("Enter a valid  username.");
      }
 }

// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user 
// input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform 
// case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its 
// availability. Example:
var userPrompt = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'ma?");
var bakerArr = ["cake", "apple pie","cookie", "chips" , "patties"];
var myFlag, indeX;
var changeCase = userPrompt.toUpperCase();
 for (var i = 0; i < bakerArr.length; i++) {   
  var changeCases = bakerArr[i].toUpperCase()
   if (changeCase === changeCases) {
     myFlag = true;
     indeX = i;     
     break;
 }
  else {
        myFlag = false;
     }
} 
 if (myFlag === true) {      
      document.write(userPrompt + " is available at index " + indeX + " in our bakery " + "<br><br>");     
 }   
 else {   
  alert("We are sorry " + userPrompt + " is  not available in our bakery"); 
 }

// Write a program to take password as an input from user. The password must qualify these requirements: a. It should 
// contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the 
// password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z 
// & 0-9, refer to ASCII table at the end of this document.
var input = prompt("Enter password"); 
      console.log(input.length);      
for (var i = 0; i < 1; i++) {
  if (input !== i && input.length > 6) {
    alert("password is valid");
    break;
  }
  else if(input.charCodeAt(i) === 38 || input.charCodeAt(i) === 35 ||
          input.charCodeAt(i) === 64 || input.charCodeAt(i) === 36) {
            alert('password is incorrect')
      }
   else
    alert("Password should not start with number and password length greater than 6 ");
}

// Write a program to convert the following string to an array using string split method. var university = “University of 
// Karachi”; Display the elements of array in your browser. 
var str = "University of Karachi";    
           document.write("<br/>")
      for(var a = 0; a < 1; a++) {                 
        document.write(str.toString().split('') + "<br><br>");                 
      }

// Write a program to display the last character of a user input. 
var userInput = "Pakistan";
var lastChar = userInput.charAt(7)
document.write("<b>User input: </b>" + userInput + "<br>")  
document.write("<b>Last character of input: </b>" + lastChar + "<br><br>")  

// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of 
// word “the” in given string. 
var sentence = "The quick brown fox jumps over the lazy dog.";
var lowerCase =  sentence.toLowerCase()
var searchGlobal = lowerCase.match(/the/g).length  
   console.log(searchGlobal);   
document.write("<b> Text: </b>" + sentence + "<br>")
document.write("<b> There are </b> " + searchGlobal + ' occurrence(s) of word the' + "<br><br>")


// ------------Chapters26-30----------


// Write a program that takes a positive integer from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number  
var a = +prompt("Enter any positive number")
if (a>=0){
var b = Math.round(a)
var c = Math.floor(a)
var d = Math.ceil(a)
document.write("Value: "+a + "</br> Round off value: "+ b +"</br> Floor value: "+ c+"</br> Ceil value: "+ d + "<br><br>")
 }
 else{
    alert("Enter positive number")
 }

// Write a program that takes a negative floating point number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number
var a = +prompt("Enter any negative number")
if (a<=0){
var b = Math.round(a)
var c = Math.floor(a)
var d = Math.ceil(a)
document.write("Value: "+a + "</br> Round off value: "+ b +"</br> Floor value: "+ c+"</br> Ceil value: "+ d + "<br><br>")
 }
 else{
     alert("Enter a negative number")
 }

// Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var a = prompt("Enter a number to get it's absolute value value:");
document.write("The absolute value of " + a + " is " + Math.abs(a) + "<br><br>");

// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
var a = Math.random()
var b = Math.ceil(a * 6) 
alert("Random dice value: "+b)

// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
var a = Math.random()
var b = Math.ceil(a*2)
if (b==2){
   document.write(b + " </br> random coin value: HEAD " + "<br><br>")
 }
 else{
     document.write(b + " </br> random coin value: TAIL " + "<br><br>")
 }

// Write a program that shows a random number between 1 and 100 in your browser.
var a = Math.random()
var b = Math.ceil(a * 100) 
alert("Random number between 1 and 100: "+b)

// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
// Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 
var a = prompt("Enter your weight in kilograms");
document.write("The weight of user is: " + a + "<br><br>");

// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 
// 1 and 10. If the user input equals the secret number, congratulate the user.
var a = Math.random()
var b = Math.ceil(a * 10) 
var c = +prompt("Enter any number to try your luck")
if (b==c){
        document.write("<h1> congratulations! </h1>" + "</br> Lucky NUMBER: "+ b + "</br> Your Number: "+c + "<br><br>")
     }
    else{
        document.write("<h2> better luck next time </h2>"+ "</br> Lucky NUMBER: "+ b + "</br> Your Number: "+c + "<br><br>")
     }


// ------------Chapters31-34----------


// Write a program that displays current date and time in your browser.
var time = new Date();
alert(time)

// Write a program that alerts the current month in words. For example December.
var my_month=new Date();
var month_name=new Array(12);
month_name[0]="January"
month_name[1]="February"
month_name[2]="March"
month_name[3]="April"
month_name[4]="May"
month_name[5]="June"
month_name[6]="July"
month_name[7]="August"
month_name[8]="September"
month_name[9]="October"
month_name[10]="November"
month_name[11]="December"
alert ("Current month : " + month_name[my_month.getMonth()]); 

// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will 
// show Sun. 
var my_day=new Date();
var day_name=new Array(12);
day_name[0]="sun"
day_name[1]="Mun"
day_name[2]="tue"
day_name[3]="wed"
day_name[4]="thu"
day_name[5]="fri"
day_name[6]="sat"
alert (" Today is  " + day_name[my_day.getDay()]); 

// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 
var now = new Date();
var theDay = now.getDay();
if (theDay==0||theDay===6) {
    alert("it's fun day")
     }

// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.
var now =new Date();
var date = now.getDate();
if (date<=15) {
    alert("first fifteen days of the month")
 } else {
     alert("last days of the month")
 }

// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't 
// been declared beforehand. Use any variable you like to represent the Date object. 
var time = new Date();
var late = time.getTime();
var minute = late/1000*60*60;
document.write("Current date :" + " " + time + "<br>")
document.write("Elapsed milliseconds since Jan. 1, 1970 : " + " " + late + "<br>")
document.write("Elapsed minutes since Jan. 1, 1970 : " + " " + minute + "<br><br>")

// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 
var time = new Date();
var hour = time.getHours();
if (hour<=11) {
    alert("It's AM")
 } else {
     alert("It's PM")
 }

//  Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable 
// named laterDate.
var firstdate = '11/01/2012';
var lastdate = '12/31/2020';
var date = new Date();
date.setFullYear(14, 0, 1);
var ld = Date.today().clearTime().moveToLastDayOfMonth();
var lastday = ld.toString("12/31/2020");
alert(lastday);

// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? 
// Note: 1st Ramadan was on June 18, 2015 
var date = new Date("jun 18,2015")
var dateTime = date.getTime();
var today = new Date();
var total = today.getTime() ;
var diff = total- dateTime;
var days = diff/(1000*60*60*24);
var ramzan = Math.floor(days);
alert(ramzan  +" "+"days have passed since 1st Ramadan, 2015")

// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning 
// of 2015. 
var date = new Date("dec 05,2015")
var dateTime = date.getTime();
var today = new Date();
var total = today.getTime() ;
var diff = total- dateTime;
var days = diff/(1000);
var ramzan = Math.floor(days);
alert(ramzan  +" "+"days had passed since begining of 2015")

// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser. 
var date = new Date();
var hour = date.getHours()
date.setHours(hour -1)
document.write("One hour ago :" + " " + date + "<br><br>");

// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 
var date = new Date();
var year = date.getFullYear();;
date.setFullYear(year -100)
document.write("100 YEARS Back :" + " " + date + "<br><br>");

// Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var birth =new Date( prompt("Enter your date of birth"));
var birthmili = birth.getTime();
var today = new Date();
var total = today.getTime() ;
var diff = total- birthmili;
var average = Math.floor(diff/(1000*60*60*24*30*12))
document.write(average + "<br><br>");

// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal 
// places. Display the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) Where, 
// Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 
var name = prompt("Customer Name")
var my_month=new Date();
var month_name=new Array(12);
month_name[0]="January"
month_name[1]="February"
month_name[2]="March"
month_name[3]="April"
month_name[4]="May"
month_name[5]="June"
month_name[6]="July"
month_name[7]="August"
month_name[8]="September"
month_name[9]="October"
month_name[10]="November"
month_name[11]="December";
var unit = 410;
var charges = 16;
var last = 350;
var netAmount = unit*charges;
grossAmount = netAmount+last;  
document.write(" Customer Name" + " " + name + "<br>")
document.write("Current month : " + " " + month_name[my_month.getMonth()] + "<br>");
document.write("Number of units" + " " + unit + "<br>")
document.write("Charges per unit" + " " + charges + "<br>")
document.write("Late Payment Surcharge" + " " + last + "<br>")
document.write("Net Amount Payable (within Due Date)" + " " + netAmount + "<br>")
document.write("Gross Amount Payable (after Due Date)" + " " + grossAmount + "<br><br>")


// ------------Chapters35-38----------


// Write a function that displays current date & time in your browser. 
function myDate()
{
    var d = new Date();
    document.body.innerText=(`Today date is ${d}` + "<br><br>");
}
myDate();

// Write a function that takes first & last name and then it greets the user using his full name. 
var body = (`
<input type='text' placeholder="Enter first name"></input>
<input type='text' placeholder="Enter last name"></input>
<button>Greet Me</button>
`);
document.body.innerHTML = body;  
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    alert(`hello ${inputs[0].value} ${inputs[1].value}`);
});

// Write a function that adds two numbers (input by user) and returns the sum of two numbers. 
var body = (`
<input type='text' placeholder="Enter first no"></input>
<input type='text' placeholder="Enter last no"></input>
<button>add</button>
`);
document.body.innerHTML = body;  
function adding()
{
   document.write(`the addition of two number is ${+inputs[0].value + +inputs[1].value}` + "<br><br>")
}
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',adding);

// Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
// Return and show the desired result in your browser. 
var body = (` 
<input type="number" placeholder='Enter first number'>
<input type="number" placeholder = 'Enter second number'>
<input type="text" placeholder = 'Enter operator' >
<br>
<br>
<button>ok</button>
<p></p>`);
document.body.innerHTML = body;
var inputs = document.querySelectorAll("input");
var button = document.querySelector('button');
var p = document.querySelector("p");
button.addEventListener('click',operate);
function operate(event)
{
    if(inputs[2].value == '+')
    {
        p.innerText = (`the answer is ${+inputs[0].value +  +inputs[1].value}`);
    }
    else if(inputs[2].value == '-')
    {
        p.innerText = (`the answer is ${+inputs[0].value -  +inputs[1].value}`);
    }
    if(inputs[2].value == '/')
    {
        p.innerText = (`the answer is ${+inputs[0].value /  +inputs[1].value}`);
    }
    if(inputs[2].value == '*')
    {
        p.innerText = (`the answer is ${+inputs[0].value *  +inputs[1].value}`);
    }
}

// Write a function that squares its argument. 
var body = (`
<input type='number' placeholder="Enter number"></input>
<button>square</button>
`);
document.body.innerHTML = body;  
function squaring()
{
   document.write(`the square of  number is ${input.value * input.value}` + "<br><br>")
}
const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',squaring);

// Write a function that computes factorial of a number. 
var body = (`
<input type='number' placeholder="Enter number"></input>
<button>factorial</button>
`);
document.body.innerHTML = body;  
function factorial()
{
    let answer = 1;
    if (input.value == 0 || input.value == 1)
    {
        document.write(`the factorial of  number is ${answer}` + "<br><br>");
    }
    else
    {
    for(var i = input.value; i >= 1; i--){
    answer = answer * i;
    }
    document.write(`the factorial of  number is ${answer}` + "<br><br>");
}
}
const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',factorial);

// Write a function that take start and end number as inputs & display counting in your browser. 
var body = (` 
<input type="number" placeholder='Enter first number'>
<input type="number" placeholder = 'Enter second number'>
<br>
<button>ok</button>
<p></p>`);
document.body.innerHTML = body;
function counting()
{
    for(let i=inputs[0].value; i<=inputs[1].value ; i++)
    {
          document.body.innerHTML +=(`${i}\n` + "<br><br>");
    }
}
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',counting);  

// Write a nested function that computes hypotenuse of a right angle triangle.  
// Hypotenuse2 = Base2 + Perpendicular2 
// Take base and perpendicular as inputs. 
// Outer function : calculateHypotenuse() 
// Inner function: calculateSquare() 
var body = (` 
<input type="number" placeholder='Enter hypotenuse'>
<input type="number" placeholder = 'Enter Base'>
<input type="number" placeholder = 'Enter Perpendicular'>
<br>
<button>ok</button>
<p></p>`);
document.body.innerHTML = body;
function squaring(n)
{
   return(n * n);
}

function calculateHypotenuse()
{
    const hyp = squaring(inputs[0].value);
    const base = squaring(inputs[1].value);
    const perp = squaring(inputs[2].value);
    const sum = base + perp;
    if(hyp == sum)
    {
        document.body.innerHTML = (`formula is true`);
    }
}
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',calculateHypotenuse);

// Write a function that calculates the area of a rectangle.      
// A = width * height     
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables 
var width = 20;
var heigth = 20;
function calcualteArea(width,height)
{
    var Area = width * height;
    return Area;
}
function calculateAreaByValue(width=30,height=30)
{
    var Area = width * height;
    return Area;
}

// Write a JavaScript function that checks whether a passed string is palindrome or not?   A palindrome is word, phrase, 
// or sequence that reads the same backward as forward, e.g., madam.
var body = (`
<input type='text' placeholder="Enter string"></input>
<button>ok</button>
`);
document.body.innerHTML = body;  
const reverseString = ()=>
   {
      const x = input.value.split('');
      const y = x.reverse();
      const z = y.join('');
      console.log(z);
      return z;
   }
function palindromeString()
{
   if(input.value === reverseString())
   {
       document.body.innerHTML =('string is palindrome');
   }
   else
   {
    document.body.innerHTML =('string is not palindrome');
   }
}
const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click',palindromeString);

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the 
// string in upper case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 
var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);
document.body.innerHTML = body; 
const input = document.querySelector('input');
const button = document.querySelector('button');
const titlecase = (word) =>{
  for(var i=0 ; i <word.length ; i++)
  {
      if(i==0)
      {
         var result = word[i].toUpperCase();
      }
      else{
          result += word[i];
      }
  }
  return result;
};
var answer = [];
button.addEventListener('click',()=>{
    for(const word of input.value.split(" ")) 
    {
       answer.push(titlecase(word));
    }
    document.body.innerHTML = (`string: ${input.value} <br> Titlecase string : ${answer.join(' ')}`);
});

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 
var body = (`
<input type='text' placeholder="Enter input"></input>
<button>OK</button>
`);
document.body.innerHTML = body; 
var answer ={};
var length_array =[];
var big =0;
const input = document.querySelector('input');
const button = document.querySelector('button');
const length = (word) =>{
   answer[word.length] = word;
   length_array.push(word.length);
};
button.addEventListener('click',()=>{
    for(const word of input.value.split(" ")) 
    {
       const result = length(word);
    }
    big = Math.max(...length_array); // array destruction
    document.body.innerHTML = (`string: ${input.value} <br> high length  word is : ${answer[big]}`);
});

// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number 
// of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o' 
var body = (`
<input type='text' placeholder="Enter string"></input>
<input type='text' placeholder="Enter letter for checking its occurences"></input>
<button>ok</button>
`);
var occurence = 0;
document.body.innerHTML = body;  
function checkingOccurences()
{
    let arr = input[0].value.split('');
   for(let i=0; i < input[0].value.length ; i++)
   {
        if(arr[i] === input[1].value)
        {
            occurence++;
        }
   }
   document.body.innerHTML = (`The occurences of ${input[1].value} in ${input[0].value} are ${occurence}`);
}
const input = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click',checkingOccurences);

// The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. Create a function 
// called calcCircumference: • Pass the radius to the function. • Calculate the circumference based on the radius, and 
// output "The circumference is NN". Create a function called calcArea: • Pass the radius to the function. • Calculate 
// the area based on the radius, and output "The area is NN". 
// Circumference of circle    =     2πr Area of circle       =     πr2 
function calcCircumference(radius)
{
   return (2*Math.PI*radius);
}
function calcArea(radius)
{
    return (Math.PI * radius * radius);
}