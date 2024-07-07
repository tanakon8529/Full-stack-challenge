# Full-stack-challenge

### Description

This repository contains various backend and frontend projects, including Python solutions for algorithmic problems, a Django REST API, and two React web applications. The projects are structured to demonstrate proficiency in backend development, frontend development, and full-stack integration.

### Structure

```bash
backend/
  1_find_tailing_zero/
  2_index_of_max/
  3_number_to_thai/
  4_number_to_roman/
  5_rest_api/
  db.sqlite3
  README.md
  run_tests.sh
  venv/
frontend/
  react-form/
    node_modules/
    package.json
    package-lock.json
    public/
    README.md
    src/
    tsconfig.json
  react-layout/
    node_modules/
    package.json
    package-lock.json
    public/
    README.md
    src/
    tsconfig.json
LICENSE
README.md
```

### Backend Projects

#### 1. Find Tailing Zero

This project contains a solution to find the number of trailing zeros in a factorial of a given number.

##### How to Build and Test

1. Navigate to the project directory:
   ```bash
   cd backend/1_find_tailing_zero
   ```
2. Run the tests:
   ```bash
   python -m unittest find_tailing_zero_test.py
   ```

#### 2. Index of Max

This project finds the index of the maximum number in a list.

##### How to Build and Test

1. Navigate to the project directory:
   ```bash
   cd backend/2_index_of_max
   ```
2. Run the tests:
   ```bash
   python -m unittest index_of_max_test.py
   ```

#### 3. Number to Thai

This project converts a number to its Thai text representation.

##### How to Build and Test

1. Navigate to the project directory:
   ```bash
   cd backend/3_number_to_thai
   ```
2. Run the tests:
   ```bash
   python -m unittest number_to_thai_test.py
   ```

#### 4. Number to Roman

This project converts a number to its Roman numeral representation.

##### How to Build and Test

1. Navigate to the project directory:
   ```bash
   cd backend/4_number_to_roman
   ```
2. Run the tests:
   ```bash
   python -m unittest number_to_roman_test.py
   ```

#### 5. REST API

This is a Django REST API for managing school data, including schools, classrooms, teachers, and students.

##### How to Build and Run

1. Navigate to the project directory:
   ```bash
   cd backend/5_rest_api
   ```
2. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the server:
   ```bash
   python manage.py runserver
   ```
4. Run the tests:
   ```bash
   python manage.py test apis.tests
   ```

### Frontend Projects

#### React Form

This project is a React web application for handling forms.

##### Tech Stack and Libraries Used

- **React**
- **Typescript**
- **i18next** for language switching
- **Ant Design** for button layout
- **CSS** for button shapes (with preference for SCSS)
- **Redux Toolkit** for state management
- **Local Storage** for data persistence

##### How to Build and Run

1. Navigate to the project directory:
   ```bash
   cd frontend/react-form
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

#### React Layout

This project is a React web application for handling layouts.

##### Tech Stack and Libraries Used

- **React**
- **Typescript**
- **i18next** for language switching
- **Ant Design** for layout and component styling
- **SCSS** for styling
- **Redux Toolkit** for state management
- **Local Storage** for data persistence
- **Pagination** and **Sorting** capabilities in tables

##### How to Build and Run

1. Navigate to the project directory:
   ```bash
   cd frontend/react-layout
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Run All Tests

To run all backend tests and start the frontend servers, you can use the following script:

```bash
#!/bin/bash

# Run backend tests
cd backend
source venv/bin/activate
./run_tests.sh
deactivate

# Start frontend servers
cd ../frontend/react-form
npm start &

cd ../react-layout
npm start &
```

Save this script as `run_all.sh`, give it execute permissions, and run it:

```bash
chmod +x run_all.sh
./run_all.sh
```