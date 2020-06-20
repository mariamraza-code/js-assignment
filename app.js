

//chap#1 Alerts

// task-1

alert("Welcome to the Site");

// task-2

alert("Error! Please enter a valid password.");

// task-3

alert("Welcome to JS Land... \n Happy coding!"  );

//task-4 (pending)

alert("Welcome to JS Land...");
alert("Happy coding!\n prevent this page from creating additional dialogs" ); 

//task-5




//chap-2 Variables for string

//task-1
var username;
//task-2
var myname ="MARIAM RAZA";
//task-3
var message= "Hello World";
alert(message);

//task-4
var name = "Raza Ali";
var age = "15";
var work = "Certified Mobile Application Development";
alert(name);
alert(age + " " +"years old");
alert(work);

//task-5
// for(var i=0; i < 10; i++){
//         for(var j=0; j < i; j++){
//                 document.write("pizza")
//         }
//         document.write("<br>")
// }

//task-6
var email = "mariamraza035@gmail.com"
alert("My Email address is" + " "+ email );
//task-7
var book ="A Smarter Way To Learn JavaScript"
alert("I am trying to learn from the Book" + " " +book);

//task-8
var a = "Yah! I can write Html content through JavaScript";
document.write(a);

//task-9
var b = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(b);
document.write("<br>")
document.write(b);

//chap-3 VARIABLES FOR NUMBERS

//task-1
var age = "19";
alert("I am " + " " + age + " " + "years old");

//task-2
var count = " 14";
 alert("you have visited this website" + " " +count + " " + "times");

//task-3
var birthyear="2000";
document.write("<br>");
document.write(" My birth year is" + " "+ birthyear + "<br> Data type of my declared variable is number");

//task-4
var VisitorName ="John Doe";
var ProductTitle ="T-shirt";
var quantity ="5";
document.write("<br>");
document.write( 
        VisitorName + " " + "ordered" + " " + quantity + " " + ProductTitle + "(s)" + " " + " on XYZ Clothing store"
);

//chap-4 VARIABLE NAMES: LEGAL AND ILLEGAL

//task-1
// var a,c,d;
//task-2 a
// var $one;
// var _two;
// var three;
// var SecondLast;
// var Last;
//task-2 b
// var ?two;
// var GGHHH;
// var on on;
// var ? Ywo;
// var ?COL;

//task-3
// document.write("<br/><h1/> Rules for naming JS variables")
// document.write("<br/> Variable names can only contain numbers,$ and _ .For example $my_1stVariable <br/> Variables must begin with a letter, $ or _. For example $name, _name or name <br/> Variable names are case sensitive
//  <br/>Variable names should not be JS keywords <br/>")


 //chap-5 MATH EXPRESSIONS
 
 //task-1,2
 var a = 3;
 var b = 5;
 var c = a+b;
 document.write("<br><hr> The Summation of " + a + " " + "and" + " " + b + " " + " is" + " " + c);
 var d = a-b;
 var e = a*b;
 var f = a/b;
 var g = a%b;
 document.write("<br> The Subtraction of " + a + " " + "and" + " " + b + " " + " is"+ " " + d);
 document.write("<br> The Multiplication of " + a + " " + "and" + " " + b + " " + " is"+ " " + e);
 document.write("<br> The Division of " + a + " " + "and" + " " + b + " " + " is"+ " " + f);
 document.write("<br> The Modulus of " + a + " " + "and" + " " + b + " " + " is"+ " " + g);


 //task-3
 var h=5;
document.write("<br><hr>Value after variable declaration is undefined");
document.write("<br>intial value:" + " " + h);
i=++h;
document.write("<br/>value after increment:" + " " + i);
j=i+7;
document.write("<br/>value after addition:" + " "+ j);
k=--j;
document.write("<br/>the value after decrement is:" + " " + k);
var l=k/3;
document.write(" <br/>the remainder is:"+ " " + l);

//task-4
var m="600";
var total="3000";
document.write("<br><hr>total cost to buy 5 tickets to a movie is" + " " + total + " PKR");

//task-5
document.write("<hr>Table of 4 <br>");
for(var i=0;i<=10;i++){
    
    document.write("4" + "x"+ i + "=" +4*i + "<br>" );
}

//task-6
var cTemp = 28;
var cToFahr = cTemp * 9 / 5 + 32;
document.write("<br><hr>"+cTemp + "C is " + cToFahr +"F");
var fTemp = 98;
var fToCel = (fTemp - 32) * 5 / 9;
document.write("<br/>"+fTemp + "F is " + fToCel +"C");


//task-7
document.write("<br> <hr>  Shoppping Cart")
var price1=650;
var price2=100;
var quantity1=3;
var quantity2=7;
var shipping=100;
var total= (price1*quantity1) + (price2*quantity2)  + shipping ;

document.write(  "<br> <hr> Price of item 1 is" +" "+ price1 +" " )
document.write(  "<br> Quantity of item 1 is"+" "+ quantity1 +" " )
document.write(  "<br> Price of item 2 is"+" "+ price2 +" " )
document.write(  "<br> Quantity of item 2 is" + " "+ quantity2 +" " )
document.write(  "<br> Shipping Charges" + " "+ shipping +" " )
document.write(  "<br> <br> Total cost of your order is " + " "+ total +" " )

//task-8
var totalMarks=980;
var marksObtained=804;
var percent=(marksObtained/totalMarks)*100;
document.write("<br> <hr>  Mark sheet");
document.write("<br><br> Total marks:" + " " + totalMarks);
document.write("<br> Marks Obtained:" + " " + marksObtained);
document.write("<br> Percentage:" + " " + percent);



//task-9
var dollars=10
var riyals=25
var Rs=(dollars*104.8)+(riyals*28)
document.write("<br> <hr> Total currency in PKR:"+Rs +"<br>")




//task-10
var o=5;
var cal=((o+5)*10)/2
document.write("<br><hr> Arithmetic Calculations:" + " "+ cal);


//task-11
var cy=2020;
var by=1999;


document.write("<br><hr>Age Calculator <br>")
document.write("<br>Current year:"+cy)
document.write("<br>Birth year:"+by)
document.write("<br>your age is:"+(cy-by)+"<br>")







//task-12
document.write("<br> <hr> The Geometrizer")
var radius=20;
var circum=2*3.142*radius;
var area=3.142*(radius*radius);
document.write("<br> <br> The circumference is:" + " " + circum)
document.write("<br> The Area is:" + " " + area)


//task-13
var snack="Oreo"
var CurrentAge=19
var maxAge=80
var perDay=3
var cal=(maxAge-CurrentAge)*365*3;
document.write("<br> <hr>The Lifetime Supply Calculator")
document.write("<br> <br> Favourite snack:"+snack)
document.write("<br>Current Age:"+CurrentAge)
document.write("<br>Maximum Age:"+maxAge)
document.write("<br>Amount of snacks per day:"+perDay)
document.write("<br>you will need"+" "+cal+"  to last Oreo you until the ripe old age of 65")


//chap-6-9

//task-1
 var x=10;
 
document.write("<br> <hr> Result:")

document.write("<br> The value of x is : " + x)

document.write("<br> ................................................")
var preInc= ++x;

document.write("<br> The value of ++x is :"+" "+ preInc)

document.write("<br> Now the value of x is:"+" "+ preInc)
var postInc= x++;
document.write("<br> The value of x++ is:"+" "+ 11)

document.write("<br> Now the value of x is:"+" "+ 12)
var predec= --x;
document.write("<br> The value of --x is :" +" "+11)

document.write("<br> Now the value of x is:"+" "+ 11)
var postdec=x--;
document.write("<br> The value of x-- is:"+" "+ 11)
document.write("<br>Now the value of x is:" +" "+10)


//task-2
var a=2;
var b=1;
var ans= --a - --b + ++b + b-- ;
document.write("<br> <hr>a is:" +" "+a)
document.write("<br> b is:" + " "+b)
document.write("<br>Result:" + " "+ ans)
document.write("<br>EXPLANATION: <br> --a; is pre-decrement so a decreased form 2 to 1. <br> --a - --b; in this stage 1 is subtracted from the already decreased value of b from 1 to 0 so the calculations of this part is: 1-0. <br> --a - --b + ++b; in this step the value of b which is 0 becomes 1 after pre increment so the calculations are: 1-0+1. <br>--a - --b + ++b + b--; in this step post deccrement function is applied on b so the calculations are: 1- 0 + 1 + 1.")



//task-3
var name= prompt("Enter your name","your name..." );

alert("Welcome Dear User!")


//task-4,5
var table= +prompt("enter any number");
if( table < 5){
        document.write("<hr>");
for(var i=0;i<=10;i++){
    
    document.write("3" + "x"+ i + "=" +3*i + "<br>" );
}

}
else{
        document.write("<hr> Default Table <br>");
for(var i=0;i<=10;i++){
    
    document.write("5" + "x"+ i + "=" +5*i + "<br>" );
}
}


//task-6
// var sub1=prompt("Enter 1st Subject");
// var sub2=prompt("Enter 2nd Subject");
// var sub3=prompt("Enter 3rd Subject");

// var sub1a=prompt("Enter obtained marks of 1st subject");
// var sub2a=prompt("Enter obtained marks of 2nd subject");
// var sub3a=prompt("Enter obtained marks of 3rd subject");

// var first= sub1;
// var second= sub2;
// var third=sub3;
// var firsta=sub1a;
// var seconda=sub2a;
// var thirda=sub3a;
// var tmarks=100;
// var answer= ;

//table

// var table="";
// var rows=4;
// var cols=4;
// for(var r = 0; r < rows; r++){
//         table +="<tr>";
//         for ( var c=0; c <= cols; c++)
//         {
//                 table +="<td>"+ c + "</td>";

//         }
//         table +="</tr>";
// }
 

// document.write("<br> <table>"+ table +"</table>")



//chap-9-11

//task-1
var city= prompt("Enter you city","your city");
if(city == "karachi"){
        alert("Welcome to the city of Lights!");
}
else{
        alert("Welcome!");
}

//task-2
var gender = prompt("Enter your Gender","your Gender");
if( gender=="male"){
        alert("Good Morning Sir.");
}
 else if( gender=="Female"){
        alert("Good Morning Ma'am.");
}
else{
        alert("Good Morning!");
}



//task-4
var fuel=prompt("Enter the amount of fuel remaining in your car ","current amount");
if(fuel<0.25){
        alert("Please refill the fuel in your car.");
}
else{
        alert("you've got sufficient amount of fuel, Enjoy your ride!");
}



//task-5
//  var a = 4;
// if (++a === 5){
//         alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
//         alert("given condition for variable b is true");
// }
//  var c = 12;
//  if (c++ === 13){
//         alert("condition 1 is true");
//  }
//  if(c === 13){
//         alert("condition 2 is true");
//  }
//  if (++c < 14){
//         alert("condition 3 is true");
//  }
//  if(c === 14){
//         alert("condition 4 is true");
//  }
//  var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){
//         alert("The cost equals");
//  }
//  e. if (true){
//         alert("True");
//  }
//  alert("False");
// }
//  if("car" < "cat"){
//         alert("car is smaller than cat");
//  }

//No alert message appeared.




  var a=4;
    if (++a === 5)
        {
            alert("Given condition for variable a is true. ");
        }
    var b=82;
    if (b++ === 83)
       {
            alert("Given condition for variable b is true. ");
        }
    var c=12;
    if (a++ === 13)
        {
            alert("condition 1 is true.");
        }
    if (c === 13)
        {
            alert("condition 2 is true.  ");
        }
    if (++c === 14)
        {
            alert("condition 3 is true.  ");
        }
    if (c === 14)
        {
            alert("condition 4 is true.");
        }
    var materialCost=20000;
    var laborCost=2000;
    var totalCost=materialCost+laborCost;
    if (totalCost === laborCost+materialCost)
        {
            alert("The cost equals. ");
        }
    if (true){
        alert("True <br>");
    }
    if (false){ alert("False");}
    if ("car" < "cat"){
        alert("car is smaller than cat");
    }
}
///
    var obtainedMarks = [2];
    var totalMarks = [2];
    var i=0,a;
    var sumOfTotalMarks=0, sumOfObtainedMarks=0, percentage=0, grade, remarks;

    for (i=0; i <=2; i++){
        totalMarks[i]= prompt("Enter total marks of subject " + (i+1));
       

        sumOfTotalMarks += parseInt(totalMarks[i]);
    }

    for (i=0; i <=2; i++){
        obtainedMarks[i]= prompt("Enter obtained marks of subject " + (i+1));
     

        sumOfObtainedMarks += parseInt(obtainedMarks[i]);

    percentage=sumOfObtainedMarks/sumOfTotalMarks*100.0

    if (percentage>=80){
        grade="A-One";
        remarks="Excellant"
    }
    else if (percentage>=70 && percentage <= 79.99){
        grade="A";
        remarks="Good"
    }
    else if (percentage>=60 && percentage <= 69.99){
        grade="B";
        remarks="You need to improve"
    }
    else {
        grade="Fail";
        remarks="Sorry"
    }
    document.write("<h1> Marks Sheet </h1> <br> <br>")
    document.write("Total Marks: " + sumOfTotalMarks);
    document.write("<br> Mark Obtained: " + sumOfObtainedMarks);
    document.write("<br> Percentage: " + percentage);
    document.write("<br> Grade: " + grade);
    document.write("<br> Remarks: " + remarks);


//
    var actualNumber=5;
    var userNumber;
    userNumber=prompt("Enter secret number! ");
    if (actualNumber === userNumber){
        document.write("Bingo! Correct answer.")
    }
    else if (actualNumber === userNumber+1) {
        document.write("Close enough to the correct answer")
    }
    else{document.write("Sorry next time!"+actualNumber + " " + userNumber)}
}
function divisible3Check(){
    var userInput;
    userInput=prompt("Enter any number!")
    if (userInput % 3 === 0){
        document.write("<h1> The number " + userInput + " is Divisible by 3 </h1>");
    }
    else { document.write("<h1> The number " + userInput + " is not divisible by 3 </h1>");}
//

    var a=Number(prompt("Enter First number:"));
    var b = Number(prompt("Enter 2nd number:"));
    var op= prompt("Enter operator for operation?");
    var c=0;
    if (op === '+')
        {
            document.write(a + op + b + "=" + (a+b));
        }
    else if (op === '-')
    {
        document.write(a + op + b + "=" + (a-b));
    }
    else if (op === '*')
    {
        document.write(a + op + b + "=" + (a*b));
    }
    else if (op === '/')
    {
        document.write(a + op + b + "=" + (a/b));
    }
    else if (op === '%')
    {
        document.write(a + op + b + "=" + (a%b));
    }
    else { alert("Illegal operation");
         }

//

    var userInput;
    userInput=prompt("Enter any number!")
    if (userInput % 2 === 0){
        document.write("<h1> Even number </h1>");
    }
    else { document.write("<h1> Odd number </h1>");}

//
    var userTemperature;
    userTemperature=prompt("Enter Temperature!")
    if (userTemperature > 40){
        document.write("<h1> It is too hot outside. </h1>");
    }
    else if (userTemperature >=30 && userTemperature < 40){
         document.write("<h1> The Weather today is Normal </h1>");
        }
    else if (userTemperature >=20 && userTemperature < 30){
        document.write("<h1> Today's Weather is cool </h1>");
        }
    else{
        document.write("<h1> OMG! Today's weather is so cool </h1>");
        


//

    var valueInput=prompt("Enter any character");
    var asciCode= valueInput.charCodeAt(0);
    // document.write("ASCI code is: " + valueInput.charCodeAt(0))
    if (asciCode >=45 && asciCode<=57)
        {
            document.write("You enter a digit");
        }
    else if (asciCode >=65 && asciCode<=90)
        {
            document.write("You enter a capital letter");
        }
    else if (asciCode >=97 && asciCode<=122)
        {
            document.write("You enter a small letter");
        }
    else 
        {
            document.write("You enter a special character");
        }
//
    var firstNumber=prompt("Enter 1st number");
    var scondNumber=prompt("Enter 2nd number");

    if (firstNumber === scondNumber)
        {
            document.write("Both digits are equal.");
        }
    else if (firstNumber > scondNumber)
        {
            document.write("First Number is larger i.e. " + firstNumber);
        }
    else 
        {
            document.write("Second number is larger i.e. "+ scondNumber);
        }

//
    var firstNumber=prompt("Enter any number");

    if (firstNumber < 0)
        {
            document.write("You entered Negative number. ");
        }
    else if (firstNumber > 0)
        {
            document.write("You entered Positive number. ");
        }
    else 
        {
            document.write("You entered Zero.");                
        }
//

    var valueInput=prompt("Enter any character");
    var asciCode= valueInput.charCodeAt(0);
 
    if (asciCode === 65 || asciCode === 69 || asciCode === 73 || asciCode === 79 || asciCode === 85 
        || asciCode === 97 || asciCode === 101 || asciCode === 105 || asciCode === 111 || asciCode === 117 )
        {
            document.write("Yes! you enter a Vowel Character.");
        }
    else 
        {
            document.write("No. You enter other Character");
        }

//
    var validPassword="abc123";
    var inputPassword=prompt("Enter password:");
    if (inputPassword == null)
        {
            document.write("Please enter your password");            
        }
    else if (inputPassword !== validPassword)
        {
            document.write("Incorrect password");
        }
    else
        {
            document.write("Correct! The password you entered matches the original password");
        }


//
    var greeting;
    var hour =13;
    
    if (hour <18){
        greeting="Good Day";
        document.write(greeting);
    }
    else {
        greeting="Good Evening"
        document.write(greeting);
    }

//
    var timeInput=prompt("Enter time in 24 hours clock format!");
    if (timeInput >= 0000 && timeInput < 1200)
        {
            document.write("Good morning!");
        }
    else if (timeInput >= 1200 && timeInput < 1700)
        {
            document.write("Good afternoon!");
        }
    else if (timeInput >= 1700 && timeInput < 2100)
    {
        document.write("Good evening!");
    }
    else if (timeInput >= 2100 && timeInput <= 2359)
    {
        document.write("Good night!");
    }
    else 
    {
        document.write("Your enter wrong time.")
    }


/////////-------------- Chapter No.14 to 16
function task1to6(){
    var empty = [];
    var myObject = new Array();
    var province = ["Sindh", "Punjab", "KPK", "Balochistan"];
    var stdAge = new Array(15,17,18);
    var boolean = [0, 1, 1, 0];
    var mixed = [1, "Punjab", 2, "Balochistan"];

document.write("var empty = []; <br> var myObject = new Array(); <br> var province = [" + "Sindh," +"Punjab,"+ "KPK," +"Balochistan]; <br>  var stdAge = new Array(15,17,18); <br> var boolean = [0, 1, 1, 0]; <br> var mixed = [1," + "Punjab, 2,"+ "Balochistan];")

}
//
    var qualifications =["SSC", "HSC", "BCS","BS","BCOM","MS","M.Phil.","PhD"];
    document.write("<h1> Qualifications: </h1>");
    for (let i=0; i<qualifications.length; i++)
        {
            document.write((i+1)+") " + qualifications[i] + "<br>");
        }

//

    var names =["Michael", "John", "Tony"];
    var marks = [320, 230, 480];
    var totalMarks=500;
    
    for (let i=0; i<3; i++)
        {
            // document.write((i+1)+") " + names[i] + "<br>");
            document.write("<h2> Score of "+ names[i] + " is "+ marks[i]+ ". Percentage: "+marks[i]/totalMarks*100 +"% <br> </h2>");
            // document.write("<br>")
        }
//

    var colors =["White", "Red", "Black"];
    var newColor;
    var newIdex;

    document.write("<h2> Actual Array.</h2> <br>")
    for (let i=0; i<colors.length; i++)
        {
            document.write((i+1)+") " + colors[i] + "<br>");
        }
    newColor=prompt("Enter new color to add at the begenning!");
    colors.unshift(newColor);
    document.write("<h2> a.Added new color at the beginning.</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    newColor=prompt("Enter new color to add at the end!");
    colors.push(newColor);
    document.write("<h2> b.Added new color at the end.</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    colors.unshift("Brown", "Yellow");
    document.write("<h2> c.Added two more new color at the beginning.</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }
    colors.shift();
    document.write("<h2> d.First Color Deleted ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    colors.pop();
    document.write("<h2> e.Last color Deleted ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }
    newIdex=prompt("Enter index to add new color!");
    newColor=prompt("Enter new color to add at given index!");
    // colors[newIdex]=newColor;
    colors.splice(newIdex,0,newColor)

    document.write("<h2> f.Array after adding new color at mentioned index  ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    newIdex=prompt("Enter index to delete color(s) from Array!");
    let indexLimit=prompt("Enter index limit that how many you want to delete!");
    
    colors.splice(newIdex,indexLimit);

    document.write("<h2> g.Array after deleting color at mentioned index  ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

//
    var student=[320, 230, 480, 120];
    document.write("<h2> Scores of Students:" + student +"<br>");

    student.sort();
    document.write("Scores of Students:" + student + "</h2>");

//
    var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    var selectedCities=[];
    selectedCities.push(cities[2],cities[3]);

    document.write("<h2>Cities list:<br>");
    document.write (cities);
    document.write("<br> <br>");
    document.write("<h2>Selected cities list:<br>");
    document.write (selectedCities);
       
//
    var arr=["This", "is", "my", "cat"];
    var joinArr=arr.join(" ");
    document.write("<h1>Array:<br>");
    document.write (arr);
    document.write("<br> <br>");
    document.write("String:<br>");
    document.write (joinArr);


