let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A

// let t ;

// t = varA;
// varA = varB;
// varB = varC;
// varC = t;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);