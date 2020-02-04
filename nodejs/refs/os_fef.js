const os = require('os');

// Платформа
console.log(os.platform())
// Архетиктура
console.log(os.arch())
// Общие данные
console.log(os.cpus())
// Свободная память
console.log(os.freemem())
// Всего памяти которая у меня есть
console.log(os.totalmem())
// Корневая директория
console.log(os.homedir())
// Сколько системы работает
console.log(os.uptime())