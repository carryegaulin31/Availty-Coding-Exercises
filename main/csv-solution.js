const csv = require('csv-parser')
const { listenerCount } = require('events')
const fs = require('fs')

let results = []

fs.createReadStream('mock.csv')
.pipe(csv({}))
.on('data', (data) => results.push(data))
.on('end', ()=> {

let filteredResults = (results, obj) => results.filter( Insurance_Provider => Object.keys(Insurance_Provider).some( key => obj[key] == Insurance_Provider[key]))
results.sort((a, b) => {
    return(a.last_name > b.last_name) ? 1 : -1
})


let group = results.reduce((r, a) => {
    
    r[a.Insurance_Provider] = [...r[a.Insurance_Provider] || [], a]
    return r
   })

let jsonObj = {group}

let jsonContent = JSON.stringify(jsonObj)


fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.")
        return console.log(err)
    }
 
    console.log("JSON file has been saved.")
})

})
