def dfs(x, y, number):
    if len(number) == 6:
        unique_numbers.add(number)
        return
    
    for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
        nx, ny = x + dx, y + dy
        if 0 <= nx < 5 and 0 <= ny < 5:  # 격자 범위를 벗어나지 않으면
            dfs(nx, ny, number + board[nx][ny])

board = [input().split() for _ in range(5)]
unique_numbers = set()

for i in range(5):
    for j in range(5):
        dfs(i, j, board[i][j])

print(len(unique_numbers))