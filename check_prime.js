let num = 5;
let factor = 0;
for (let x = 1; x < num**0.5; x++) {
    if(num % 2 === 0) {
      factor++
    }
}
if (factor == 1) {
   console.log("Number is Prime");
   }
else {
     console.log("Number is not prime")
     }