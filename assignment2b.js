let a = 0;

while( a <= 100){
    if( a%2 == 0){
        console.log(a);
    }
    a++;
}

let b = 100;

while( b >= 0){
    console.log(b);
    b-=3;
}

for(let c =1; c <= 100; c+=2){
    console.log(c);
}

for(let d = 0; d <= 100; d++){
    if(d%15 == 0){
        console.log("HelloWorld");
}
else if (d%5 == 0){
    console.log("World");
}
    else if (d%3 == 0){
        console.log("Hello");
    }
        else{
            console.log(d);
        }
    }
