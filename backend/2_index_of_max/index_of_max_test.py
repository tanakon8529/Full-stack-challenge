import unittest
from index_of_max import Solution

class TestFindMaxIndex(unittest.TestCase):

    def setUp(self):
        self.solution = Solution()

    def test_non_empty_list(self):
        self.assertEqual(self.solution.find_max_index([1, 2, 1, 3, 5, 6, 4]), 5)  # Change to 5
    
    def test_empty_list(self):
        self.assertEqual(self.solution.find_max_index([]), 'list can not blank')
    
    def test_single_element_list(self):
        self.assertEqual(self.solution.find_max_index([10]), 0)

if __name__ == '__main__':
    unittest.main()
