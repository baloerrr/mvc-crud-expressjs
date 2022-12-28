import db from '../config/database.js';
import {Sequelize} from 'sequelize';

const {DataTypes} = Sequelize;

const User = db.define('mahasiswa', {
    name: DataTypes.STRING,
    nim: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    prodi: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
}, {
    freezeTableName: true
});

export default User;

(async() => {
    await db.sync();
})();