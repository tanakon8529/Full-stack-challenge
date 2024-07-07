"""
เขียบนโปรแกรมแปลงตัวเลยเป็นคำอ่านภาษาไทย

[Input]
number: positive number rang from 0 to 10_000_000

[Output]
num_text: string of thai number call

[Example 1]
input = 101
output = หนึ่งร้อยเอ็ด

[Example 2]
input = -1
output = number can not less than 0
"""
# number_to_thai.py

class Solution:
    def number_to_thai(self, number):
        if number < 0:
            return "number can not less than 0"
        if number > 10000000:
            return "number can not be greater than 10,000,000"

        thai_num = ["", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"]
        thai_unit = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"]

        def convert(n):
            if n == 0:
                return "ศูนย์"
            if n == 10:
                return "สิบ"
            result = ""
            str_n = str(n)
            len_n = len(str_n)
            for i, digit in enumerate(str_n):
                digit = int(digit)
                if digit == 0:
                    continue
                if len_n == 2 and digit == 1 and i == 0:
                    result += "สิบ"
                elif len_n == 2 and digit == 2 and i == 0:
                    result += "ยี่สิบ"
                elif len_n > 1 and digit == 1 and i == len_n - 1 and n % 10 == 1 and n != 11:
                    result += "เอ็ด"
                else:
                    result += thai_num[digit]
                if digit != 0 and i < len_n - 1:
                    result += thai_unit[len_n - i - 1]
            return result

        def handle_large_number(n):
            result = ""
            millions = n // 1000000
            remainder = n % 1000000
            if millions > 0:
                result += convert(millions) + "ล้าน"
            if remainder > 0:
                result += convert(remainder)
            return result

        if number >= 1000000:
            return handle_large_number(number)
        else:
            result = convert(number)
            result = result.replace("สิบสิบ", "สิบ")  # Fix duplicate "สิบ"
            return result
