import {Sequelize} from 'sequelize';

const db = new Sequelize('museumReservation', 'root', 'su-password' , {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,

} );


export default db;