const { celebrate, Joi, Segments } = require('celebrate');

const getAll = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
});

const create = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().trim(),
        email: Joi.string().email().required().trim(),
        phone: Joi.string().required().trim(),
        location: Joi.string().empty('').default('unknown').trim(),
    }),
});

const update = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().trim(),
        email: Joi.string().email().trim(),
        phone: Joi.string().trim(),
        location: Joi.string().empty('').default('unknown').trim(),
    }),
});

const destroy = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
});

module.exports = { getAll, create, update, destroy };
