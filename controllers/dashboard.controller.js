const { User, UserRole } = require('../models')

exports.viewDashboard = async (req, res, next) => {
    try {
        const { user } = req
        const users = await User.findAll({
            attributes: ['id', 'fullName', 'email'],
            include: [
                {
                    model: UserRole,
                    as: 'role',
                    attributes: ['name']
                }
            ]
        })

        return res.status(200).render('dashboard', {
            users,
            fullName: user.fullName
        })
    } catch (error) {
        next(error)
    }
}