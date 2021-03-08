import {DataType, DataTypes} from 'sequelize';
import db from '../db/conection';

const Usuario = db.define('visitor', {
    fullName: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.NUMBER
    }

    
});

export default Usuario;
