import sys

def factorial(x):
    if int(x) < 0:
        print 'non-negative interger inputs only'
    elif x == 0:
        return 1
    else:
        a = int(x)
        b = 1
        while a > 1:
            b *= a
            a -= 1
        return b

factorial(sys.argv[1])
