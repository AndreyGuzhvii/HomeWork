// Task 1

// block 1

/* a = [];
a.length = +prompt();
b = [];
min = 0;
max = 300;
for(i = 0; i < a.length; i++){
    a[i] = Math.floor(Math.random()*(max));
    simple = (a[i] % 2 !== 0) && (a[i] % 3 !== 0) && (a[i] % 5 !== 0);
        if(simple === true){
            b.push(a[i]);
        }      
}

// block 2

minNum = a[0];
maxNum = minNum;
for(i = 0; i < a.length; i++){
    if (a[i] > maxNum) {
        maxNum = a[i];
}
    if (a[i] < minNum) {
        minNum = a[i];
    }  
}
console.log(a,b,maxNum,minNum); */ 

// Task 2

/* a = [];
a.length = +prompt();
b = [];
min = 100;
max = 300;

 
for(i=0; i<a.length; i++){
    a[i] = Math.floor(Math.random()*(max + min - min)); 
    if(min <= a[i] && a[i] <= max){
        b.push(a[i]);
    }
}
console.log(a,b); */    


// Task 3

/* a = [];
a.length = +prompt();
b = [];
min = 100;
max = 300;

for(var i=0; i<a.length; i++){
    a[i] = Math.floor(Math.random()*(max - min) + min);
    b=a;
}
console.log(a,b);

minNum = a[0];
maxNum = minNum;

for (var i = 0; i < a.length; i++) {
    
    if (a[i] > maxNum) {
        maxNum = a[i];
        changeMax = a.indexOf(maxNum);
    }
    if (a[i] < minNum) {
        minNum = a[i];
        changeMin = a.indexOf(minNum);
    }
    
}

// a[changeMin] = [a[changeMax],a[changeMax]=a[changeMin]][0];
a[changeMin] = a.splice(changeMax, 1, a[changeMin])[0];

console.log(maxNum,minNum,changeMax,changeMin,a); */

// Task 4

/* a = [1,5,6,2,4,7];

for (i = 0, j = a.length - 1; i < j; i++, j--){
    revers = a[j];
    a[j] = a[i];
    a[i] = revers;
}
console.log(a); */



// Task 5

/* a = [];
a.length = +prompt();
min = 0;
max = 6;

for(i = 0; i < a.length; i++){
    a[i] = Math.floor(Math.random()*max);
}

minNum = a[0];
sum = 0;
for(i = 0; i < a.length; i++){    
    if (a[i] < minNum) {
        minNum = a[i];
    }
}
     
for(i = 0; i < a.length; i++){
    if(minNum ==  a[i]-5){
        sum += 1;           
    }
} 
console.log(a,minNum,sum); */






