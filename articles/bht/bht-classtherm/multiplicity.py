import sys
from factorial import factorial

def choice(x,y):
    c = int(x) - int(y)
    a = factorial(int(x))
    b = factorial(int(y))
    d = factorial(c)
    return a / (b*d)

choice(sys.argv[1],sys.argv[2])
