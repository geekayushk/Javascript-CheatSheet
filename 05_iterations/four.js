const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const arr = ["java", "c++", "ruby", ".net"]

for (const key in arr) {
    console.log(arr[key])
}
