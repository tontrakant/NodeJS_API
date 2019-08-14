
var http = require('http')
// const items = ['a', 'b', 'c']
// items.forEach((item) => {
//     console.log(item)
// })
// const newArray = items.map((item) => console.log(item))

// const items = [
//     { name: 'a', content: { /* ... */ } },
//     { name: 'b', content: { /* ... */ } },
//     { name: 'c', content: { /* ... */ } }
// ]
// for (const item of items) {
//     if (item.name === 'b') {
//         console.log(item)
//     }
// }

// const b = items.find((item) => item.name === 'b')
// console.log(b)

// const bb = items.filter((item) => item.name === 'b').shift()
// console.log(bb)

// const b = items.reduce((result, item) => {
//     if (item.name === 'x') { result = item }
//     return result
//   }, null)
// console.log(b)
// const items = [
//     { name: 'a', content: { value: 1 } },
//     { name: 'b', content: { value: 2 } },
//     { name: 'c', content: { value: 3 } }
// ]
// let count = 0
// for (const item of items) {
//     count += item.content.value
// }
// console.log(count);

// const count2 = items.reduce((result, { content: { value } }) => result + value, 0)
// console.log(count2);
// const fn1 = () => {
//     setTimeout(() => {
//         console.log('fn1')
//     }, 2000)
// }

// const fn2 = () => {
//     fn1()
//     setTimeout(() => {
//         console.log('fn2')
//     }, 1000)
// }

// const fn3 = () => {
//     fn2()
// }

// fn3()

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 100)
// }

// http.get('http://www.google.co.th/search?q=async', (response) => {
//   console.log(response)
// })

// console.log(123)

const doAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() >= 0.5) resolve('BabelCoder!')
            else reject(new Error('Less than 0.5!'))
        }, 2000)
    })
}

doAsync()
.then((text) => {
    console.log(text)
}).catch((error) => {
    console.error(error.message)
})
