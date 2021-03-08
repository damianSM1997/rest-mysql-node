import {Sequelize} from 'sequelize';

const db = new Sequelize('museumReservation', 'root', 'nwsdk24-7' , {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false,

} );


export default db;