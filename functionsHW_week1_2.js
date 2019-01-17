
// function #1
function calculator(num1, num2, opr){
  var result = "";
  switch (opr) {
                 case "add":
                     result = num1+num2;
                     break;

                 case "subtract":
                     result = num1-num2;
                     break;

                 case "divide":
                     result = num1/num2;
                     break;

                 case "multiply":
                     result = num1*num2;
                     break;

                 default:
                     result = "maybe you passed ivalid input, try agine!";
             }
   return result;
}

// fun #2
function reverse(word){
  var reversed = "";
  for (var i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
  }
  return reversed;
}
