module.exports = {
    api:{
        port: process.env.API_PORT || 3000,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql:{
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'FBCDF75lMa',
        password: process.env.MYSQL_PASSWORD || 'pkPgIw2qCa',
        database: process.env.MYSQL_DATABASE || 'FBCDF75lMa'
    }
}