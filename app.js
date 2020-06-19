//CHAPTER 21 - 25


//Task 01
// var firstName = prompt("Enter your first Name ")
// var lastName = prompt("Enter your Last Name ")
// alert("Hello "+ firstName +" "+ lastName)

//Task 02
// var mob = prompt("Your favourite smartPhone? ")
// document.write("My Favourite smart Phone is: "+ mob +"<br>"+"Length of string: "+ mob.length)

//Task 03
// var str = "Pakistani"
// document.write("String: "+ str +"<br> Index of 'n' : "+ str.indexOf('n'))

//Task 04
// var str = "Hello World"
// document.write("String: "+ str +"<br> Last index of 'l' : "+ str.lastIndexOf('l'))

//Task 05
// var str = "Pakistani"
// document.write("String: "+ str +"<br> Character at index 3 : "+ str.charAt(3))

//Task 06
// var firstName = prompt("Enter your first Name ")
// var lastName = prompt("Enter your Last Name ")
// alert("Hello ".concat(firstName, lastName))

//Task 07
// var str1 = "Hyderabad"
// var str2 = str1.slice(str1.indexOf('a')) //abad
// var str3 = str2.replace(str2, 'Islam')//Islam
// var str4 = str3.concat(str2)//Islamabad
// document.write("City: "+ str1 +"<br> After replacement: "+ str4)

//Task 08
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var str = message.replace(/and/g, '&') // "/and/g" shows the globa;l replacement with following text
// document.write(str)

//Task 09
// var str = "472"
// var num = Number(str)
// document.write("Value: "+ str +"<br>"+ "Type: "+typeof(str) +"<br>"+ "Value: "+ num +"<br>"+"Type: "+typeof(num))

//Task 10
// var str = prompt("Type dummy text in small letters & convert it into Capital ")
// var  str2 = str.toUpperCase()
// document.write("User input: "+ str +"<br>"+ "Upper Case: "+ str2)

//Task 11
// var str = prompt("Type string & convert it into Title Case ")
// var str2 = (str.slice(0, 1)).toUpperCase()
// var str3 = str2.concat(str.slice(1))
// document.write("User input: "+ str +"<br>"+ "Title Case: "+ str3)

//Task 12
// var num = 35.36 //first we convert this number in to string using toString otherwise they read as a number & not remove dot
// document.write("Number: "+ num +"<br>"+ "Result: "+ num.toString().replace('.',""))

//Task 13

//Task 14
// var items = ["cake", "apple pie", "cookie", "chips", "patties"]
// var itemName = prompt("Welcome to ABC bakery. What do you want to order Sir/Ma'am? ")
// // var search = items.search(/itemName/i)

// for(var i=0; i<items.length; i++){
//     if(itemName == items[i]){
//         alert("Available")
//         break;
//     }
    
// }
// if(itemName != items[i]){
//     alert("Not available")
    
// }

//Task 15

//Task 16
// var str = "Pakistan Zindabad"
// var strSplit = str.split("")

// for(var i=0; i<str.length; i++){
//     document.write(strSplit[i] +"<br>")
// }

//Task 17
// var input = prompt("Enter dummy string ")
// document.write("User input: "+ input +"<br>")
// document.write("Last character of input: "+ input.charAt(input.length - 1))

//Task 18

//--------------------------------------------------------------------------------------------------------------


//CHAPTER 26 - 30


//Task 01
// var num = prompt("Enter positive float number ")
// document.write("number: "+ num +"<br>")
// document.write("round of value "+ Math.round(num) +"<br>")
// document.write("floor value "+ Math.floor(num) +"<br>")
// document.write("ceil value "+ Math.ceil(num))

//Task 02
// var num = prompt("Enter negative floating point number ")
// document.write("number: "+ num +"<br>")
// document.write("round of value "+ Math.round(num) +"<br>")
// document.write("floor value "+ Math.floor(num) +"<br>")
// document.write("ceil value "+ Math.ceil(num))

//Task 03
// var num = prompt("Conver negative integer into absolute value ")
// document.write("The absolute value of "+ num + " is "+ Math.abs(num))

//Task 04
// var num = Math.random(10)
// document.write("random dice value: "+ Math.round(num*6))

//Task 05
// var num = Math.random(2)
// var num2 = Math.ceil(num*2)
// if(num2 === 2){
//     document.write(num2 +"<br>" +"random coin value: Heads")
// }
// else if(num2 === 1){
//     document.write(num2 +"<br>" +"random coin value: Tails")

// }
// else{
//     document.write(num2 +"<br>" +"no option")

// }

//Task 06
// var num = Math.random()
// document.write("random number between 1 & 100: "+ Math.round(num*100))

//Task 07


//Task 08
// var num = Math.random()
// var num2 = prompt("find a secret number enter number between 1 to 10")
// var secNum = Math.round(num*10)

// if(secNum === num2){
//     alert("Congratulate!")
// }
// else{
//     alert("Try again")
// }

//-------------------------------------------------------------------------------------------------------------



//CHAPTER 31 - 34


//Task 01
// var date = new Date();
// document.write(date)

//Task 02
// var date = new Date();
// var str = date.toString()
// var str2 = str.indexOf("Jun")
// document.write("Current Month: "+ date)

// document.write("Current Month: "+ str2)

//Task 03
// var date = new Date();
// var num = date.toString()
// document.write("Today is "+ num.slice(0,3))

//Task 04
var day = new Date();
document.write(day.getDay("0"))


//Task 04
//Task 04
//Task 04
//Task 04
//Task 04


