var config = {
    development: {
        //mssql connection settings
        database: {
            user:     'admin',
            password: 'admin',  
            host:     'localhost',
            port:     '',
            db:       'db_name'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3001'
        }
    },
    production: {
        //mssql connection settings
        database: {
            user:     'admin',
            password: 'admin',  
            host:     'localhost',
            port:     '',
            db:       'db_name'
        },
        //server details
        server: {
            host:   '127.0.0.1',
            port:   '3001'
        }
    }
};
module.exports = config;