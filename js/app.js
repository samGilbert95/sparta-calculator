console.log("Working");

// function continue(result){
//   var cont = prompt("Do you want to continue? (y,n)");
//   if (cont == 'y'){
//     num1 = result;
//     console.log(num1);
//     return num1;
//   } else if (cont == 'n'){
//     console.log("Final Total: " + result);
//     check = false;
//     return check;
//   }
// }

var result;
var check = true;
while(check == true){
  var adv = prompt("Advanced or Basic (a,b)");
  if (adv == 'a'){
    var advChoice = prompt("Power or Square Root (p,s)");
    if (advChoice == 'p'){
      var num1 = parseInt(prompt("Enter First number: "));
      var num2 = parseInt(prompt("Enter Second number: "));
      var result = Math.pow(num1,num2);
      alert('Answer is: ' + result);
      console.log(("Answer is: " + result));
      // continue(result);
  } else if (advChoice == 's'){
      var num = parseInt(prompt("Enter Root: "));
      var result = Math.sqrt(num);
      alert('Answer is: ' + result);
      console.log(("Answer is: " + result));
      // continue(result);
    }
  } else if (adv =='b'){
  var num1 = parseInt(prompt("Enter First number: "));
  var op = prompt("Add,Subtract,Multiply or Divide (+ , - , * or /)");
  var num2 = parseInt(prompt("Enter Second number: "));
  console.log(num1,num2,op);
    switch (op) {
      // Adding
    case '+':
      result = num1 + num2;
      break;
        // Subtracting
    case '-':
      result = num1 - num2;
      break;
        // Multiplying
    case '*':
      result = num1 * num2;
      break;
        // Dividing
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log("Not valid");
      break;
    }
  alert('Answer is: ' + result);
  console.log(("Answer is: " + result));
  // continue(result);
} else {
  check = false;
}
}


// ADD
// DIVIDING
// SUBTRACT
// MULTIPLY
