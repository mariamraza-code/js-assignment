

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


