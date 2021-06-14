const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const Cigna = []
const Anthem = []
fs.createReadStream('mock.csv')
.pipe(csv({}))
.on('data', (data) => results.push(data))
.on('end', ()=> {

const filterResults = (results, obj) => results.filter( Insurance_Provider => Object.keys(Insurance_Provider).some( key => obj[key] ==Insurance_Provider[key]));

Cigna.push(filterResults(results,{Insurance_Provider:"Cigna"}));
Anthem.push(filterResults(results,{Insurance_Provider:"Anthem"}));

// const sortOn = (obj, prop) => {
//     obj.sort (
//         (a, b) => {
//             if (a[prop] < b[prop]){
//                 return -1;
//             } else if (a[prop] > b[prop]){
//                 return 1;
//             } else {
//                 return 0;   
//             }
//         }
//         );
//     }
// console.log(sortOn(Cigna, last_name))

    fs.writeFile("CignaFile.js", "const Cigna = require('./csv-solution')/n console.log(Cigna)", (error, data) => {
            console.log("Write complete")
            console.log(error)
            console.log(data)
        })
        
        fs.writeFile("AnthemFile.js", "const Anthem = require('./csv-solution')/n console.log(Anthem)", (error, data) => {
                console.log("Write complete")
                console.log(error)
                console.log(data)
            })
            
            
            
            // exports.array = Cigna
            // exports.array = Anthem
  });