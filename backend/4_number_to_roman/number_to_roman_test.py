import unittest
from number_to_roman import Solution

class TestNumberToRoman(unittest.TestCase):

    def setUp(self):
        self.solution = Solution()

    def test_positive_number(self):
        self.assertEqual(self.solution.number_to_roman(101), 'CI')
    
    def test_negative_number(self):
        self.assertEqual(self.solution.number_to_roman(-1), 'number can not less than 0')

    def test_large_number(self):
        self.assertEqual(self.solution.number_to_roman(1000), 'M')

if __name__ == '__main__':
    unittest.main()
