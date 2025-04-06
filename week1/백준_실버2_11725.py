import sys
sys.setrecursionlimit(10**6)

n = int(input())
graph = [[] for _ in range(n+1)]
visit_graph = [False] * (n+1)
parent = [0 for _ in range(n+1)]

def dfs(now):
    visit_graph[now] = True
    for node in graph[now]:
        if not visit_graph[node]:
            parent[node] = now  
            dfs(node)

for _ in range(n-1):
    i, j = map(int, input().split())
    graph[i].append(j)
    graph[j].append(i)

dfs(1)

for i in range(2, n+1):
    print(parent[i])