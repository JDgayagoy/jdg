const fs = require('fs');
const data = fs.readFileSync('c:/Github/newportfolio/my-project/app/components/Career.tsx', 'utf8');
const svg = data.match(/d="([^"]+)"/)[1];
const coords = [...svg.matchAll(/([0-9.]+),([0-9.]+)/g)].map(m => ({x: parseFloat(m[1]), y: parseFloat(m[2])}));

let peaks = [];
for(let i=1; i<coords.length-1; i++) {
    if(coords[i].y < coords[i-1].y && coords[i].y < coords[i+1].y && coords[i].y < 120) {
        peaks.push(coords[i]);
    }
}
peaks.sort((a,b) => a.x - b.x);
console.log(peaks);