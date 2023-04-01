const Category = require('../model/categoryModel.js');

const categoryController = {};

categoryController.getRandomCategory = async (req, res, next) => {
    const count = await Category.count()

    const random = Math.floor(Math.random() * count);

    res.locals.category = await Category.findOne().skip(random)

    return next()
}

categoryController.addCategory = async(req,res, next) => {
    const categories = req.body["category"]
    
    // console.log(people)

    for (let i = 0; i < categories.length; i++) {
        // console.log(person)
        // await Category.create({"category": categories[i]})
        // console.log(await Person.deleteMany())
        // console.log(await Person.create({"name": people[i]}))
    }

    return next()
}

module.exports = categoryController;