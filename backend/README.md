
### 1. Create and Activate Virtual Environment

Navigate to your project directory and create a virtual environment:

```bash
cd /home/tanakon/MyProjects/Full-stack-challenge/backend
python3 -m venv venv
source venv/bin/activate
```

### 2. Install Dependencies

If you need `unittest`, it's already included in the standard library, so there's no need to install it. However, if you need other dependencies, you can list them in a `requirements.txt` file and install them:

```bash
# Create a requirements.txt file (if needed for other dependencies)
# touch requirements.txt

# Install dependencies (if any)
# pip install -r requirements.txt
```

### 3. Write the Test Files

Ensure that each test file is correctly placed in its respective directory and follows the standard naming conventions for `unittest` in Python.

### 4. Create a Script to Run All Tests

Create a script to run all the tests in your project.

```bash
# Create a run_tests.sh script
echo '#!/bin/bash

for dir in 1_find_tailing_zero 2_index_of_max 3_number_to_thai 4_number_to_roman; do
  echo "Running tests in $dir"
  PYTHONPATH=$PYTHONPATH:$PWD/$dir python -m unittest $dir/*_test.py
done

# Run tests for 5_rest_api
echo "Running tests in 5_rest_api"
cd 5_rest_api
python manage.py test apis.tests
cd ..' > run_tests.sh

# Make the script executable
chmod +x run_tests.sh
```

### 5. Start the API

Navigate to the `5_rest_api` directory and start the API server:

```bash
cd 5_rest_api
python manage.py runserver
```

### 6. Run All Tests

Execute the `run_tests.sh` script to run all your tests.

```bash
./run_tests.sh
```

### Full Script

Here is a complete set of commands to set up the environment, install dependencies, and run the tests:

```bash
# Navigate to project directory
cd /home/tanakon/MyProjects/Full-stack-challenge/backend

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate

# Create run_tests.sh script
echo '#!/bin/bash

for dir in 1_find_tailing_zero 2_index_of_max 3_number_to_thai 4_number_to_roman; do
  echo "Running tests in $dir"
  PYTHONPATH=$PYTHONPATH:$PWD/$dir python -m unittest $dir/*_test.py
done

# Run tests for 5_rest_api
echo "Running tests in 5_rest_api"
cd 5_rest_api
python manage.py test apis.tests
cd ..' > run_tests.sh

# Make the script executable
chmod +x run_tests.sh

# Run all tests
./run_tests.sh
```
