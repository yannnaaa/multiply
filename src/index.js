module.exports = function multiply(first, second) {
  let arrFirst = first.split('').reverse();
  let arrSecond = second.split('').reverse();
  let arr = Array.from( {length: (arrFirst.length + arrSecond.length)}, ((a) => a = 0) );
  
  for ( let i = 0; i < arrFirst.length; i++ ) {
    
    for ( let j = 0; j < arrSecond.length; j++ ) {  
      arr[i+j] += (+arrFirst[i] * +arrSecond[j]);  
    }   
  }

  arr.forEach( (a,i,m) => {
    let dosens = Math.trunc(a / 10);
    let units = a % 10;
    m[i] = units;
    i < arr.length-1 ? m[i+1] += dosens : '';
  });

  arr[arr.length - 1] === 0 ? arr.pop() : '';

  return arr.reverse().join('');
}
