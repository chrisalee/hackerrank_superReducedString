/*
 * Complete the 'superReducedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function superReducedString(s) {
    for(let i = 0; i < s.length - 1; i++) {
        if(s[i] === s[i + 1]) {
          // remove s[i] and s[i+1] from s
            s = s.slice(0, i) + s.slice(i + 2);
            console.log(s);
          // go back two places in i to see if previous s[i] === the new s[i + 1] after the slice
            i -= 2;
        }
    }
    
    if(s.length > 0) {
        return s;
    }
    return "Empty String";
}
