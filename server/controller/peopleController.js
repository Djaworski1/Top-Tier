const Person = require('../model/personModel.js');

const personController = {};

personController.getAllPeople = async (req, res, next) => {

    const count = await Person.count()
    
    const peopleArr = [];
    const randomArr = [];
    for (let i = 0; i < 8; i++) {
        let random = Math.floor(Math.random() * count);
        while (randomArr.includes(random)) {
            random = Math.floor(Math.random() * count);
        }
        randomArr.push(random)
        person = await Person.findOne().skip(random)
        peopleArr.push(person['name'])
    }
    res.locals.people = peopleArr;

    return next()
}

personController.addPeople = async(req,res, next) => {
    const people = req.body["people"]

    for (let i = 0; i < people.length; i++) {
        await Person.create({"name": people[i]})
    }

    return next()
}

module.exports = personController;