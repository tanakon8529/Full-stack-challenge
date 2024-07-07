# test.py
from number_to_thai import Solution

number = 101
solution = Solution()
print(solution.number_to_thai(number)) # หนึ่งร้อยเอ็ด

number = 21
print(solution.number_to_thai(number)) # ยี่สิบเอ็ด

number = 15
print(solution.number_to_thai(number)) # สิบห้า

number = 9999999
print(solution.number_to_thai(number)) # เก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยเก้าสิบเก้า

number = 10000000
print(solution.number_to_thai(number)) # สิบล้าน

number = 0
print(solution.number_to_thai(number)) # ศูนย์

number = -1
print(solution.number_to_thai(number)) # number can not less than 0

number = 10000001
print(solution.number_to_thai(number)) # number can not be greater than 10,000,000
