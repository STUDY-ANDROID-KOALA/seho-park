n = int(input())
ans = 0
row = [0 for _ in range(n)]

def check(x):
    for i in range(x):
        if row[x] == row[i] or abs(row[x]-row[i]) == abs(x-i):
            return False
    return True

def n_queens(x):
    global ans
    if x == n:
        ans+=1
        return
    else:
        for i in range(n):
            row[x] = i
            if check(x):
                n_queens(x+1)
n_queens(0)
print(ans)