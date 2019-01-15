function calcu(num1,num2){
 
    var add , sub , divide , multiply ;
    add = " add = " + (num1 + num2)  +  "\n";
    sub = "subtract = " + (num1 - num2) + "\n"  ;
    divide ="divide = " + num1 / num2 +  "\n" ;
    multiply = "multiply = " + num1 * num2 + "\n" ;
        return add + sub + divide + multiply;
    }
    
calcu(1,2);
