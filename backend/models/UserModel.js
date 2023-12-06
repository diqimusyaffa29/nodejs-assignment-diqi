import { Sequelize } from "sequelize";
import db from '../config/Database.js';


const {DataTypes} = Sequelize;

const User = db.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    sex: DataTypes.STRING
}, {
    freezeTableName:true,
});

export default User;


(async()=>{
    await db.sync()
})();
