const winston = require('winston')

const allowedTransports = [];

allowedTransports.push(new winston.transports.Console({
    format:winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        //@param2
        winston.format.printf((log)=> `${log.timestamp} [${log.level}] : ${log.message}`)
    )
}))

const logger = winston.createLogger({
    format: winston.format.combine(
        //@param1 : It is to combine how time stamp should come up
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        //@param2
        winston.format.printf((log)=> `${log.timestamp} [${log.level.toUpperCase()}] : ${log.message}`)
    ),
    transports: allowedTransports
})

module.exports=logger;