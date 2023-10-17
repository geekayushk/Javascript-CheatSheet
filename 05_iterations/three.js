// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    // console.log(i);
}

const greetings = "Hello WOrld!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


//maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('IN', "India")
map.set('IND', "India")

// console.log(map)


//array and maps all are iterable but not objects
for (const [key, value] of map) {
    // console.log(key, '->', value)
}


// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, '->', value)
// }
