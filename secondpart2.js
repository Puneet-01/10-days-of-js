'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    var c=s.substring(0,1);
    if(c=="a"||c=="e"||c=="i"||c=="o"||c=="u")
    {
        letter="A";
    }
    else
    if(c=="b"||c=="d"||c=="f"||c=="g")
    {
        letter="B";
    }
    else
    if(c=="h"||c=="j"||c=="k"||c=="l"||c=="m")
    {
        letter="C";
        
    }
    else 
    {
        letter="D";
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}