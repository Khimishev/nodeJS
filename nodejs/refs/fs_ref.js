const fs = require('fs')
const path = require('path')

// File System


//создаем файл
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if(err) throw new Error(err)

//     console.log('create') 
// })



// записываем и дописываем значения в файл
// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'Hello World', (err) => {
//     if(err) throw new Error(err)

//     console.log('create file')

//     fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), ' from append File', err => {
//         if(err) throw new Error(err)

//         console.log('add text')
//     })
// })


//Считываем значение файла
// fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'utf-8', (err, data) => {
//     if(err) throw new Error(err)

//     //console.log(Buffer.from(data).toString())
//     console.log(data)
// })

// Меняем названия файла
// fs.rename(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     path.join(__dirname, 'notes', 'notes.txt'),
//     err => {
//         if(err) throw new Error(err)

//         console.log('filerename')
//     }
// )
