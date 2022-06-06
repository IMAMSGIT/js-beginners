let i=1;
while(i<=10){
    if (i===3)
    break; //stops at 3 without printing
    if(i%2===0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}