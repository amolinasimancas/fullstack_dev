// Hardcoded inputs: the following inputs should be configured to be prompted by the user
const points = 20;
const vmax = 5.2;
const stroke = 13;
const beta = 28;

let speeds = [];
let increment = vmax/points;
speeds[0] = 0;

for(let i = 1; i < points + 1; i++){
    let speed = (speeds[i-1] + increment);
    speed = Number(speed.toFixed(2));
    speeds.push(speed);
}

let frequencies = [];

for(let i = 0; i < speeds.length; i++){
    let frequency = speeds[i]/(stroke/1000*Math.PI*Math.cos(beta/100*Math.PI));
    frequency = Number(frequency.toFixed(0));
    frequencies.push(frequency);
}

let negativeStripTimes = [];
let accelerations = [];

for(let i = 0; i < speeds.length; i++){
    let nst = (1/(Math.PI*frequencies[i]/60))*Math.acos(speeds[i]/(stroke/1000*Math.PI*frequencies[i]));
    let acc = 2*Math.pow(Math.PI,2)*(Math.pow(frequencies[i]/60,2))*stroke/1000;
    nst = Number(nst.toFixed(3));
    acc = Number(acc.toFixed(2));
    negativeStripTimes.push(nst);
    accelerations.push(acc);
}

let mouldLeads = [];

for(let i = 0; i < speeds.length; i++){
    let ml = stroke*Math.sin(Math.PI*frequencies[i]*(negativeStripTimes[i]/60))-(speeds[i]*negativeStripTimes[i]*1000/60);
    ml = Number(ml.toFixed(2));
    mouldLeads.push(ml);
}

console.log(`Velocity setpoints for ${points} points entry: `, speeds);
console.log(`Frequencies to be configured with stroke of ${stroke} mm: `, frequencies);
console.log(`Resultant NST for %B of ${beta}: `, negativeStripTimes);
console.log("Resultant Mould Leads: ", mouldLeads);
console.log("Resultant Accelerations: ", accelerations);