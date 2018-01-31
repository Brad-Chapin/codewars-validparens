function validParentheses(parens){
  parens = parens.split("");
  let stored = [];
  for (let i = 0; i < parens.length; i++){
    if (parens[i] == "(") {
      stored.push("(");
    } else {
      stored.pop();
    }
  }
  if (parens.length % 2 != 0 || parens[0] == ")" || stored.length != 0){
    return false;
  }
  return true;
}

validParentheses("()");
