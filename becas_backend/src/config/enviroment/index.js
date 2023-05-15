const configuracionBase = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,
    mongodb: {
        host: process.env.DB_MONGO_HOST ? process.env.DB_MONGO_HOST : '0.0.0.0',
        database: process.env.DB_MONGO_NAME ? process.env.DB_MONGO_NAME : 'becas_bd',
        port: process.env.DB_MONGO_PORT ? process.env.DB_MONGO_PORT: 27017,
    }
};

module.exports={
    ...configuracionBase,
}