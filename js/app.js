function getFirstOperator(str) {
  for(let i = 0; i < str.length; i += 1) {
    switch(str[i]) {
      case "+":
      case "-":
      case "*":
      case "/":
        return i;
        break;
    }
  }
  return -1;
}