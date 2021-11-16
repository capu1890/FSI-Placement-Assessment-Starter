// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Craig Caparaz" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

//update the count
let ginger = document.getElementById('qty-gb');
let chocolateChip = document.getElementById('qty-cc');
let sugarSprinkle = document.getElementById('qty-sugar');
let updateTotal = document.getElementById('qty-total');

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', () => {
     // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
   gb++;
   ginger.textContent = gb;
   calculate();
})

document.getElementById('minus-gb').addEventListener('click', () => {
    if (gb > 0) {
        gb--;
        ginger.textContent = gb;
    }
     calculate();
 });

// TODO: Hook up event listeners for the rest of the buttons

//Chocolate chip
document.getElementById('add-cc').addEventListener('click', () => {
cc++;
chocolateChip.innerText = cc;
calculate()
});

document.getElementById('minus-cc').addEventListener('click', () => {
    if (cc > 0) {
        cc--;
        chocolateChip.textContent = cc;
    }
     calculate();
 });

 //Sugar Sprinkle

 document.getElementById('add-sugar').addEventListener('click', () => {
    sugar++;
    sugarSprinkle.innerText = sugar;
    calculate();
    });
    
    document.getElementById('minus-sugar').addEventListener('click', () => {
        if (sugar > 0) {
            sugar--;
            sugarSprinkle.textContent = sugar;
        }
        calculate();
     });

     //Getting the total count

     function calculate() {
         let addTotal = parseInt(ginger.innerText) + parseInt(chocolateChip.innerText) + parseInt(sugarSprinkle.innerText);
         let sum = 0;
        sum =+ addTotal;
        updateTotal.innerText = sum;
         console.log(sum);
     }
     
     

    
     
     
 