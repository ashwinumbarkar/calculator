# Calculator App

A simple React-based calculator application built with test-driven development (TDD) principles. The app supports basic arithmetic operations and includes a responsive interface.

---

## **Features**
- Perform basic arithmetic operations: Addition, Subtraction, Multiplication, Division.
- Clear the input and reset the calculator.
- Displays current input and results.
- History tab to view all previous calculations until explicitly deleted or cleared using the "C" button.
- Fully tested using React Testing Library.

---

## **Project Structure**

The main files in the `src` directory include:

| File/Folder       | Description                                |
|-------------------|--------------------------------------------|
| `App.js`          | Main component for the calculator app.     |
| `App.css`         | Styling for the calculator components.     |
| `App.test.js`     | Unit tests for the app's functionality.    |
| `index.js`        | Entry point for the React application.     |
| `index.css`       | Global CSS styles.                        |
| `setupTests.js`   | Test environment setup for Jest.           |



## **Installation**

To run this project locally, follow these steps:

### 1. Clone the Repository

$ git clone https://github.com/ashwinumbarkar/calculator.git
$ cd calculator


### 2. Install Dependencies

$ npm install


### 3. Run the Application

$ npm start

The app will be available at `http://localhost:3000`.

### 4. Run Tests

$ npm test

This command runs all test cases using Jest and React Testing Library.


## **Testing**
The application includes unit tests to ensure proper functionality:

- **Check initial output:** Ensures the calculator displays `0` on load.
- **Check button rendering:** Verifies that all buttons are rendered correctly.
- **Check button functionality:** Tests input updates and operations like addition.



## **Dependencies**

| Dependency                | Version |
|---------------------------|---------|
| `react`                   | 18.3.1  |
| `react-dom`               | 18.3.1  |
| `react-scripts`           | 5.0.1   |
| `@testing-library/react`  | 16.2.0  |
| `@testing-library/jest-dom` | 6.6.3 |

