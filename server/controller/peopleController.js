const Person = require('../model/personModel.js');

const personController = {};

personController.getAllPeople = async (req, res, next) => {
    const people = await Person.find()
    const peopleArr = [];
    for (let i = 0; i < people.length; i++) {
        peopleArr.push(people[i]['name'])
    }
    res.locals.people = peopleArr;

    return next()
}

personController.addPeople = async(req,res, next) => {
    const people = req.body["people"]
    
    // console.log(people)

    for (let i = 0; i < people.length; i++) {
        // console.log(person)
        // await Person.create({"name": person})
        // console.log(await Person.deleteMany())
        // console.log(await Person.create({"name": people[i]}))
    }

    return next()
}

module.exports = personController;