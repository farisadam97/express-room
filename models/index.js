const User = require('./user.model')
const UserRole = require('./user-roles.model')
const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

User.hasOne(UserRole, {
    as: 'role',
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})

UserRole.belongsTo(User, {
    as: 'user',
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})

module.exports = {
    User,
    UserRole,
    sequelize,
    Sequelize
}