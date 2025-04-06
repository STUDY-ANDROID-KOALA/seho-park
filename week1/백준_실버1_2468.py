import sys
sys.setrecursionlimit(10000)

input = sys.stdin.readline 
n = int(input())

graph = []
max_point = 0
max_area = 1
visit_graph = [[False]*n for _ in range(n)]
cnt = 0

def dfs(x, y, height):
    if 0 <= x < n and 0 <= y < n and graph[x][y] > height and not visit_graph[x][y]:
        visit_graph[x][y] = True
        dfs(x+1, y, height)
        dfs(x-1, y, height)
        dfs(x, y+1, height)
        dfs(x, y-1, height)
    return


for _ in range(n): 
    row = list(map(int, input().split()))
    max_point = max(max_point, max(row))
    graph.append(row)

for height in range(1, max_point):
    for i in range(n):
        for j in range(n):
            if not visit_graph[i][j] and graph[i][j] > height:
                dfs(i, j, height)
                cnt +=1
    max_area = max(cnt, max_area)
    visit_graph = [[False]*n for _ in range(n)]
    cnt = 0

print(max_area)