# -*- coding: utf-8 -*-
'''
There is a leap year every year whose number is perfectly divisible by four - 
except for years which are both divisible by 100 and not divisible by 400. 
The second part of the rule effects century years. 
For example; the century years 1600 and 2000 are leap years, 
but the century years 1700, 1800, and 1900 are not.
'''

import string

class NotIntegerError(ValueError): pass
class OutOfRangeError(ValueError): pass

def to_leap_year(year):
    '''Python program to check if the input year is a leap year or not'''
    if not (isinstance(year, int)):
        raise NotIntegerError('non-integers can not be checked for leap year')
    if year <= 0:
        raise OutOfRangeError('number of year must be more then 0')
    result = int

    '''Check if year is a leap year, then return True/False'''
    if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
        print(f"{year}[LEAP YEAR: TRUE]")
        return(True)
    else:
        print(f"{year}[LEAP YEAR: FALSE]")
        return(False)

if __name__ == '__main__':
    firstInput = int(input("Input year to check: "))
    to_leap_year(firstInput)
