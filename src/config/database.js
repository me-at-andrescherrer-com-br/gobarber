module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'gobarber',
  database: 'gobarber',
  port: 5434,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
