module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'admin',
    database: 'tasklist',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    },
};
