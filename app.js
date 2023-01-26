let niz=[2,66,2,5,2,13];
let niz1=[];
for(x of array){
    if(x%2==0){
        niz1.push(x)
    }
}
let sum=0
for(e of niz1){
    sum=+e;
}
console.log("suma svakog parnog broja:" + sum)