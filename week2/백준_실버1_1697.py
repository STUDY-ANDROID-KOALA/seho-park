from collections import deque

n, k = map(int, input().split())
MAX = 100001
visited = [-1] * MAX 

def bfs():
    queue = deque([n])
    visited[n] = 0

    while queue:
        now = queue.popleft()

        if now == k:
            return visited[now]

        for next_pos in [now - 1, now + 1, now * 2]:
            if 0 <= next_pos < MAX and visited[next_pos] == -1:
                visited[next_pos] = visited[now] + 1
                queue.append(next_pos)

print(bfs())