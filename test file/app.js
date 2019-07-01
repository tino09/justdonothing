var person =  new Object();
person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person.lastname);

person.address = new Object();
person.address.street = "bishop oluwole";
person.address.city = "Victoria Island";
person.address.state = "Lagos";

console.log(person.address);


var team = 
{rockets: 
        { jamesharden: "shooting guard",
          chrispaul: "point guard",
          aarongordon: "shooting guard",
          clintcapela: "center",
          pjtucker: "powerforward"
        }, 
lakers: 
    { lebronjames: 'smallforward',
      anthonydavis: 'center',
      kylekuzma: "powerforward",
      rajonrondo: "point guard maybe",
      javalemacgee: "Center"

    },
pistons:{
    andredrummond: "center",
    blakegriffin: "power forward",
    reggiejackson: "point guard",
    lukekennard: "shooting guard",
    thonmaker: "Power Forward"
}};

console.log(team.rockets);
console.log(team.lakers);
console.log(team['pistons'])

// math.js

document.write("6 + 5 =", + 6 + 5, "<br />");
document.write("6 - 5 =", + 6 - 5, "<br />");
document.write("6 / 5 =", + 6 / 5, "<br />");
document.write("6 % 5 =", + 6 % 5, "<br />");

document.write("Max Number =", + Number.MAX_VALUE, "<br />")
document.write("Max Number =", + Number.MIN_VALUE, "<br />")

// prompt to insert name and welcome users.
//var yourName = prompt("what is your name");

if(yourName != null){
    document.getElementById("sayHello").innerHTML = "Hello " + yourName;
}else{
    alert(" Kindly insert name");
}

