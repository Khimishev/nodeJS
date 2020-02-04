const eventsEmiter = require('events')

class Logger extends eventsEmiter {
    log(messageText){
        this.emit('message', `${messageText} ${Date.now()}`)
    }
}

const logger = new Logger()

logger.on('message', data => {
    console.log(data)
})

logger.log('Hello Worlds')