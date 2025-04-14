from collections import deque

m, n = map(int, input().split())
graph = []
visited = [[False for _ in range(m)] for _ in range(n)]
result = [0, 0]
delta = [(1, 0), (-1, 0), (0, 1), (0, -1)]

for _ in range(n): graph.append(list(input()))

def bfs(row, col):
    count = 1
    base_color = graph[row][col]
    queue = deque([(row, col)])
    visited[row][col] = True
    while queue:
        now_row, now_col = queue.popleft()
        for dx, dy in delta:
            new_row, new_col = now_row + dx, now_col + dy
            if 0 <= new_row < n and 0 <= new_col < m:
                if not visited[new_row][new_col] and graph[new_row][new_col] == base_color:
                    visited[new_row][new_col] = True
                    count += 1
                    queue.append((new_row, new_col))

    r = count ** 2
    if base_color == "W": result[0] += r
    else: result[1] += r

for row in range(n):
    for col in range(m):
        if not visited[row][col]:
            bfs(row, col)

print(*result)