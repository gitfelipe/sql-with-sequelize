const User = require('../models/User');

class UserController {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    }

    async create(req, res) {
        const { name, email, phone, location } = req.body;

        const user = await User.findOne({ where: { email: email } });

        if (user) {
            return res.status(409).send({ error: 'User already exists.' });
        }

        await User.create({ name, email, phone, location });

        return res.json({ name, email, phone, location });
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, email, phone, location } = req.body;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        }

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

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).send({ error: 'User not found.' });
        }

        await User.destroy({ where: { id: id } });

        return res.status(204).send();
    }
};

module.exports = new UserController;
