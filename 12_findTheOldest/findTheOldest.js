const findTheOldest = (people) => people.reduce((older, nextPerson) => {
  if (!older.yearOfDeath) {older.yearOfDeath = new Date().getFullYear();}
  if (!nextPerson.yearOfDeath) {nextPerson.yearOfDeath = new Date().getFullYear();}
  return ((older.yearOfDeath - older.yearOfBirth) > (nextPerson.yearOfDeath - nextPerson.yearOfBirth) ? older : nextPerson)
});

// Do not edit below this line
module.exports = findTheOldest;
