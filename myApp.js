require('dotenv').config();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

var Schema = mongoose.Schema;

// define a schema
const personSchema = new Schema({
  name: {type: String, required: true},
  age: Number,
  favoriteFoods: {type: [String], default: ['pizza']}
});

// compiling the model
let Person = mongoose.model('Person', personSchema);

// instantiating a person
/*
  let carlos = new Person({
  name: 'carlos', 
  age: 24, 
  favoriteFoods:['pizza','esfiha']
});
*/
// saving to db
/**carlos.save(function(err, carlos){
  if(err) return console.error(err);
  //console.log('saved to db!');
})*/

const createAndSavePerson = (done) => {
  let person = new Person({
    name: 'carlos', 
    age: 24, 
    favoriteFoods:['pizza','esfiha']
  });
  person.save(function(err,data){
    if(err) return done(error);
    done(null, person);
  });

  //done(null, person);
};

/**
createAndSavePerson(function(err, data){
  console.log(data);
});

*/
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if(err) return console.log(err);
    done(null, people);
  });
};

/** 
var arrayOfPeople = new Array();

arrayOfPeople = [{name: 'maya',   age: 2, favoriteFoods:['ração']},
{name: 'Ana', age: 56, favoriteFoods:['chocolate','comidas de almoço']
}];

createManyPeople(arrayOfPeople, (err, data)=> {
  //console.log(data);
});
*/

const findPeopleByName = (personName, done) => {
  Person.find({'name': personName}, (err, docs) => {
    if(err) return console.log(err);
    done(null, docs);
  });
};

/**
findPeopleByName("maya", (err, data) => {
  console.log(data);
});
 */

const findOneByFood = (food, done) => {
  Person.findOne({'favoriteFoods': food}, (err, doc)=> {
    if(err) return console.log(err);
    done(null , doc);  
  });
  
};

findOneByFood(['ração'], (err, data) => {
  console.log(data);
});

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
