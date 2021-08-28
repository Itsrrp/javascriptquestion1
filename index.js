//loop
  //do while
  let a=5;
  do {
     console.log(a);
     a++; 
  } while (a<8);

  //breaking the loop
  let sum=0;
  while (true) {
      let value=+prompt("input the number" );
      if(!value)break;
      sum+=value;
  }
  alert(sum);

//use for loop to o/p even number from 2 to 10
for(let i=2; i<=10; i++){
  if (i%2===0) {
    console.log(i);
  }
}

//odd num from 2 to 10
for(let i=1; i<=10; i++){
  if (i%2===1) {
    console.log(i);
  }
}

//switch statement
let week=1;
switch(week){
  case 1:
    console.log('sunday');
  case 2:
    console.log('monday');
  case 3:
    console.log('tuesday');
  case 4:
    console.log('wednesday');
  case 5:
    console.log('thrusday');
  case 6:
    console.log('friday');
  case 7:
    console.log('saturday');
    break;              
  default:
    console.log("I don't know such values");
}

//grouping switch statements
let week=1;
switch(week){
  case 1:
  case 2:  
    console.log('sunday');
    console.log('monday');
    console.log('tuesday');
    console.log('wednesday');
    console.log('thursday');
    console.log('friday');
    console.log('saturday');
    break; 
  default:
    console.log("I don't know such values");   
}

//enter the input with switch statemnents
let week= prompt("enter the value?");
switch(week){
  case '1':
    console.log('sunday')
    break;
  case '2':
    console.log('monday');
    break;
  case '3':
    console.log('tuesday');
    break;
  case '4':
    console.log('wednesday');
    break;
  case '5':
    console.log('thrusday');
    break;
  case '6':
    console.log('friday');
    break;
  case '7':
    console.log('saturday');
      break;  
  default:
    console.log("I don't know such values");   
}

//change switch statements in if else statements
if (browser === Edge) {
    alert( "You've got the Edge!" );
} else if(browser=== 'Chrome' || 'Firefox' || 'Safari' || 'Opera'){
    alert( 'Okay we support these browsers too' ); 
} else {
  alert( 'We hope that this page looks ok!' );
}

//change if else statements in switch statements
//question
let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
//answer
  let a = +prompt('a?', '');
  switch(a){
    case 0: 
      alert(0);
      break;
    case 1: 
      alert(1);
      break;
    case 2:  
    case 3: 
      alert('2, 3');
      break;
  }

//debugger command
function debug(name){
  let store=`hello, ${name}!`;
  debugger;
  Say(store); 
}  

//square
function square(a, b){
  let result = 1;
  for (let i = 0; i < b; i++) {
    result*=a;
  }
  return result;
}