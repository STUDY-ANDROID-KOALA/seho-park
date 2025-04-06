import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline 

n, m = map(int, input().split())
graph = [[] for _ in range(n+1)]
visit = [False for _ in range(n+1)]
count = 0

def DFS(node):
    visit[node] = True
    for next in graph[node]:
        if not visit[next]:
            DFS(next)
    return

for _ in range(m):
    i, j = map(int, input().split())
    graph[i].append(j)
    graph[j].append(i)

for i in range(1, n+1):
    if (not visit[i]):
        DFS(i)
        count +=1

print(count)