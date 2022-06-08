# -*- coding: utf-8 -*-
'''
Unit test for leapyear.py
Student version
'''

import unittest
import leapyear
    
class KnowValues(unittest.TestCase):
    '''Your KnowValue unittests code goes here'''
    known_values = ((1600,True),
    (2000, True),
    (1700, False),
    (1800, False))

    def test_to_leap_year(self):
        ''' to_leap_year should give known result with known input [LEAP YEAR: TRUE/FALSE]'''
        for integer,isLeap_year in self.known_values:
            result = leapyear.to_leap_year(integer)
            self.assertIs(result,isLeap_year)

class BadTestInput(unittest.TestCase):
    '''Your BadTestInput unittests code goes here'''
    def test_non_integers(self):
        '''to_leap_year should fail with non-integer input'''
        self.assertRaises(leapyear.NotIntegerError, leapyear.to_leap_year, 0.5)

    def test_zero(self):
        '''to_leap_year should fail with 0 input'''
        self.assertRaises(leapyear.OutOfRangeError, leapyear.to_leap_year, 0)

    def test_negative(self):
        '''to_leap_year should fail with negative input'''
        self.assertRaises(leapyear.OutOfRangeError, leapyear.to_leap_year, -1)

    def test_string(self):
        '''to_leap_year should fail with string input'''
        self.assertRaises(leapyear.NotIntegerError, leapyear.to_leap_year, 't')

    def test_blank(self):
        '''to_leap_year should fail with blank input'''
        self.assertRaises(leapyear.NotIntegerError, leapyear.to_leap_year, '')

if __name__ == '__main__':
    #unittest.main()
    unittest.main(argv=['first-arg-is-ignored'], exit=False)
