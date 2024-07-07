import unittest
from find_tailing_zero import Solution

class TestFindTailingZeroes(unittest.TestCase):

    def setUp(self):
        self.solution = Solution()

    def test_positive_number(self):
        self.assertEqual(self.solution.find_tailing_zeroes(7), 1)
    
    def test_negative_number(self):
        self.assertEqual(self.solution.find_tailing_zeroes(-10), 'number can not be negative')

    def test_zero(self):
        self.assertEqual(self.solution.find_tailing_zeroes(0), 0)

if __name__ == '__main__':
    unittest.main()
