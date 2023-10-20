const axios = require('axios');
const carsGarageUrl = 'YOUR_CARS_GARAGE_API_ENDPOINT';

module.exports.handler = async (event) => {
  const { plate, newColor } = JSON.parse(event.body);

  try {
    const response = await axios.get(carsGarageUrl);
    const garageCars = response.data;

    const carToPaint = garageCars.find((car) => car.plate === plate);
    if (!carToPaint) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Car not found in the garage.' }),
      };
    }

    if (carToPaint.color === newColor) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Car is already of the same color.' }),
      };
    }

    carToPaint.color = newColor;
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Your ${carToPaint.model} was painted in ${newColor} and it took 5 days to paint it.`,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' }),
    };
  }
};
