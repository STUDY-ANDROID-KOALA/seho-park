import sys
sys.setrecursionlimit(10000)  

row, col, k = map(int, input().split())
graph = [[0 for _ in range(col)] for _ in range(row)] 
result = []
visited = set()

def dfs(r, c):
    global cnt
    if 0 <= r < row and 0 <= c < col and graph[r][c] == 0 and (r, c) not in visited:
        cnt += 1
        visited.add((r, c))
        dfs(r - 1, c)
        dfs(r + 1, c)
        dfs(r, c - 1)
        dfs(r, c + 1)

for _ in range(k):
    x1, y1, x2, y2 = map(int, input().split())
    for r in range(row - y2, row - y1):
        for c in range(x1, x2):
            graph[r][c] = 1

for i in range(row):
    for j in range(col):
        if (i, j) not in visited and graph[i][j] == 0:
            cnt = 0  
            dfs(i, j)
            result.append(cnt) 

print(len(result))
print(*sorted(result))