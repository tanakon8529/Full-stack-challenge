#!/bin/bash

for dir in 1_find_tailing_zero 2_index_of_max 3_number_to_thai 4_number_to_roman; do
  echo "Running tests in $dir"
  PYTHONPATH=$PYTHONPATH:$PWD/$dir python -m unittest $dir/*_test.py
done

# Run tests for 5_rest_api
echo "Running tests in 5_rest_api"
cd 5_rest_api
python manage.py test apis.tests
cd ..
