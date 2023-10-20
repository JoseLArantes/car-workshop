# Car Painting Serverless Project

This is a Serverless Framework project that provides two AWS Lambda functions, "carsGarage" and "paintCar," to manage and paint cars in a garage. The project allows you to list cars in the garage and paint a car with a new color.

## Project Structure

The project is structured as follows:
```
car-painting/
├── cars.json
├── serverless.yml
└── src/
  ├── carsGarage/
  │ └── handler.js
  └── paintCar/
    └── handler.js
```

- `cars.json`: A JSON file containing a list of cars in the garage.
- `serverless.yml`: Serverless Framework configuration file that defines AWS Lambda functions, API endpoints, and their configurations.
- `src/`: Source code directory for Lambda functions.

## Setup

1. **Prerequisites:**
   - Install Node.js and npm.
   - Install the Serverless Framework globally: `npm install -g serverless`.
   - Configure AWS CLI with your credentials.

2. **Deployment:**

   Deploy the project to AWS Lambda using the following command:

`serverless deploy`


This command will create AWS Lambda functions and API endpoints.

3. **Testing Locally:**

You can test your functions locally using the Serverless Offline plugin. Follow the steps in the [Testing Locally](#testing-locally) section of this README.

## API Endpoints

- `GET /cars-garage`: Lists the cars in the garage.
- `POST /paint-car`: Paints a car in the garage with a new color.

## Testing Locally

You can test your functions locally by running the Serverless Offline plugin:

1. Install the Serverless Offline plugin:

`npm install serverless-offline --save-dev`


2. Configure the Serverless Offline plugin in `serverless.yml`.

3. Run Serverless Offline:

`serverless offline`


This will start a local server, and you can use tools like `curl` to make requests to the endpoints.

## Usage

To paint a car, make a POST request to the `/paint-car` endpoint with the car plate and the desired new color in the request payload.

Example:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"plate":"ABC123","newColor":"Yellow"}' https://your-api-gateway-url/dev/paint-car
```

## Deploying to AWS

You can deploy the project to AWS by running:

`serverless deploy`

