let numbers=[5,2,9,12,8,1,7,6,3,4];

let largest=[];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest=numbers[i];
    }
}
console.log("largest number in the array is: " +largest);