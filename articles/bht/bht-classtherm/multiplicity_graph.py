from matplotlib.pyplot import bar, xlabel, ylabel, title, show
from factorial import factorial
from multiplicity import choice
import sys

def mult_plotter(x,y):
    a = []
    b = []
    d = []
    i = 0
    while i <= int(x):
        a.append(choice(int(y) + i -1 , i))
        b.append(choice(int(y) + int(x) -i -1 , int(x) -i))
        d.append(i)
        i += 1
    c = []
    for i in range(0, len(a)):
        c.append(a[i]*b[i])
    m = max(c)

    title = "multiplicity distribution"
    xlabel("$q_a$")
    ylabel("$\Omega_{total}$")
    bar(d,c)
    show()

mult_plotter(sys.argv[1],sys.argv[2])
