
function calculateTrig(degrees) {
    
    let radians = degrees * (Math.PI / 180);

   
    let results = {
        sin: Math.sin(radians),
        cos: Math.cos(radians),
        tan: Math.tan(radians),
       
        csc: 1 / Math.sin(radians),
        
        sec: 1 / Math.cos(radians),
       
        cot: 1 / Math.tan(radians)
    };

    return results;
}


const angle = 45;
const output = calculateTrig(angle);
console.log(`At ${angle}°, Sine is ${output.sin.toFixed(4)}`);

// dear sir ,Write your angle in the const angle thing to see the value of sine
// Trigonometry is really complicated...

