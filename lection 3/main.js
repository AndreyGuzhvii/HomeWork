
//////// task 1 ///////




///////// task2 


/*  num = +prompt('input number','');
reversNum = 0;
for(; num; num = Math.floor(num / 10)) {
    reversNum *= 10;
    reversNum += num % 10;
}
console.log(reversNum); 
 */

/////////////// task3 

/* a=+prompt('input','');
 
c=a%10;
max=c;
console.log(a,c);

for(i=a/10; Math.floor(i)>0; i=i/10){
    c=a%10;
    a/=10;
    a=Math.floor(i)%10;
    

    if(c < Math.floor(i)%10){
        max=a%10;
      
        
    }console.log(i,a,c,max);

}
console.log(max); */

/////////    Task4     

/* x=0;
y=20;
z=(Math.random()+y-1);
res=Math.round(z);
console.log(res); */

/* do {
findedNumber=prompt('ggg','');
c=Math.abs(findedNumber-res);
if(findedNumber==res){
    alert('ok');
    break;
}else if(c<=4 && c>2){
    alert('warm');
}else if(c<=2 && c>=1){
    alert('hot');
}else {
    alert('cold');
}
}while(true);
 */

/* do {
    findedNumber=prompt('ggg','');
    c=Math.abs(findedNumber-res);
switch (c){
    case 4:
    case 3:
        alert('warm');
        break;
    case 2:
    case 1:
        alert('hot');
        break;
    case 0:
        alert('Congretulation');
        break;
    default:
        alert('cold')
}
}while(findedNumber != res); 
 */