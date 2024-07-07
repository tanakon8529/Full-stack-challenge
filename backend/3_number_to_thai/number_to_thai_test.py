import unittest
from number_to_thai import Solution

class TestNumberToThai(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_positive_number(self):
        self.assertEqual(self.solution.number_to_thai(101), "หนึ่งร้อยเอ็ด")
        self.assertEqual(self.solution.number_to_thai(21), "ยี่สิบเอ็ด")
        self.assertEqual(self.solution.number_to_thai(15), "สิบห้า")
        self.assertEqual(self.solution.number_to_thai(9999999), "เก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยเก้าสิบเก้า")
        self.assertEqual(self.solution.number_to_thai(10000000), "สิบล้าน")

    def test_zero(self):
        self.assertEqual(self.solution.number_to_thai(0), "ศูนย์")

    def test_negative_number(self):
        self.assertEqual(self.solution.number_to_thai(-1), "number can not less than 0")

    def test_large_number(self):
        self.assertEqual(self.solution.number_to_thai(10000001), "number can not be greater than 10,000,000")

if __name__ == '__main__':
    unittest.main()
