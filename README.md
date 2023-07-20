# Math Service

This is a simple Node.js application that provides two mathematical operations: addition and multiplication.

## Getting Started

Follow the steps below to set up and run the Math Service locally.

### Prerequisites

Make sure you have Node.js installed on your system. You can download and install it from the official Node.js website: https://nodejs.org

### Installation

1. Clone this repository to your local machine or download and extract the ZIP file.

2. Navigate to the project directory in the terminal or command prompt.

3. Install the required dependencies using the following command:

`npm install express left-pad`

### Usage

To run the Math Service, execute the following command in the project directory:

`node index.js`

The server will start and listen on either the port specified in the `process.env.PORT` variable or the default port 3000.

## Endpoints

The Math Service provides the following endpoints:

### Add

`GET /add?a=<number>&b=<number>`

This endpoint accepts two query parameters `a` and `b`, both of which should be valid integers. It performs addition on the given numbers and returns the result as a string, left-padded with zeros to ensure a minimum width of 20 characters.

### Multiply

`GET /multiply?a=<number>&b=<number>`

This endpoint accepts two query parameters `a` and `b`, both of which should be valid integers. It calls the `multiply` function from the `multiply.js` module to perform the multiplication and returns the result as a string, left-padded with zeros to ensure a minimum width of 20 characters.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
