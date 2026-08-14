const joi = require("joi");

module.exports.listingSchema = joi.object({
    listing: joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        image: joi.object({
            filename: joi.string().allow("", null),
            url: joi.string().allow("", null),
        }).allow(null).optional(),
        price: joi.number().required().min(0),
        country: joi.string().required(),
        location: joi.string().required(),
        category: joi.string().valid('Trending', 'Rooms', 'Iconic Cities', 'Mountains', 'Castels', 'Amazing Pools', 'Camping', 'Farms', 'Archetic', 'Dome', 'Boats').optional(),
    }).required()
});

module.exports.reviewSchema = joi.object({
    review: joi.object({
        comment: joi.string().required(),
        rating: joi.number().min(1).max(5),
    }).required()
}); 
