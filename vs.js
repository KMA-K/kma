const promist = new Promise((resolve, reject) => {
    console.log('Executing promise')
    resolve('success')
})

promist.then((result) => {
    console.log('Promise resolve:', result)
})

console.log('Promise created')