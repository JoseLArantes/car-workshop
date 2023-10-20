const cars = require('../../cars.json');

module.exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(cars.slice(0, 10)), // Return the first 10 cars
  };
};