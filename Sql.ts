import { Data } from './Data';
import { Sequelize } from 'sequelize-typescript';

// for connecting to databases in mysql workbunch
export { };

export const sequelize = new Sequelize({
    database: 'Najlae',
    // dialect: 'sqlite',
    username: 'BoushabaMohamedProject',
    password: 'BoushabaMohamed',
    //storage: ':memory:',
    dialect: "mysql",
    host: 'localhost',
    //logging: false,
    //timestamps: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    models: [Data],
});