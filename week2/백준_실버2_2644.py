from collections import deque

n = int(input())
graph = [[] for _ in range(n+1)]
t1, t2 = map(int, input().split())
l = int(input())
visited = [False for _ in range(n+1)]

def bfs(start, end):
    queue = deque([(start, 0)])
    visited[start] = True
    while queue:
        now, depth = queue.popleft()
        if (now == end): return depth
        for node in graph[now]:
            if not visited[node]:
                visited[node] = True
                queue.append((node, depth + 1))
    return -1

for _ in range(l):
    p1, p2 = map(int, input().split())
    graph[p1].append(p2)
    graph[p2].append(p1)

print(bfs(t1, t2))