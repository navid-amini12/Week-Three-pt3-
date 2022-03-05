


// steps: create an array of numbers
// loop through the array and store that specific value in a variable
// continue loop 

const cars = [1,4,5,6,7,8,9,9]
 var flag1 = 0 
 var flag2 = 0 
for (i=0 ;i<cars.length; i++){
    const test = cars[i]

for (j=i+1; j<cars.length; j++){
    if(test + cars[j] == 0 ){
        flag1++
}
  else {
  //    console.log("False")
       flag2++
  } 
}
}

if (flag1!=0){
    console.log("True")
} 
    else{
        console.log("False")
    }







