const User = require('../models/User');

class UserController {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    }

    async create(req, res) {
        const { name, email, phone, location } = req.body;

        await User.create({ name, email, phone, location });

        return res.json({ name, email, phone, location });
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, email, phone, location } = req.body;

        await User.update({
            name,
            email,
            phone,
            location
        }, {
            where: { id: id }
        });

        return res.status(204).send();
    }

    async delete(req, res) {
        const { id } = req.params;

        await User.destroy({ where: { id: id } });

        return response.status(204).send();
    }
};

module.exports = new UserController;
